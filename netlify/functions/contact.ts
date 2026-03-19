type Json = Record<string, unknown>

function json(statusCode: number, body: Json) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export const handler = async (event: {
  httpMethod: string
  body: string | null
}) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' })
  }

  let payload: { name?: string; email?: string; message?: string } | null = null
  try {
    payload = event.body ? (JSON.parse(event.body) as typeof payload) : null
  } catch {
    return json(400, { error: 'Invalid JSON' })
  }

  const name = (payload?.name ?? '').toString().trim()
  const email = (payload?.email ?? '').toString().trim()
  const message = (payload?.message ?? '').toString().trim()

  if (name.length < 2 || name.length > 120) {
    return json(400, { error: 'Invalid name' })
  }
  if (!isValidEmail(email) || email.length > 200) {
    return json(400, { error: 'Invalid email' })
  }
  if (message.length < 5 || message.length > 5000) {
    return json(400, { error: 'Invalid message' })
  }

  const brevoApiKey = process.env.BREVO_API_KEY
  if (!brevoApiKey) {
    return json(500, { error: 'Email provider not configured' })
  }

  const to = process.env.CONTACT_TO ?? 'accounts@dazarus.com'
  const from = process.env.CONTACT_FROM ?? 'accounts@dazarus.com'
  const senderName = process.env.CONTACT_SENDER_NAME ?? 'Dazarus'

  const subject = `New inquiry — ${name}`
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
  const html = `
    <h2>New inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': brevoApiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        name: senderName,
        email: from,
      },
      to: [{ email: to }],
      subject,
      textContent: text,
      htmlContent: html,
      replyTo: { email },
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    return json(502, { error: 'Failed to send email', detail })
  }

  return json(200, { ok: true })
}


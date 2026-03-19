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

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    return json(500, { error: 'Email provider not configured' })
  }

  const to = process.env.CONTACT_TO ?? 'accounts@dazarus.com'
  const from = process.env.CONTACT_FROM ?? 'Dazarus <onboarding@resend.dev>'

  const subject = `New inquiry — ${name}`
  const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      reply_to: email,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    return json(502, { error: 'Failed to send email', detail })
  }

  return json(200, { ok: true })
}


export const company = {
  legalName: 'Dazarus Private Limited',
  email: 'accounts@dazarus.com',
  linkedinUrl: 'https://linkedin.com/company/dazarus',
  websiteUrl: 'https://dazarus.com',
  address: {
    streetAddress: '945, 5th Main Rd, 7th Sector, HSR Layout',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560102',
    addressCountry: 'IN',
  },
  formattedAddressLines: [
    '945, 5th Main Rd, 7th Sector, HSR Layout',
    'Bengaluru, Karnataka 560102',
    'India',
  ],
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=945%2C+5th+Main+Rd%2C+7th+Sector%2C+HSR+Layout%2C+Bengaluru%2C+Karnataka+560102',
} as const

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  url: company.websiteUrl,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.streetAddress,
    addressLocality: company.address.addressLocality,
    addressRegion: company.address.addressRegion,
    postalCode: company.address.postalCode,
    addressCountry: company.address.addressCountry,
  },
} as const

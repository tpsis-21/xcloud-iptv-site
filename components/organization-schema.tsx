import { SCHEMA_TEMPLATES } from '@/config/schemas'

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(SCHEMA_TEMPLATES.organization)
      }}
    />
  )
}

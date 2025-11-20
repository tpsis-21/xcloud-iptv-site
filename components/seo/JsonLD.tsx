interface JsonLDProps {
  schema: object;
}

export function JsonLD({ schema }: JsonLDProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
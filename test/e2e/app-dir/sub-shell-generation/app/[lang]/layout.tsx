import { ReactNode } from 'react'
import { setTimeout } from 'timers/promises'

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (lang === 'en') {
    // Simulate uncached I/O. This shouldn't be a problem because we expect a
    // fallback shell to be generated for /en/[slug]. It would only be a problem
    // if instead we tried to generate a route shell at runtime for /en/foo.
    await setTimeout(100)
  }

  return (
    <>
      <h1>lang: {lang}</h1>
      <main>{children}</main>
    </>
  )
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

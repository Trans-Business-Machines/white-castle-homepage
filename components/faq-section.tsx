import { faqs } from "@/lib/faq"

/**
 * Visible FAQ list. Kept as native <details> so it works without JavaScript
 * and the text is always in the HTML for crawlers.
 */
export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-4xl px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <h2
        id="faq-heading"
        className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      >
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y divide-border overflow-hidden rounded-xl border border-border bg-canvas">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground marker:content-none">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

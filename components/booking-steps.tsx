import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Request", detail: "send the form with your dates." },
  {
    title: "Approval",
    detail: "reception checks the room and calls you back.",
  },
  { title: "Payment", detail: "M-Pesa, card or on arrival, as you prefer." },
  {
    title: "Confirmation",
    detail: "a digital confirmation with a reference for check-in.",
  },
]

export function BookingSteps() {
  return (
    <Card className="gap-4 rounded-2xl ring-1 ring-foreground/10 [--card-spacing:--spacing(6)]">
      <CardHeader>
        <CardTitle className="font-heading text-lg font-bold">
          How booking works
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="leading-relaxed">
              <span className="font-semibold">
                {index + 1} · {step.title}
              </span>{" "}
              <span className="text-muted-foreground">— {step.detail}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

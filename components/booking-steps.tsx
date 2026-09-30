import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  { title: "Request", detail: "send the form with your dates." },
  {
    title: "Approval",
    detail:
      "once a receptionist approves your booking, we'll email you the payment instructions.",
  },
  {
    title: "Payment",
    detail:
      "pay in full, or pay a deposit to reserve the room. If the deposit isn't paid within the given time, the room is released for other bookings. A cancellation fee applies if you cancel more than 24 hours after booking.",
  },
  {
    title: "Confirmation",
    detail:
      "after paying, send your transaction reference to reception by email or WhatsApp.",
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
              <span className="text-muted-foreground">{step.detail}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 border-t border-foreground/10 pt-5 leading-relaxed">
          <p className="font-semibold">Walk-in bookings are also welcome</p>
          <p className="mt-1 text-muted-foreground">
            No booking needed. Reception is open around the clock, just carry
            your National ID or passport for check-in.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

import PasteLinkForm from "@/components/forms/pasteLinkForm"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/fillforms")({
  component: FillForms,
})

function FillForms() {
  return (
    <div>
      <PasteLinkForm />
      <div className="mt-7 flex flex-col gap-5">
        <h1 className="font-display text-4xl">History</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 rounded-lg border border-accent bg-muted p-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs">Principal Engineer</h3>
              <span className="rounded-xl bg-primary px-1 text-[10px] text-primary-foreground">
                Submitted
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <p className="text-ellipsis">
                Applied for a Principal Engineer Job role{" "}
                <span className="text-primary">@Webflow</span>.
              </p>
              <p>7:19 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

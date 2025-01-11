import { createFileRoute } from "@tanstack/react-router"
import CustomInstructionForm from "@/components/forms/customInstructionsForm"

export const Route = createFileRoute("/settings")({
  component: Settings,
})

function Settings() {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
      <div className="flex flex-col gap-5">
        <h1 className="font-display text-4xl capitalize">
          custom instructions
        </h1>
        <p className="text-sm">
          You can set custom instructions to change the way your cover letter,
          your “why hire me” answer, your strengths and weaknesses are generated
          from your uploaded files.
        </p>
        <CustomInstructionForm className="contents" />
      </div>
    </div>
  )
}

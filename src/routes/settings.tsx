import { createFileRoute } from "@tanstack/react-router"
import CustomInstructionForm from "@/components/forms/customInstructionsForm"

export const Route = createFileRoute("/settings")({
  component: Settings,
})

function Settings() {
  return (
    <div className="flex flex-col gap-7 p-4 justify-center items-center sm:p-0 w-full">
      <div className="flex flex-col gap-5 sm:w-2/3 lg:w-1/2 sm:mt-10">
        <h1 className="font-display text-4xl capitalize ">
          custom instructions
        </h1>
        <p className="text-sm">
          You can set custom instructions to change the way your cover letter,
          your “why hire me” answer, your strengths and weaknesses are generated
          from your uploaded files.
        </p>
        <CustomInstructionForm className="contents"/>
      </div>
    </div>
  )
}

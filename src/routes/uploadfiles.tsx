import { createFileRoute } from "@tanstack/react-router"
import UploadFilesForm from "@/components/forms/uploadFilesForm"

import FileUploadArrow from ">/visuals/arrowToUpload.svg"

export const Route = createFileRoute("/uploadfiles")({
  component: UploadFiles,
})

function UploadFiles() {
  return (
    <div className="relative flex flex-col gap-5">
      <h1 className="font-display text-4xl">Upload Files</h1>
      <img
        src={FileUploadArrow}
        alt="arrow to upload files"
        width={"100px"}
        className="absolute right-0 top-5 sm:hidden"
      />
      <p className="w-[80%] text-sm text-muted-foreground sm:w-full">
        We are gonna need some of your personal information to fill in the forms
        and applications.
      </p>
      <UploadFilesForm className="contents" />
    </div>
  )
}

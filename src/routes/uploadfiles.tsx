import { createFileRoute } from "@tanstack/react-router"
import UploadFilesForm from "@/components/forms/uploadFilesForm"
import { useTheme } from "@/components/theme-provider"
import FileUploadArrow from ">/visuals/arrowToUpload.svg"
import FileUploadArrowDark from ">/visuals/arrowToUpload-dark.svg"

export const Route = createFileRoute("/uploadfiles")({
  component: UploadFiles,
})

function UploadFiles() {
  const { theme } = useTheme()

  return (
    <div className="relative flex flex-col gap-5">
      <h1 className="font-display text-4xl">Upload Files</h1>
      <img
        src={theme === "dark" ? FileUploadArrowDark : FileUploadArrow}
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

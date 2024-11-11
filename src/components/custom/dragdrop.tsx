import { DragEvent, MouseEvent, ReactNode, RefObject, useRef } from "react"
import FileUploadIcon from ">/visuals/uploadFiles.svg"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

interface DragDropProps {
  children?: ReactNode
  name: string
  onChange: (...e: any[]) => void
}

export function DragDrop({ children, name, onChange }: DragDropProps) {
  const filesInputRef = useRef<HTMLInputElement>(null)
  const form = useFormContext()
  const fileRef = form.register(name)

  function makeDroppable(e: DragEvent<HTMLDivElement>) {
    // go through the files and only accept file type application/pdf.
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
    e.currentTarget.classList.add("bg-primary/10", "border-primary")
  }

  function onDragLeave(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.classList.remove("bg-primary/10", "border-primary")
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    // dont let browser to open the file.
    e.preventDefault()
    e.currentTarget.classList.remove("bg-primary/10", "border-primary")
    // access dropped file
    onChange(e.dataTransfer.files)
  }

  function onClick(e: MouseEvent) {
    e.preventDefault()
    filesInputRef.current?.showPicker()
  }

  return (
    <div
      className="flex h-full w-full flex-wrap place-items-center justify-center gap-4 overflow-y-auto rounded-lg border border-accent p-4 shadow-lg ring-secondary transition-all duration-200 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:ring-1"
      onDragEnter={makeDroppable}
      onDragOver={makeDroppable}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onClick={onClick}
    >
      <img
        src={FileUploadIcon}
        alt="file uploadd icon"
        className="select-none sm:aspect-square"
      />
      <Input
        {...fileRef}
        type="file"
        accept=".pdf"
        multiple={true}
        className="hidden"
        ref={filesInputRef}
        onChange={(e) => onChange(e.currentTarget.files!)}
      />
      {children}
    </div>
  )
}

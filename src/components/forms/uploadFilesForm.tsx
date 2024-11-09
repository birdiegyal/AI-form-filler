import { DragDrop } from "@/components/custom/dragdrop"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"

interface UploadFilesFormProps extends React.HTMLAttributes<HTMLFormElement> { }

const uploadFilesSchema = z.object({
  files: z.instanceof(FileList),
})

export default function UploadFilesForm({ className }: UploadFilesFormProps) {

  const form = useForm<z.infer<typeof uploadFilesSchema>>({
    resolver: zodResolver(uploadFilesSchema),
    mode: "onChange",
  })

  function onSubmit(formData: z.infer<typeof uploadFilesSchema>) {
    console.log("submit", formData)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          name="files"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <DragDrop {...field} />
                </FormControl>
                <FormDescription className="mt-1 text-xs">
                  drag files from your device and drop them here.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        ></FormField>
        <Button
          type="submit"
          variant={"secondary"}
          className="btn btn-secondary h-8 focus-visible:ring-secondary"
        >
          Upload
        </Button>
      </form>
    </Form>
  )
}

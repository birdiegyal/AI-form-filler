import { Textarea } from "@/components/ui/textarea"
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

const customInstructionSchema = z.object({
  customInstruction: z.string(),
})

interface CustomInstructionFormProps
  extends React.HTMLAttributes<HTMLFormElement> {}

export default function CustomInstructionForm({
  className,
}: CustomInstructionFormProps) {
  const form = useForm<z.infer<typeof customInstructionSchema>>({
    resolver: zodResolver(customInstructionSchema),
    mode: "onChange",
  })

  function onSubmit(formData: z.infer<typeof customInstructionSchema>) {
    console.log("submit", formData)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...{ className }}>
        <FormField
          name="customInstruction"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="e.g. I want to present myself as Mr. Perfectionist, Biased for action,  who learn from mistakes made in past."
                    className="resize-none overflow-y-auto text-sm"
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormDescription className="mt-1 text-xs">
                  Custom instructions are used to tune the responses made by
                  form filler.
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

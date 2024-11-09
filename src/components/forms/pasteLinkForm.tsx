import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { cn } from "@/lib/utils"

interface PasteLinkFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const formLinkSchema = z.object({
  link: z.string().url("enter form URL you would like to fill. "),
})

export default function PasteLinkForm({ className }: PasteLinkFormProps) {
  const form = useForm<z.infer<typeof formLinkSchema>>({
    resolver: zodResolver(formLinkSchema),
  })

  function onSubmit(formData: z.infer<typeof formLinkSchema>) {
    console.log(formData)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("relative flex flex-col gap-5", className)}
      >
        <FormField
          name="link"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col gap-5">
                    <h1 className="font-display text-4xl">Paste form link</h1>
                    <Input
                      type="url"
                      placeholder="link to your form you want to fill"
                      {...field}
                      className="h-8 border-2"
                    />
                  </div>
                </FormControl>
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
          Fill out
        </Button>
      </form>
    </Form>
  )
}

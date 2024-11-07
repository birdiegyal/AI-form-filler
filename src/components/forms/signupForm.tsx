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
import { cn } from "@/lib/utils"
import React from "react"

interface SignupFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const signupFormSchema = z.object({
  email: z.string().email(),
})

export default function SignupForm({ className }: SignupFormProps) {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
  })
  function onSubmit(formData: z.infer<typeof signupFormSchema>) {
    console.log(formData)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("mt-8", className)}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="h-8 border-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        ></FormField>
        <Button type="submit" className="h-8">
          Get magic URL
        </Button>
      </form>
    </Form>
  )
}

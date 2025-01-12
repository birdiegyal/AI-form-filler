import Preview from "@/components/custom/preview"
import PasteLinkForm from "@/components/forms/pasteLinkForm"
import { createFileRoute } from "@tanstack/react-router"
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePrimitive,
} from "@/components/ui/resizable"
import { useEffect, useRef } from "react"
import { useFormData } from "@/lib/hooks"
import * as z from "zod"

const formLinkSchema = z.object({
  link: z.string().url("enter form URL you would like to fill. "),
})

export const Route = createFileRoute("/fillforms")({
  component: FillForms,
})

function FillForms() {
  // pass this ref to the PasteLinkForm component
  const refs = useRef<HTMLElement>()
  const [formData, setFormData] = useFormData<z.infer<typeof formLinkSchema>>()

  useEffect(() => {
    const previewPanel = ResizablePrimitive.getPanelElement("preview")
    if (previewPanel) {
      refs.current = previewPanel
    }
  }, [])

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="size-full"
      id={"fillforms"}
    >
      <ResizablePanel
        defaultSize={0}
        maxSize={50}
        className="size-full"
        id="preview"
      >
        <Preview src={formData?.link!} />
      </ResizablePanel>
      <ResizableHandle className="m-2 w-[2px] rounded-lg bg-secondary/20" />
      <ResizablePanel minSize={50} className="flex justify-center @container">
        <div
          className="w-full p-2 @xl:w-1/2"
          // className="sm:w-full lg:w-2/5 xl:w-1/2 2xl:w-1/3"
        >
          <PasteLinkForm
            setFormData={setFormData}
            formLinkSchema={formLinkSchema}
          />
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
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

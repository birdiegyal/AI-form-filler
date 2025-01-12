import { cn } from "@/lib/utils"
interface PreviewProps extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string
}

export default function Preview({ src, className, ...props }: PreviewProps) {
  return (
    <div
      className={cn(
        "flex size-full items-center justify-center rounded-lg border shadow-lg overflow-clip",
        className,
      )}
    >
      {src ? (
        <iframe
          src={src}
          {...props}
          className="size-full"
          sandbox="allow-forms allow-modals allow-scripts"
          referrerPolicy="same-origin"
          allow={`geolocation 'self' ${src}`}
        />
      ) : (
        <div>no preview</div>
      )}
    </div>
  )
}

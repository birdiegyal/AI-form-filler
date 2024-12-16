import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Theme,
  ThemeProviderState,
  useTheme,
  type ThemeProviderState as ThemeProps,
} from "@/components/theme-provider"
import { Laptop } from "lucide-react"
import { Moon } from "lucide-react"
import { Sun } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { url } from "inspector"

function CurrentThemePreview({
  theme,
  setTheme,
  currentTheme,
}: Omit<ThemeProps, "setTheme"> &
  Partial<Pick<ThemeProps, "setTheme">> & {
    currentTheme?: Theme
  }): ReactNode {
  function _setTheme(theme: Theme) {
    if (setTheme) {
      setTheme(theme)
    }
  }
  switch (theme) {
    case "dark":
      return (
        <Moon
          data-theme={theme}
          onClick={() => _setTheme(theme)}
          key={theme}
          className={cn(
            "cursor-pointer transition-colors duration-200 ease-out",
            setTheme && theme !== currentTheme && "hover:stroke-foreground/50",
            theme === currentTheme && "stroke-primary",
          )}
        />
      )
    case "light":
      return (
        <Sun
          data-theme={theme}
          onClick={() => _setTheme(theme)}
          key={theme}
          className={cn(
            "cursor-pointer transition-colors duration-200 ease-out",
            setTheme && theme !== currentTheme && "hover:stroke-foreground/50",
            theme === currentTheme && "stroke-primary",
          )}
        />
      )
    case "system":
      return (
        <Laptop
          data-theme={theme}
          onClick={() => _setTheme(theme)}
          key={theme}
          className={cn(
            "cursor-pointer transition-colors duration-200 ease-out",
            setTheme && theme !== currentTheme && "hover:stroke-foreground/50",
            theme === currentTheme && "stroke-primary",
          )}
        />
      )
  }
}

const ThemeOptions = CurrentThemePreview

export default function ToggleTheme() {
  const { theme: currentTheme, setTheme } = useTheme()
  // because nobody is ever going to touch this code, this type of typing mistakes are ok to stepped on.
  const themeOptions: Theme[] = ["dark", "light", "system"]

  return (
    <div
      className="absolute bottom-4 right-4"
      style={{
        viewTransitionName: "popoverTrigger",
      }}
    >
      <svg
        id="filter"
        width="0"
        height="0"
        className="sr-only"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              id="blur"
              result="blurred"
              in="SourceGraphic"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              id="adjust"
              result="adjusted"
              in="blurred"
              values="
           1 0 0 0 0
           0 1 0 0 0
           0 0 1 0 0
           0 0 0 24 -10
        "
              type="matrix"
            ></feColorMatrix>
            <feComposite
              id="combine"
              result="combined"
              in="adjusted"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
      <Popover>
        <PopoverTrigger className="rounded-full border-2 p-2 shadow-md shadow-muted transition-all hover:border-2 hover:border-primary hover:bg-primary/20">
          <CurrentThemePreview theme={currentTheme} key="theme-preview" />
        </PopoverTrigger>

        <PopoverContent
          className="flex w-auto flex-col gap-2 rounded-full border-2 bg-background p-2 data-[state=open]:border-2 data-[state=open]:border-primary"
          sideOffset={10}
          side="top"
        >
          {themeOptions.map((theme) => (
            <ThemeOptions
              theme={theme}
              setTheme={setTheme}
              key={`select-${theme}`}
              currentTheme={currentTheme}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

/* 
TODO: 
> create a Gooey filter using SVGs and then apply it using css.
*/

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Theme,
  useTheme,
  type ThemeProviderState as ThemeProps,
} from "@/components/theme-provider"
import { Laptop } from "lucide-react"
import { Moon } from "lucide-react"
import { Sun } from "lucide-react"
import { ReactNode } from "react"

function CurrentThemePreview({
  theme,
  setTheme,
}: Omit<ThemeProps, "setTheme"> &
  Partial<Pick<ThemeProps, "setTheme">>): ReactNode {
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
          className={setTheme && "hover:stroke-primary"}
        />
      )
    case "light":
      return (
        <Sun
          data-theme={theme}
          onClick={() => _setTheme(theme)}
          key={theme}
          className={setTheme && "hover:stroke-primary"}
        />
      )
    case "system":
      return (
        <Laptop
          data-theme={theme}
          onClick={() => _setTheme(theme)}
          key={theme}
          className={setTheme && "hover:stroke-primary"}
        />
      )
  }
}

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  // because nobody is ever going to touch this code, this type of typing mistakes are ok to stepped on.
  const themeOptions: Theme[] = ["dark", "light", "system"]

  return (
    <div
      className="absolute bottom-4 right-4"
      style={{
        viewTransitionName: "popoverTrigger",
      }}
    >
      <Popover>
        <PopoverTrigger className="rounded-xl border p-2 shadow-md">
          <CurrentThemePreview
            theme={theme}
            key="theme-preview
        "
          />
        </PopoverTrigger>

        <PopoverContent
          className="flex w-auto flex-col gap-2 rounded-xl bg-background p-2 shadow-md"
          alignOffset={20}
        >
          {themeOptions.map((theme) => (
            <CurrentThemePreview
              theme={theme}
              setTheme={setTheme}
              key="theme-options"
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

/* 

*/

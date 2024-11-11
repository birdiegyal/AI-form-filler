import { createFileRoute } from "@tanstack/react-router"
import tryIcon from ">/visuals/try.svg"
import tryArrow from ">/visuals/arrowToTry.svg"
import tryArrowDark from ">/visuals/arrowToTry-dark.svg"
import mascot from ">/visuals/mascot.svg"
import mascotDark from ">/visuals/mascot-dark.svg"
import {useTheme} from "@/components/theme-provider"
import SignupForm from "@/components/forms/signupForm"

export const Route = createFileRoute("/signup")({
  component: Signup,
})

function Signup() {
  const { theme } = useTheme()
  
  return (
    <div className="flex flex-col place-content-center gap-5">
      <div className="relative min-h-80">
        <img
          src={tryIcon}
          alt="Fuck it! lets try icon"
          className="absolute left-[1%] top-0 aspect-square w-[200px] sm:left-1/4 sm:-translate-x-1/4"
        />
        <img
          src={theme === "dark" ? tryArrowDark : tryArrow}
          alt="Arrow to Fuck it! lets try icon"
          className="lg:right-1/5 lg:-translate-x-1/5 absolute right-[1%] top-14 aspect-square w-[128px] sm:right-1/4 sm:translate-x-1/4"
        />
        <img
          src={theme === "dark" ? mascotDark : mascot}
          alt="form-filler mascot"
          className="absolute left-1/2 top-24 aspect-square w-[214px] -translate-x-1/2"
        />
      </div>
      <p className="text-center font-display text-xl text-muted-foreground">
        <span className="text-2xl text-foreground">Auto fill</span> your forms
        and applications,{" "}
        <span className="text-2xl text-foreground">Right now!</span>
      </p>
      <SignupForm className="contents"></SignupForm>
    </div>
  )
}

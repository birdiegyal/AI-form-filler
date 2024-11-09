import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import "@/global.css"
import { ThemeProvider } from "@/components/theme-provider"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid place-items-center">
        <nav
          className="navbar mt-10 flex w-full flex-wrap items-baseline justify-between gap-7 p-2 px-2 font-display text-xs sm:mt-10 sm:justify-around sm:gap-9 sm:p-2 sm:px-4 sm:text-lg md:gap-11 md:text-2xl"
          style={{
            viewTransitionName: "navbar",
          }}
        >
          <Link
            to="/uploadfiles"
            activeOptions={{ exact: true }}
            className="data-[status~='active']:active"
          >
            Upload Files
          </Link>
          <Link
            to="/signup"
            activeOptions={{ exact: true }}
            className="data-[status~='active']:active"
          >
            Signup
          </Link>
          <Link
            to="/fillforms"
            activeOptions={{ exact: true }}
            className="data-[status~='active']:active"
          >
            Fill Forms
          </Link>
          <Link
            to="/settings"
            activeOptions={{ exact: true }}
            className="data-[status~='active']:active"
          >
            Settings
          </Link>
        </nav>
        <div className="w-full p-2 sm:mt-10 sm:w-2/3 lg:w-2/5 xl:w-1/2 2xl:w-1/3">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  )
}

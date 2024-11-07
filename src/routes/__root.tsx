import * as React from "react"
import { Link, Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import "@/global.css"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="grid place-items-center">
      <nav
        className="navbar mt-10 flex w-full flex-wrap content-baseline items-end justify-center gap-7 px-2 font-display text-xs sm:w-3/4 sm:justify-between sm:gap-9 sm:p-2 sm:px-4 sm:text-lg md:gap-11 md:text-2xl"
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
        <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  )
}


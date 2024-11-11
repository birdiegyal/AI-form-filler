/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UploadfilesImport } from './routes/uploadfiles'
import { Route as SignupImport } from './routes/signup'
import { Route as SettingsImport } from './routes/settings'
import { Route as FillformsImport } from './routes/fillforms'
import { Route as DevImport } from './routes/dev'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const UploadfilesRoute = UploadfilesImport.update({
  id: '/uploadfiles',
  path: '/uploadfiles',
  getParentRoute: () => rootRoute,
} as any)

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const FillformsRoute = FillformsImport.update({
  id: '/fillforms',
  path: '/fillforms',
  getParentRoute: () => rootRoute,
} as any)

const DevRoute = DevImport.update({
  id: '/dev',
  path: '/dev',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dev': {
      id: '/dev'
      path: '/dev'
      fullPath: '/dev'
      preLoaderRoute: typeof DevImport
      parentRoute: typeof rootRoute
    }
    '/fillforms': {
      id: '/fillforms'
      path: '/fillforms'
      fullPath: '/fillforms'
      preLoaderRoute: typeof FillformsImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/uploadfiles': {
      id: '/uploadfiles'
      path: '/uploadfiles'
      fullPath: '/uploadfiles'
      preLoaderRoute: typeof UploadfilesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dev': typeof DevRoute
  '/fillforms': typeof FillformsRoute
  '/settings': typeof SettingsRoute
  '/signup': typeof SignupRoute
  '/uploadfiles': typeof UploadfilesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dev': typeof DevRoute
  '/fillforms': typeof FillformsRoute
  '/settings': typeof SettingsRoute
  '/signup': typeof SignupRoute
  '/uploadfiles': typeof UploadfilesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dev': typeof DevRoute
  '/fillforms': typeof FillformsRoute
  '/settings': typeof SettingsRoute
  '/signup': typeof SignupRoute
  '/uploadfiles': typeof UploadfilesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dev'
    | '/fillforms'
    | '/settings'
    | '/signup'
    | '/uploadfiles'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dev' | '/fillforms' | '/settings' | '/signup' | '/uploadfiles'
  id:
    | '__root__'
    | '/'
    | '/dev'
    | '/fillforms'
    | '/settings'
    | '/signup'
    | '/uploadfiles'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DevRoute: typeof DevRoute
  FillformsRoute: typeof FillformsRoute
  SettingsRoute: typeof SettingsRoute
  SignupRoute: typeof SignupRoute
  UploadfilesRoute: typeof UploadfilesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DevRoute: DevRoute,
  FillformsRoute: FillformsRoute,
  SettingsRoute: SettingsRoute,
  SignupRoute: SignupRoute,
  UploadfilesRoute: UploadfilesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dev",
        "/fillforms",
        "/settings",
        "/signup",
        "/uploadfiles"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dev": {
      "filePath": "dev.tsx"
    },
    "/fillforms": {
      "filePath": "fillforms.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/uploadfiles": {
      "filePath": "uploadfiles.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

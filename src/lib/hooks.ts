import { useState } from "react"

export function useFormData<T>() {
  return useState<T>()
}

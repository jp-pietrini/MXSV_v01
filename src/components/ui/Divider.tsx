"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed" | "dotted"
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "solid", ...props }, ref) => {
    const orientationClasses = {
      horizontal: "w-full h-px",
      vertical: "h-full w-px"
    }

    const variantClasses = {
      solid: "bg-gray-200",
      dashed: "bg-transparent border-t border-dashed border-gray-200",
      dotted: "bg-transparent border-t border-dotted border-gray-200"
    }

    return (
      <div
        ref={ref}
        className={cn(
          orientationClasses[orientation],
          variant === "solid" ? variantClasses.solid : variantClasses[variant],
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider }
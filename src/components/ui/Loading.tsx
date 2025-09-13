"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "spinner" | "dots" | "pulse"
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = "md", variant = "spinner", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8"
    }

    if (variant === "spinner") {
      return (
        <div ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
          <div
            className={cn(
              "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
              sizeClasses[size]
            )}
          />
        </div>
      )
    }

    if (variant === "dots") {
      return (
        <div ref={ref} className={cn("flex items-center justify-center space-x-1", className)} {...props}>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
      )
    }

    if (variant === "pulse") {
      return (
        <div ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
          <div className={cn("bg-blue-600 rounded-full animate-pulse", sizeClasses[size])} />
        </div>
      )
    }

    return null
  }
)
Loading.displayName = "Loading"

export { Loading }
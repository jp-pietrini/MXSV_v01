"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  size?: "sm" | "md" | "lg"
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({
    className,
    title,
    subtitle,
    description,
    centered = true,
    size = "md",
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: {
        title: "text-2xl sm:text-3xl",
        subtitle: "text-sm sm:text-base",
        description: "text-base"
      },
      md: {
        title: "text-3xl sm:text-4xl lg:text-5xl",
        subtitle: "text-base sm:text-lg",
        description: "text-lg"
      },
      lg: {
        title: "text-4xl sm:text-5xl lg:text-6xl",
        subtitle: "text-lg sm:text-xl",
        description: "text-xl"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "space-y-4",
          centered && "text-center",
          className
        )}
        {...props}
      >
        {subtitle && (
          <p className={cn(
            "font-medium text-blue-600 tracking-wide uppercase",
            sizeClasses[size].subtitle
          )}>
            {subtitle}
          </p>
        )}

        <h2 className={cn(
          "font-bold text-gray-900 tracking-tight",
          sizeClasses[size].title
        )}>
          {title}
        </h2>

        {description && (
          <p className={cn(
            "text-gray-600 max-w-3xl",
            centered && "mx-auto",
            sizeClasses[size].description
          )}>
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"

export { SectionHeader }
import { ReactNode } from "react"

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen max-h-screen flex">{children}</div>
  )
}
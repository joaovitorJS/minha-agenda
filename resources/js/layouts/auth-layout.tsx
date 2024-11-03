import { ReactNode } from "react"
import { Toaster } from "sonner";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="min-h-screen max-h-screen flex">{children}</div>
      <Toaster position="top-right" richColors />
    </>
  )
}
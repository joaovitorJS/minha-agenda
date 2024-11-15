import { AppSidebar } from "@/components/app-sidebar";
import { AppProvider } from "@/providers/app-provider";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {

  return (
    <AppProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </AppProvider>
  );
}
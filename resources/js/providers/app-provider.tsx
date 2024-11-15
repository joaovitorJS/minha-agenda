import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

interface AppProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	return (
		<SidebarProvider>
			{children}
		</SidebarProvider>
	);
}
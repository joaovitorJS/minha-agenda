import { LogOut, Menu, SearchIcon } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Link, usePage } from "@inertiajs/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "./ui/button"
 
export function AppSidebar() {
	const { user } = usePage().props;
	const { toggleSidebar } = useSidebar();

	const avatarLetter = user.name.slice(0, 1).toUpperCase();

  return (
		<>
			<Sidebar>
				<SidebarHeader className="mt-2">
					<img src="/assets/logo-ma.svg" alt="Logo Minha Agenda" className="h-8 w-auto" />
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent className="flex gap-4 items-center">
							<Avatar>
								<AvatarFallback className="font-bold text-base">{avatarLetter}</AvatarFallback>
							</Avatar>
							<div className="flex flex-col">
								<span className="font-semibold text-zinc-50 text-sm">{user.name}</span>
								<span className="text-zinc-400 text-xs">{user.email}</span>
							</div>
						</SidebarGroupContent>
					</SidebarGroup>
					<SidebarGroup className="mt-2">
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton className="bg-zinc-800 border border-zinc-600 hover:bg-zinc-700/60 active:bg-zinc-700/80" size="md">
										<div className="flex items-center gap-2 text-zinc-500">
											<SearchIcon className="w-4 h-4" /> Buscar 
										</div>
										<kbd className="ml-auto pointer-events-nome flex h-5 select-none items-center justify-center gap-1 rounded bg-zinc-700 px-1.5 font-mono text-[10px] font-medium text-zinc-300 opacity-100">
											<span className="text-xs">CTRL</span> + K
										</kbd>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<Separator className="bg-zinc-700" />
				<SidebarFooter>
					<Link 
						href={route('logout')} 
						method="post" 
						as="button" 
						type="button" 
						className="flex gap-2 text-gray-300 font-medium items-center justify-center py-1.5 transition-all duration-300 hover:text-gray-200"
					>
						<LogOut className="w-5 h-5"/> Sair
					</Link>
				</SidebarFooter>
			</Sidebar>
			<Button onClick={toggleSidebar} variant="ghost" size="icon">
				<Menu className="w-8 h-8 text-zinc-900"/>
			</Button>
		</>
  )
}
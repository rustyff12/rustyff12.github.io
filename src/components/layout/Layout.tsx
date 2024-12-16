import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { Outlet } from "react-router"


export default function Layout() {
    return (
    <SidebarProvider className="overflow-hidden">
      <AppSidebar />
        <main className="min-w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <SidebarTrigger />
            {/* <div className="grid place-content-center"> */}
                <Outlet />
            {/* </div> */}
        </main>
    </SidebarProvider>
  )
}

import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ui/mode-toggle";
import { Separator } from "./ui/separator";
import { Breadcrumbs } from "./domain/breadcrumb";

export default function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <ModeToggle />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <Breadcrumbs />
      </div>
    </header>
  );
}

'use client';

import { useRole } from '@/context/role-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Topbar() {
  const { role, setRole, isHydrated } = useRole();

  if (!isHydrated) return null;

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 mt-4 justify-between md:justify-end">
      {/* Mobile sidebar trigger will go here via layout */}
      <div className="flex md:hidden items-center">
         <span className="font-semibold px-2">Effortless Admin</span>
      </div>
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-4 outline-none">
            <div className="hidden sm:block text-sm text-muted-foreground text-right">
              <div className="font-medium text-foreground">{role === 'owner' ? 'Pemilik' : role === 'customer' ? 'Nugrah (Pelanggan)' : 'Admin'}</div>
              <div className="capitalize">{role === 'owner' ? 'Pemilik' : role === 'customer' ? 'Pelanggan' : 'Admin'}</div>
            </div>
            <Avatar>
               <AvatarImage src={`https://picsum.photos/seed/${role}/100/100`} />
               <AvatarFallback>{role === 'owner' ? 'OW' : 'AD'}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Ganti Akun</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setRole('admin')} className="cursor-pointer">
                Ganti ke Admin
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole('owner')} className="cursor-pointer">
                 Ganti ke Pemilik
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRole('customer')} className="cursor-pointer">
                 Ganti ke Nugrah (Pelanggan)
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

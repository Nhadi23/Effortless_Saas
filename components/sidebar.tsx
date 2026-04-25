'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Box,
  CheckCircle,
  CreditCard,
  PlusCircle,
  Users,
  Settings,
  LogOut,
  CalendarDays,
  Menu,
  BarChart3,
  Store,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useRole } from '@/context/role-context';

const adminNavigation = [
  { name: 'Dasbor', href: '/', icon: LayoutDashboard },
  { name: 'Menu Layanan', href: '/services', icon: Box },
  { name: 'Pesanan', href: '/workflow', icon: CheckCircle },
  { name: 'Pembayaran', href: '/payments', icon: CreditCard },
  { name: 'Barang & Pesanan', href: '/orders', icon: PlusCircle },
  { name: 'Keanggotaan', href: '/membership', icon: Users },
  { name: 'Kalender', href: '/calendar', icon: CalendarDays },
];

const ownerNavigation = [
  { name: 'Dasbor', href: '/', icon: LayoutDashboard },
  { name: 'Laporan Keuangan', href: '/reports', icon: BarChart3 },
  { name: 'Profil Bisnis', href: '/profile', icon: Store },
  { name: 'Harga Layanan', href: '/services', icon: Box },
  { name: 'Kelola Pembayaran', href: '/payments', icon: CreditCard },
];

const customerNavigation = [
  { name: 'Dasbor Saya', href: '/', icon: LayoutDashboard },
  { name: 'Pesan Layanan', href: '/order', icon: PlusCircle },
  { name: 'Tagihan Saya', href: '/invoice', icon: FileText },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const { role, isHydrated } = useRole();
  const navigation = role === 'owner' ? ownerNavigation : role === 'customer' ? customerNavigation : adminNavigation;

  if (!isHydrated) return <div className="pb-12 border-r bg-white min-h-screen hidden md:block w-64 fixed top-0 bottom-0 left-0 z-10" />;

  return (
    <div className={cn("pb-12 border-r bg-white min-h-screen hidden md:block w-64 fixed top-0 bottom-0 left-0 z-10", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight uppercase text-primary/90 flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">ES</span>
            Effortless
          </h2>
          <div className="space-y-2 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: pathname === item.href ? "secondary" : "ghost" }),
                  "w-full justify-start text-base py-6 flex items-center gap-3",
                  pathname === item.href ? "bg-secondary" : "hover:bg-muted/50"
                )}
              >
                <item.icon className="h-6 w-6 shrink-0" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
         <div className="text-xs text-muted-foreground px-2 py-2">Info Toko: Buka</div>
         <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 text-base py-6 flex items-center gap-3">
           <LogOut className="h-6 w-6 shrink-0" />
           <span>Keluar</span>
         </Button>
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const pathname = usePathname();
  const { role, isHydrated } = useRole();
  const navigation = role === 'owner' ? ownerNavigation : role === 'customer' ? customerNavigation : adminNavigation;
  
  if (!isHydrated) return null;
  
  return (
    <Sheet>
      <SheetTrigger className={cn(buttonVariants({ variant: "outline", size: "icon" }), "md:hidden")}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="px-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight uppercase text-primary/90 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-sm">ES</span>
              Effortless
            </h2>
            <div className="space-y-2 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: pathname === item.href ? "secondary" : "ghost" }),
                    "w-full justify-start text-base py-6 flex items-center gap-3"
                  )}
                >
                  <item.icon className="h-6 w-6 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

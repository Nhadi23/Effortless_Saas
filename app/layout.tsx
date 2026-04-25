import type {Metadata} from 'next';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sidebar, MobileSidebar } from '@/components/sidebar';
import { Topbar } from '@/components/topbar';
import { RoleProvider } from '@/context/role-context';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Effortless Shoesbar Admin',
  description: 'Admin Dashboard for Effortless Shoesbar',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-muted/20" suppressHydrationWarning>
        <RoleProvider>
          <Sidebar />
          <div className="flex w-full flex-col md:pl-64 min-h-screen">
            <div className="flex md:hidden px-4 py-4 border-b bg-background justify-between items-center sticky top-0 z-30">
               <MobileSidebar />
               <div className="font-semibold text-lg">Effortless Shoesbar</div>
               <div className="w-9 h-9"></div>
            </div>
            <div className="flex-col hidden md:flex">
               <Topbar />
            </div>
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </div>
        </RoleProvider>
      </body>
    </html>
  );
}

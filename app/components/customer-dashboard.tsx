import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Package, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { format } from "date-fns";

const myOrders = [
  { id: 'ORD-011', service: 'Deep Clean Reguler', date: '2026-04-20', status: 'Proses', price: 'Rp 30.000', dropoff: 'Dijemput' },
  { id: 'ORD-008', service: 'Whitening Treatment', date: '2026-04-10', status: 'Selesai', price: 'Rp 40.000', dropoff: 'Di Toko' },
];

export function CustomerDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Selamat datang kembali, Nugrah!</h1>
          <p className="text-muted-foreground mt-1">Berikut status sepatu favorit Anda yang sedang kami segarkan.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/order" className={cn(buttonVariants({ variant: "default" }), "flex items-center gap-2")}>
             <Package className="w-4 h-4 shrink-0" />
             <span>Pesan Layanan</span>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pesanan Aktif</CardTitle>
            <Package className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-1">Sedang diproses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Total layanan sejak bergabung</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Status Member</CardTitle>
            <ShieldCheck className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">Gold Member</div>
            <p className="text-xs text-muted-foreground mt-1">Nikmati diskon 10% untuk pesanan berikutnya</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Pesanan Saya</CardTitle>
            <CardDescription>Lacak proses barang Anda.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myOrders.map((order) => (
                <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center">
                       <Package className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-medium leading-none">{order.service}</p>
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                         <span>{format(new Date(order.date), "dd MMM, yyyy")}</span>
                         <span>•</span>
                         <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {order.dropoff}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                    <div className="font-medium">{order.price}</div>
                    <Badge variant={order.status === 'Selesai' ? 'default' : order.status === 'Proses' ? 'secondary' : 'outline'} className="whitespace-nowrap">
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

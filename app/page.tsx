'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUpRight, ArrowDownRight, Package, DollarSign, Wallet, TrendingUp, Calendar as CalendarIcon, FileText, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { format } from "date-fns";
import { useRole } from "@/context/role-context";
import { CustomerDashboard } from "./components/customer-dashboard";

const revenueData = [
  { name: 'Sen', revenue: 4000, expenses: 2400 },
  { name: 'Sel', revenue: 3000, expenses: 1398 },
  { name: 'Rab', revenue: 2000, expenses: 9800 },
  { name: 'Kam', revenue: 2780, expenses: 3908 },
  { name: 'Jum', revenue: 1890, expenses: 4800 },
  { name: 'Sab', revenue: 2390, expenses: 3800 },
  { name: 'Min', revenue: 3490, expenses: 4300 },
];

const recentOrders = [
  { id: 'ORD-001', customer: 'Budi Santoso', service: 'Deep Clean Reguler', date: '2026-04-18', status: 'Menunggu', price: 'Rp 30.000' },
  { id: 'ORD-002', customer: 'Siti Aminah', service: 'Unyellow (Sol menguning)', date: '2026-04-18', status: 'Proses', price: 'Rp 30.000' },
  { id: 'ORD-003', customer: 'Agus Salim', service: 'White / Leather care', date: '2026-04-17', status: 'Selesai', price: 'Rp 35.000' },
  { id: 'ORD-004', customer: 'Rina Nose', service: 'Custom Painting', date: '2026-04-17', status: 'Menunggu', price: 'Rp 250.000' },
  { id: 'ORD-005', customer: 'Joko Widodo', service: 'Suede Treatment', date: '2026-04-16', status: 'Proses', price: 'Rp 30.000' },
];

export default function Dashboard() {
  const { role, isHydrated } = useRole();

  if (!isHydrated) return null;

  if (role === 'customer') {
    return <CustomerDashboard />;
  }

  if (role === 'owner') {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Ringkasan Bisnis</h1>
            <p className="text-muted-foreground mt-1">Wawasan tingkat tinggi & laporan keuangan untuk pemilik.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 shrink-0" />
              <span>{format(new Date(), "MMM yyyy")}</span>
            </Button>
            <Button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
               <FileText className="w-4 h-4 shrink-0" />
               <span>Ekspor Laporan</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Pendapatan (Bulan Ini)</CardTitle>
              <DollarSign className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Rp 34,250,000</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-emerald-500 font-medium inline-flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1"/> 18.2%
                </span> vs bulan lalu
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Biaya Operasional</CardTitle>
              <Wallet className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Rp 8,400,000</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-red-500 font-medium inline-flex items-center">
                  <ArrowDownRight className="w-3 h-3 mr-1"/> 2.4%
                </span> vs bulan lalu
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground/80">Margin Laba Bersih</CardTitle>
              <Activity className="h-4 w-4 text-primary-foreground/80" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">75.4%</div>
              <p className="text-xs text-primary-foreground/80 mt-1">
                <span className="text-emerald-300 font-medium inline-flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1"/> 4.3%
                </span> vs bulan lalu
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardTitle>Pelacak Kinerja Keuangan</CardTitle>
              <CardDescription>Pendapatan bulanan vs pengeluaran operasional.</CardDescription>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp ${value}k`} />
                  <Tooltip
                    formatter={(value) => [`Rp ${value}k`, '']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Line type="monotone" dataKey="revenue" name="Pendapatan (Kotor)" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="expenses" name="Pengeluaran" stroke="#ef4444" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Layanan Teratas (Penjualan)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                 {[
                   { name: 'Deep Clean', sales: 'Rp 14.5M', p: 80 },
                   { name: 'Custom Painting', sales: 'Rp 8.2M', p: 45 },
                   { name: 'Reglue', sales: 'Rp 6.1M', p: 30 },
                   { name: 'Unyellowing', sales: 'Rp 4.0M', p: 20 },
                 ].map(svc => (
                   <div key={svc.name} className="space-y-2">
                     <div className="flex justify-between items-center text-sm">
                       <span className="font-medium">{svc.name}</span>
                       <span className="text-muted-foreground">{svc.sales}</span>
                     </div>
                     <div className="w-full h-2 rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${svc.p}%` }}></div>
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

  // General Admin View
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ringkasan Dasbor</h1>
          <p className="text-muted-foreground mt-1">Inilah yang terjadi di Effortless Shoesbar hari ini.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 shrink-0" />
            <span>{format(new Date(), "dd MMM, yyyy")}</span>
          </Button>
          <Link href="/invoice" className={cn(buttonVariants({ variant: "default" }), "flex items-center gap-2")}>
             <FileText className="w-4 h-4 shrink-0" />
             <span>Buat Tagihan</span>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pesanan Masuk</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1"/> 12.5%
              </span> dibanding bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uang Masuk</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 12,450,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1"/> 8.2%
              </span> dibanding bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uang Keluar</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 3,200,000</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 font-medium inline-flex items-center">
                <ArrowDownRight className="w-3 h-3 mr-1"/> 4.1%
              </span> dibanding bulan lalu
            </p>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Laba Bersih</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary-foreground/80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 9,250,000</div>
            <p className="text-xs text-primary-foreground/80">
              <span className="text-emerald-300 font-medium inline-flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1"/> 15.3%
              </span> dibanding bulan lalu
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Ringkasan Arus Kas</CardTitle>
            <CardDescription>Pendapatan vs pengeluaran harian minggu ini.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp ${value}k`} />
                <Tooltip
                  formatter={(value) => [`Rp ${value}k`, '']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="revenue" name="Pendapatan" fill="#18181b" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Pengeluaran" fill="#a1a1aa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
            <CardDescription>Anda menyelesaikan 18 pesanan minggu ini.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={order.status === 'Selesai' ? 'default' : order.status === 'Proses' ? 'secondary' : 'outline'}>
                      {order.status}
                    </Badge>
                    <div className="font-medium text-sm">{order.price}</div>
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

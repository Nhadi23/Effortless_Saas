'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownToLine, FileSpreadsheet, Calendar as CalendarIcon, Filter, Plus } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { format } from "date-fns";

const monthlyData = [
  { month: 'Jan', revenue: 32000, expenses: 14000, profit: 18000 },
  { month: 'Feb', revenue: 28000, expenses: 12000, profit: 16000 },
  { month: 'Mar', revenue: 35000, expenses: 15000, profit: 20000 },
  { month: 'Apr', revenue: 34250, expenses: 8400, profit: 25850 },
];

const transactions = [
  { id: 'TRX-101', date: '2026-04-18', description: 'Daily Sales Settlement', type: 'Pemasukan', amount: 'Rp 2.450.000', status: 'Selesai' },
  { id: 'TRX-102', date: '2026-04-17', description: 'Restock Cleaning Supplies', type: 'Pengeluaran', amount: 'Rp 850.000', status: 'Selesai' },
  { id: 'TRX-103', date: '2026-04-17', description: 'Daily Sales Settlement', type: 'Pemasukan', amount: 'Rp 1.950.000', status: 'Selesai' },
  { id: 'TRX-104', date: '2026-04-16', description: 'Electricity Bill', type: 'Pengeluaran', amount: 'Rp 450.000', status: 'Selesai' },
  { id: 'TRX-105', date: '2026-04-16', description: 'Daily Sales Settlement', type: 'Pemasukan', amount: 'Rp 3.100.000', status: 'Selesai' },
  { id: 'TRX-106', date: '2026-04-15', description: 'Store Rent (Monthly)', type: 'Pengeluaran', amount: 'Rp 5.000.000', status: 'Selesai' },
];

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laporan Keuangan</h1>
          <p className="text-muted-foreground mt-1">Rincian detail pendapatan, pengeluaran, dan profit.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 shrink-0" />
            <span>Tahun Ini</span>
          </Button>
          <Button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
             <ArrowDownToLine className="w-4 h-4 shrink-0" />
             <span>Ekspor CSV</span>
          </Button>
          <Dialog>
             <DialogTrigger
               render={<Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2" />}
             >
               <Plus className="w-4 h-4 shrink-0" />
               <span>Kelola Pengeluaran</span>
             </DialogTrigger>
             <DialogContent className="sm:max-w-[425px] p-0 overflow-visible bg-white border-none rounded-2xl shadow-xl">
                 <div className="flex justify-between items-center p-5 border-b">
                   <h2 className="text-[17px] font-bold text-gray-900">Tambah Pengeluaran</h2>
                 </div>
                 
                 <div className="p-5 space-y-4">
                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Nama Pengeluaran <span className="text-gray-400">*</span></Label>
                      <Input placeholder="Contoh: Beli deterjen" className="h-11 rounded-lg border-gray-300" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Nominal <span className="text-gray-400">*</span></Label>
                      <Input placeholder="0" type="number" className="h-11 rounded-lg border-gray-300" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Tanggal Pengeluaran <span className="text-gray-400">*</span></Label>
                      <Select defaultValue="22 April 2026">
                         <SelectTrigger className="w-full h-11 text-left justify-between items-center bg-white border-gray-300 rounded-lg px-3">
                             <SelectValue placeholder="22 April 2026" />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="22 April 2026">22 April 2026</SelectItem>
                             <SelectItem value="21 April 2026">21 April 2026</SelectItem>
                         </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Cabang <span className="text-gray-400">*</span></Label>
                      <Select defaultValue="Narrabula - Cabang Utama">
                         <SelectTrigger className="w-full h-11 text-left justify-between items-center bg-white border-gray-300 rounded-lg px-3">
                             <SelectValue placeholder="Narrabula - Cabang Utama" />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="Narrabula - Cabang Utama">Narrabula - Cabang Utama</SelectItem>
                             <SelectItem value="Effortless Shoesbar">Effortless Shoesbar</SelectItem>
                         </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Pilih Pembayaran <span className="text-gray-400">*</span></Label>
                      <Select>
                         <SelectTrigger className="w-full h-11 text-left justify-between items-center bg-white border-gray-300 rounded-lg px-3 text-gray-500 font-normal">
                             <SelectValue placeholder="Pilih Pembayaran" />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="cash">Tunai</SelectItem>
                             <SelectItem value="transfer">Transfer Bank</SelectItem>
                         </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-[13px] font-medium text-gray-600">Kategori <span className="text-gray-400">*</span></Label>
                      <Select>
                         <SelectTrigger className="w-full h-11 text-left justify-between items-center bg-white border-gray-300 rounded-lg px-3 text-gray-500 font-normal">
                             <SelectValue placeholder="Pilih Kategori" />
                         </SelectTrigger>
                         <SelectContent>
                             <SelectItem value="operasional">Operasional</SelectItem>
                             <SelectItem value="bahan">Bahan Baku</SelectItem>
                         </SelectContent>
                      </Select>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3 p-5 border-t">
                    <DialogTrigger
                      render={<Button variant="outline" className="h-12 w-full rounded-xl text-gray-700 font-semibold border-gray-300 bg-white hover:bg-gray-50" />}
                    >
                      Batal
                    </DialogTrigger>
                    <Button className="h-12 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold">
                      Simpan
                    </Button>
                 </div>
             </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pedapatan YTD</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Rp 129,250,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pengeluaran YTD</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Rp 49,400,000</div>
          </CardContent>
        </Card>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-primary-foreground/80">Laba Bersih YTD</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">Rp 79,850,000</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kinerja Bulanan</CardTitle>
          <CardDescription>Gambaran pendapatan dan profit bulanan.</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `Rp ${value}k`} />
              <Tooltip
                formatter={(value) => [`Rp ${value}k`, '']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Legend />
              <Bar dataKey="revenue" name="Total Pendapatan" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" name="Laba Bersih" fill="#0f172a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Riwayat Transaksi</CardTitle>
            <CardDescription>Aktivitas finansial terbaru.</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Filter className="w-4 h-4 shrink-0" /> Filter
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Transaksi</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead>Jenis</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Nominal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((trx) => (
                <TableRow key={trx.id}>
                  <TableCell className="font-medium text-muted-foreground">{trx.id}</TableCell>
                  <TableCell>{format(new Date(trx.date), 'dd MMM yyyy')}</TableCell>
                  <TableCell>{trx.description}</TableCell>
                  <TableCell>
                    <Badge variant={trx.type === 'Pemasukan' ? 'default' : 'secondary'} className={trx.type === 'Pemasukan' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-100/80' : 'bg-red-100 text-red-800 hover:bg-red-100/80'}>
                      {trx.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{trx.status}</TableCell>
                  <TableCell className={`text-right font-medium ${trx.type === 'Pemasukan' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {trx.type === 'Pemasukan' ? '+' : '-'}{trx.amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

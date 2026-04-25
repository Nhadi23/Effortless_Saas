'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft, Info, Search, CreditCard, Droplets, SprayCan, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const currentServices = [
  { id: 1, name: 'Deep Clean Reguler', category: 'Shoes Treatment', price: '30.000', icon: Droplets, desc: 'Pembersihan mendalam untuk seluruh bagian sepatu harian' },
  { id: 2, name: 'White / Leather care', category: 'Shoes Treatment', price: '35.000', icon: Info, desc: 'Pembersihan khusus material kulit dengan leather balm' },
  { id: 3, name: 'Unyellow (Sol menguning)', category: 'Special Treatment', price: '30.000', icon: SprayCan, desc: 'Menghilangkan warna kuning pada midsole karet' },
];

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="w-full flex justify-between items-center mb-2">
         <Link href="/" className={buttonVariants({ variant: "ghost" })}>
           <ChevronLeft className="w-4 h-4 mr-2" /> Back to Dashboard
         </Link>
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Order a new Service</h1>
        <p className="text-muted-foreground mt-1">Select our service, and let Effortless Shoesbar handle the rest.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
         <div className="md:col-span-2 space-y-6">
           <Card>
             <CardHeader>
               <CardTitle>Available Services</CardTitle>
               <CardDescription>Pilih layanan yang cocok untuk item Anda hari ini.</CardDescription>
             </CardHeader>
             <CardContent className="grid gap-4">
                {currentServices.map((svc) => (
                  <label key={svc.id} className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:border-primary hover:border-primary">
                    <input type="radio" name="service" value={svc.id} className="sr-only" />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="flex items-center gap-2">
                           <svc.icon className="w-4 h-4 text-primary" />
                           <span className="block text-sm font-medium text-gray-900">{svc.name}</span>
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">{svc.desc}</span>
                        <span className="mt-2 text-sm font-semibold text-gray-900">Rp {svc.price}</span>
                      </span>
                    </span>
                    <CheckCircle className="h-5 w-5 text-primary invisible has-[:checked]:visible opacity-0 transition-opacity" />
                  </label>
                ))}
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle>Pickup & Delivery Method</CardTitle>
               <CardDescription>Area Solo-Boyolali mendapatkan free pick-up delivery.</CardDescription>
             </CardHeader>
             <CardContent className="grid gap-4 sm:grid-cols-2">
                 <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:border-primary">
                    <input type="radio" name="delivery" value="pickup" className="sr-only" defaultChecked />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Free Pick-up</span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">Kurir kami akan menjemput ke lokasi</span>
                      </span>
                    </span>
                  </label>
                  <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none has-[:checked]:ring-2 has-[:checked]:ring-primary has-[:checked]:border-primary">
                    <input type="radio" name="delivery" value="dropoff" className="sr-only" />
                    <span className="flex flex-1">
                      <span className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">Drop to Store</span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">Bawa sendiri ke Jl. Sudirman No. 123</span>
                      </span>
                    </span>
                  </label>
             </CardContent>
           </Card>
         </div>

         <div className="space-y-6">
            <Card className="sticky top-6">
               <CardHeader>
                 <CardTitle>Order Summary</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Selected Service</span>
                    <span className="font-medium">Deep Clean</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Pick-up Area</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Member Discount 10%</span>
                    <span className="font-medium text-emerald-600">- Rp 3.000</span>
                  </div>
                  <div className="pt-4 border-t flex justify-between items-center">
                    <span className="font-bold">Total Estimate</span>
                    <span className="font-bold text-lg">Rp 27.000</span>
                  </div>
               </CardContent>
               <CardFooter>
                 <Button className="w-full h-12 text-base shadow-lg">Confirm & Checkout</Button>
               </CardFooter>
            </Card>
         </div>
      </div>
    </div>
  );
}


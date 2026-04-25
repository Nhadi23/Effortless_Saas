'use client';

import { Card } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Printer, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function InvoicePage() {
  const customerInfo = {
    name: 'Budi Santoso',
    phone: '+62 812 3456 7890',
    orderId: 'INV-2026-04-0012',
    date: '18 Apr 2026',
    dueDate: '18 Apr 2026',
  };

  const invoiceItems = [
    { desc: 'Deep Clean - Nike Air Jordan 1', qty: 1, price: 30000 },
    { desc: 'Unyellowing', qty: 1, price: 15000 },
  ];

  const subtotal = invoiceItems.reduce((acc, item) => acc + (item.qty * item.price), 0);
  const tax = subtotal * 0.11;
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto items-center">
      <div className="w-full flex justify-between items-center print:hidden">
         <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "flex items-center gap-2")}>
           <ChevronLeft className="w-4 h-4 shrink-0" />
           <span>Back to Dashboard</span>
         </Link>
         <Button onClick={handlePrint} className="flex items-center gap-2 bg-primary text-primary-foreground">
           <Printer className="w-4 h-4 shrink-0" />
           <span>Print Invoice</span>
         </Button>
      </div>

      {/* Invoice Document */}
      <Card className="w-full p-8 md:p-12 shadow-md bg-white print:shadow-none print:border-0 print:p-0">
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-8 mb-8">
          <div className="flex items-center gap-3 space-y-0">
             <div className="w-12 h-12 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl uppercase">ES</div>
             <div>
               <h1 className="font-bold text-2xl tracking-tight leading-none mb-1">Effortless Shoesbar</h1>
               <p className="text-sm text-muted-foreground">Premium Shoe Care</p>
             </div>
          </div>
          <div className="text-right">
             <h2 className="text-3xl font-light text-muted-foreground mb-2 uppercase tracking-widest">Invoice</h2>
             <p className="font-medium">{customerInfo.orderId}</p>
          </div>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase mb-2">Billed To</h3>
            <p className="font-medium text-lg leading-tight">{customerInfo.name}</p>
            <p className="text-muted-foreground mt-1">{customerInfo.phone}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-right">
             <div>
               <h3 className="text-sm font-semibold text-muted-foreground mb-1">Invoice Date</h3>
               <p className="font-medium">{customerInfo.date}</p>
             </div>
             <div>
               <h3 className="text-sm font-semibold text-muted-foreground mb-1">Due Date</h3>
               <p className="font-medium">{customerInfo.dueDate}</p>
             </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b uppercase text-sm tracking-wider text-muted-foreground">
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium text-right w-24">Qty</th>
                <th className="pb-3 font-medium text-right w-32">Price</th>
                <th className="pb-3 font-medium text-right w-32">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item, idx) => (
                <tr key={idx} className="border-b last:border-0">
                  <td className="py-4 text-sm font-medium">{item.desc}</td>
                  <td className="py-4 text-sm text-right">{item.qty}</td>
                  <td className="py-4 text-sm text-right">Rp {item.price.toLocaleString()}</td>
                  <td className="py-4 text-sm text-right font-medium">Rp {(item.qty * item.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end">
          <div className="w-full max-w-xs space-y-3">
             <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">Subtotal</span>
               <span className="font-medium">Rp {subtotal.toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-sm">
               <span className="text-muted-foreground">Tax (11%)</span>
               <span className="font-medium">Rp {tax.toLocaleString()}</span>
             </div>
             <div className="flex justify-between items-center border-t pt-3 mt-3">
               <span className="font-bold text-lg">Total</span>
               <span className="font-bold text-lg">Rp {total.toLocaleString()}</span>
             </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t text-sm text-center text-muted-foreground">
          <p>Thank you for trusting Effortless Shoesbar! We hope you love your fresh kicks.</p>
          <p className="mt-1">Jl. Sudirman No 123, Boyolali • IG: @effortless.shoesbar</p>
        </div>
      </Card>
      
      {/* Hide instructions in print */}
      <div className="text-sm text-muted-foreground print:hidden bg-muted p-4 rounded-md inline-block text-center mt-4 border border-border">
         Note: This page is optimized for printing. Click the &quot;Print Invoice&quot; button to save as PDF or Print to your thermal/A4 printer.
      </div>
    </div>
  );
}

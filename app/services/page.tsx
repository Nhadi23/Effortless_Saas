'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit2, Info } from "lucide-react";

export default function ServicesPage() {
  const [services, setServices] = useState([
    { id: 1, name: 'Deep Clean Reguler', category: 'Shoes Treatment', price: '30.000', duration: '± 3 Hari', promo: null },
    { id: 2, name: 'White / Leather care', category: 'Shoes Treatment', price: '35.000', duration: '± 3 Hari', promo: null },
    { id: 3, name: 'Suede / Checkerboard', category: 'Shoes Treatment', price: '35.000', duration: '± 3 Hari', promo: null },
    { id: 4, name: 'Kids Shoes', category: 'Shoes Treatment', price: '25.000', duration: '2-3 Hari', promo: null },
    { id: 5, name: 'Heels / Flats', category: 'Shoes Treatment', price: '25.000', duration: '2-3 Hari', promo: null },
    { id: 6, name: 'Boots / Tactical / PDL', category: 'Shoes Treatment', price: '50.000', duration: '3-4 Hari', promo: null },
    { id: 7, name: 'Sandals', category: 'Shoes Treatment', price: '25.000', duration: '1-2 Hari', promo: null },
    { id: 8, name: 'Unyellow (Sol menguning)', category: 'Special Treatment', price: '30.000', duration: '3-4 Hari', promo: null },
    { id: 9, name: 'Whitening Treatment', category: 'Special Treatment', price: '40.000', duration: '3-4 Hari', promo: null },
    { id: 10, name: 'Suede Treatment', category: 'Special Treatment', price: '30.000', duration: '3-4 Hari', promo: null },
    { id: 11, name: 'Reglue', category: 'Special Treatment', price: '20.000 - 100.000', duration: 'Estimasi', promo: null },
    { id: 12, name: 'Custom Painting', category: 'Special Treatment', price: '100.000 - 500.000', duration: 'Estimasi', promo: null },
    { id: 13, name: 'Express Service (24 jam)', category: 'Add-on', price: '+ 15.000', duration: '1 Hari', promo: null },
    { id: 14, name: 'Cap - One Size', category: 'Bag & Cap', price: '40.000', duration: '± 3 Hari', promo: null },
    { id: 15, name: 'Bag - XSmall', category: 'Bag & Cap', price: '25.000', duration: '± 3 Hari', promo: null },
    { id: 16, name: 'Bag - Small', category: 'Bag & Cap', price: '30.000', duration: '± 3 Hari', promo: null },
    { id: 17, name: 'Bag - Medium', category: 'Bag & Cap', price: '40.000', duration: '± 3 Hari', promo: null },
    { id: 18, name: 'Bag - Large', category: 'Bag & Cap', price: '55.000', duration: '± 3 Hari', promo: null },
  ]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services & Pricing</h1>
          <p className="text-muted-foreground mt-1">Manage cleaning services, pricing structure, and active promotions.</p>
        </div>
        <Dialog>
          <DialogTrigger render={<Button />}>
            <Plus className="w-4 h-4 mr-2"/> Add Service
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>Add a new service offering to your menu.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Service Name</Label>
                <Input id="name" placeholder="e.g. Leather Care" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="Treatment" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Base Price (Rp)</Label>
                  <Input id="price" type="number" placeholder="120000" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Save Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Catalog</CardTitle>
          <CardDescription>All your active services and current pricing.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price (IDR)</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Promo</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((svc) => (
                <TableRow key={svc.id}>
                  <TableCell className="font-medium">{svc.name}</TableCell>
                  <TableCell>{svc.category}</TableCell>
                  <TableCell className="text-right">Rp {svc.price}</TableCell>
                  <TableCell>{svc.duration}</TableCell>
                  <TableCell>
                    {svc.promo ? (
                      <Badge className="bg-orange-500 hover:bg-orange-600">{svc.promo}</Badge>
                    ) : (
                       <span className="text-muted-foreground text-sm">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card className="bg-primary/5 border-primary/20">
           <CardHeader>
             <CardTitle className="text-lg flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Active Promotions
             </CardTitle>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
                <div className="p-3 bg-white rounded-md border flex justify-between items-center shadow-sm">
                   <div>
                     <p className="font-semibold text-sm">Ramadhan Sale</p>
                     <p className="text-xs text-muted-foreground">15% off on Deep Clean</p>
                   </div>
                   <Badge variant="outline">Active</Badge>
                </div>
                <Button variant="outline" className="w-full text-sm">Manage Promos</Button>
             </div>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}

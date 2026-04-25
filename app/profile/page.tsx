'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, Store, MapPin, Phone, Instagram, Clock } from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Business Profile</h1>
        <p className="text-muted-foreground mt-1">Manage your store information, contact details, and operational notes.</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="w-5 h-5 text-primary" />
              General Information
            </CardTitle>
            <CardDescription>Basic details about your business that appear on invoices and receipts.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name</Label>
              <Input id="storeName" defaultValue="Effortless Shoesbar" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline / Subtitle</Label>
              <Input id="tagline" defaultValue="Simple shoe care system" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Business Description</Label>
              <Textarea 
                id="description" 
                defaultValue="Premium shoe and bag care service providing deep cleaning, unyellowing, repainting, and repairs." 
                className="h-24"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Contact & Location
            </CardTitle>
            <CardDescription>How customers can reach you and where to find your store.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                WhatsApp Number
              </Label>
              <Input id="phone" defaultValue="+62 851 9833 9837" />
              <p className="text-xs text-muted-foreground">Admin: Fahmi</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram" className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-muted-foreground" />
                Instagram Handle
              </Label>
              <Input id="instagram" defaultValue="@effortless_shoesbar" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="address">Full Address</Label>
              <Textarea 
                id="address" 
                defaultValue="Jl. Sudirman No 123, Boyolali, Jawa Tengah" 
                className="h-20"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Operational Settings
            </CardTitle>
            <CardDescription>Configure service durations and area coverage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Operational Notes (Visible to Staff & Receipts)</Label>
              <Textarea 
                id="notes" 
                defaultValue="Quick/Reguler Clean (1-2 hari)&#10;Deep Clean ± 3 hari&#10;Kids Shoes (2-3 hari)&#10;Express 24 jam tergantung antrean&#10;Free Pick Up & Delivery (Area Solo-Boyolali)" 
                className="h-32"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t p-6">
            <Button onClick={handleSave} disabled={isSaving} className="w-full sm:w-auto flex items-center gap-2">
              <Save className="w-4 h-4 shrink-0" />
              {isSaving ? "Saving changes..." : "Save Configuration"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

'use client';

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Orders & Inventory</h1>
        <p className="text-muted-foreground mt-1">List of all incoming items and orders.</p>
      </div>
      <div className="flex h-64 items-center justify-center border border-dashed rounded-lg">
         <span className="text-muted-foreground text-sm">Inventory grid goes here</span>
      </div>
    </div>
  );
}

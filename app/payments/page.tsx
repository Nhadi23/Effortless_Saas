'use client';

export default function PaymentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground mt-1">Manage incoming and outgoing money transactions.</p>
      </div>
      <div className="flex h-64 items-center justify-center border border-dashed rounded-lg">
         <span className="text-muted-foreground text-sm">Payment integration goes here</span>
      </div>
    </div>
  );
}

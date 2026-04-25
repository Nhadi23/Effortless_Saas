'use client';

export default function MembershipPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Membership</h1>
        <p className="text-muted-foreground mt-1">Manage customer loyalty programs and membership tiers.</p>
      </div>
      <div className="flex h-64 items-center justify-center border border-dashed rounded-lg">
         <span className="text-muted-foreground text-sm">Membership configuration goes here</span>
      </div>
    </div>
  );
}

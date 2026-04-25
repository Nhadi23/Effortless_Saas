'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    { date: new Date(), title: 'Pick up 5 orders', type: 'delivery' },
    { date: new Date(new Date().setDate(new Date().getDate() + 1)), title: 'Restock cleaning supplies', type: 'inventory' },
    { date: new Date(new Date().setDate(new Date().getDate() + 2)), title: 'Finish 10 pairs deep clean', type: 'production' },
  ];

  const selectedDateEvents = date 
    ? events.filter(e => e.date.toDateString() === date.toDateString())
    : [];

  return (
    <div className="flex flex-col gap-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground mt-1">Manage store operational events and deadlines.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
              modifiers={{
                 hasEvent: events.map(e => e.date)
              }}
              modifiersStyles={{
                 hasEvent: { fontWeight: 'bold', textDecoration: 'underline' }
              }}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {date ? date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : 'Select a date'}
            </CardTitle>
            <CardDescription>Events for the selected date.</CardDescription>
          </CardHeader>
          <CardContent>
             {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((ev, i) => (
                    <div key={i} className="flex gap-4 items-start border-b pb-4 last:border-0">
                       <div className={`w-3 h-3 rounded-full mt-1.5 ${ev.type === 'delivery' ? 'bg-blue-500' : ev.type === 'inventory' ? 'bg-orange-500' : 'bg-emerald-500'}`}></div>
                       <div>
                         <p className="font-medium">{ev.title}</p>
                         <span className="text-xs text-muted-foreground capitalize">{ev.type}</span>
                       </div>
                    </div>
                  ))}
                </div>
             ) : (
                <div className="text-center py-10 text-muted-foreground">
                  <p>No events scheduled for this day.</p>
                </div>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

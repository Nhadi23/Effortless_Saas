'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, PlayCircle, ShieldCheck, Plus, ArrowLeft, Info, Store, Truck } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type JobStatus = 'Menunggu' | 'Dicuci' | 'Dikeringkan' | 'QC' | 'Selesai';

interface Job {
  id: string;
  customer: string;
  shoe: string;
  service: string;
  currentStep: JobStatus;
}

const initialJobs: Job[] = [
  { id: 'JOB-901', customer: 'Budi Santoso', shoe: 'Nike Air Jordan 1', service: 'Deep Clean', currentStep: 'Menunggu' },
  { id: 'JOB-902', customer: 'Siti Aminah', shoe: 'Adidas Ultraboost', service: 'Unyellowing', currentStep: 'Dicuci' },
  { id: 'JOB-903', customer: 'Agus Salim', shoe: 'Converse Chuck 70', service: 'Fast Clean', currentStep: 'Dikeringkan' },
  { id: 'JOB-904', customer: 'Rina Nose', shoe: 'Vans Old Skool', service: 'Repaint', currentStep: 'QC' },
];

const steps: JobStatus[] = ['Menunggu', 'Dicuci', 'Dikeringkan', 'QC', 'Selesai'];

export default function WorkflowPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const advanceJob = (id: string) => {
    setJobs(current => current.map(job => {
      if (job.id === id) {
        const currentIndex = steps.indexOf(job.currentStep);
        if (currentIndex < steps.length - 1) {
          return { ...job, currentStep: steps[currentIndex + 1] };
        }
      }
      return job;
    }));
  };

  const getStepColor = (status: JobStatus) => {
    switch (status) {
      case 'Menunggu': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'Dicuci': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Dikeringkan': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'QC': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Selesai': return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pesanan</h1>
          <p className="text-muted-foreground mt-1">Kelola dan pantau pesanan pelanggan melalui proses produksi.</p>
        </div>
        <Dialog>
          <DialogTrigger
            render={<Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center gap-2" />}
          >
            <Plus className="w-4 h-4 shrink-0" />
            <span>Tambahkan Pesanan</span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-slate-50 border-none rounded-3xl">
            {/* Header / Top BG */}
            <div className="bg-gradient-to-b from-blue-400 to-blue-200 px-4 py-6 relative">
               <div className="flex justify-between items-center text-white mb-4">
                 <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-sm cursor-pointer hover:bg-white/30 transition-colors">
                   <ArrowLeft className="w-5 h-5 text-white" />
                 </div>
                 <h2 className="text-lg font-bold">Tambah Pesanan</h2>
                 <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-500 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                   <Info className="w-5 h-5" />
                 </div>
               </div>
               
               <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                 <p className="text-sm font-medium text-gray-700">Batasan Order: 1 dari 50 order/bulan</p>
               </div>
            </div>

            <div className="px-6 py-2">
              {/* Stepper */}
              <div className="flex items-center justify-center gap-4 my-4">
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">1</div>
                   <span className="text-xs font-semibold text-blue-600">Input Data</span>
                 </div>
                 <div className="w-8 border-b-2 border-gray-200 -mt-5"></div>
                 <div className="flex flex-col items-center gap-1">
                   <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-semibold">2</div>
                   <span className="text-xs font-medium text-gray-500">Pembayaran</span>
                 </div>
              </div>

              {/* Form Content */}
              <div className="bg-white rounded-2xl p-5 shadow-sm space-y-6">
                <h3 className="font-bold text-gray-900 text-lg">Input Data Pesanan</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-gray-700 text-sm">Pelanggan</Label>
                    <button className="text-blue-600 text-xs font-medium flex items-center shadow-sm border rounded-lg px-2 py-1.5 hover:bg-blue-50 transition-colors border-blue-200">
                      <Plus className="w-3 h-3 mr-1" /> Daftarkan Member
                    </button>
                  </div>
                  <div className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="text-sm text-gray-400 font-medium">Pilih Pelanggan</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-gray-700 text-sm">Jenis Pelayanan</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors border-blue-500 bg-blue-50/50 text-blue-700">
                      <input type="radio" name="pelayanan" value="toko" className="sr-only" defaultChecked />
                      <Store className="w-5 h-5 shrink-0" />
                      <span className="text-sm font-semibold leading-tight">Datang ke Toko</span>
                    </label>
                    <label className="flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-colors border-gray-200 bg-white hover:border-gray-300 text-gray-400">
                      <input type="radio" name="pelayanan" value="pickup" className="sr-only" />
                      <Truck className="w-5 h-5 shrink-0" />
                      <span className="text-sm font-medium leading-tight text-gray-600">Pickup Service</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-gray-700 text-sm">Layanan</Label>
                    <button className="bg-gray-100 text-gray-600 text-xs font-medium flex items-center rounded-lg px-3 py-1.5 hover:bg-gray-200 transition-colors border">
                      <Plus className="w-3 h-3 mr-1" /> Tambah
                    </button>
                  </div>
                  <div className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
                    <span className="text-sm text-gray-400">Belum ada treatment dipilih</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 pb-6 bg-slate-50 mt-2">
               <Button className="w-full h-12 bg-blue-300 hover:bg-blue-400 text-white rounded-2xl font-bold text-base shadow-sm" disabled>
                 Lanjut
               </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pekerjaan Aktif</CardTitle>
          <CardDescription>Pindahkan pekerjaan ke tahap berikutnya setelah selesai.</CardDescription>
        </CardHeader>
        <CardContent>
           <div className="space-y-6">
             {jobs.filter(j => j.currentStep !== 'Selesai').map(job => (
               <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg gap-4 bg-white/50">
                 <div className="grid gap-1">
                   <div className="flex items-center gap-2">
                     <h3 className="font-semibold text-lg">{job.id}</h3>
                     <Badge variant="outline">{job.service}</Badge>
                   </div>
                   <p className="text-sm text-muted-foreground">{job.customer} • {job.shoe}</p>
                 </div>
                 
                 <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    {/* Progress Bar Container */}
                    <div className="flex items-center w-full md:w-64 gap-1">
                      {steps.map((step, idx) => {
                         const jobIdx = steps.indexOf(job.currentStep);
                         const isPast = idx < jobIdx;
                         const isCurrent = idx === jobIdx;
                         return (
                           <div key={step} className="flex-1 flex flex-col items-center gap-1">
                             <div className={`h-2 w-full rounded-full ${isPast ? 'bg-primary' : isCurrent ? 'bg-primary/50 animate-pulse' : 'bg-muted'}`} />
                             <span className={`text-[10px] font-medium tracking-tighter ${isCurrent ? 'text-primary' : 'text-muted-foreground'}`}>
                               {step}
                             </span>
                           </div>
                         )
                      })}
                    </div>
                    
                    <Button onClick={() => advanceJob(job.id)} className="w-full md:w-auto min-w-[140px] shrink-0">
                      {job.currentStep === 'Menunggu' && <PlayCircle className="w-4 h-4 mr-2" />}
                      {job.currentStep === 'Dicuci' && <Clock className="w-4 h-4 mr-2" />}
                      {job.currentStep === 'Dikeringkan' && <ShieldCheck className="w-4 h-4 mr-2" />}
                      {job.currentStep === 'QC' && <Check className="w-4 h-4 mr-2" />}
                      {job.currentStep === 'QC' ? 'Selesai & Setuju' : `Selesaikan ${job.currentStep}`}
                    </Button>
                 </div>
               </div>
             ))}
             {jobs.filter(j => j.currentStep !== 'Selesai').length === 0 && (
               <div className="text-center py-12 text-muted-foreground">
                 Tidak ada pekerjaan aktif.
               </div>
             )}
           </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Siap Diambil</CardTitle>
          <CardDescription>Sepatu yang telah lolos Quality Control.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {jobs.filter(j => j.currentStep === 'Selesai').length > 0 ? jobs.filter(j => j.currentStep === 'Selesai').map(job => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg border-green-200 bg-green-50/50">
                   <div>
                     <p className="font-semibold">{job.id} - {job.shoe}</p>
                     <p className="text-sm text-muted-foreground">{job.customer}</p>
                   </div>
                   <Badge className="bg-green-600 hover:bg-green-700">Siap</Badge>
                </div>
             )) : (
                <div className="text-sm text-muted-foreground py-4">Tidak ada yang siap.</div>
             )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

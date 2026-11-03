"use client"

import { useState } from "react"
import { Sprout, Thermometer, Droplets, Sun, Wind, Power, Waves, Leaf, Activity, Gauge, CloudSun } from "lucide-react"

const initialDevices = [
  { name: "Irrigation Pump", detail: "Watering system", icon: Droplets, enabled: true },
  { name: "Ventilation Fan", detail: "Greenhouse airflow", icon: Wind, enabled: true },
  { name: "Grow Lights", detail: "Supplemental lighting", icon: Sun, enabled: false },
  { name: "Misting System", detail: "Humidity control", icon: Waves, enabled: false },
]

export function MainDashboard() {
  const [devices, setDevices] = useState(initialDevices)
  const sensors = [
    { label: "Temperature", value: "28.5", unit: "°C", note: "Greenhouse air", icon: Thermometer },
    { label: "Air Humidity", value: "68", unit: "%", note: "Relative humidity", icon: Droplets },
    { label: "Soil Moisture", value: "54", unit: "%", note: "Root zone", icon: Sprout },
    { label: "Light Intensity", value: "740", unit: "lx", note: "Ambient light", icon: Sun },
  ]
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-900/60 bg-gradient-to-br from-[#123327] via-[#10221b] to-[#0b1410] p-7 text-white">
        <div className="absolute -right-8 -top-16 size-64 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"><Leaf className="size-3.5" /> SMART FARM CONTROL CENTER</div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Farm Overview</h1>
            <p className="mt-2 max-w-xl text-sm text-emerald-50/65">Monitor your greenhouse environment and manage farm equipment from one place.</p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"><CloudSun className="size-8 text-emerald-300"/><div><div className="text-2xl font-semibold">28.5°C</div><div className="text-xs text-white/60">Greenhouse climate</div></div></div>
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {sensors.map(({label,value,unit,note,icon:Icon}) => <div key={label} className="rounded-2xl border border-[#26342d] bg-[#151d19] p-5"><div className="mb-5 flex items-center justify-between"><span className="text-sm text-gray-400">{label}</span><div className="rounded-xl bg-emerald-400/10 p-2.5 text-emerald-400"><Icon className="size-5"/></div></div><div className="text-3xl font-semibold text-white">{value}<span className="ml-1 text-base font-normal text-gray-400">{unit}</span></div><p className="mt-2 text-xs text-gray-500">{note} · Demo data</p></div>)}
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        <section className="rounded-2xl border border-[#26342d] bg-[#151d19] p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between"><div><h2 className="text-lg font-semibold text-white">Farm Devices</h2><p className="text-xs text-gray-500">Toggle equipment in demo mode</p></div><Power className="size-5 text-emerald-400"/></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {devices.map((device,index) => <div key={device.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-[#1d2821] p-4"><div className="flex items-center gap-3"><div className="rounded-lg bg-emerald-400/10 p-2.5 text-emerald-400"><device.icon className="size-5"/></div><div><div className="text-sm font-medium text-white">{device.name}</div><div className="text-xs text-gray-500">{device.detail}</div></div></div><button type="button" aria-label={`Toggle ${device.name}`} aria-pressed={device.enabled} onClick={() => setDevices(prev => prev.map((d,i) => i === index ? {...d,enabled:!d.enabled}:d))} className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${device.enabled ? "bg-emerald-500" : "bg-gray-600"}`}><span className={`absolute top-1 size-5 rounded-full bg-white transition-all ${device.enabled ? "left-6" : "left-1"}`}/></button></div>)}
          </div>
        </section>
        <section className="rounded-2xl border border-[#26342d] bg-[#151d19] p-6"><div className="mb-6 flex items-center gap-2"><Activity className="size-5 text-emerald-400"/><h2 className="text-lg font-semibold text-white">System Status</h2></div><div className="space-y-5"><div className="flex justify-between text-sm"><span className="text-gray-400">Farm status</span><span className="text-emerald-400">Demo online</span></div><div className="flex justify-between text-sm"><span className="text-gray-400">Devices active</span><span className="font-semibold text-white">{devices.filter(d=>d.enabled).length} / {devices.length}</span></div><div className="flex justify-between text-sm"><span className="text-gray-400">Sensor feed</span><span className="text-amber-300">Sample readings</span></div><div className="rounded-xl bg-emerald-400/5 p-4 text-sm leading-6 text-gray-400"><Gauge className="mb-2 size-5 text-emerald-400"/>Connect real sensors and a backend to enable live monitoring and hardware control.</div></div></section>
      </div>
      <section className="rounded-2xl border border-[#26342d] bg-[#151d19] p-6"><div className="flex items-center gap-2"><Sprout className="size-5 text-emerald-400"/><h2 className="text-lg font-semibold text-white">Growing Zones</h2></div><div className="mt-4 grid gap-4 md:grid-cols-3">{["Greenhouse A","Greenhouse B","Outdoor Plot"].map((zone,i)=><div key={zone} className="rounded-xl border border-white/5 bg-[#1d2821] p-4"><div className="text-sm font-semibold text-white">{zone}</div><div className="mt-2 text-xs text-gray-400">{i===0?"Vegetables":i===1?"Seedlings":"Field crops"}</div><div className="mt-4 flex items-center gap-2 text-xs text-emerald-400"><span className="size-2 rounded-full bg-emerald-400"/>Monitoring area</div></div>)}</div></section>
    </div>
  )
}

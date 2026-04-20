"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href:"/", label:"Home" },
  { href:"/about", label:"About Us" },
  { href:"/fasttrack", label:"About FastTrack Literacy™" },
  { href:"/resources", label:"Resources" },
  { href:"/how-it-works", label:"How It Works" },
  { href:"/contact", label:"Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(12,35,64,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <Image src="/images/fasttrack-logo.png" alt="FastTrack Phonics" width={160} height={48} style={{ height:44, width:"auto", objectFit:"contain" }} />
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:2 }} className="nav-desktop">
          {links.map(l=>{
            const isActive = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} style={{ color: isActive ? "#F5820A" : "rgba(255,255,255,0.75)", textDecoration:"none", fontSize:13, fontWeight: isActive ? 700 : 500, padding:"7px 12px", borderRadius:6, whiteSpace:"nowrap", borderBottom: isActive ? "2px solid #F5820A" : "2px solid transparent", transition:"all 0.2s" }}>{l.label}</Link>
            );
          })}
          <Link href="/get-started" style={{ marginLeft:10, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:13, padding:"9px 20px", borderRadius:50, textDecoration:"none", whiteSpace:"nowrap" }}>Get Started →</Link>
        </div>
        <button onClick={()=>setOpen(!open)} className="nav-mobile" style={{ background:"none", border:"1px solid rgba(255,255,255,0.2)", borderRadius:8, color:"white", padding:"6px 11px", cursor:"pointer", fontSize:16 }}>{open?"✕":"☰"}</button>
      </div>
      {open && (
        <div style={{ background:"#0C2340", borderTop:"1px solid rgba(255,255,255,0.1)", padding:"8px 20px 20px" }}>
          {links.map(l=>{
              const isActive = pathname === l.href;
              return (
                <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{ display:"block", color: isActive ? "#F5820A" : "rgba(255,255,255,0.85)", textDecoration:"none", fontSize:15, fontWeight: isActive ? 700 : 500, padding:"13px 0", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>{l.label}</Link>
              );
            })}
          <Link href="/get-started" onClick={()=>setOpen(false)} style={{ display:"block", marginTop:16, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, padding:"13px 20px", borderRadius:50, textDecoration:"none", textAlign:"center" }}>Get Started →</Link>
        </div>
      )}
      <style>{`.nav-desktop{display:flex !important}.nav-mobile{display:none !important}@media(max-width:768px){.nav-desktop{display:none !important}.nav-mobile{display:block !important}}`}</style>
    </nav>
  );
}

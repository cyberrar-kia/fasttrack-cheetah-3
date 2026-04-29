"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href:"/", label:"Home" },
  {
    href:"/about", label:"About Us",
    sub:[
      { href:"/about#who-we-are", label:"Who We Are" },
      { href:"/about#ecosystem", label:"A Global Literacy Ecosystem" },
      { href:"/about#fasttrack", label:"What is FastTrack Literacy™" },
      { href:"/about#founder", label:"Who is Our Founder & CEO" },
      { href:"/about#team", label:"Our Team & Partners" },
      { href:"/about#partner", label:"How to Partner with Us" },
    ]
  },
  {
    href:"/fasttrack", label:"About FastTrack Literacy™",
    sub:[
      { href:"/fasttrack#what-is", label:"What is FastTrack Literacy™?" },
      { href:"/fasttrack#why-matters", label:"Why the Programme Matters" },
      { href:"/fasttrack#who-for", label:"Who is the Programme For" },
      { href:"/fasttrack#what-makes", label:"What Makes It Different" },
      { href:"/fasttrack#brand-experience", label:"The FastTrack Train" },
      { href:"/fasttrack#comparison", label:"FastTrack vs. Traditional" },
      { href:"/fasttrack#why-choose", label:"Why Choose FastTrack Literacy™?" },
    ]
  },
  {
    href:"/resources", label:"Resources",
    sub:[
      { href:"/resources#educators", label:"For Educators" },
      { href:"/resources#parents", label:"For Parents/Caregivers" },
      { href:"/resources#icheetah", label:"Meet iCHEETAH™" },
      { href:"/resources#all-resources", label:"All Resources" },
      { href:"/resources#free-downloads", label:"Free Resources" },
      { href:"/resources#flipbooks", label:"Read Our Books Online" },
    ]
  },
  {
    href:"/how-it-works", label:"How It Works",
    sub:[
      { href:"/how-it-works#video", label:"Inside a Lesson" },
      { href:"/how-it-works#pillars", label:"The 5 Pillars" },
      { href:"/how-it-works#anatomy", label:"Anatomy of a Phoneme Lesson" },
    ]
  },
  { href:"/contact", label:"Contact" },
  { href:"/careers", label:"Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string|null>(null);
  const pathname = usePathname();

  return (
    <nav style={{ position:"sticky", top:0, zIndex:100, background:"rgba(12,35,64,0.97)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 20px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
          <Image src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy Program" width={400} height={120} style={{ height:72, width:"auto", objectFit:"contain" }} />
          <Image src="/images/cheetah-logo.png" alt="CHEETAH®" width={180} height={72} style={{ height:64, width:"auto", objectFit:"contain", mixBlendMode:"screen" }} />
        </Link>

        {/* DESKTOP NAV */}
        <div style={{ display:"flex", alignItems:"center", gap:0 }} className="nav-desktop">
          {navLinks.map(l => {
            const isActive = pathname === l.href || pathname.startsWith(l.href + "/");
            const hasSub = l.sub && l.sub.length > 0;
            return (
              <div
                key={l.href}
                style={{ position:"relative" }}
                onMouseEnter={() => hasSub && setOpenSub(l.href)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <Link
                  href={l.href}
                  style={{
                    color: isActive ? "#F5820A" : "rgba(255,255,255,0.75)",
                    textDecoration:"none", fontSize:13,
                    fontWeight: isActive ? 700 : 500,
                    padding:"24px 10px",
                    display:"inline-flex", alignItems:"center", gap:4,
                    borderBottom: isActive ? "2px solid #F5820A" : "2px solid transparent",
                    transition:"all 0.2s", whiteSpace:"nowrap"
                  }}
                >
                  {l.label}
                  {hasSub && <span style={{ fontSize:9, opacity:0.6 }}>▾</span>}
                </Link>

                {/* DROPDOWN */}
                {hasSub && openSub === l.href && (
                  <div style={{
                    position:"absolute", top:"100%", left:0,
                    background:"#0C2340",
                    border:"1px solid rgba(255,255,255,0.1)",
                    borderRadius:10, padding:"8px 0",
                    minWidth:240, boxShadow:"0 12px 40px rgba(0,0,0,0.4)",
                    zIndex:200
                  }}>
                    {l.sub!.map(s => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setOpenSub(null)}
                        style={{
                          display:"block", padding:"10px 18px",
                          fontSize:13, color:"rgba(255,255,255,0.75)",
                          textDecoration:"none", whiteSpace:"nowrap",
                          borderLeft:"3px solid transparent",
                          transition:"all 0.15s"
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.color = "#F5820A";
                          (e.currentTarget as HTMLElement).style.borderLeftColor = "#F5820A";
                          (e.currentTarget as HTMLElement).style.background = "rgba(245,130,10,0.08)";
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)";
                          (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link href="/get-started" style={{ marginLeft:10, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:13, padding:"9px 20px", borderRadius:50, textDecoration:"none", whiteSpace:"nowrap" }}>Get Started →</Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="nav-mobile" style={{ background:"none", border:"1px solid rgba(255,255,255,0.2)", borderRadius:8, color:"white", padding:"6px 11px", cursor:"pointer", fontSize:16 }}>{open ? "✕" : "☰"}</button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{ background:"#0C2340", borderTop:"1px solid rgba(255,255,255,0.1)", padding:"8px 20px 20px" }}>
          {navLinks.map(l => {
            const isActive = pathname === l.href;
            const hasSub = l.sub && l.sub.length > 0;
            return (
              <div key={l.href}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <Link
                    href={l.href}
                    onClick={() => { setOpen(false); setOpenSub(null); }}
                    style={{ display:"block", color: isActive ? "#F5820A" : "rgba(255,255,255,0.85)", textDecoration:"none", fontSize:15, fontWeight: isActive ? 700 : 500, padding:"13px 0", flex:1 }}
                  >
                    {l.label}
                  </Link>
                  {hasSub && (
                    <button
                      onClick={() => setOpenSub(openSub === l.href ? null : l.href)}
                      style={{ background:"none", border:"none", color:"rgba(255,255,255,0.5)", fontSize:18, cursor:"pointer", padding:"0 8px" }}
                    >
                      {openSub === l.href ? "−" : "+"}
                    </button>
                  )}
                </div>
                {hasSub && openSub === l.href && (
                  <div style={{ paddingLeft:16, paddingBottom:8, borderLeft:"2px solid rgba(245,130,10,0.4)" }}>
                    {l.sub!.map(s => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => { setOpen(false); setOpenSub(null); }}
                        style={{ display:"block", color:"rgba(255,255,255,0.6)", textDecoration:"none", fontSize:13, padding:"8px 0", borderBottom:"1px solid rgba(255,255,255,0.04)" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }} />
              </div>
            );
          })}
          <Link href="/get-started" onClick={() => setOpen(false)} style={{ display:"block", marginTop:16, background:"#F5820A", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, padding:"13px 20px", borderRadius:50, textDecoration:"none", textAlign:"center" }}>Get Started →</Link>
        </div>
      )}

      <style>{`.nav-desktop{display:flex !important}.nav-mobile{display:none !important}@media(max-width:900px){.nav-desktop{display:none !important}.nav-mobile{display:block !important}}`}</style>
    </nav>
  );
}

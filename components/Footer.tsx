"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FORMSPREE_NEWSLETTER = "https://formspree.io/f/xaqaewen";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  const handleNewsletter = async () => {
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_NEWSLETTER, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: (() => { const fd = new FormData(); fd.append("email", email); return fd; })(),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer style={{ background:"#0C2340", color:"rgba(255,255,255,0.7)", paddingTop:60, paddingBottom:30 }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:40, marginBottom:48 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:14 }}>
              <Image src="/images/fasttrack-logo.png" alt="FastTrack Phonics" width={140} height={42} style={{ height:42, width:"auto", objectFit:"contain", filter:"brightness(0) invert(1)" }} />
            </div>
            <p style={{ fontSize:13, lineHeight:1.7, maxWidth:240, marginBottom:16 }}>Every child can read. Every child must read. — Paulette Trowers-Lawrence, JD</p>
            <div style={{ display:"flex", gap:8 }}>
              {[
              {label:"f",url:"https://facebook.com/mycheetahinc/"},
              {label:"ig",url:"https://instagram.com/mycheetahinc"},
              {label:"yt",url:"https://youtube.com/@Mycheetahinc"},
              {label:"in",url:"https://linkedin.com/in/paulette-trowers-juris-doctor-65b9b818"},
            ].map(s=>(<a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ width:32, height:32, borderRadius:8, background:"rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, cursor:"pointer", color:"rgba(255,255,255,0.6)", textDecoration:"none" }}>{s.label}</a>))}
            </div>
          </div>
          <div>
            <h4 style={{ color:"white", fontSize:14, fontWeight:700, marginBottom:14, fontFamily:"'Nunito',sans-serif" }}>Program</h4>
            {[["FastTrack Literacy™","/fasttrack"],["How It Works","/how-it-works"],["Resources","/resources"],["Get Started","/get-started"]].map(([l,h])=>(<Link key={h} href={h} style={{ display:"block", color:"rgba(255,255,255,0.55)", textDecoration:"none", fontSize:13, marginBottom:9 }}>{l}</Link>))}
          </div>
          <div>
            <h4 style={{ color:"white", fontSize:14, fontWeight:700, marginBottom:14, fontFamily:"'Nunito',sans-serif" }}>Company</h4>
            {[["About CHEETAH®","/about"],["Contact","/contact"],["Book a Demo","/contact"]].map(([l,h])=>(<Link key={l} href={h} style={{ display:"block", color:"rgba(255,255,255,0.55)", textDecoration:"none", fontSize:13, marginBottom:9 }}>{l}</Link>))}
          </div>
          <div>
            <h4 style={{ color:"white", fontSize:14, fontWeight:700, marginBottom:14, fontFamily:"'Nunito',sans-serif" }}>Stay Connected</h4>
            <p style={{ fontSize:13, marginBottom:14 }}>Get literacy tips and updates delivered to your inbox.</p>
            {status === "sent" ? (
              <div style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:50, padding:"10px 18px", fontSize:13, color:"#4ADE80" }}>
                ✓ You're subscribed!
              </div>
            ) : (
              <div style={{ display:"flex", gap:8, marginBottom:8 }}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleNewsletter()}
                  style={{ flex:1, padding:"10px 14px", borderRadius:50, border:"1px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.07)", color:"white", fontSize:13, outline:"none" }}
                />
                <button
                  onClick={handleNewsletter}
                  disabled={status === "sending"}
                  style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"10px 16px", fontWeight:700, cursor:"pointer", fontSize:13, opacity:status==="sending"?0.7:1 }}>
                  {status === "sending" ? "…" : "→"}
                </button>
              </div>
            )}
            {status === "error" && (
              <p style={{ fontSize:11, color:"#FCA5A5", marginBottom:8 }}>Something went wrong. Try again.</p>
            )}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", marginTop:12 }}>
              {[["Privacy Notice","/legal"],["Terms","/legal"],["Support","/contact"]].map(([l,h])=>(<Link key={l} href={h} style={{ color:"rgba(255,255,255,0.45)", textDecoration:"none", fontSize:12 }}>{l}</Link>))}
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12, fontSize:12 }}>
          <p>© 2025 CHEETAH Toys & More, LLC. All rights reserved.</p>
          <p>FastTrack Literacy™ · JamDER™ · iCHEETAH™ are trademarks of CHEETAH®</p>
        </div>
      </div>
    </footer>
  );
}

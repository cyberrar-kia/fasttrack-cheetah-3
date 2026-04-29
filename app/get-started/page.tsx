"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const FORMSPREE_GETSTARTED = "https://formspree.io/f/mwvanraq";

export default function GetStarted() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", role:"", country:"" });

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_GETSTARTED, { method:"POST", headers:{"Accept":"application/json"}, body: (() => { const fd = new FormData(); Object.entries(form).forEach(([k,v]) => fd.append(k,String(v))); return fd; })() });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">


          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Get Started</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:900, color:"white", marginBottom:18 }}>FastTrack Literacy™, <span style={{ color:"#F5820A" }}>A Complete Educational Solution for All Stakeholders</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Whether you are a parent, educator, school, or organisation — FastTrack Literacy™ has a path for you.</p>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🤝 Who We Partner With</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>FastTrack Literacy™ is For Everyone</h2>
          </div>
          <div className="grid-auto">
            {[
              { icon:"🏫", who:"Schools & Educators", desc:"Implement a structured, results-driven literacy system in your classrooms.", tag:"Classroom-Ready" },
              { icon:"🏛️", who:"Ministries & Government Agencies", desc:"Scale national literacy initiatives with curriculum-aligned, adaptable programs. We have active government partnerships across Jamaica and Africa.", tag:"National Scale" },
              { icon:"🌐", who:"Organisations & NGOs", desc:"Expand access to literacy through community-based and sponsored programs.", tag:"Community Impact" },
              { icon:"👨‍👩‍👧", who:"Parents & Community Leaders", desc:"Support learning at home and strengthen the connection between school and family.", tag:"Family-Friendly" },
            ].map(w=>(
              <div key={w.who} className="feature-card">
                <div style={{ fontSize:32, marginBottom:14 }}>{w.icon}</div>
                <span style={{ background:"#FFF0E0", color:"#C05A00", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>{w.tag}</span>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:16, color:"#0C2340", margin:"10px 0 8px" }}>{w.who}</h3>
                <p style={{ fontSize:13, color:"#5A5240", lineHeight:1.7 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚀 Ways to Get Involved</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>Choose Your Path</h2>
          </div>
          <div className="grid-auto">
            {[
              { icon:"📋", title:"Adopt the Program", desc:"Bring FastTrack Literacy™ into your school, organisation, or community.", cta:"Apply Now", href:"/contact" },
              { icon:"🎓", title:"Train Your Team", desc:"Access teacher training, Transformation Weeks, and ongoing support. Over 640 activities to equip every educator.", cta:"Book Training", href:"/contact" },
              { icon:"🤖", title:"Integrate Technology", desc:"Leverage our full ecosystem — books, digital tools, AI, and iCHEETAH™ devices.", cta:"Explore Resources", href:"/resources" },
              { icon:"❤️", title:"Support the Mission", desc:"Donate or sponsor resources to expand literacy access for underserved communities.", cta:"Contact Us", href:"/contact" },
            ].map(p=>(
              <div key={p.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:16, padding:28 }}>
                <div style={{ fontSize:32, marginBottom:14 }}>{p.icon}</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:17, color:"#0C2340", marginBottom:8 }}>{p.title}</h3>
                <p style={{ fontSize:13, color:"#5A5240", lineHeight:1.7, marginBottom:20 }}>{p.desc}</p>
                <Link href={p.href} style={{ display:"inline-block", background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"10px 20px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"'Nunito',sans-serif", textDecoration:"none" }}>{p.cta} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <div className="section-chip" style={{ margin:"0 auto 16px", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366" }}>✅ Why Partner With Us</div>
          <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"white", marginBottom:40 }}>Built for Lasting Impact</h2>
          <div className="grid-auto">
            {["Proven business acumen since 2014","Aligned with the Science of Reading","Culturally adaptable across countries","Combines education, technology, and training","Designed for measurable outcomes and long-term impact"].map(r=>(
              <div key={r} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:14, padding:20, display:"flex", gap:12, alignItems:"flex-start" }}>
                <span style={{ color:"#F5820A", fontWeight:700, fontSize:16 }}>✓</span>
                <span style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.6 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF0E0" }}>
        <div className="container-xs">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <h2 style={{ fontSize:"clamp(22px,4vw,32px)", fontWeight:900, color:"#0C2340", marginBottom:10 }}>Start Your Journey Today</h2>
            <p style={{ fontSize:14, color:"#5A5240" }}>Join us in creating a future where literacy is not a privilege — but a guarantee.</p>
          </div>
          <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(20px,4vw,36px)", display:"flex", flexDirection:"column", gap:16 }}>
            {status==="sent" ? (
              <div style={{ textAlign:"center", padding:"40px 20px" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", marginBottom:8 }}>You're Signed Up!</h3>
                <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.7 }}>Welcome to the FastTrack Literacy™ movement. We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <div className="grid-2" style={{ gap:14 }}>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>First Name *</label><input value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} placeholder="Sarah" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Last Name *</label><input value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} placeholder="Thompson" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                </div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Email Address *</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>I am a...</label>
                  <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", background:"white" }}>
                    <option value="">Select your role</option>
                    <option>Classroom Teacher</option>
                    <option>Home Educator / Parent</option>
                    <option>School Administrator / Principal</option>
                    <option>Ministry / Government Official</option>
                    <option>NGO / Aid Worker</option>
                    <option>Literacy Coach</option>
                  </select>
                </div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Country</label><input value={form.country} onChange={e=>setForm({...form,country:e.target.value})} placeholder="e.g. Jamaica" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                {status==="error" && <p style={{ fontSize:13, color:"#DC2626" }}>Something went wrong. Please try again or email info@mycheetahinc.com</p>}
                <button onClick={handleSubmit} disabled={status==="sending"} style={{ width:"100%", background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:14, fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer", opacity:status==="sending"?0.7:1 }}>{status==="sending"?"Sending...":"Join the Literacy Movement →"}</button>
                <p style={{ fontSize:12, color:"#A0927A", textAlign:"center" }}>No credit card required. We respect your privacy.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

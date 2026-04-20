"use client";
import { useState } from "react";

const FORMSPREE_CONTACT = "https://formspree.io/f/xgorojya";

export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", organisation:"", enquiry:"", message:"" });

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_CONTACT, { method:"POST", headers:{"Accept":"application/json"}, body: (() => { const fd = new FormData(); Object.entries(form).forEach(([k,v]) => fd.append(k,String(v))); return fd; })() });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Contact Us</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:"white", marginBottom:18 }}>Let's Build <span style={{ color:"#F5820A" }}>Together</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Whether you want to adopt the programme, book a demo, or explore a partnership — our team is here.</p>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems:"start" }}>
            <div>
              <div className="section-chip">📍 Get In Touch</div>
              <h2 style={{ fontSize:"clamp(20px,3vw,28px)", fontWeight:900, color:"#0C2340", marginBottom:24 }}>Contact CHEETAH®</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:24 }}>
                {[
                  {icon:"📧",label:"General Enquiries",val:"info@mycheetahinc.com",href:"mailto:info@mycheetahinc.com"},
                  {icon:"📧",label:"Founder",val:"paulettetrowers@yahoo.com",href:"mailto:paulettetrowers@yahoo.com"},
                  {icon:"📱",label:"Phone (Jamaica)",val:"876-909-6311",href:"tel:8769096311"},
                  {icon:"📱",label:"Phone (USA)",val:"860-781-1276",href:"tel:8607811276"},
                  {icon:"🌐",label:"Website",val:"mycheetahinc.com",href:"https://www.mycheetahinc.com"},
                  {icon:"📸",label:"Instagram",val:"@mycheetahinc",href:"https://instagram.com/mycheetahinc"},
                  {icon:"👍",label:"Facebook",val:"/mycheetahinc/",href:"https://facebook.com/mycheetahinc/"},
                  {icon:"▶️",label:"YouTube",val:"Mycheetahinc",href:"https://youtube.com/@Mycheetahinc"},
                  {icon:"💼",label:"LinkedIn",val:"Paulette Trowers-Lawrence",href:"https://linkedin.com/in/paulette-trowers-juris-doctor-65b9b818"},
                ].map(c=>(
                  <div key={c.label} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:14, padding:18, display:"flex", gap:14, alignItems:"flex-start" }}>
                    <div style={{ fontSize:22 }}>{c.icon}</div>
                    <div><div style={{ fontSize:11, fontWeight:700, color:"#A0927A", marginBottom:3 }}>{c.label}</div><a href={c.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", textDecoration:"none" }}>{c.val}</a></div>
                  </div>
                ))}
              </div>
              <div style={{ background:"#FFF0E0", borderRadius:14, padding:20, marginBottom:16 }}>
                <h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:8 }}>🌐 Also Visit</h4>
                <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" style={{ color:"#C05A00", fontSize:14, fontWeight:600, textDecoration:"none" }}>mycheetahinc.com →</a>
              </div>
            </div>
            <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(20px,4vw,36px)" }}>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", marginBottom:6 }}>Send a Message</h3>
              <p style={{ fontSize:13, color:"#5A5240", marginBottom:24 }}>We respond to all enquiries within 1 business day.</p>
              {status==="sent" ? (
                <div style={{ textAlign:"center", padding:"40px 20px" }}>
                  <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                  <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", marginBottom:8 }}>Message Sent!</h3>
                  <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.7 }}>Thank you for reaching out. The CHEETAH® team will be in touch within 1 business day.</p>
                </div>
              ) : (
                <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                  <div className="grid-2" style={{ gap:14 }}>
                    <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>First Name *</label><input value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})} placeholder="Sarah" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                    <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Last Name *</label><input value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})} placeholder="Thompson" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                  </div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Email *</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Organisation / School</label><input value={form.organisation} onChange={e=>setForm({...form,organisation:e.target.value})} placeholder="e.g. Springfield Primary School" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Enquiry Type *</label>
                    <select value={form.enquiry} onChange={e=>setForm({...form,enquiry:e.target.value})} style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", background:"white" }}>
                      <option value="">Select an option</option>
                      <option>Book a Demo</option>
                      <option>School / District Partnership</option>
                      <option>Government / Ministry Partnership</option>
                      <option>NGO / International Programme</option>
                      <option>Resource Order</option>
                      <option>Teacher Training</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Message *</label><textarea rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your context and how we can help..." style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", resize:"vertical" }} /></div>
                  {status==="error" && <p style={{ fontSize:13, color:"#DC2626" }}>Something went wrong. Please try again or email info@mycheetahinc.com</p>}
                  <button onClick={handleSubmit} disabled={status==="sending"} style={{ width:"100%", background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:14, fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer", opacity:status==="sending"?0.7:1 }}>{status==="sending"?"Sending...":"Send Message →"}</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"white", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(18px,3vw,28px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>Ready to Book a Demo?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:24, maxWidth:440, margin:"0 auto 24px" }}>See FastTrack Literacy™ in action. Our team will walk you through the full programme and answer your questions.</p>
        <a href="/meeting" style={{ display:"inline-block", background:"#0C2340", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"14px 28px", borderRadius:50, fontSize:15, cursor:"pointer", textDecoration:"none" }}>Book a Demo →</a>
      </section>
    </>
  );
}

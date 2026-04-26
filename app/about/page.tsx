"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [cheetahOpen, setCheetahOpen] = useState(false);
  const [founderOpen, setFounderOpen] = useState(false);
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Our Story</div>
          <h1 style={{ fontSize:"clamp(30px,5vw,50px)", fontWeight:900, color:"white", marginBottom:20 }}>About <span style={{ color:"#F5820A" }}>CHEETAH®</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>CHEETAH® (Connect to Higher Education, Electronic Tools, Apps & Help) Toys & More, LLC is a global education and technology company designing complete literacy ecosystems for children worldwide.</p>
        </div>
      </section>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🏢 Who We Are</div>
              <div style={{ marginBottom:16 }}>
                <Image src="/images/cheetah-logo.png" alt="CHEETAH® Toys & More, LLC" width={120} height={60} style={{ height:56, width:"auto", objectFit:"contain" }} />
              </div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>A Global Literacy Ecosystem</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>CHEETAH® (Connect to Higher Education, Electronic Tools, Apps & Help) Toys & More, LLC is a global education and technology company that designs complete literacy ecosystems—combining curriculum, content, assessment, technology, and AI to improve reading outcomes at scale.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Founded in the United States and Jamaica in 2014 and 2015, respectively, CHEETAH® has grown from national assessment workbooks (Primary Exit Profile) into textbooks and a comprehensive literacy system with over 90 resources. These resources are customised for markets including Jamaica, the USA, and several countries in Africa.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>Its flagship program, <strong>FastTrack Literacy™</strong>, is delivered in Jamaica as <strong>JamDER™ (Jamaica Decodable and Early Readers)</strong>.</p>
              <button onClick={() => setCheetahOpen(true)} style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"11px 24px", fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Read More →</button>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[{icon:"📖",title:"Evidence-Based Programs",desc:"Posters, flashcards, reggae phoneme songs, and decodable readers (fiction and nonfiction)"},{icon:"🌍",title:"Customised Country Editions",desc:"Including JamDER™ and other localised versions"},{icon:"🤖",title:"Technology & AI Integration",desc:"iCHEETAH™, tablets, apps, and digital training"},{icon:"🏫",title:"ICT Solutions for Schools",desc:"Mobile learning carts, projectors, and all-in-one systems"},{icon:"🤝",title:"Government Partnerships",desc:"National mobilisation across thousands of schools"},{icon:"❤️",title:"Community Literacy Initiatives",desc:"School donations, scholarships, and a media room with books and tablets developed in collaboration with the Jamaican Ministry of Education"}].map(w=>(
                <div key={w.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:16, display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ fontSize:22, flexShrink:0 }}>{w.icon}</div>
                  <div><h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:3 }}>{w.title}</h4><p style={{ fontSize:12, color:"#5A5240", lineHeight:1.6 }}>{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>📚 What is FastTrack Literacy™</div>
            <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>A Complete Literacy System</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:560, margin:"0 auto", lineHeight:1.7 }}>A comprehensive, Science of Reading–aligned system combining decodable books, reggae-inspired phoneme songs, AI-powered technology, flashcards, and structured learning tools.</p>
          </div>
          <Image src="/images/jamder-books.png" alt="FastTrack Literacy™ — JamDER and C-DER Books Collection" width={1400} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
          <p style={{ textAlign:"center", marginTop:20, fontSize:14, color:"#5A5240", lineHeight:1.7 }}>Founded by <strong>Paulette Trowers-Lawrence, JD</strong>, CHEETAH® is driven by one mission: <strong>every child can learn to read and write, and every child must be given the resources to succeed.</strong></p>
        </div>
      </section>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <Image src="/images/image2.jpg" alt="Paulette Trowers-Lawrence — USA Presidential Lifetime Achievement Award 2024" width={600} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
            </div>
            <div>
              <div className="section-chip">🌟 Our Founder & CEO</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:6 }}>Paulette Trowers-Lawrence, JD</h2>
              <div style={{ fontSize:13, color:"#F5820A", fontWeight:700, marginBottom:20 }}>Founder & CEO, CHEETAH Toys & More, LLC</div>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Paulette Trowers-Lawrence, JD is the Founder and CEO of CHEETAH Toys & More, LLC and the visionary behind FastTrack Literacy™.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>She is a global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>She holds a <strong>Juris Doctor with honors</strong>, is a recipient of the <strong>USA Presidential Lifetime Achievement Award (2024)</strong>, and has been awarded an <strong>Honorary Doctorate of Humanitarianism</strong>.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>With over 30 years of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>Her work continues to impact classrooms, communities, and education systems across Jamaica, the United States, and several African countries.</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0", marginBottom:24 }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"Every child can read, and every child must read." — Paulette Trowers-Lawrence, JD</p>
              </div>
              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
  
                <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ textDecoration:"none" }}>Visit CHEETAH® →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div className="grid-auto">
            {[["2014/15","Founded in USA & Jamaica"],["90+","Educational Resources"],["1,100+","Total Resources Developed"],["770M+","People globally lacking literacy"],["5","Countries Served"]].map(([n,l])=>(
              <div key={l} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:16, padding:24, textAlign:"center" }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:28, fontWeight:900, color:"#F5820A" }}>{n}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Want to Partner With CHEETAH®?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:28, maxWidth:480, margin:"0 auto 28px" }}>Whether you run a school, an NGO, or a government literacy programme — we want to hear from you.</p>
        <Link href="/contact" className="btn-orange">Get In Touch →</Link>
      </section>

      {cheetahOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }} onClick={e => { if(e.target===e.currentTarget) setCheetahOpen(false); }}>
          <div onClick={() => setCheetahOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(560px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>About CHEETAH®</h2>
              <button onClick={() => setCheetahOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            <div className="section-chip" style={{ marginBottom:20 }}>🏢 What We Do</div>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>CHEETAH Toys & More, LLC provides a full ecosystem of tools and training through:</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
              {[{b:"Evidence-based reading programs:",r:" posters, flashcards, reggae phoneme songs, and decodable readers (fiction and nonfiction)"},{b:"Customised country editions:",r:" including JamDER™ and other localised versions"},{b:"Technology and AI integration:",r:" iCHEETAH™, tablets, apps, and digital training"},{b:"ICT solutions for schools:",r:" mobile learning carts, projectors, and all-in-one systems"},{b:"Government partnerships:",r:" national mobilisation across thousands of schools"},{b:"Community literacy initiatives:",r:" school donations, scholarships, and a media room with books and tablets developed in collaboration with the Jamaican Ministry of Education"}].map(item=>(
                <div key={item.b} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:10, padding:"12px 16px", fontSize:13, color:"#5A5240", lineHeight:1.7 }}><strong style={{ color:"#0C2340" }}>{item.b}</strong>{item.r}</div>
              ))}
            </div>
            <Image src="/images/jamder-books.png" alt="FastTrack Literacy™ Books Collection" width={800} height={450} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Founded by <strong>Paulette Trowers-Lawrence, JD</strong>, CHEETAH® is driven by one mission: <strong>every child can read, and every child must read.</strong></p>
            <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"14px 18px", borderRadius:"0 10px 10px 0", marginBottom:24 }}>
              <p style={{ fontSize:13, color:"#0C2340" }}><strong>Learn more:</strong> <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" style={{ color:"#C05A00" }}>mycheetahinc.com</a></p>
              <p style={{ fontSize:13, color:"#5A5240", marginTop:6 }}><strong>Contact:</strong> paulettetrowers@yahoo.com · info@mycheetahinc.com<br/>876-909-6311 · 860-781-1276</p>
            </div>
            <button onClick={() => setCheetahOpen(false)} style={{ width:"100%", background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:14, fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
          </div>
        </div>
      )}

      {founderOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={() => setFounderOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(560px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>Paulette Trowers-Lawrence, JD</h2>
              <button onClick={() => setFounderOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            <Image src="/images/image2.jpg" alt="Paulette Trowers-Lawrence — Presidential Lifetime Achievement Award 2024" width={500} height={650} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:14 }}>Paulette Trowers-Lawrence, JD is the Founder and CEO of CHEETAH Toys & More, LLC and the visionary behind FastTrack Literacy™. She is a global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide.</p>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:14 }}>She holds a <strong>Juris Doctor with honors</strong>, is a recipient of the <strong>USA Presidential Lifetime Achievement Award (2024)</strong>, and has been awarded an <strong>Honorary Doctorate of Humanitarianism</strong>.</p>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:20 }}>With over 30 years of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments. Her work continues to impact classrooms, communities, and education systems across Jamaica, the United States, and several African countries.</p>
            <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"14px 18px", borderRadius:"0 10px 10px 0", marginBottom:24 }}>
              <p style={{ fontSize:13, color:"#0C2340" }}><strong>Learn more:</strong> <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" style={{ color:"#C05A00" }}>mycheetahinc.com</a></p>
              <p style={{ fontSize:13, color:"#5A5240", marginTop:6 }}><strong>Contact:</strong> paulettetrowers@yahoo.com · info@mycheetahinc.com<br/>876-909-6311 · 860-781-1276</p>
            </div>
            <button onClick={() => setFounderOpen(false)} style={{ width:"100%", background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:14, fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

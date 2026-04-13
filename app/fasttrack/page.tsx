"use client";
import Image from "next/image";
import Link from "next/link";
export default function FastTrackPage() {
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>🚂 The Program</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:900, color:"white", marginBottom:20 }}>About FastTrack Literacy<span style={{ color:"#F5820A" }}>™</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>A structured early reading program grounded in the Science of Reading — combining phonics, music, storytelling, and AI technology to build confident, independent readers.</p>
        </div>
      </section>

      {/* WHAT IS IT */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🚂 A Literacy Journey</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>More Than a Reading Programme</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Phonics™ teaches children how letters sound, connect, and form words — grounded in the <strong>evidence-based Science of Reading</strong>, integrating the five pillars of phonemic awareness, phonics, fluency, vocabulary, and comprehension.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ goes beyond traditional instruction by combining structured literacy with engaging, real-world learning experiences. It integrates the Science of Reading with <strong>music, rhythm, and storytelling</strong> to make learning both effective and enjoyable.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85 }}>Children are not just learners — they become active participants in their reading journey through <strong>child-led learning and guided practice</strong>.</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[
                { title:"Phonological Awareness", desc:"Training children to hear, identify, and manipulate sounds in spoken words — the #1 predictor of reading success.", pct:95 },
                { title:"Phonics & Decoding", desc:"Systematic letter-sound correspondences taught in a clear, cumulative 16-step sequence.", pct:90 },
                { title:"Reading Fluency", desc:"Speed, accuracy, and expression through 70+ decodable books and guided oral reading.", pct:85 },
                { title:"Vocabulary", desc:"Rich word knowledge built through reggae songs, word walls, and storytelling.", pct:82 },
                { title:"Comprehension", desc:"Deep understanding through active participation, self-assessment, and child-led reading.", pct:88 },
              ].map(p=>(
                <div key={p.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:10, padding:"14px 18px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                    <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:13, color:"#0C2340" }}>{p.title}</div>
                    <span style={{ fontSize:12, fontWeight:700, color:"#F5820A" }}>{p.pct}% efficacy</span>
                  </div>
                  <div style={{ height:6, background:"#EDE0D0", borderRadius:3, overflow:"hidden", marginBottom:8 }}><div style={{ height:"100%", width:`${p.pct}%`, background:"linear-gradient(90deg,#F5820A,#FF9F2F)", borderRadius:3 }} /></div>
                  <p style={{ fontSize:12, color:"#5A5240" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE TRAIN */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:16 }}>🚂 The Brand Experience</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"white", marginBottom:16 }}>The FastTrack Literacy™ Train</h2>
              <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.85, marginBottom:20 }}>It&apos;s more than a mascot — it&apos;s a mission on wheels! The FastTrack Train carries children on an exciting literacy journey, building excitement around learning through movement and rhythm.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {["🎵 Carries letters, sounds, and songs","🕺 Engages children through movement and rhythm","🎉 Builds excitement around learning","🚂 A memorable journey metaphor for reading progress"].map(f=>(
                  <div key={f} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"rgba(255,255,255,0.85)" }}>{f}</div>
                ))}
              </div>
            </div>
            <div style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:20, padding:36, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Image src="/images/image11.png" alt="All Aboard the FastTrack Phonics Train" width={700} height={420} style={{ width:"100%", height:"auto", borderRadius:16 }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>👧 Who Is It For</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>Designed for Ages 3–8 and Their Families</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:520, margin:"12px auto 0", lineHeight:1.7 }}>Reading success starts early and grows at home. FastTrack Literacy™ is adaptive and works across a wide range of ages and learning levels.</p>
          </div>
          <div className="grid-auto">
            {[{icon:"👶",who:"Early Learners (Ages 3–5)",desc:"Phonemic awareness and early phonics through songs, stories, and play-based activities.",tag:"Foundation Stage"},{icon:"👧",who:"Primary Students (Ages 5–8)",desc:"Full 16-step lesson structure, decodable books, and progress tracking for classroom learning.",tag:"Core Programme"},{icon:"👩‍🏫",who:"Classroom Teachers",desc:"Complete instructional package including Teacher's Helper, 640+ activities, and assessment tools.",tag:"Educator Edition"},{icon:"👨‍👩‍👧",who:"Parents & Home Educators",desc:"Home support guides, family engagement activities, and parent-friendly resources for at-home practice.",tag:"Family Edition"},{icon:"🏫",who:"Schools & Literacy Coaches",desc:"School-wide implementation support, teacher training, and national literacy competition resources.",tag:"School-Wide"}].map(w=>(
              <div key={w.who} className="feature-card">
                <div style={{ fontSize:32, marginBottom:12 }}>{w.icon}</div>
                <span style={{ background:"#FFF0E0", color:"#C05A00", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>{w.tag}</span>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", margin:"10px 0 8px" }}>{w.who}</h3>
                <p style={{ fontSize:13, color:"#5A5240", lineHeight:1.65 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Ready to Experience FastTrack Literacy™?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:28, maxWidth:460, margin:"0 auto 28px" }}>Explore our resources, see how it works, or get started today.</p>
        <div className="btn-row" style={{ justifyContent:"center" }}>
          <Link href="/how-it-works" className="btn-orange">See How It Works →</Link>
          <Link href="/resources" className="btn-navy">Browse Resources</Link>
        </div>
      </section>
    </>
  );
}

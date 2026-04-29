"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FastTrackPage() {
  const [whyOpen, setWhyOpen] = useState(false);
  const [whoOpen, setWhoOpen] = useState(false);
  const [diffOpen, setDiffOpen] = useState(false);

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
      <section className="section" style={{ background:"white" }} id="what-is">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🚂 A Literacy Journey</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>What is FastTrack Literacy™?</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ is a structured early reading programme that teaches children how letters sound, connect, and form words.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Grounded in the <strong>evidence-based Science of Reading</strong>, it integrates the five pillars of <strong>phonemic awareness, phonics, fluency, vocabulary, and comprehension</strong> to build strong, confident readers, particularly during the formative years.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ is supported by an extensive suite of <strong>over 90 integrated resources</strong>, including more than 70 decodable books, flashcards, songs and movement activities, structured lesson materials, and AI-enhanced supervised learning tools. Content is delivered through CHEETAH's proprietary digital media, including the iCHEETAH™ device and branded tablets, creating a seamless blend of curriculum, technology, and assessment.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>Children are not just learners — they become <strong>active participants</strong> in their reading journey through child-led learning and guided practice.</p>
            </div>
            <div>
              <Image src="/images/fasttrack-vision.png" alt="Building a Literate Nation: The Vision and Legacy of FastTrack Literacy" width={900} height={500} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="section" style={{ background:"#FFF9F4" }} id="why-matters">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>📊 A Global Need</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>Why the Programme Matters</h2>
          </div>
          <div className="grid-2" style={{ alignItems:"center" }}>
            <div>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Reading is the foundation for all learning, yet millions of children never master it early enough. According to <strong>UNESCO (2023)</strong>, over <strong>770 million people</strong> globally lack basic literacy skills.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>In the United States alone, <strong>37% of fourth-grade students</strong> read below basic levels, limiting their ability to succeed across subjects.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy© was created to build strong foundations early, before gaps widen. When children struggle to read, they fall behind in school, lose confidence, and face long-term academic and economic challenges.</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"14px 18px", borderRadius:"0 10px 10px 0", marginBottom:24 }}>
                <p style={{ fontSize:13, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>We are connecting home and school for literacy growth!</p>
              </div>
              <button onClick={() => setWhyOpen(true)} style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"11px 24px", fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Read More →</button>
            </div>
            <div>
              <Image src="/images/image4.png" alt="The Global Literacy Crisis: A Foundation at Risk — 770 Million, 37% of Fourth Graders" width={900} height={500} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section id="who-for" className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems:"center" }}>
            <div>
              <div className="section-chip">👧 Who is the Programme For</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Who is the Programme For?</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Primarily designed for children ages 3–8 and their families because reading success starts early and grows at home.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}><strong>FastTrack Literacy©</strong> is adaptive and can be used across a wide range of age groups, supporting learners at different reading levels. It is also a great resource for educators and parents.</p>
              <button onClick={() => setWhoOpen(true)} style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"11px 24px", fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Read More →</button>
            </div>
            <div>
              <Image src="/images/image5.png" alt="Empowering Young Readers: Who Is the Program For?" width={600} height={1100} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
      <section className="section" style={{ background:"#FFF9F4" }} id="what-makes">
        <div className="container">
          <div className="grid-2" style={{ alignItems:"center" }}>
            <div>
              <div className="section-chip">🚀 More Than a Program</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>What Makes FastTrack Literacy™ Different</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ goes beyond traditional instruction by combining structured literacy with engaging, real-world learning experiences. It integrates the <strong>Science of Reading</strong> with music, rhythm, and storytelling to make learning both effective and enjoyable.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Children are not just learners; they become active participants in their reading journey through <strong>child-led learning and guided practice</strong>.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:24 }}>
                {["👉 Confident readers","👉 Faster progress","👉 Stronger foundations"].map(r=>(
                  <div key={r} style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340" }}>{r}</div>
                ))}
              </div>
              <p style={{ fontSize:14, fontStyle:"italic", color:"#F5820A", fontWeight:700, marginBottom:24 }}>We are nation builders – one letter at a time!</p>
              <button onClick={() => setDiffOpen(true)} style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"11px 24px", fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Read More →</button>
            </div>
            <div>
              <Image src="/images/image8.png" alt="The FastTrack Literacy™ Difference — 16-Step Instructional Journey" width={600} height={1100} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* THE TRAIN */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366" }}>🚂 The Brand Experience</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"white", marginBottom:12 }}>The FastTrack Literacy© Train</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)", lineHeight:1.7, maxWidth:520, margin:"0 auto 12px" }}>It is more than a mascot! It is a mission on wheels. It:</p>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:"clamp(16px,4vw,48px)", flexWrap:"wrap", marginBottom:36 }}>
            {["🎵 Carries letters, sounds, and songs","🕺 Engages children through movement and rhythm","🎉 Builds excitement around learning"].map(f=>(
              <div key={f} style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:12, padding:"12px 20px", fontSize:14, color:"rgba(255,255,255,0.9)", fontWeight:600 }}>{f}</div>
            ))}
          </div>
          <Image src="/images/image11.png" alt="All Aboard the FastTrack Phonics© Train!" width={1400} height={600} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.3)" }} />
        </div>
      </section>

      {/* COMPARISON TABLE — moved from How It Works */}
      <section className="section" style={{ background:"white" }} id="comparison">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚀 What Makes Us Different</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>FastTrack Literacy™ vs. Traditional Instruction</h2>
          </div>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr>
                  <th style={{ background:"#0C2340", color:"white", padding:"14px 18px", textAlign:"left", fontFamily:"'Nunito',sans-serif", fontSize:13 }}>Area</th>
                  <th style={{ background:"#F5820A", color:"white", padding:"14px 18px", textAlign:"left", fontFamily:"'Nunito',sans-serif", fontSize:13 }}>FastTrack Literacy™</th>
                  <th style={{ background:"#5A5240", color:"white", padding:"14px 18px", textAlign:"left", fontFamily:"'Nunito',sans-serif", fontSize:13 }}>Traditional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Approach","Holistic literacy system: reading, writing & comprehension","Isolated skill drills"],
                  ["Instruction","Explicit, systematic, sequential (Science of Reading)","Often implicit and incidental"],
                  ["Learning Model","Multisensory, child-led, guided practice","Teacher-directed only"],
                  ["Core Skills","Phonemic awareness, phonics, fluency, vocabulary, comprehension","Limited to phonics only"],
                  ["Reading + Writing","Strong focus on both decoding (reading) and encoding (writing)","Often reading only"],
                  ["Engagement","Reggae songs, rhythm, storytelling, visual supports","Worksheets and repetition"],
                  ["Cultural Relevance","Culturally responsive (JamDER™, global editions)","Generic Western content"],
                  ["Curriculum Fit","Aligned with national curriculum standards and classroom instruction","Often standalone"],
                  ["Technology","iCHEETAH™ AI robot, tablets, apps, digital tools","Limited or none"],
                  ["Home Connection","Active family involvement built into the system","School only"],
                  ["Assessment","Built-in progress monitoring and measurable outcomes","End-of-term testing"],
                  ["Student Impact","Builds confident, independent readers who can apply and teach others","Passive learners"],
                  ["Extended Impact","Supports national literacy initiatives, competitions, and community engagement","Classroom only"],
                ].map(([area,ft,trad],i)=>(
                  <tr key={area} style={{ background:i%2===0?"#FFF9F4":"white" }}>
                    <td style={{ padding:"12px 18px", fontWeight:600, color:"#0C2340", borderBottom:"1px solid #EDE0D0" }}>{area}</td>
                    <td style={{ padding:"12px 18px", color:"#5A5240", borderBottom:"1px solid #EDE0D0" }}>✓ {ft}</td>
                    <td style={{ padding:"12px 18px", color:"#A0927A", borderBottom:"1px solid #EDE0D0" }}>✗ {trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THE BRAND EXPERIENCE — THE FASTTRACK LITERACY TRAIN */}
      <section id="brand-experience" className="section" style={{ background:"#FFF0E0" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚂 The Brand Experience</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>The FastTrack Literacy™ Train</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:560, margin:"0 auto 32px", lineHeight:1.7 }}>The Train is the heart of the FastTrack Literacy™ brand — a symbol of momentum, structure, and the journey every child takes from their first sound to confident, independent reading.</p>
          </div>
          <Image src="/images/train-poster.png" alt="The FastTrack Literacy™ Train — Speeding Reading and Writing Success" width={1200} height={600} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
        </div>
      </section>

      {/* WHY CHOOSE FASTTRACK LITERACY */}
      <section className="section" style={{ background:"white" }} id="why-choose">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>✅ Why Choose FastTrack Literacy™?</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"#0C2340" }}>Why Choose FastTrack Literacy™?</h2>
          </div>
          <div style={{ maxWidth:700, margin:"0 auto", display:"flex", flexDirection:"column", gap:14 }}>
            {[
              "Culturally responsive content",
              "Multi-modal instruction and content delivery",
              "Full literacy ecosystem, not just books",
              "90+ integrated literacy resources across the ecosystem",
              "Strong home–school integration",
              "AI-enabled and hardware-integrated learning",
              "Scalable for national rollout as a literacy infrastructure model",
            ].map((item, i) => (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:14, background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:"16px 20px" }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:"#F5820A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:14, color:"white", fontWeight:900 }}>✓</div>
                <p style={{ fontSize:15, color:"#0C2340", fontWeight:600, margin:0, lineHeight:1.6 }}>{item}</p>
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

      {/* WHY DRAWER */}
      {whyOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={() => setWhyOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(600px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>Why It Matters</h2>
              <button onClick={() => setWhyOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            <Image src="/images/image4.png" alt="The Global Literacy Crisis" width={800} height={450} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:14 }}>FastTrack Literacy© was created to address this urgent gap—by building strong reading foundations early, using structured, evidence-based instruction that helps children and their caregivers to become confident, independent readers.</p>
            <p style={{ fontSize:14, color:"#F5820A", fontWeight:700, marginBottom:20 }}>We are connecting home and school for literacy growth!</p>
            <Image src="/images/image6.png" alt="FastTrack Literacy: Building Early Reading Success" width={900} height={500} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <button onClick={() => setWhyOpen(false)} style={{ width:"100%", background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:14, fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
          </div>
        </div>
      )}

      {/* WHO DRAWER */}
      {whoOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={() => setWhoOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(600px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>Who Is the Program For</h2>
              <button onClick={() => setWhoOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}><strong>FastTrack Literacy©</strong> is adaptive and can be used across a wide range of age groups, supporting learners at different reading levels. FastTrack Literacy© is also a great resource for educators and parents.</p>
            <p style={{ fontSize:14, color:"#F5820A", fontWeight:700, marginBottom:20 }}>CHEETAH® is empowering young readers and their families!</p>
            <Image src="/images/image7.png" alt="FastTrack Literacy: Empowering Young Readers and Their Families" width={600} height={1100} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <Image src="/images/image6.png" alt="FastTrack Literacy: Building Early Reading Success" width={900} height={500} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <button onClick={() => setWhoOpen(false)} style={{ width:"100%", background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:14, fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
          </div>
        </div>
      )}

      {/* DIFF DRAWER */}
      {diffOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={() => setDiffOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(660px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>What Makes FastTrack Literacy™ Different</h2>
              <button onClick={() => setDiffOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            <div className="section-chip" style={{ marginBottom:16 }}>🎵 Science + Engagement</div>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:12 }}>FastTrack Literacy™ blends research-based instruction with culturally relevant and engaging tools, including:</p>
            {["Structured literacy and phoneme-based instruction","Reggae-inspired songs and rhythmic learning","Decodable books and visual supports"].map(i=>(
              <div key={i} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:8, padding:"10px 14px", marginBottom:8, fontSize:13, color:"#5A5240" }}>✓ {i}</div>
            ))}
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginTop:16, marginBottom:16 }}>This balanced approach ensures that children not only understand how reading works but also enjoy the process.</p>
            <Image src="/images/image9.png" alt="FastTrack Literacy: Mastery Through Science & Rhythm" width={900} height={500} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <Image src="/images/image10.png" alt="FastTrack Literacy: More Than a Program — Nation Building" width={600} height={1100} style={{ width:"100%", height:"auto", borderRadius:12, marginBottom:20 }} />
            <div style={{ overflowX:"auto" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
                <thead>
                  <tr>
                    <th style={{ background:"#0C2340", color:"white", padding:"12px 14px", textAlign:"left", fontFamily:"'Nunito',sans-serif" }}>Area</th>
                    <th style={{ background:"#F5820A", color:"white", padding:"12px 14px", textAlign:"left", fontFamily:"'Nunito',sans-serif" }}>FastTrack Literacy™</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Approach","Holistic literacy system integrating reading, writing, and comprehension"],
                    ["Instruction","Explicit, systematic, and sequential (Science of Reading aligned)"],
                    ["Learning Model","Multisensory, child-led, and guided practice"],
                    ["Core Skills","Phonemic awareness, phonics, fluency, vocabulary, comprehension"],
                    ["Reading + Writing","Strong focus on both decoding (reading) and encoding (writing)"],
                    ["Engagement","Reggae-inspired songs, rhythm, storytelling, and visual supports"],
                    ["Cultural Relevance","Customised, culturally responsive content (e.g., JamDER™ and global editions)"],
                    ["Curriculum Fit","Aligned with national curriculum standards and classroom instruction"],
                    ["Technology","Integrated ecosystem: books, apps, AI tools, and iCHEETAH™ device"],
                    ["Home Connection","Extends learning into the home with active family involvement"],
                    ["Assessment","Built-in progress monitoring and measurable outcomes"],
                    ["Student Impact","Builds confident, independent readers who can apply and teach others"],
                    ["Extended Impact","Supports national literacy initiatives, competitions, and community engagement"],
                  ].map(([a,v],i)=>(
                    <tr key={a} style={{ background:i%2===0?"#FFF9F4":"white" }}>
                      <td style={{ padding:"10px 14px", fontWeight:600, color:"#0C2340", borderBottom:"1px solid #EDE0D0", whiteSpace:"nowrap" }}>{a}</td>
                      <td style={{ padding:"10px 14px", color:"#5A5240", borderBottom:"1px solid #EDE0D0" }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop:24 }}>
              <button onClick={() => setDiffOpen(false)} style={{ width:"100%", background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:14, fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

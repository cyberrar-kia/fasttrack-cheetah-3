"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340 0%,#1A3A70 55%,#0C4A6E 100%)", padding:"100px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"rgba(245,130,10,0.07)", pointerEvents:"none" }} />
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:20, background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", padding:"6px 16px", borderRadius:50, fontSize:12, fontWeight:700, color:"#FFB366" }}>🚂 FastTrack Literacy™ by CHEETAH®</div>
              <h1 style={{ fontSize:"clamp(34px,5vw,56px)", fontWeight:900, color:"white", marginBottom:20, lineHeight:1.08 }}>Every Child Can Read.<br/><span style={{ color:"#F5820A" }}>Every Child Must Read.</span></h1>
              <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8, marginBottom:36, maxWidth:500 }}>FastTrack Literacy™ is a structured, evidence-based reading program for children ages 3–8. Built on the Science of Reading — combining reggae-inspired phoneme songs, decodable books, and AI technology.</p>
              <div className="btn-row">
                <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
                <Link href="/how-it-works" className="btn-white">How It Works</Link>
              </div>
              <div style={{ display:"flex", gap:"clamp(20px,3vw,36px)", marginTop:40, flexWrap:"wrap" }}>
                {[["90+","Educational Resources"],["1,100+","Resources Developed"],["3","Countries Served"],["Ages 3–8","Primary Focus"]].map(([n,l])=>(
                  <div key={l}><div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#F5820A" }}>{n}</div><div style={{ fontSize:11, color:"rgba(255,255,255,0.55)", marginTop:2 }}>{l}</div></div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <Image src="/images/image11.png" alt="All Aboard the FastTrack Phonics Train" width={700} height={420} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 24px 64px rgba(0,0,0,0.4)" }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section-sm" style={{ background:"white", borderBottom:"1px solid #EDE0D0" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#A0927A", marginBottom:16 }}>Serving educators & families in</p>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"clamp(16px,4vw,48px)", flexWrap:"wrap" }}>
            {["🇯🇲 Jamaica","🇺🇸 United States","🌍 Africa","🏝️ Caribbean"].map(c=>(<span key={c} style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#C4B08A" }}>{c}</span>))}
          </div>
        </div>
      </section>

      {/* WHAT IS FASTTRACK — with real image */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🚂 A Literacy Journey</div>
              <h2 style={{ fontSize:"clamp(26px,4vw,40px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>What is FastTrack Literacy™?</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:18 }}>FastTrack Phonics™ is a structured early reading program that teaches children how letters sound, connect, and form words. It is grounded in the <strong>Science of Reading</strong>, integrating the five pillars of phonemic awareness, phonics, fluency, vocabulary, and comprehension.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:28 }}>Children are not just learners — they become active participants in their reading journey through child-led learning and guided practice, powered by reggae-inspired songs and storytelling.</p>
              <Link href="/fasttrack" className="btn-orange">Learn More →</Link>
            </div>
            <div>
              <Image src="/images/image3.png" alt="The Five Pillars of Literacy" width={800} height={450} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NEED — with image */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2" style={{ gap:48 }}>
            <div>
              <Image src="/images/image4.png" alt="Global Literacy Need" width={800} height={450} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
            <div>
              <div className="section-chip">📊 A Global Need</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Why Early Literacy Matters</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>According to <strong>UNESCO (2023)</strong>, over <strong>770 million people</strong> globally lack basic literacy skills. In the US alone, <strong>37% of fourth-graders</strong> read below basic levels — limiting their ability to succeed across subjects.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>FastTrack Literacy™ was created to build strong foundations early, before gaps widen. We are connecting home and school for literacy growth!</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0" }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"When children struggle to read, they fall behind in school, lose confidence, and face long-term academic and economic challenges."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — with image */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">👧 Who Is It For</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Designed for Ages 3–8 and Their Families</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Primarily designed for children ages 3–8 and their families because reading success starts early and grows at home. FastTrack Literacy™ is adaptive and can be used across a wide range of age groups, supporting learners at different reading levels.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>FastTrack Literacy™ is also a great resource for educators and parents. CHEETAH® is empowering young readers and their families!</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[{icon:"👶",l:"Early Learners (Ages 3–5) — Phonemic awareness & early phonics"},{icon:"👧",l:"Primary Students (Ages 5–8) — Full programme with progress tracking"},{icon:"👩‍🏫",l:"Classroom Teachers — Complete instructional package"},{icon:"👨‍👩‍👧",l:"Parents — Home support guides & family engagement"}].map(f=>(
                  <div key={f.l} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"#5A5240" }}><span style={{ flexShrink:0 }}>{f.icon}</span>{f.l}</div>
                ))}
              </div>
              <div style={{ marginTop:24 }}>
                <Link href="/fasttrack" className="btn-orange">Explore the Program →</Link>
              </div>
            </div>
            <div>
              <Image src="/images/image5.png" alt="FastTrack Literacy — Who Is It For" width={500} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* THE ECOSYSTEM — with image */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🌍 Global Framework</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:900, color:"#0C2340" }}>The CHEETAH® Literacy Ecosystem</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:560, margin:"12px auto 0", lineHeight:1.7 }}>A comprehensive framework combining educational resources, technological innovations, and extensive training to improve reading outcomes at scale.</p>
          </div>
          <Image src="/images/image13.png" alt="The CHEETAH Literacy Ecosystem — A Global Framework" width={1200} height={680} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT — with image */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🚀 More Than a Program</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>What Makes FastTrack Literacy™ Different</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ goes beyond traditional instruction by combining structured literacy with engaging, real-world learning experiences. It integrates the <strong>Science of Reading</strong> with music, rhythm, and storytelling to make learning both effective and enjoyable.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>🎵 <strong>Science + Engagement</strong> — reggae-inspired songs, decodable books, and visual supports ensure children not only understand how reading works but also enjoy the process.</p>
              <div style={{ display:"flex", gap:20, flexWrap:"wrap" }}>
                {[["👉","Confident readers"],["👉","Faster progress"],["👉","Stronger foundations"]].map(([icon,text])=>(
                  <div key={text} style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340" }}>{icon} {text}</div>
                ))}
              </div>
              <p style={{ fontSize:14, fontStyle:"italic", color:"#F5820A", fontWeight:700, marginTop:16 }}>We are nation builders — one letter at a time!</p>
            </div>
            <div>
              <Image src="/images/image8.png" alt="More Than a Program" width={600} height={900} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"white" }}>What Educators Are Saying</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)", marginTop:10 }}>Real results from classrooms across Jamaica, the US, and Africa</p>
          </div>
          <div className="grid-auto">
            {[{q:"FastTrack Literacy™ transformed our classroom. Children who struggled to recognise letters are now reading decodable books independently after just 10 weeks.",n:"Miss Thompson",r:"Year 1 Teacher, Kingston, Jamaica"},{q:"The reggae phoneme songs are magical. My students wake up singing them — and that repetition is exactly what builds phonemic awareness.",n:"Mrs. Davis",r:"Literacy Coach, Hartford, CT"},{q:"As a parent, the home support guides made it easy to continue the learning at home. My daughter moved two reading levels in one term.",n:"Natalie B.",r:"Parent, Portmore, Jamaica"}].map(t=>(
              <div key={t.n} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:20, padding:28 }}>
                <div style={{ color:"#F5820A", fontSize:18, marginBottom:14 }}>★★★★★</div>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.9)", lineHeight:1.8, marginBottom:20, fontStyle:"italic" }}>"{t.q}"</p>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"white" }}>{t.n}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:3 }}>{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <Image src="/images/image2.jpg" alt="Paulette Trowers-Lawrence — Presidential Lifetime Achievement Award" width={600} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
            </div>
            <div>
              <div className="section-chip">🌟 Our Founder</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Paulette Trowers-Lawrence, JD</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>A global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide. Recipient of the <strong>USA Presidential Lifetime Achievement Award (2024)</strong> and an <strong>Honorary Doctorate of Humanitarianism</strong>.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>With over <strong>30 years</strong> of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments.</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0", marginBottom:24 }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"Every child can read, and every child must read."</p>
              </div>
              <Link href="/about" className="btn-orange">Read Her Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <div className="container-xs">
          <div style={{ marginBottom:16 }}>
            <Image src="/images/image11.png" alt="FastTrack Phonics Train" width={600} height={180} style={{ width:"100%", maxWidth:500, height:"auto", margin:"0 auto", display:"block" }} />
          </div>
          <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Ready to Start the Literacy Journey?</h2>
          <p style={{ fontSize:16, color:"#5A5240", lineHeight:1.75, marginBottom:36 }}>Join thousands of educators, parents, and students across Jamaica, the US, and Africa.</p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
            <Link href="/contact" className="btn-navy">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

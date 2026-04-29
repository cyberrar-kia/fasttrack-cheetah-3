"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const n90 = useCountUp(90, 1600, started);
  const n1100 = useCountUp(1100, 2000, started);
  const n3 = useCountUp(3, 1000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display:"flex", gap:"clamp(20px,3vw,36px)", marginTop:40, flexWrap:"wrap", justifyContent:"center" }}>
      {[
        { value: `${n90}+`, label: "Educational Resources" },
        { value: `${n1100.toLocaleString()}+`, label: "Resources Developed" },
        { value: "5", label: "Countries Served" },
        { value: "3+", label: "Early Learning" },
      ].map(({ value, label }) => (
        <div key={label}>
          <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:22, fontWeight:900, color:"#F5820A", minWidth:60 }}>{value}</div>
          <div style={{ fontSize:11, color:"rgba(255,255,255,0.55)", marginTop:2 }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", minHeight:"100svh", display:"flex", alignItems:"center", overflow:"hidden", background:"#0C2340" }}>
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          disablePictureInPicture
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", zIndex:0, display:"block" }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay so text stays readable */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(12,35,64,0.82) 0%, rgba(12,35,64,0.65) 50%, rgba(12,35,64,0.75) 100%)", zIndex:1, pointerEvents:"none" }} />
        {/* Orange accent glow */}
        <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"rgba(245,130,10,0.08)", pointerEvents:"none", zIndex:1 }} />

        {/* Content */}
        <div className="container" style={{ position:"relative", zIndex:2, padding:"clamp(100px,14vh,140px) 24px clamp(80px,10vh,100px)" }}>
          <div className="grid-2">
            <div>
              <div style={{ display:"inline-flex", alignItems:"center", gap:8, marginBottom:20, background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", padding:"6px 16px", borderRadius:50, fontSize:12, fontWeight:700, color:"#FFB366" }}>🚂 FastTrack Literacy™ by CHEETAH®</div>
              <h1 style={{ fontSize:"clamp(28px,4.5vw,52px)", fontWeight:900, color:"white", marginBottom:16, lineHeight:1.15 }}>
                Accelerating the ability to read, write, understand, and apply information.
              </h1>
              <p style={{ fontSize:"clamp(18px,2.5vw,24px)", fontWeight:700, color:"#F5820A", marginBottom:10, lineHeight:1.3 }}>Literacy Can't Wait</p>
              <p style={{ fontSize:"clamp(14px,1.8vw,17px)", color:"rgba(255,255,255,0.85)", lineHeight:1.8, marginBottom:36, maxWidth:560 }}>Every child deserves the resources, opportunities, and support to succeed.</p>
              <div className="btn-row">
                <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
                <Link href="/how-it-works" className="btn-white">How It Works</Link>
              </div>
              <AnimatedStats />
            </div>
            <div className="hero-visual" />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="section-sm" style={{ background:"white", borderBottom:"1px solid #EDE0D0" }}>
        <div className="container" style={{ textAlign:"center" }}>
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#A0927A", marginBottom:16 }}>Serving educators & families in</p>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"clamp(16px,4vw,48px)", flexWrap:"wrap" }}>
            {["🇯🇲 Jamaica","🇺🇸 United States","🇰🇪 Kenya","🇺🇬 Uganda","🏝️ Caribbean","🌍 Other Countries Pending"].map(c=>(<span key={c} style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#C4B08A" }}>{c}</span>))}
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
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:18 }}>FastTrack Literacy™ is a structured early reading programme with <strong>90+ integrated resources</strong> that teaches children how letters sound, connect, and form words. Grounded in the <strong>Science of Reading</strong>, it integrates the five pillars of phonemic awareness, phonics, fluency, vocabulary, and comprehension.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:28 }}>Children are not just learners — they become active participants in their reading journey through child-led learning and guided practice, powered by reggae-inspired songs and storytelling.</p>
              <Link href="/fasttrack" className="btn-orange">Learn More →</Link>
            </div>
            <div>
              <Image src="/images/jamder-books.png" alt="FastTrack Literacy™ Books Collection" width={800} height={450} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL NEED — with image */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2" style={{ gap:48 }}>
            <div>
              <div className="section-chip">📊 A Global Need</div>
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Why Early Literacy Matters</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>According to <strong>UNESCO (2023)</strong>, over <strong>770 million people</strong> globally lack basic literacy skills. In the US, <strong>37% of fourth-graders</strong> read below basic levels. In Jamaica, less than <strong>50% of Grade 4 students</strong> meet literacy standards. In Uganda, only <strong>3 in 10 Primary 3 children</strong> can read a simple English story.</p>
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
              <h2 style={{ fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Designed for Ages 5+ and Their Families</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Primarily designed for children ages 5+ and their families because reading success starts early and grows at home. FastTrack Literacy™ is adaptive and can be used across a wide range of age groups, supporting learners at different reading levels.</p>
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
              <Image src="/images/mother-child-reading.png" alt="Mother and child reading with FastTrack Phonics" width={500} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US — ECOSYSTEM TEASER */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🌍 About Us</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>The CHEETAH® Literacy Ecosystem</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:560, margin:"0 auto 28px", lineHeight:1.7 }}>A comprehensive global framework combining curriculum, technology, and training to improve reading outcomes at scale — across Kenya, Uganda, Jamaica, the USA, and beyond.</p>
          </div>
          <Image src="/images/image13.png" alt="The CHEETAH® Literacy Ecosystem — A Global Framework" width={1200} height={680} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)", marginBottom:32 }} />
          <div style={{ textAlign:"center" }}>
            <Link href="/about" className="btn-orange">Learn More — About Us →</Link>
          </div>
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
              <Image src="/images/what-makes-different.png" alt="What Makes FastTrack Phonics Different" width={600} height={900} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"white" }}>What Educators Are Saying</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)", marginTop:10 }}>Real results from classrooms across Jamaica, the US, and beyond</p>
          </div>
          <div className="grid-auto">
            {[{q:"The iCHEETAH® has been a great motivator in my classroom. I use it as an incentive to keep students focused on their work, and they look forward to engaging with the educational games and apps.",n:"Ms. Hunter",r:"Grade 1 Teacher, Jamaica"},{q:"I had the opportunity to review CHEETAH® resources prior to their public release. I am encouraged to see FastTrack Literacy™ being thoughtfully adapted for Jamaica and other countries. These are the kinds of tools I would have valued in my own classroom.",n:"Dr. Clarke",r:"Past College President, Jamaica"},{q:"My son enjoys the decodable books and is building confidence with high-frequency words. He is more willing to read on his own.",n:"Miss Miller",r:"Literacy Coach, Florida, USA"}].map(t=>(
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
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>A trained USA lawyer, global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide. Recipient of the <strong>USA Presidential Lifetime Achievement Award (2024)</strong> and an <strong>Honorary Doctorate of Humanitarianism</strong>.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>With over <strong>30 years</strong> of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments.</p>
              <Link href="/about" className="btn-orange">Read Her Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <div className="container-xs">
          <div style={{ marginBottom:16 }}>
            <Image src="/images/train-poster.png" alt="Built Around the FastTrack Train — Speeding Up Reading Successes" width={600} height={400} style={{ width:"100%", maxWidth:500, height:"auto", margin:"0 auto", display:"block" }} />
          </div>
          <h2 style={{ fontSize:"clamp(26px,4vw,42px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Ready to Start the Literacy Journey?</h2>
          
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <Link href="/get-started" className="btn-orange">Get Started Free →</Link>
            <Link href="/contact" className="btn-navy">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

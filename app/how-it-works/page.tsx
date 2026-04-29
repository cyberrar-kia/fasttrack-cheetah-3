"use client";
import Image from "next/image";
import Link from "next/link";
export default function HowItWorks() {
  const steps = [
    { n:"01", title:"Review and Rewards", desc:"Consolidating previous learning with reward stickers and celebration of progress." },
    { n:"02", title:"Rhythmic Engagement", desc:"Songs or call-and-response jingles — including our 45 reggae phoneme songs." },
    { n:"03", title:"Sound Discrimination", desc:"Focus on the initial sound position through listening activities." },
    { n:"04", title:"Teacher Read-Aloud #1", desc:"A listening-only activity where students hear the sound in context." },
    { n:"05", title:"Sound Identification", desc:"Picture activities without print — training the ear before the eye." },
    { n:"06", title:"Mechanics", desc:"Letter formation and mouth cues — how does this sound feel?" },
    { n:"07", title:"Teacher Read-Aloud #2", desc:"Engaging with a short story featuring the target phoneme." },
    { n:"08", title:"Interactive Learning", desc:"'My Word Wall' — students sing and act while building vocabulary." },
    { n:"09", title:"Word Work Mats", desc:"Practical decoding and encoding practice — reading AND writing the sound." },
    { n:"10", title:"Sight Word Activity", desc:"Building high-frequency word recognition alongside phonics." },
    { n:"11", title:"Decodable Story", desc:"'I can read with you!' — student-led reading with a decodable text." },
    { n:"12", title:"Assessment & Motivation", desc:"Self-assessment and reward stickers — children track their own growth." },
    { n:"13", title:"C-DER® Integration", desc:"Book-based application connecting the lesson to a decodable reader." },
    { n:"14", title:"CHEETAH® Review", desc:"Systematic reinforcement of all sounds learned so far." },
    { n:"15", title:"Practice", desc:"Hands-on activities from the Pupil's Workbook." },
    { n:"16", title:"Fluency Testing", desc:"CHEETAH® Poster Fluency Tests — measuring speed and accuracy." },
  ];
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
            <div style={{ background:"rgba(255,255,255,0.95)", borderRadius:12, padding:"8px 20px", display:"inline-block" }}>
              <Image src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy™" width={320} height={100} style={{ height:72, width:"auto", objectFit:"contain", display:"block" }} />
            </div>
          </div>


          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>The Method</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:900, color:"white", marginBottom:20 }}>How FastTrack Literacy™ <span style={{ color:"#F5820A" }}>Works</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Every lesson follows a systematic <strong style={{ color:"#F5820A" }}>16-step instructional pattern</strong> designed to ensure reading success through structured, multisensory engagement.</p>
        </div>
      </section>

      {/* VIDEO — moved to top */}
      <section id="video" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"60px 24px", textAlign:"center" }}>
        <div className="container">
          <div className="section-chip" style={{ background:"rgba(245,130,10,0.2)", border:"1px solid rgba(245,130,10,0.4)", color:"#FFB366" }}>🐆 See It In Action</div>
          <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(24px,4vw,38px)", color:"white", marginBottom:14, marginTop:12 }}>
            Inside a FastTrack Literacy™ Lesson
          </h2>
          <p style={{ fontSize:"clamp(13px,1.6vw,16px)", color:"rgba(255,255,255,0.75)", lineHeight:1.8, marginBottom:40, maxWidth:580, margin:"0 auto 40px" }}>
            Watch the FastTrack Literacy™ system in action — a real classroom lesson showing how the 16-step structure comes to life.
          </p>
          <div style={{ borderRadius:20, overflow:"hidden", boxShadow:"0 24px 80px rgba(0,0,0,0.5)", maxWidth:900, margin:"0 auto", border:"3px solid rgba(245,130,10,0.4)" }}>
            <video
              controls
              preload="metadata"
              style={{ width:"100%", display:"block", background:"#0C2340", minHeight:360 }}
              poster="/images/cheetah-lesson-poster.jpg"
            >
              <source src="/videos/inside-cheetah-lessons.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* THE 5 PILLARS */}
      <section className="section" style={{ background:"white" }} id="pillars">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🔬 Science of Reading</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#0C2340" }}>The 5 Pillars in Every Lesson</h2>
          </div>
          <Image src="/images/image3.png" alt="The Five Pillars of Literacy: Building Strong Readers" width={1400} height={700} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)", marginBottom:40 }} />
          <div className="grid-auto">
            {[
              { n:"1", icon:"👂", title:"Phonemic Awareness", desc:"Hearing, identifying and manipulating sounds in spoken words." },
              { n:"2", icon:"🔤", title:"Phonics", desc:"Systematic letter-sound connections taught in cumulative sequence." },
              { n:"3", icon:"📖", title:"Fluency", desc:"Reading with speed, accuracy, and expressive prosody." },
              { n:"4", icon:"💬", title:"Vocabulary", desc:"Building word knowledge through songs, stories and word walls." },
              { n:"5", icon:"💡", title:"Comprehension", desc:"Making meaning from text through active, guided practice." },
            ].map(p=>(
              <div key={p.n} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:16, padding:24, textAlign:"center" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#F5820A,#FF9F2F)", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>{p.n}</div>
                <div style={{ fontSize:28, marginBottom:10 }}>{p.icon}</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", marginBottom:6 }}>{p.title}</h3>
                <p style={{ fontSize:12, color:"#5A5240", lineHeight:1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16 STEPS + ANATOMY */}
      <section className="section" style={{ background:"#FFF9F4" }} id="anatomy">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚂 The Lesson Structure</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#0C2340" }}>Anatomy of a Phoneme Lesson</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:520, margin:"12px auto 0", lineHeight:1.7 }}>Every phoneme lesson in FastTrack Literacy™ follows this systematic, multisensory structure — designed to ensure no child is left behind.</p>
          </div>
          <div style={{ marginBottom:52 }}>
            <Image src="/images/image14.png" alt="Anatomy of a Phoneme Lesson — The 16-Step Path" width={1200} height={680} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)", marginBottom:40 }} />
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:16 }}>
            {steps.map(s=>(
              <div key={s.n} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:14, padding:20, display:"flex", gap:14, alignItems:"flex-start" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#F5820A,#FF9F2F)", color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:13, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{s.n}</div>
                <div><h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:4 }}>{s.title}</h4><p style={{ fontSize:12, color:"#5A5240", lineHeight:1.65 }}>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Join thousands of educators and families using CHEETAH® resources!</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:28, maxWidth:440, margin:"0 auto 28px" }}>FastTrack Literacy™ — accelerating reading and writing success at school and at home.</p>
        <div className="btn-row" style={{ justifyContent:"center" }}>
          <Link href="/get-started" className="btn-orange">Get Started →</Link>
          <Link href="/resources" className="btn-navy">Browse Resources</Link>
        </div>
      </section>
    </>
  );
}

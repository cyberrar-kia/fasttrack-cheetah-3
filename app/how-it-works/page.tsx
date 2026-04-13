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
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>The Method</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,48px)", fontWeight:900, color:"white", marginBottom:20 }}>How FastTrack Literacy™ <span style={{ color:"#F5820A" }}>Works</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Every lesson follows a systematic <strong style={{ color:"#F5820A" }}>16-step instructional pattern</strong> designed to ensure reading success through structured, multisensory engagement.</p>
        </div>
      </section>

      {/* THE 5 PILLARS */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🔬 Science of Reading</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#0C2340" }}>The 5 Pillars in Every Lesson</h2>
          </div>
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

      {/* 16 STEPS */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚂 The Lesson Structure</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#0C2340" }}>The 16-Step Instructional Pattern</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:520, margin:"12px auto 0", lineHeight:1.7 }}>Every phoneme lesson in FastTrack Literacy™ follows this systematic, multisensory structure — designed to ensure no child is left behind.</p>
          </div>

          {/* ANATOMY IMAGE */}
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

      {/* COMPARISON TABLE */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🚀 What Makes Us Different</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>FastTrack Literacy™ vs Traditional Instruction</h2>
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
                  ["Engagement","Reggae songs, rhythm, storytelling, visual supports","Worksheets and repetition"],
                  ["Cultural Relevance","Culturally responsive (JamDER™, global editions)","Generic Western content"],
                  ["Technology","iCHEETAH™ AI robot, tablets, apps, digital tools","Limited or none"],
                  ["Home Connection","Active family involvement built into the system","School only"],
                  ["Assessment","Built-in progress monitoring and measurable outcomes","End-of-term testing"],
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

      <section className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Ready to Start the Journey?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:28, maxWidth:440, margin:"0 auto 28px" }}>Join thousands of educators and families using FastTrack Literacy™.</p>
        <div className="btn-row" style={{ justifyContent:"center" }}>
          <Link href="/get-started" className="btn-orange">Get Started →</Link>
          <Link href="/resources" className="btn-navy">Browse Resources</Link>
        </div>
      </section>
    </>
  );
}

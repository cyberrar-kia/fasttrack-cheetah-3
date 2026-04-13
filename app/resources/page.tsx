"use client";
import Image from "next/image";
export default function Resources() {
  const resources = [
    { cat:"Teacher Resources", icon:"👩‍🏫", title:"Teacher's Helper / Teacher's Guide", desc:"Full instructional roadmap with difficult auditory stories, a 65-minute suggested Teacher's Page per letter, and over 640 activities. Available in Volumes 1 and 2.", tag:"blue", type:"Physical + Digital" },
    { cat:"Student Resources", icon:"👧", title:"Pupil's Workbook / Pupil's Helper", desc:"Streamlined version for students (omitting steps 2, 3, and 4) to remain accessible for the child. Available in Volumes 1, 2, and 3.", tag:"green", type:"Physical Book" },
    { cat:"Songs & Audio", icon:"🎵", title:"45 Reggae Phoneme Songs", desc:"One-minute rhythmic, memorable, and fun songs — one for each phoneme. Children wake up singing them! Available digitally and as recordings.", tag:"orange", type:"Audio + Digital" },
    { cat:"Decodable Books", icon:"📖", title:"CHEETAH® Poster Stories — Level 1", desc:"9 Level 1 decodable books for early readers just beginning to decode. Large, poster-format stories ideal for classroom shared reading.", tag:"blue", type:"Physical Book" },
    { cat:"Decodable Books", icon:"📚", title:"CHEETAH® Decodable & Early Readers — Level 2", desc:"70+ Level 2 decodable books for building decoding and fluency. Fiction and nonfiction titles across a range of topics.", tag:"green", type:"Physical Book" },
    { cat:"Charts & Visual Tools", icon:"📊", title:"27+ Interactive Charts", desc:"Multisensory reinforcement tools including phonics charts, word family charts, and classroom display resources.", tag:"orange", type:"Physical Resource" },
    { cat:"Flashcards", icon:"🃏", title:"Phoneme Flashcard Sets", desc:"Visual flashcard sets for letter-sound practice, sight words, and vocabulary building. Designed for both classroom and home use.", tag:"blue", type:"Physical Resource" },
    { cat:"Assessment", icon:"📋", title:"Assessment & Progress Monitoring Tools", desc:"Built-in assessment tools including CHEETAH® Poster Fluency Tests, self-assessment checklists, and progress tracking sheets.", tag:"green", type:"Assessment" },
    { cat:"Technology", icon:"🤖", title:"iCHEETAH™ AI-Powered Robot", desc:"Patent-pending AI-powered robot with integrated CHEETAH® content. Engages children in interactive literacy activities through voice and screen.", tag:"orange", type:"Hardware" },
    { cat:"Technology", icon:"📱", title:"CHEETAH® Apps", desc:"Digital apps for independent practice, phoneme reinforcement, and parent engagement. Available on tablets and compatible devices.", tag:"blue", type:"Digital App" },
    { cat:"Competition", icon:"🏆", title:"National Literacy Competition Cards", desc:"Cards and materials for classroom and national literacy competitions — building motivation, fluency, and confidence.", tag:"green", type:"Competition Resource" },
    { cat:"Rewards", icon:"⭐", title:"Reward Sticker Sets", desc:"Motivational reward stickers tied to the 16-step lesson structure. Children celebrate their progress at every milestone.", tag:"orange", type:"Classroom Resource" },
  ];
  const tagColors: Record<string,{bg:string,tc:string}> = {
    green:{bg:"#F0FDF4",tc:"#166534"},
    blue:{bg:"#EEF4FF",tc:"#1A5DB5"},
    orange:{bg:"#FFF0E0",tc:"#C05A00"},
  };
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Resource Library</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:"white", marginBottom:18 }}>Everything You Need to <span style={{ color:"#F5820A" }}>Teach & Learn</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Over 90 carefully designed resources spanning books, songs, technology, charts, and assessment tools — all aligned to the FastTrack Literacy™ system.</p>
        </div>
      </section>

      {/* ECOSYSTEM OVERVIEW */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🔄 The Ecosystem</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>A Complete Learning Flow</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>The CHEETAH® Literacy Ecosystem is a comprehensive framework combining educational resources, technological innovations, and extensive training for educators — with everything flowing in a logical sequence.</p>
              <div style={{ display:"flex", alignItems:"center", gap:0, flexWrap:"wrap", marginBottom:28 }}>
                {["Books","Tools","Technology","Training","Review","Evaluation"].map((step, i, arr)=>(
                  <div key={step} style={{ display:"flex", alignItems:"center" }}>
                    <div style={{ background:i===0?"#F5820A":"#FFF0E0", color:i===0?"white":"#C05A00", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:12, padding:"8px 14px", borderRadius:50, whiteSpace:"nowrap" }}>{step}</div>
                    {i<arr.length-1 && <div style={{ color:"#F5820A", fontWeight:700, margin:"0 4px", fontSize:14 }}>→</div>}
                  </div>
                ))}
              </div>
              <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.75 }}>This flow ensures students don't just learn to decode — they develop fluency, build vocabulary, and become truly independent readers.</p>
            </div>
            <div style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:20, padding:28 }}>
              <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:16, color:"#0C2340", marginBottom:20 }}>📊 Resource Count</div>
              {[{label:"Total Resources Developed",val:"1,100+",color:"#F5820A"},{label:"Educational Resources Available",val:"90+",color:"#1A5DB5"},{label:"Decodable Books",val:"70+",color:"#16A34A"},{label:"Interactive Charts",val:"27+",color:"#C05A00"},{label:"Reggae Phoneme Songs",val:"45",color:"#7C3AED"},{label:"Activities (Sets 1–4)",val:"640+",color:"#0891B2"}].map(r=>(
                <div key={r.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"10px 0", borderBottom:"1px solid #EDE0D0" }}>
                  <span style={{ fontSize:13, color:"#5A5240" }}>{r.label}</span>
                  <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:18, color:r.color }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>All Resources</h2>
          </div>
          {/* Phonics Chart */}
          <div className="grid-2" style={{ marginBottom:48, gap:40, alignItems:"center" }}>
            <div>
              <div className="section-chip">📊 Featured Resource</div>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:24, color:"#0C2340", marginBottom:14 }}>CHEETAH® Phonics Chart</h3>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.8 }}>Our comprehensive phonics reference chart — used in classrooms across Jamaica, the US, and Africa. A foundational tool for teachers and students alike, mapping all phonemes in a clear, accessible visual format.</p>
            </div>
            <div>
              <Image src="/images/image12.jpg" alt="CHEETAH Phonics Chart" width={400} height={600} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
            </div>
          </div>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>All Resources</h2>
          </div>
          <div className="grid-auto">
            {resources.map(r=>(
              <div key={r.title} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:16, padding:24, display:"flex", flexDirection:"column", gap:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <span style={{ background:tagColors[r.tag].bg, color:tagColors[r.tag].tc, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>{r.cat}</span>
                  <span style={{ fontSize:22 }}>{r.icon}</span>
                </div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", lineHeight:1.3 }}>{r.title}</h3>
                <p style={{ fontSize:12, color:"#5A5240", lineHeight:1.7, flex:1 }}>{r.desc}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:8, borderTop:"1px solid #F5EEE4" }}>
                  <span style={{ fontSize:11, color:"#A0927A", fontWeight:500 }}>{r.type}</span>
                  <button style={{ background:"#FFF0E0", color:"#C05A00", border:"none", borderRadius:50, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", textAlign:"center" }}>
        <div className="container-xs">
          <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"white", marginBottom:14 }}>Need Resources for Your School or Organisation?</h2>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.7)", marginBottom:24 }}>We offer bulk pricing and customised packages for schools, districts, and NGOs — with full teacher training included.</p>
          <button style={{ background:"#F5820A", color:"white", border:"none", fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"14px 28px", borderRadius:50, fontSize:15, cursor:"pointer" }}>Request a Quote →</button>
        </div>
      </section>
    </>
  );
}

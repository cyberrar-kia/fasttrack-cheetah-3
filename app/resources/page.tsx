"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const FORMSPREE_QUOTE = "https://formspree.io/f/xkokolbb";

type DrawerItem = { title: string; body: string; bullets?: string[] };

const drawerContent: Record<string, DrawerItem> = {
  "Phonics Chart — Sets 1–9": { title:"Phonics Chart — Sets 1–9", body:"The official FastTrack Literacy™ Phonics Chart covering all 9 phoneme sets plus a bonus letter sound. As provided by the Ministry of Education, Skills, Youth and Information.", bullets:["Set 1: s, short ă, m, short ĕ, p","Set 2: f, n, short ĭ, t, r","Set 3: d, short ŏ, hard g, h, k","Set 4: l, b, short ŭ, soft g, long ā","Set 5: j, long ī, or, long ō, z","Set 6: ng, w/wh, short oo, long oo, v","Set 7: ch, sh, long ē, th, y","Set 8: x, qu, oi, long ū, ar","Set 9: ow, ou, er, zh","Bonus letter sound: soft c"] },
  "Teacher's Helper / Teacher's Guide": { title:"Teacher's Helper / Teacher's Guide", body:"The Teacher's Helper provides the full instructional roadmap and difficult auditory stories. Each letter includes a 'Suggested 65-Minute Teacher's Page' to guide daily lessons. The Pupil's Helper omits steps 2, 3, and 4 to remain accessible for the child.", bullets:["Full 16-step instructional roadmap for every phoneme","Complex auditory stories and guided steps for teachers/parents","'Suggested 65-Minute Teacher's Page' per letter","Differentiated instruction — adjust, skip, or shorten lessons based on ability","Available in Volumes 1 and 2","Over 640 activities, with Sets 1–4 as supplemental digital resources"] },
  "Pupil's Workbook / Pupil's Helper": { title:"Pupil's Workbook / Pupil's Helper", body:"Streamlined version for students — simplified to remove jingles and drills that prevent overwhelm, focusing on print and sound. Available in Volumes 1, 2, and 3.", bullets:["Omits steps 2, 3, and 4 to remain child-accessible","Focus on print and sound activities","Simplified auditory stories","Hands-on activities for decoding and encoding","Available as Pupil's Workbook, Student's Workbook, or Pupil's Helper (varies by country)","Volumes 1, 2, and 3"] },
  "45 Reggae Phoneme Songs": { title:"45 One-Minute Reggae Phoneme Songs", body:"One-minute rhythmic, memorable, and fun songs — one for each phoneme. Call-and-response rhythms introduce sounds and reinforce learning. Children wake up singing them!", bullets:["45 songs — one per phoneme","One minute each — perfect for attention spans","Call-and-response rhythmic structure","Boosts memory, engagement and phoneme retention","Evidence-based: rhythmic learning improves sound discrimination","Available digitally and as audio recordings"] },
  "CHEETAH® Poster Stories — Level 1": { title:"CHEETAH® Poster Stories — Level 1", body:"9 Level 1 Decodable Books for early readers just beginning to decode. Large, poster-format stories ideal for classroom shared reading.", bullets:["9 books in the Level 1 collection","Poster-format — large, clear, classroom-friendly","Aligned to the 16-step instructional sequence","Ideal for shared reading and student-led reading","C-DER® Book Integration — seamless connection to phoneme lessons","Available in JamDER™ and other localised editions"] },
  "CHEETAH® Decodable & Early Readers — Level 2": { title:"CHEETAH® Decodable & Early Readers (C-DER) — Level 2", body:"70+ Level 2 Decodable Books for building decoding and fluency. Fiction and nonfiction titles across a wide range of topics and cultural contexts.", bullets:["70+ books in the Level 2 collection","Fiction and nonfiction titles","Wide range of topics and cultural contexts","Builds decoding, fluency, and reading confidence","Published by CHEETAH® Purrrrrrr Publishing","Available as JamDER™ and C-DER™ editions"] },
  "27+ Interactive Charts": { title:"27+ Interactive Charts", body:"Multisensory reinforcement tools including phonics charts, word family charts, and classroom display resources. Standardised review and fluency testing.", bullets:["27+ charts in the collection","Phonics charts and word family charts","CHEETAH® Poster Fluency Tests — standardised review and testing","Multisensory reinforcement tools","Classroom display resources","Designed for individual and group instruction"] },
  "Phoneme Flashcard Sets": { title:"Phoneme Flashcard Sets", body:"Visual flashcard sets for letter-sound practice, sight words, and vocabulary building. Designed for both classroom and home use.", bullets:["Letter-sound correspondence flashcards","Sight word recognition sets","Vocabulary building cards","National Literacy Competition cards","Suitable for classroom and home use","Aligned to the 16-step lesson sequence"] },
  "Assessment & Progress Monitoring Tools": { title:"Assessment & Progress Monitoring Tools", body:"Built-in assessment tools including CHEETAH® Poster Fluency Tests, self-assessment checklists, and progress tracking sheets. Measurable outcomes at every stage.", bullets:["CHEETAH® Poster Fluency Tests — Step 16 of every lesson","Self-assessment and reward sticker system","Parent/teacher progress notes","Standardised review before progression","Built-in progress monitoring and measurable outcomes","Reward stickers tied to every milestone"] },
  "iCHEETAH™ AI-Powered Robot": { title:"iCHEETAH™ — Patent-Pending AI-Powered Robot", body:"Our patent-pending, AI-powered Smart Edutainment Robot for Kids. The Teacher's Helper and Your Child's Learning Companion. Smart devices and AI tools support student assessment and track fluency.", bullets:["Patent-pending AI-powered robot with integrated CHEETAH® content","Smart devices and AI tools support student assessment and track fluency","Voice assistant — just say iCHEETAH™","Preloaded educational apps","Sing-along with two microphones","Cast to TV for classroom activities","Inclusive design: supports children with visual impairments, speech delays, and limited motor skills"] },
  "CHEETAH® Apps": { title:"CHEETAH® Apps", body:"Digital apps for independent practice, phoneme reinforcement, and parent engagement. Available on tablets and compatible devices.", bullets:["Independent phoneme practice","Parent engagement tools","Tablet-compatible for classroom and home use","Part of the full iCHEETAH™ technology ecosystem","Combines physical books with apps and AI tools","Innovative AI tool for comprehensive learning"] },
  "National Literacy Competition Cards": { title:"National Literacy Competition Cards", body:"Cards and materials for classroom and national literacy competitions — building motivation, fluency, and confidence. Supports national literacy initiatives.", bullets:["Designed for classroom and national literacy competitions","Builds motivation, fluency, and reading confidence","Supports national literacy initiatives","Community engagement and nation-building focus","Aligned to the CHEETAH® programme scope and sequence","Reward and recognition built in"] },
  "ANNA-WARRIOR — Reggae Phoneme Song": { title:"ANNA-WARRIOR — Reggae Phoneme Song", body:"A one-minute reggae phoneme song from the FastTrack Literacy™ collection. Rhythmic, memorable, and fun — helping children learn sounds through music.", bullets:["Call-and-response rhythmic structure","Reinforces phoneme recognition","Evidence-based: rhythmic learning improves retention","Available as audio download"] },
  "BIG FISH-WARRIOR — Reggae Phoneme Song": { title:"BIG FISH-WARRIOR — Reggae Phoneme Song", body:"A one-minute reggae phoneme song from the FastTrack Literacy™ collection. Part of the 45 reggae phoneme songs programme.", bullets:["Call-and-response rhythmic structure","Reinforces phoneme recognition","Part of the 45 phoneme songs collection","Available as audio download"] },
  "BLACK BIRD — Reggae Phoneme Song": { title:"BLACK BIRD — Reggae Phoneme Song", body:"A one-minute reggae phoneme song from the FastTrack Literacy™ collection. Children wake up singing these songs!", bullets:["Call-and-response rhythmic structure","Reinforces phoneme recognition","Part of the 45 phoneme songs collection","Available as audio download"] },
  "All JamDER™ & C-DER Books": { title:"All JamDER™ & C-DER Books", body:"70+ decodable readers published by CHEETAH® Purrrrrrr Publishing. JamDER™ books are culturally authentic Jamaican stories; C-DER™ books extend across the Caribbean. Both series are fully decodable, phonics-aligned, and available in sets.", bullets:["Fiction and nonfiction titles","All levels from emergent to fluent","Culturally authentic illustrations","Available individually or in sets","Compatible with the FastTrack Literacy™ programme"] },
  "Reward Sticker Sets": { title:"Reward Sticker Sets", body:"Motivational reward stickers tied to the 16-step lesson structure. Children celebrate their progress at every milestone.", bullets:["Tied to Step 12: Assessment & Motivation in every lesson","Children self-assess and receive stickers","Parent/teacher notes included at each milestone","Builds intrinsic motivation and self-confidence","Available in sets aligned to each volume","Designed to celebrate every small win"] },
  "CHEETAH® Charts — Multisensory Reinforcement Tools": { title:"CHEETAH® Charts — Multisensory Reinforcement Tools", body:"Physical chart resources specifically designed as multisensory reinforcement tools, complementing the 27+ interactive charts with tactile and visual learning support.", bullets:["Multisensory reinforcement tools for letter-sound connections","Support phoneme recall through visual and kinaesthetic engagement","Used alongside the 27+ interactive charts in the classroom","Designed for whole-class and small-group instruction","Aligns to the 16-step instructional sequence","Available as part of the full CHEETAH® resource ecosystem"] },
  "Innovative AI Tool": { title:"Innovative AI Tool", body:"An innovative AI-powered learning tool that extends beyond the iCHEETAH™ device — integrating artificial intelligence into the literacy ecosystem to support student assessment, track fluency, and personalise learning.", bullets:["AI-powered learning and assessment capabilities","Tracks student fluency progress over time","Personalises instruction based on individual student data","Integrates with iCHEETAH™ devices and digital apps","Supports teachers with data-driven instructional decisions","Part of the full CHEETAH® technology ecosystem"] },
  "Teacher Training": { title:"Teacher Training", body:"Comprehensive teacher training programmes designed to equip educators with the knowledge, tools, and confidence to implement FastTrack Literacy™ successfully in their classrooms.", bullets:["Full programme implementation training for classroom teachers","'Train-the-trainer' model for school-wide rollout","Intensive Transformation Weeks for rapid upskilling","Ongoing classroom assistance and support","Aligned to the 16-step instructional sequence","Available in-person and digitally for schools across Jamaica, USA, and Africa"] },
};

const resources = [
  { cat:"Phonics", icon:"📊", title:"Phonics Chart — Sets 1–9", desc:"Official FastTrack Literacy™ Phonics Chart — 9 phoneme sets plus bonus sound, as provided by the Ministry of Education, Skills, Youth and Information.", tag:"orange", type:"PDF Download" },
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
  { cat:"Songs & Audio", icon:"🎵", title:"ANNA-WARRIOR — Reggae Phoneme Song", desc:"A sample reggae phoneme song from the FastTrack Literacy™ collection. Rhythmic, memorable, and fun.", tag:"orange", type:"Audio Sample" },
  { cat:"Songs & Audio", icon:"🎵", title:"BIG FISH-WARRIOR — Reggae Phoneme Song", desc:"A sample reggae phoneme song from the FastTrack Literacy™ collection. Call-and-response rhythmic structure.", tag:"blue", type:"Audio Sample" },
  { cat:"Songs & Audio", icon:"🎵", title:"BLACK BIRD — Reggae Phoneme Song", desc:"A sample reggae phoneme song from the FastTrack Literacy™ collection. Children wake up singing these!", tag:"green", type:"Audio Sample" },
  { cat:"Books", icon:"📗", title:"All JamDER™ & C-DER Books", desc:"70+ decodable readers — JamDER™ (Jamaica) and C-DER™ (Caribbean) series. Fiction and nonfiction across all levels and cultural contexts.", tag:"green", type:"Book Collection" },
  { cat:"Rewards", icon:"⭐", title:"Reward Sticker Sets", desc:"Motivational reward stickers tied to the 16-step lesson structure. Children celebrate their progress at every milestone.", tag:"orange", type:"Classroom Resource" },
  { cat:"Charts & Visual Tools", icon:"📌", title:"CHEETAH® Charts — Multisensory Reinforcement Tools", desc:"Physical chart resources designed as multisensory reinforcement tools — supporting phoneme recall through visual and kinaesthetic engagement alongside the 27+ interactive charts.", tag:"blue", type:"Physical Resource" },
  { cat:"Technology", icon:"💡", title:"Innovative AI Tool", desc:"An AI-powered learning tool that integrates artificial intelligence into the literacy ecosystem — tracking fluency, personalising learning, and supporting data-driven instruction.", tag:"orange", type:"Digital Tool" },
  { cat:"Training", icon:"🎓", title:"Teacher Training", desc:"Comprehensive teacher training including 'train-the-trainer' programmes and intensive Transformation Weeks — equipping educators to implement FastTrack Literacy™ with confidence.", tag:"green", type:"Professional Development" },
];

const tagColors: Record<string,{bg:string,tc:string}> = { green:{bg:"#F0FDF4",tc:"#166534"}, blue:{bg:"#EEF4FF",tc:"#1A5DB5"}, orange:{bg:"#FFF0E0",tc:"#C05A00"} };

export default function Resources() {
  const [activeDrawer, setActiveDrawer] = useState<string|null>(null);
  const [lastClicked, setLastClicked] = useState<string|null>(null);
  const allResourcesRef = useRef<HTMLDivElement>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [quoteForm, setQuoteForm] = useState({ name:"", email:"", organisation:"", country:"", resources:"", message:"" });

  const handleQuoteSubmit = async () => {
    setQuoteStatus("sending");
    try {
      const res = await fetch(FORMSPREE_QUOTE, { method:"POST", headers:{"Accept":"application/json"}, body: (() => { const fd = new FormData(); Object.entries(quoteForm).forEach(([k,v]) => fd.append(k,v)); return fd; })() });
      setQuoteStatus(res.ok ? "sent" : "error");
    } catch { setQuoteStatus("error"); }
  };

  const drawer = activeDrawer ? drawerContent[activeDrawer] : null;

  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Resource Library</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,46px)", fontWeight:900, color:"white", marginBottom:18 }}>Everything You Need to <span style={{ color:"#F5820A" }}>Teach & Learn</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>Over 90 carefully designed resources spanning books, songs, technology, charts, and assessment tools — all aligned to the FastTrack Literacy™ system.</p>
        </div>
      </section>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🔄 The Ecosystem</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>A Complete Learning Flow</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>The CHEETAH® Literacy Ecosystem combines educational resources, technological innovations, and extensive training — with everything flowing in a logical sequence.</p>
              <div style={{ display:"flex", alignItems:"center", gap:0, flexWrap:"wrap", marginBottom:28 }}>
                {["Books","Tools","Technology","Training","Review","Evaluation"].map((step,i,arr)=>(
                  <div key={step} style={{ display:"flex", alignItems:"center" }}>
                    <div style={{ background:i===0?"#F5820A":"#FFF0E0", color:i===0?"white":"#C05A00", fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:12, padding:"8px 14px", borderRadius:50, whiteSpace:"nowrap" }}>{step}</div>
                    {i<arr.length-1 && <div style={{ color:"#F5820A", fontWeight:700, margin:"0 4px", fontSize:14 }}>→</div>}
                  </div>
                ))}
              </div>
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

      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2" style={{ marginBottom:48, gap:40, alignItems:"center" }}>
            <div>
              <div className="section-chip">🤖 AI Technology</div>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:24, color:"#0C2340", marginBottom:14 }}>Meet iCHEETAH™</h3>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.8, marginBottom:14 }}>Our patent-pending, AI-powered Smart Edutainment Robot for Kids — the Teacher's Helper and Your Child's Learning Companion. Especially effective for children with visual impairments, speech delays, or limited motor skills.</p>
              <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
                {["🎙️ Voice assistant — just say iCHEETAH™","📱 Preloaded educational apps","🎵 Sing-along with two microphones","📺 Cast to TV for classroom activities","🎮 Explore shapes, numbers & colours","📚 STEM literacy & learning kits"].map(f=>(
                  <div key={f} style={{ fontSize:13, color:"#5A5240" }}>{f}</div>
                ))}
              </div>
            </div>
            <Image src="/images/icheetah-frontal.png" alt="iCHEETAH™ Robot" width={400} height={500} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
          </div>
          <div style={{ marginBottom:48 }}>
            <Image src="/images/icheetah-features.png" alt="iCHEETAH Features" width={1200} height={600} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
          </div>
          <div className="grid-2" style={{ marginBottom:48, gap:40, alignItems:"center" }}>
            <div>
              <div className="section-chip">📚 Featured Resource</div>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:24, color:"#0C2340", marginBottom:14 }}>JamDER™ & C-DER Books</h3>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.8 }}>All JamDER™ and C-DER™ books — 70+ decodable readers published by CHEETAH® Purrrrrrr Publishing. Fiction and nonfiction titles across a wide range of topics, levels, and cultural contexts.</p>
            </div>
            <Image src="/images/jamder-books.png" alt="All JamDER and C-DER Books" width={400} height={600} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
          </div>

          <div ref={allResourcesRef} style={{ textAlign:"center", marginBottom:40 }}>
            <h2 style={{ fontSize:"clamp(22px,4vw,34px)", fontWeight:900, color:"#0C2340" }}>All Resources</h2>
            <p style={{ fontSize:14, color:"#5A5240", marginTop:8 }}>Click "Learn More" on any resource — it will be highlighted here.</p>
          </div>
          <div className="grid-auto">
            {resources.map(r=>(
              <div key={r.title} style={{ background: lastClicked === r.title ? "#FFF0E0" : "white", border: lastClicked === r.title ? "2px solid #F5820A" : "1px solid #EDE0D0", borderRadius:16, padding:24, display:"flex", flexDirection:"column", gap:10, transition:"all 0.3s ease", boxShadow: lastClicked === r.title ? "0 4px 20px rgba(245,130,10,0.15)" : "none" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                  <span style={{ background:tagColors[r.tag].bg, color:tagColors[r.tag].tc, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>{r.cat}</span>
                  <span style={{ fontSize:22 }}>{r.icon}</span>
                </div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", lineHeight:1.3 }}>{r.title}</h3>
                <p style={{ fontSize:12, color:"#5A5240", lineHeight:1.7, flex:1 }}>{r.desc}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:8, borderTop:"1px solid #F5EEE4" }}>
                  <span style={{ fontSize:11, color:"#A0927A", fontWeight:500 }}>{r.type}</span>
                  <button onClick={()=>{
                      setActiveDrawer(r.title);
                      setLastClicked(r.title);
                    }} style={{ background:"#FFF0E0", color:"#C05A00", border:"none", borderRadius:50, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>Learn More →</button>
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
          <button onClick={()=>setQuoteOpen(true)} style={{ background:"#F5820A", color:"white", border:"none", fontFamily:"'Nunito',sans-serif", fontWeight:800, padding:"14px 28px", borderRadius:50, fontSize:15, cursor:"pointer" }}>Request a Quote →</button>
        </div>
      </section>

      {activeDrawer && drawer && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={()=>setActiveDrawer(null)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(520px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", flex:1, marginRight:16 }}>{drawer.title}</h2>
              <button onClick={()=>setActiveDrawer(null)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16, flexShrink:0 }}>✕</button>
            </div>
            <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.85, marginBottom:20 }}>{drawer.body}</p>
            {drawer.bullets && (
              <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:24 }}>
                {drawer.bullets.map(b=>(
                  <div key={b} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#5A5240", display:"flex", gap:10 }}>
                    <span style={{ color:"#F5820A", fontWeight:700, flexShrink:0 }}>✓</span>{b}
                  </div>
                ))}
              </div>
            )}
            {activeDrawer === "Phonics Chart — Sets 1–9" && (
              <div style={{ marginBottom:20 }}>
                <a href="/phonics-chart.pdf" target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", gap:12, background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:"14px 18px", textDecoration:"none", color:"#0C2340" }}>
                  <span style={{ fontSize:24 }}>📄</span>
                  <div>
                    <div style={{ fontSize:14, fontWeight:700, fontFamily:"'Nunito',sans-serif" }}>Download Phonics Chart PDF</div>
                    <div style={{ fontSize:12, color:"#A0927A" }}>Official chart — Ministry of Education, Jamaica</div>
                  </div>
                  <span style={{ marginLeft:"auto", color:"#F5820A", fontWeight:700 }}>↓</span>
                </a>
              </div>
            )}
            {activeDrawer === "All JamDER™ & C-DER Books" && (
              <div style={{ marginBottom:20 }}>
                <Image src="/images/jamder-books.png" alt="All JamDER and C-DER Books" width={600} height={400} style={{ width:"100%", height:"auto", borderRadius:12, boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }} />
              </div>
            )}
            {["ANNA-WARRIOR — Reggae Phoneme Song","BIG FISH-WARRIOR — Reggae Phoneme Song","BLACK BIRD — Reggae Phoneme Song"].includes(activeDrawer || "") && (
              <div style={{ marginBottom:20 }}>
                <div style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:"16px 18px" }}>
                  <div style={{ fontSize:13, fontWeight:600, color:"#0C2340", marginBottom:10 }}>🎵 Listen & Download</div>
                  <audio controls style={{ width:"100%", marginBottom:10 }} src={
                    activeDrawer === "ANNA-WARRIOR — Reggae Phoneme Song" ? "/audio/ANNA-WARRIOR_01.mp3" :
                    activeDrawer === "BIG FISH-WARRIOR — Reggae Phoneme Song" ? "/audio/BIG_FISH-WARRIOR_01.mp3" :
                    "/audio/BLACK_BIRD_01.mp3"
                  } />
                  <a href={
                    activeDrawer === "ANNA-WARRIOR — Reggae Phoneme Song" ? "/audio/ANNA-WARRIOR_01.mp3" :
                    activeDrawer === "BIG FISH-WARRIOR — Reggae Phoneme Song" ? "/audio/BIG_FISH-WARRIOR_01.mp3" :
                    "/audio/BLACK_BIRD_01.mp3"
                  } download style={{ fontSize:12, color:"#C05A00", fontWeight:600 }}>↓ Download MP3</a>
                </div>
              </div>
            )}
            <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"14px 18px", borderRadius:"0 10px 10px 0", marginBottom:24 }}>
              <p style={{ fontSize:13, color:"#0C2340" }}>Interested in this resource? <strong>Request a quote</strong> or <a href="/contact" style={{ color:"#C05A00" }}>contact us</a> for more information.</p>
            </div>
            <div style={{ display:"flex", gap:12 }}>
              <button onClick={()=>{setActiveDrawer(null);setQuoteOpen(true);}} style={{ flex:1, background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:12, fontSize:13, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Request a Quote →</button>
              <button onClick={()=>setActiveDrawer(null)} style={{ flex:1, background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:12, fontSize:13, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {quoteOpen && (
        <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
          <div onClick={()=>setQuoteOpen(false)} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
          <div style={{ width:"min(520px,100vw)", background:"white", overflowY:"auto", padding:"clamp(20px,5vw,40px) clamp(16px,4vw,32px)", boxShadow:"-8px 0 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
              <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340" }}>Request a Quote</h2>
              <button onClick={()=>setQuoteOpen(false)} style={{ background:"none", border:"1px solid #EDE0D0", borderRadius:8, padding:"6px 12px", cursor:"pointer", fontSize:16 }}>✕</button>
            </div>
            {quoteStatus==="sent" ? (
              <div style={{ textAlign:"center", padding:"40px 20px" }}>
                <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:20, color:"#0C2340", marginBottom:8 }}>Quote Request Sent!</h3>
                <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.7 }}>Thank you. The CHEETAH® team will be in touch within 1 business day.</p>
                <button onClick={()=>{setQuoteOpen(false);setQuoteStatus("idle");setQuoteForm({name:"",email:"",organisation:"",country:"",resources:"",message:""});}} style={{ marginTop:20, background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"12px 24px", fontSize:14, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer" }}>Done</button>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Full Name *</label><input value={quoteForm.name} onChange={e=>setQuoteForm({...quoteForm,name:e.target.value})} placeholder="Your full name" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Email Address *</label><input type="email" value={quoteForm.email} onChange={e=>setQuoteForm({...quoteForm,email:e.target.value})} placeholder="you@example.com" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Organisation / School</label><input value={quoteForm.organisation} onChange={e=>setQuoteForm({...quoteForm,organisation:e.target.value})} placeholder="e.g. Springfield Primary School" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Country</label><input value={quoteForm.country} onChange={e=>setQuoteForm({...quoteForm,country:e.target.value})} placeholder="e.g. Jamaica" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Resources Needed</label><input value={quoteForm.resources} onChange={e=>setQuoteForm({...quoteForm,resources:e.target.value})} placeholder="e.g. Teacher Guides, Decodable Books, iCHEETAH" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none" }} /></div>
                <div><label style={{ display:"block", fontSize:12, fontWeight:700, color:"#0C2340", marginBottom:6 }}>Additional Notes</label><textarea rows={3} value={quoteForm.message} onChange={e=>setQuoteForm({...quoteForm,message:e.target.value})} placeholder="Number of students, budget, timeline..." style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", resize:"vertical" }} /></div>
                {quoteStatus==="error" && <p style={{ fontSize:13, color:"#DC2626" }}>Something went wrong. Please try again or email info@mycheetahinc.com</p>}
                <button onClick={handleQuoteSubmit} disabled={quoteStatus==="sending"} style={{ width:"100%", background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:14, fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer", opacity:quoteStatus==="sending"?0.7:1 }}>{quoteStatus==="sending"?"Sending...":"Submit Quote Request →"}</button>
                <p style={{ fontSize:12, color:"#A0927A", textAlign:"center" }}>We respond to all enquiries within 1 business day.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

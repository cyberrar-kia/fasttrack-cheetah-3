"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const FORMSPREE_QUOTE = "https://formspree.io/f/mwvanraq";

type DrawerItem = { title: string; body: string; bullets?: string[]; samples?: {title:string; file:string}[] };

const drawerContent: Record<string, DrawerItem> = {
  "Phonics Chart — Sets 1–9": { title:"Phonics Chart — Sets 1–9", body:"The official FastTrack Literacy™ Phonics Chart covering all 9 phoneme sets plus a bonus letter sound. As provided by the Ministry of Education, Skills, Youth and Information.", bullets:["Set 1: s, short ă, m, short ĕ, p","Set 2: f, n, short ĭ, t, r","Set 3: d, short ŏ, hard g, h, k","Set 4: l, b, short ŭ, soft g, long ā","Set 5: j, long ī, or, long ō, z","Set 6: ng, w/wh, short oo, long oo, v","Set 7: ch, sh, long ē, th, y","Set 8: x, qu, oi, long ū, ar","Set 9: ow, ou, er, zh","Bonus letter sound: soft c"] },
  "Teacher's Helper / Teacher's Guide": { title:"Teacher's Helper / Teacher's Guide", body:"The Teacher's Helper provides the full instructional roadmap and difficult auditory stories. Each letter includes a 'Suggested 65-Minute Teacher's Page' to guide daily lessons. The Pupil's Helper omits steps 2, 3, and 4 to remain accessible for the child.", bullets:["Full 16-step instructional roadmap for every phoneme","Complex auditory stories and guided steps for teachers/parents","'Suggested 65-Minute Teacher's Page' per letter","Differentiated instruction — adjust, skip, or shorten lessons based on ability","Available in Volumes 1 and 2","Over 640 activities, with Sets 1–9 as supplemental digital resources"] },
  "Pupil's Workbook / Pupil's Helper": { title:"Pupil's Workbook / Pupil's Helper", body:"Streamlined version for students — simplified to remove jingles and drills that prevent overwhelm, focusing on print and sound. Available in Volumes 1, 2, and 3.", bullets:["Omits steps 2, 3, and 4 to remain child-accessible","Focus on print and sound activities","Simplified auditory stories","Hands-on activities for decoding and encoding","Available as Pupil's Workbook, Student's Workbook, or Pupil's Helper (varies by country)","Volumes 1, 2, and 3"] },
  "45 Reggae Phoneme Songs": { title:"45 One-Minute Reggae Phoneme Songs", body:"One-minute rhythmic, memorable, and fun songs — one for each phoneme. Call-and-response rhythms introduce sounds and reinforce learning. Children wake up singing them!", bullets:["45 songs — one per phoneme","One minute each — perfect for attention spans","Call-and-response rhythmic structure","Boosts memory, engagement and phoneme retention","Evidence-based: rhythmic learning improves sound discrimination","Available digitally and as audio recordings"], samples:[{title:"ANNA-WARRIOR",file:"/audio/ANNA-WARRIOR_01.mp3"},{title:"BIG FISH-WARRIOR",file:"/audio/BIG_FISH-WARRIOR_01.mp3"},{title:"BLACK BIRD",file:"/audio/BLACK_BIRD_01.mp3"}] },
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
  { cat:"Phonics", icon:"📊", audience:"both", image:"/images/resources/phonics-charts.jpg", title:"Phonics Chart — Sets 1–9", desc:"Official FastTrack Literacy™ Phonics Chart — 9 phoneme sets plus bonus sound, as provided by the Ministry of Education, Skills, Youth and Information.", tag:"orange", type:"PDF Download" },
  { cat:"Teacher Resources", icon:"👩‍🏫", audience:"teacher", image:"/images/resources/teachers-helper-combined.jpg", title:"Teacher's Helper / Teacher's Guide", desc:"Full instructional roadmap with difficult auditory stories, a 65-minute suggested Teacher's Page per letter, and over 640 activities. Available in Volumes 1 and 2.", tag:"blue", type:"Physical + Digital" },
  { cat:"Student Resources", icon:"👧", audience:"parent", image:"/images/resources/pupils-helper-vol1.jpg", title:"Pupil's Workbook / Pupil's Helper", desc:"Streamlined version for students (omitting steps 2, 3, and 4) to remain accessible for the child. Available in Volumes 1, 2, and 3.", tag:"green", type:"Physical Book" },
  { cat:"Songs & Audio", icon:"🎵", audience:"both", title:"45 Reggae Phoneme Songs", desc:"One-minute rhythmic, memorable, and fun songs — one for each phoneme. Children wake up singing them! Sample songs include ANNA-WARRIOR, BIG FISH-WARRIOR, and BLACK BIRD. Full list coming soon.", tag:"orange", type:"Audio + Digital" },
  { cat:"Decodable Books", icon:"📖", audience:"parent", image:"/images/resources/poster-stories.jpg", title:"CHEETAH® Poster Stories — Level 1", desc:"9 Level 1 decodable books for early readers just beginning to decode. Large, poster-format stories ideal for classroom shared reading.", tag:"blue", type:"Physical Book" },
  { cat:"Decodable Books", icon:"📚", audience:"parent", image:"/images/resources/cder-books.jpg", title:"CHEETAH® Decodable & Early Readers — Level 2", desc:"70+ Level 2 decodable books for building decoding and fluency. Fiction and nonfiction titles across a range of topics.", tag:"green", type:"Physical Book" },
  { cat:"Charts & Visual Tools", icon:"📊", audience:"teacher", image:"/images/resources/phonics-charts.jpg", title:"27+ Interactive Charts", desc:"Multisensory reinforcement tools including phonics charts, word family charts, and classroom display resources.", tag:"orange", type:"Physical Resource" },
  { cat:"Flashcards", icon:"🃏", audience:"teacher", image:"/images/resources/flashcards-rhymes.jpg", title:"Phoneme Flashcard Sets", desc:"Visual flashcard sets for letter-sound practice, sight words, and vocabulary building. Designed for both classroom and home use.", tag:"blue", type:"Physical Resource" },
  { cat:"Assessment", icon:"📋", audience:"teacher", title:"Assessment & Progress Monitoring Tools", desc:"Built-in assessment tools including CHEETAH® Poster Fluency Tests, self-assessment checklists, and progress tracking sheets.", tag:"green", type:"Assessment" },
  { cat:"Technology", icon:"🤖", audience:"both", image:"/images/icheetah-frontal.png", title:"iCHEETAH™ AI-Powered Robot", desc:"Patent-pending AI-powered robot with integrated CHEETAH® content. Engages children in interactive literacy activities through voice and screen.", tag:"orange", type:"Hardware" },
  { cat:"Technology", icon:"📱", audience:"both", image:"/images/resources/cheetah-app.jpg", title:"CHEETAH® Apps", desc:"Digital apps for independent practice, phoneme reinforcement, and parent engagement. Available on tablets and compatible devices.", tag:"blue", type:"Digital App" },
  { cat:"Competition", icon:"🏆", audience:"both", image:"/images/resources/national-literacy-competition.jpg", title:"National Literacy Competition Cards", desc:"Cards and materials for classroom and national literacy competitions — building motivation, fluency, and confidence.", tag:"green", type:"Competition Resource" },
  { cat:"Books", icon:"📗", audience:"both", image:"/images/resources/cder-books.jpg", title:"All JamDER™ & C-DER Books", desc:"70+ decodable readers — JamDER™ (Jamaica) and C-DER™ (Caribbean) series. Fiction and nonfiction across all levels and cultural contexts.", tag:"green", type:"Book Collection" },
  { cat:"Rewards", icon:"⭐", audience:"both", title:"Reward Sticker Sets", desc:"Motivational reward stickers tied to the 16-step lesson structure. Children celebrate their progress at every milestone.", tag:"orange", type:"Classroom Resource", contactUs:true },
  { cat:"Charts & Visual Tools", icon:"📌", audience:"teacher", image:"/images/resources/interactive-charts.png", title:"CHEETAH® Charts — Multisensory Reinforcement Tools", desc:"Physical chart resources designed as multisensory reinforcement tools — supporting phoneme recall through visual and kinaesthetic engagement alongside the 27+ interactive charts.", tag:"blue", type:"Physical Resource" },
  { cat:"Technology", icon:"💡", audience:"teacher", title:"Innovative AI Tool", desc:"An AI-powered learning tool that integrates artificial intelligence into the literacy ecosystem — tracking fluency, personalising learning, and supporting data-driven instruction.", tag:"orange", type:"Digital Tool" },
  { cat:"Training", icon:"🎓", audience:"teacher", title:"Teacher Training", desc:"Comprehensive teacher training including 'train-the-trainer' programmes and intensive Transformation Weeks — equipping educators to implement FastTrack Literacy™ with confidence.", tag:"green", type:"Professional Development" },
];

const tagColors: Record<string,{bg:string,tc:string}> = { green:{bg:"#F0FDF4",tc:"#166534"}, blue:{bg:"#EEF4FF",tc:"#1A5DB5"}, orange:{bg:"#FFF0E0",tc:"#C05A00"} };


function FlipBook({ book }: { book: any }) {
  const [page, setPage] = useState(0); // 0=page1, 1=page2, 2=locked

  return (
    <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, overflow:"hidden", boxShadow:"0 4px 24px rgba(0,0,0,0.06)" }}>
      {/* Book viewer */}
      <div style={{ position:"relative", background:book.color, minHeight:320 }}>
        {/* PAGE 1 — Book Cover */}
        {page === 0 && (
          <div style={{ minHeight:320, display:"flex", flexDirection:"column" }}>
            {/* Cover image */}
            <div style={{ background:book.color, position:"relative", height:280, overflow:"hidden" }}>
              {book.cover ? (
                <img
                  src={book.cover}
                  alt={`${book.title} ${book.vol} cover`}
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center center", display:"block" }}
                  onError={(e)=>{
                    const img = e.target as HTMLImageElement;
                    img.style.display="none";
                    const fallback = img.nextElementSibling as HTMLElement;
                    if(fallback) fallback.style.display="flex";
                  }}
                />
              ) : null}
              {/* Fallback if no cover or cover doesn't load */}
              <div style={{ display:book.cover?"none":"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, width:"100%", height:"100%", position:"absolute", top:0, left:0, background:book.color }}>
                <div style={{ fontSize:48 }}>📗</div>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:16, color:"#0C2340", textAlign:"center" }}>{book.title}</div>
                <div style={{ fontSize:12, color:"#8A7A6A" }}>{book.vol}</div>
              </div>
              <div style={{ position:"absolute", bottom:8, left:"50%", transform:"translateX(-50%)", fontSize:10, color:"rgba(0,0,0,0.35)", letterSpacing:"1px", background:"rgba(255,255,255,0.7)", padding:"2px 10px", borderRadius:50 }}>Page 1 of 2 · Preview</div>
            </div>
          </div>
        )}
        {/* PAGE 2 */}
        {page === 1 && (
          <div style={{ padding:"clamp(20px,4%,32px)", minHeight:320, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16 }}>
                <div style={{ width:32, height:32, borderRadius:"50%", background:book.accent, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <span style={{ fontSize:14, color:"white" }}>📄</span>
                </div>
                <div>
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:11, color:book.accent, letterSpacing:"0.5px", textTransform:"uppercase" }}>JamDER+™</div>
                  <div style={{ fontSize:10, color:"rgba(0,0,0,0.4)" }}>Page 2 of 2 (Preview)</div>
                </div>
              </div>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(14px,2vw,17px)", color:"#0C2340", marginBottom:8, lineHeight:1.3 }}>{book.pages[1].heading}</h3>
              <div style={{ fontSize:11, fontWeight:700, color:book.accent, marginBottom:12, letterSpacing:"0.5px" }}>{book.pages[1].sub}</div>
              <p style={{ fontSize:"clamp(12px,1.4vw,13px)", color:"#5A5240", lineHeight:1.8 }}>{book.pages[1].body}</p>
            </div>
            <div style={{ marginTop:16, paddingTop:12, borderTop:"1px solid rgba(0,0,0,0.08)", fontSize:10, color:"rgba(0,0,0,0.4)", lineHeight:1.6 }}>{book.pages[1].author}</div>
          </div>
        )}
        {/* PAGE 3 — LOCKED */}
        {page === 2 && (
          <div style={{ minHeight:320, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, padding:32, textAlign:"center" }}>
            <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(12,35,64,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>🔒</div>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:16, color:"#0C2340" }}>Full Access Required</div>
            <div style={{ fontSize:13, color:"#8A7A6A", lineHeight:1.7, maxWidth:220 }}>Get full access to read all pages of {book.title} — {book.vol}</div>
            <a href="/get-started" style={{ background:"#F5820A", color:"white", textDecoration:"none", padding:"11px 24px", borderRadius:50, fontSize:13, fontWeight:700, fontFamily:"'Nunito',sans-serif", marginTop:4 }}>Get Full Access →</a>
          </div>
        )}
        {/* Page indicator dots */}
        <div style={{ position:"absolute", top:12, right:12, display:"flex", gap:4 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width:6, height:6, borderRadius:"50%", background: i===page ? book.accent : "rgba(0,0,0,0.15)" }} />
          ))}
        </div>
      </div>
      {/* Book footer */}
      <div style={{ padding:"14px 18px", borderTop:"1px solid #EDE0D0" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <div>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"clamp(13px,1.7vw,15px)", color:"#0C2340" }}>{book.title}</div>
            <div style={{ fontSize:11, color:"#8A7A6A", marginTop:2 }}>{book.vol}</div>
          </div>
          <span style={{ background:book.color, color:"#0C2340", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>JamDER™</span>
        </div>
        {/* Navigation */}
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={()=>setPage(p=>Math.max(0,p-1))} disabled={page===0} style={{ background:"#F5EEE4", border:"none", borderRadius:50, padding:"8px 14px", fontSize:12, cursor:page===0?"not-allowed":"pointer", color:page===0?"#C8B89A":"#5A5240", fontWeight:600, fontFamily:"'Nunito',sans-serif" }}>← Prev</button>
          <button onClick={()=>setPage(p=>Math.min(2,p+1))} disabled={page===2} style={{ flex:1, background: page===2?"#EDE0D0":"#F5820A", border:"none", borderRadius:50, padding:"8px 14px", fontSize:12, cursor:page===2?"not-allowed":"pointer", color:page===2?"#8A7A6A":"white", fontWeight:700, fontFamily:"'Nunito',sans-serif" }}>
            {page===1?"View Access Page →":"Next Page →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  const [activeDrawer, setActiveDrawer] = useState<string|null>(null);
  const [audience, setAudience] = useState<"all"|"teacher"|"parent">("all");
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

      {/* TEACHER / PARENT TOOLBAR */}
      <div style={{ background:"white", borderBottom:"1px solid #EDE0D0", position:"sticky", top:64, zIndex:80 }}>
        <div className="container" style={{ display:"flex", alignItems:"center", gap:0, padding:"0 clamp(16px,4vw,40px)" }}>
          {/* Tabs */}
          <button
            onClick={() => setAudience("all")}
            style={{ padding:"16px clamp(16px,3vw,28px)", fontSize:"clamp(12px,1.5vw,14px)", fontWeight:audience==="all"?800:500, color:audience==="all"?"#F5820A":"#8A7A6A", background:"none", border:"none", borderBottom:audience==="all"?"3px solid #F5820A":"3px solid transparent", cursor:"pointer", fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", transition:"all 0.2s" }}
          >
            📚 All Resources
          </button>
          <button
            onClick={() => setAudience("teacher")}
            style={{ padding:"16px clamp(16px,3vw,28px)", fontSize:"clamp(12px,1.5vw,14px)", fontWeight:audience==="teacher"?800:500, color:audience==="teacher"?"#F5820A":"#8A7A6A", background:"none", border:"none", borderBottom:audience==="teacher"?"3px solid #F5820A":"3px solid transparent", cursor:"pointer", fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", transition:"all 0.2s" }}
          >
            👩‍🏫 For Teachers
          </button>
          <button
            onClick={() => setAudience("parent")}
            style={{ padding:"16px clamp(16px,3vw,28px)", fontSize:"clamp(12px,1.5vw,14px)", fontWeight:audience==="parent"?800:500, color:audience==="parent"?"#F5820A":"#8A7A6A", background:"none", border:"none", borderBottom:audience==="parent"?"3px solid #F5820A":"3px solid transparent", cursor:"pointer", fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", transition:"all 0.2s" }}
          >
            👨‍👩‍👧 For Parents
          </button>
        </div>
      </div>

      {/* TEACHER RESOURCES */}
      {(audience==="teacher"||audience==="all") && (
      <section className="section" style={{ background:"#F0FDF4", display: audience==="teacher"||audience==="all" ? "block" : "none" }}>
        <div className="container">
          <div style={{ marginBottom:32 }}>
            <div className="section-chip" style={{ background:"rgba(22,163,74,0.1)", border:"1px solid rgba(22,163,74,0.25)", color:"#166534" }}>👩‍🏫 Teacher Resources</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(20px,3vw,30px)", color:"#0C2340", marginTop:8 }}>Designed for Educators</h2>
            <p style={{ fontSize:"clamp(13px,1.5vw,15px)", color:"#8A7A6A", marginTop:6 }}>Structured lesson guides, phonics charts, assessments, and training materials to deliver FastTrack Literacy™ with confidence.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(clamp(220px,26vw,280px),1fr))", gap:16 }}>
            {[
              { icon:"📋", image:"/images/resources/teachers-helper-combined.jpg", title:"Teacher's Helper Vol 1 & 2", desc:"Full 16-step instructional roadmap for every phoneme. Includes auditory stories, guided steps, and a suggested 65-minute lesson plan per letter." },
              { icon:"📊", image:"/images/resources/phonics-charts.jpg", title:"FastTrack Phonics Chart", desc:"Official Ministry of Education approved phonics chart covering all 9 phoneme sets plus a bonus letter sound. Print-ready PDF.", free:true },
              { icon:"📝", title:"Assessment & Progress Tools", desc:"CHEETAH® Poster Fluency Tests, self-assessment checklists, and progress tracking sheets. Measurable outcomes at every stage." },
              { icon:"🗂️", image:"/images/resources/phonics-charts.jpg", title:"27+ Interactive Charts", desc:"Multisensory reinforcement tools including phonics charts, word family charts, and classroom display resources." },
              { icon:"🎓", title:"Teacher Training Programme", desc:"Full implementation training for classroom teachers. Train-the-trainer model for school-wide rollout. Available in-person and digitally." },
              { icon:"🃏", image:"/images/resources/flashcards-rhymes.jpg", title:"Phoneme Flashcard Sets", desc:"Letter-sound correspondence flashcards, sight word recognition sets, and vocabulary building cards aligned to the 16-step sequence." },
            ].map(item => (
              <div key={item.title} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:16, overflow:"hidden" }}>
                {(item as any).image && (
                  <div style={{ width:"100%", height:140, background:"white", display:"flex", alignItems:"center", justifyContent:"center", borderBottom:"1px solid #EDE0D0", padding:10, boxSizing:"border-box" }}>
                    <img src={(item as any).image} alt={item.title} style={{ maxWidth:"100%", maxHeight:"100%", objectFit:"contain" }} />
                  </div>
                )}
                <div style={{ padding:"16px 20px" }}>
                  {!(item as any).image && <div style={{ fontSize:28, marginBottom:10 }}>{item.icon}</div>}
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                    <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"clamp(13px,1.6vw,15px)", color:"#0C2340" }}>{item.title}</div>
                    {item.free && <span style={{ background:"#DCFCE7", color:"#166534", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:50 }}>Free</span>}
                  </div>
                  <p style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"#8A7A6A", lineHeight:1.75 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* PARENT RESOURCES */}
      {(audience==="parent"||audience==="all") && (
      <section className="section" style={{ background:"#EFF6FF" }}>
        <div className="container">
          <div style={{ marginBottom:32 }}>
            <div className="section-chip" style={{ background:"rgba(59,130,246,0.1)", border:"1px solid rgba(59,130,246,0.25)", color:"#1E40AF" }}>👨‍👩‍👧 Parent Resources</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(20px,3vw,30px)", color:"#0C2340", marginTop:8 }}>Supporting Learning at Home</h2>
            <p style={{ fontSize:"clamp(13px,1.5vw,15px)", color:"#8A7A6A", marginTop:6 }}>Books, songs, and guides designed to help parents extend literacy learning beyond the classroom.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(clamp(220px,26vw,280px),1fr))", gap:16 }}>
            {[
              { icon:"📗", image:"/images/resources/pupils-helper-combined.jpg", title:"Pupil's Helper Vol 1, 2 & 3", desc:"Student workbooks with phonics activities, letter-sound exercises, and early reading practice. Designed for children ages 3–8." },
              { icon:"🎵", title:"45 Reggae Phoneme Songs", desc:"One-minute call-and-response reggae songs — one per phoneme. Children wake up singing these! Perfect for home learning." },
              { icon:"📖", image:"/images/resources/cder-books.jpg", title:"JamDER™ & C-DER Books", desc:"70+ culturally authentic decodable early readers. Fiction and nonfiction across all reading levels. Ideal for reading together at home." },
              { icon:"⭐", title:"Reward Sticker Sets", desc:"Motivational stickers tied to the 16-step lesson structure. Children celebrate their progress at every milestone.", contactUs:true },
              { icon:"📊", title:"Home Progress Guide", desc:"Simple parent-friendly guide to tracking your child's reading progress at home alongside the FastTrack programme.", contactUs:true },
              { icon:"🤖", image:"/images/icheetah-frontal.png", title:"iCHEETAH™ AI Device", desc:"AI-powered reading companion for children ages 3–8. Guides phonics practice and adapts to each child's pace." },
            ].map(item => (
              <div key={item.title} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:16, overflow:"hidden" }}>
                {(item as any).image && (
                  <div style={{ width:"100%", height:140, background:"white", display:"flex", alignItems:"center", justifyContent:"center", borderBottom:"1px solid #EDE0D0", padding:10, boxSizing:"border-box" }}>
                    <img src={(item as any).image} alt={item.title} style={{ maxWidth:"100%", maxHeight:"100%", objectFit:"contain" }} />
                  </div>
                )}
                <div style={{ padding:"16px 20px" }}>
                  {!(item as any).image && <div style={{ fontSize:28, marginBottom:10 }}>{item.icon}</div>}
                  <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:"clamp(13px,1.6vw,15px)", color:"#0C2340", marginBottom:6 }}>{item.title}</div>
                  <p style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"#8A7A6A", lineHeight:1.75, marginBottom:(item as any).contactUs ? 12 : 0 }}>{item.desc}</p>
                  {(item as any).contactUs && (
                    <a href="/contact" style={{ display:"inline-block", background:"#0C2340", color:"white", fontSize:12, fontWeight:700, padding:"7px 16px", borderRadius:50, textDecoration:"none", fontFamily:"'Nunito',sans-serif" }}>Contact Us →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}


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
            {resources.filter(r => audience === "all" || r.audience === audience || r.audience === "both").map(r=>(
              <div key={r.title} style={{ background: lastClicked === r.title ? "#FFF0E0" : "white", border: lastClicked === r.title ? "2px solid #F5820A" : "1px solid #EDE0D0", borderRadius:16, overflow:"hidden", display:"flex", flexDirection:"column", transition:"all 0.3s ease", boxShadow: lastClicked === r.title ? "0 4px 20px rgba(245,130,10,0.15)" : "0 2px 8px rgba(0,0,0,0.04)" }}>
                {(r as any).image && (
                  <div style={{ width:"100%", height:180, background:"white", display:"flex", alignItems:"center", justifyContent:"center", borderBottom:"1px solid #EDE0D0", padding:12, boxSizing:"border-box" }}>
                    <img src={(r as any).image} alt={r.title} style={{ maxWidth:"100%", maxHeight:"100%", objectFit:"contain", display:"block" }} />
                  </div>
                )}
                <div style={{ padding:20, display:"flex", flexDirection:"column", gap:10, flex:1 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                    <span style={{ background:tagColors[r.tag].bg, color:tagColors[r.tag].tc, fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:50 }}>{r.cat}</span>
                    {!(r as any).image && <span style={{ fontSize:22 }}>{r.icon}</span>}
                  </div>
                  <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", lineHeight:1.3 }}>{r.title}</h3>
                  <p style={{ fontSize:12, color:"#5A5240", lineHeight:1.7, flex:1 }}>{r.desc}</p>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:8, borderTop:"1px solid #F5EEE4" }}>
                    <span style={{ fontSize:11, color:"#A0927A", fontWeight:500 }}>{r.type}</span>
                    {(r as any).contactUs ? (
                      <a href="/contact" style={{ background:"#0C2340", color:"white", border:"none", borderRadius:50, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer", textDecoration:"none", fontFamily:"'Nunito',sans-serif" }}>Contact Us →</a>
                    ) : (
                      <button onClick={()=>{
                          setActiveDrawer(r.title);
                          setLastClicked(r.title);
                        }} style={{ background:"#FFF0E0", color:"#C05A00", border:"none", borderRadius:50, padding:"7px 14px", fontSize:12, fontWeight:700, cursor:"pointer" }}>Learn More →</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE DOWNLOADS */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip">📥 Free Resources</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(22px,4vw,34px)", color:"#0C2340", marginBottom:12 }}>Free Teacher Resources</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:520, margin:"0 auto" }}>Download these free resources to support early literacy in your classroom — no sign-up required.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(clamp(260px,28vw,340px),1fr))", gap:20 }}>
            {[
              { title:"The Reading Brain Pathway", desc:"Science-backed instructional sequence for educators — how the brain learns to read.", file:"The_Reading_Brain_Pathway.pdf", icon:"🧠", tag:"For Teachers" },
              { title:"I Can Sound Out 2 Letters", desc:"Consonant-vowel combination chart for early phonics practice with the JamDER™ system.", file:"For_Teachers_I_can_sound_out_2_letters.pdf", icon:"🔤", tag:"For Teachers" },
              { title:"Learning Word Families", desc:"Blend sounds to make three-letter words using common word family groups.", file:"For_Teachers_Learning_Word_Families.pdf", icon:"📖", tag:"For Teachers" },
              { title:"Did You Know? Reading Facts", desc:"Key literacy statistics and reading fluency targets for children ages 5–7.", file:"Did_You_Know_Interesting_Facts.png", icon:"💡", tag:"For Everyone" },
              { title:"High-Frequency Sight Words", desc:"Teaching strategies, word lists, and practice activities to build reading automaticity.", file:"Sight_Words_High_Frequency.pdf", icon:"📝", tag:"For Teachers" },
            ].map((r) => (
              <a
                key={r.file}
                href={`/downloads/${r.file}`}
                download
                style={{ display:"flex", alignItems:"flex-start", gap:16, padding:20, background:"#FFF9F4", borderRadius:16, border:"1px solid #EDE0D0", textDecoration:"none", transition:"all 0.2s ease", cursor:"pointer" }}
                onMouseEnter={e=>(e.currentTarget.style.borderColor="#F5820A")}
                onMouseLeave={e=>(e.currentTarget.style.borderColor="#EDE0D0")}
              >
                <div style={{ width:48, height:48, borderRadius:12, background:"#FFF0E0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{r.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                    <span style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340" }}>{r.title}</span>
                    <span style={{ background:"#FFF0E0", color:"#C05A00", fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:50, whiteSpace:"nowrap" }}>{r.tag}</span>
                  </div>
                  <p style={{ fontSize:12, color:"#5A5240", lineHeight:1.6, marginBottom:8 }}>{r.desc}</p>
                  <span style={{ fontSize:12, fontWeight:700, color:"#F5820A" }}>↓ Download Free</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FLIP BOOKS */}
      <section className="section" style={{ background:"#FFF0E0" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip">📖 JamDER™ Digital Books</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(24px,4vw,36px)", color:"#0C2340", marginBottom:12 }}>Read Our Books Online</h2>
            <p style={{ fontSize:"clamp(13px,1.5vw,16px)", color:"#8A7A6A", maxWidth:500, margin:"0 auto" }}>Preview the first 2 pages of each book. Get full access to read more.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(clamp(260px,28vw,340px),1fr))", gap:24 }}>
            {[
              { title:"Teacher's Helper", vol:"Volume 1", cover:"/images/resources/teachers-helper-vol1.webp", color:"#DBEAFE", accent:"#1E40AF", pages:[
                { heading:"JamDER+™ — Jamaican Decodable & Early Readers", sub:"Teacher's Helper · Volume 1", body:"This resource provides structured lesson plans and teaching guides aligned to the FastTrack Literacy™ programme. Designed for classroom teachers and early literacy educators.", author:"Paulette Trowers, Juris Doctor · Kristina Jaz · Iain Taylor" },
                { heading:"How to Use This Book", sub:"Teacher's Guide", body:"Each lesson follows the 16-step FastTrack structured format. Begin with the phoneme song, proceed through decoding activities, and close with the reading of the decodable text.", author:"Early Literacy Tool · CHEETAH® Purrrrrrr Publishing" },
              ]},
              { title:"Teacher's Helper", vol:"Volume 2", cover:"/images/resources/teachers-helper-vol2.jpg", color:"#DCFCE7", accent:"#166534", pages:[
                { heading:"JamDER+™ — Jamaican Decodable & Early Readers", sub:"Teacher's Helper · Volume 2", body:"A continuation of the teacher's instructional guide series. Covers phoneme sets 4–6 with extended lesson activities, assessment tools, and differentiation strategies.", author:"Paulette Trowers, Juris Doctor · Kristina Jaz · Iain Taylor" },
                { heading:"Phoneme Set Overview", sub:"Sets 4 — 6", body:"Set 4: l, b, short ŭ, soft g, long ā · Set 5: j, long ī, or, long ō, z · Set 6: ng, w/wh, short oo, long oo, v. Each set includes song activities and decodable text practice.", author:"Early Literacy Tool · Ministry of Education Aligned" },
              ]},
              { title:"Pupil's Helper", vol:"Volume 1", cover:"/images/resources/pupils-helper-vol1.jpg", color:"#FEF3C7", accent:"#92400E", pages:[
                { heading:"JamDER+™ — Jamaican Decodable & Early Readers", sub:"Pupil's Helper · Volume 1", body:"A student workbook filled with phonics activities, letter-sound exercises, and early reading practice. Designed for children ages 3–6 beginning their literacy journey.", author:"Paulette Trowers, Juris Doctor · Kristina Jaz" },
                { heading:"Welcome, Young Reader!", sub:"A Message to Students", body:"This book is for you! Every page will help you learn new sounds and words. You are going to be a great reader. Let's begin!", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"Pupil's Helper", vol:"Volume 2", cover:"/images/resources/pupils-helper-vol2.jpg", color:"#FCE7F3", accent:"#9D174D", pages:[
                { heading:"JamDER+™ — Jamaican Decodable & Early Readers", sub:"Pupil's Helper · Volume 2", body:"Building on Volume 1, this workbook introduces more complex phoneme combinations through engaging activities, rhymes, and culturally relevant Jamaican stories.", author:"Paulette Trowers, Juris Doctor · Kristina Jaz" },
                { heading:"What You Will Learn", sub:"Phoneme Sets 4 — 6", body:"In this volume you will practise blending longer words, reading short sentences, and recognising tricky high-frequency words. Keep going — you are doing amazing!", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"Pupil's Helper", vol:"Volume 3", cover:"/images/resources/pupils-helper-vol3.jpg", color:"#EDE9FE", accent:"#5B21B6", pages:[
                { heading:"JamDER+™ — Jamaican Decodable & Early Readers", sub:"Pupil's Helper · Volume 3", body:"The third volume in the Pupil's Helper series. Focuses on vowel digraphs, blends, and reading fluency through structured decodable passages and comprehension activities.", author:"Paulette Trowers, Juris Doctor · Kristina Jaz" },
                { heading:"You're Almost There!", sub:"Advanced Phoneme Practice", body:"This volume covers the final phoneme sets — including digraphs, diphthongs, and longer word patterns. You are reading real sentences and short stories now. Well done!", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"JamDER™ Reader", vol:"Special Edition", cover:"/images/resources/cder-books.jpg", color:"#FFF0E0", accent:"#C05A00", pages:[
                { heading:"JamDER+™ — Special Edition", sub:"Jamaican Decodable & Early Readers", body:"A special curated collection of JamDER™ stories — culturally authentic, fully decodable, and beautifully illustrated. Celebrating Jamaican heritage through the joy of reading.", author:"CHEETAH® Purrrrrrr Publishing · Paulette Trowers, Juris Doctor" },
                { heading:"About This Collection", sub:"Stories from Our Culture", body:"These stories are set in Jamaica and feature characters, places, and experiences that Jamaican children know and love. Every word is decodable using the FastTrack phonics sequence.", author:"fasttrackliteracy.com · mycheetahinc.com" },
              ]},
              { title:"House Flood", vol:"C-DER Story Book", cover:"/images/resources/house-flood.png", color:"#DBEAFE", accent:"#1E40AF", pages:[
                { heading:"House Flood", sub:"CHEETAH® Purrrrrrr Publishing", body:"A decodable early reader story from the C-DER™ collection. Fully phonics-aligned and culturally authentic.", author:"Bernadette Vidal · Paulette Trowers, JD" },
                { heading:"About This Book", sub:"Decodable & Early Reader", body:"House Flood is fully decodable and aligned to the FastTrack Literacy™ phonics sequence — building fluency and confidence through culturally authentic storytelling.", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"Mr. Pete Makes Friends", vol:"C-DER Story Book", cover:"/images/resources/mr-pete-makes-friends.png", color:"#DCFCE7", accent:"#166534", pages:[
                { heading:"Mr. Pete Makes Friends", sub:"CHEETAH® Purrrrrrr Publishing", body:"A decodable early reader story from the C-DER™ collection. Fully phonics-aligned and culturally authentic.", author:"Bernadette Vidal · Paulette Trowers, JD" },
                { heading:"About This Book", sub:"Decodable & Early Reader", body:"Mr. Pete Makes Friends is fully decodable and aligned to the FastTrack Literacy™ phonics sequence — helping children build confidence through stories they love.", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"Meet My Family", vol:"C-DER Story Book", cover:"/images/resources/meet-my-family.png", color:"#FEF3C7", accent:"#92400E", pages:[
                { heading:"Meet My Family", sub:"CHEETAH® Purrrrrrr Publishing", body:"A decodable early reader story from the C-DER™ collection. Fully phonics-aligned and culturally authentic.", author:"Bernadette Vidal · Paulette Trowers, JD" },
                { heading:"About This Book", sub:"Decodable & Early Reader", body:"Meet My Family is a fully decodable story aligned to the FastTrack Literacy™ phonics sequence — building reading confidence through relatable, culturally rich narratives.", author:"CHEETAH® Purrrrrrr Publishing · fasttrackliteracy.com" },
              ]},
              { title:"Grade 6 PEP Mathematics Workbook", vol:"Workbook", cover:"/images/resources/pep-math-workbook.png", color:"#EDE9FE", accent:"#5B21B6", pages:[
                { heading:"Grade 6 PEP Mathematics Workbook", sub:"CHEETAH® Publishing", body:"A comprehensive mathematics workbook with answers and explanations. Designed to prepare Grade 6 students for PEP examinations.", author:"A Team of Educators · CHEETAH® Purrrrrrr Publishing" },
                { heading:"What's Inside", sub:"Answers & Explanations", body:"This workbook provides detailed step-by-step answers to support independent study, classroom instruction, and exam preparation at the Grade 6 level.", author:"CHEETAH® Purrrrrrr Publishing · mycheetahinc.com" },
              ]},
              { title:"FastTrack Lesson Framework", vol:"Teacher Reference", cover:"/images/resources/fasttrack-lesson-framework.png", color:"#F0FDF4", accent:"#166534", pages:[
                { heading:"FastTrack Literacy™ Lesson Framework", sub:"1-Hour Lesson Framework Overview", body:"The complete suggested timetable and instructional flow for delivering FastTrack Literacy™ lessons. Essential reference for all CHEETAH® educators.", author:"CHEETAH® FastTrack Literacy™ · Paulette Trowers, JD" },
                { heading:"For Teacher Training Manual", sub:"Final Approved Version", body:"This framework outlines the 16-step instructional sequence within a structured 1-hour lesson — covering daily review, phonics drill, blending, fluency practice, and assessment.", author:"CHEETAH® FastTrack Literacy™ · fasttrackliteracy.com" },
              ]},
            ].map((book, bookIdx) => (
              <FlipBook key={bookIdx} book={book} />
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
            {drawer.samples && (
              <div style={{ marginBottom:24 }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:12 }}>🎵 Sample Songs — Listen Now</div>
                <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                  {drawer.samples.map(s=>(
                    <div key={s.file} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:"12px 16px" }}>
                      <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:13, color:"#0C2340", marginBottom:8 }}>{s.title}</div>
                      <audio controls style={{ width:"100%", height:36 }}>
                        <source src={s.file} type="audio/mp3" />
                      </audio>
                    </div>
                  ))}
                </div>
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

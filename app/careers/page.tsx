"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const roles = [
  {
    id:"ambassadors",
    icon:"🐆",
    tag:"Jamaica",
    tagColor:"green",
    title:"CHEETAH Activation Ambassadors",
    subtitle:"Parish Representatives & Regional Leaders",
    type:"Field-Based · Commission",
    location:"Jamaica — 1 per Parish",
    start:"May 2026",
    overview:"CHEETAH® is building a national, field-based team to drive school engagement and product adoption across Jamaica. We are recruiting Parish Representatives (1 per parish) and Regional Leaders to begin activation in May 2026. This is a sales, marketing, and education engagement role focused on introducing and scaling CHEETAH's solutions in schools.",
    responsibilities:[
      { heading:"School Engagement", items:["Visit schools within your assigned parish","Meet with principals, teachers, and administrators","Reintroduce CHEETAH's Ministry-aligned resources"] },
      { heading:"Product Demonstration", items:["Present PEP preparation workbooks and textbooks","Demonstrate FastTrack Literacy™ programme materials","Showcase supplementary charts and classroom tools"] },
      { heading:"Student Activation", items:["Deliver short, engaging sessions to build excitement","Support school-based activities and demonstrations"] },
      { heading:"Sales & Follow-Up", items:["Generate interest and secure orders","Coordinate with the central CHEETAH team for fulfilment","Maintain relationships with schools"] },
    ],
    requirements:["Strong communication and presentation skills","Passion for education and literacy","Self-motivated and target-driven","Knowledge of the Jamaican school system preferred"],
    compensation:"Commission-based with performance bonuses.",
    apply:"info@mycheetahinc.com",
  },
  {
    id:"publicist",
    icon:"📢",
    tag:"Global",
    tagColor:"blue",
    title:"CHEETAH Publicist",
    subtitle:"Media & Brand Visibility",
    type:"Retainer or Performance-Based",
    location:"Remote — Global",
    start:"Immediate",
    overview:"CHEETAH® is seeking a results-driven Publicist to increase visibility and media presence for our education and technology brand. The Publicist will manage press, media outreach, and brand storytelling to position CHEETAH as a leading literacy and education solution.",
    responsibilities:[
      { heading:"Media & PR Strategy", items:["Develop and execute media and publicity strategies","Secure press coverage across TV, radio, online, and print","Manage relationships with media houses and journalists"] },
      { heading:"Content & Brand", items:["Write press releases, media kits, and brand stories","Coordinate interviews, features, and speaking opportunities"] },
    ],
    requirements:["Proven experience in public relations or media","Strong writing and communication skills","Track record of securing media coverage","Ability to work independently and meet deadlines"],
    compensation:"Performance-based or retainer plus bonus for media placements.",
    apply:"info@mycheetahinc.com",
  },
  {
    id:"usa-sales",
    icon:"🇺🇸",
    tag:"USA",
    tagColor:"orange",
    title:"International Sales Representative",
    subtitle:"Private Schools — United States",
    type:"Field-Based · Commission",
    location:"United States — Territory-Based",
    start:"Immediate",
    overview:"CHEETAH® is expanding into the United States and is recruiting results-driven sales professionals to introduce and scale our literacy and education solutions in private schools. This is a field-based role focused on direct school engagement, presentations to principals, and closing institutional sales.",
    responsibilities:[
      { heading:"School Outreach", items:["Identify and visit private schools within your assigned territory","Schedule and conduct meetings with principals and administrators","Build and maintain strong relationships"] },
      { heading:"Presentations & Demos", items:["Deliver clear, structured presentations","Communicate student performance gaps and CHEETAH's solution","Demonstrate products and explain implementation"] },
      { heading:"Sales Conversion", items:["Secure school-level adoption and bulk orders","Follow up consistently to close deals","Coordinate onboarding with the CHEETAH team"] },
      { heading:"Market Development", items:["Build a pipeline of schools and referrals","Establish CHEETAH's presence in your region","Provide feedback on market response"] },
    ],
    requirements:["Proven sales experience, preferably in education","Strong presentation and relationship-building skills","Self-motivated with a results-driven mindset","Knowledge of the US private school sector preferred"],
    compensation:"Commission-based with performance bonuses.",
    apply:"info@mycheetahinc.com",
  },
  {
    id:"virtual-admin",
    icon:"💻",
    tag:"Remote",
    tagColor:"blue",
    title:"Virtual Administrative Coordinator",
    subtitle:"Operations & Communication Support",
    type:"Remote · Part or Full Time",
    location:"Global — EST Hours Required",
    start:"Immediate",
    overview:"CHEETAH® is seeking a highly organised and reliable Virtual Administrative Coordinator to support daily operations, communication, and coordination across our global education and technology initiatives. This remote role is open worldwide — candidates must be available during New York (Eastern) time zone hours.",
    responsibilities:[
      { heading:"Administrative Support", items:["Manage schedules, meetings, and calendars","Organise documents, files, and internal systems","Prepare reports, summaries, and basic documents"] },
      { heading:"Communication Coordination", items:["Respond to emails and inquiries in a timely, professional manner","Coordinate communication between internal teams, partners, and schools","Support follow-ups and task tracking"] },
      { heading:"Project Support", items:["Assist with education programmes and product rollouts","Track progress, deadlines, and deliverables","Ensure tasks are completed on schedule"] },
      { heading:"Data & Reporting", items:["Maintain accurate records and data tracking systems","Update spreadsheets and reporting tools","Support performance tracking across teams"] },
    ],
    requirements:["Strong organisational and multitasking skills","Excellent written and verbal communication","Proficiency with Google Workspace or Microsoft Office","Available during Eastern (EST) time zone hours","Reliable internet connection"],
    compensation:"Competitive rate based on experience.",
    apply:"info@mycheetahinc.com",
  },
  {
    id:"web-developer",
    icon:"🌐",
    tag:"Remote",
    tagColor:"blue",
    title:"Web Designer / Developer",
    subtitle:"FastTrack Literacy™ Platform",
    type:"Remote · Project-Based",
    location:"Remote — Global",
    start:"Immediate",
    overview:"CHEETAH® is seeking a skilled Web Designer/Developer to enhance the FastTrack Literacy™ website and integrate AI workflows. The ideal candidate combines strong design skills, clean code development, and AI-assisted workflows to deliver a high-quality digital experience for educators, parents, and global partners.",
    responsibilities:[
      { heading:"Website Design & Development", items:["Design and build responsive pages (mobile + desktop)","Integrate infographics, visuals, and structured content","Deliver clean, deployable code and editable design files"] },
      { heading:"Presentation Design", items:["Convert existing content into professional slide decks","Create pitch decks and training presentations","Ensure consistent branding and visual storytelling"] },
      { heading:"AI-Enhanced Workflow", items:["Use AI tools such as Claude, Canva AI, or Framer AI","Apply AI to accelerate quality — not replace thinking","Document AI workflow as part of deliverables"] },
    ],
    requirements:["Proven experience in website design and development","Strong portfolio (websites + presentations)","Experience with HTML/CSS/JS or Webflow","Understanding of UX/UI principles and mobile-first design","Familiarity with AI-assisted design tools"],
    compensation:"Project-based. Rate discussed on application.",
    apply:"info@mycheetahinc.com",
  },
];

const tagColors: Record<string, { bg: string; tc: string }> = {
  green: { bg:"#DCFCE7", tc:"#166534" },
  blue: { bg:"#DBEAFE", tc:"#1E40AF" },
  orange: { bg:"#FFF0E0", tc:"#C05A00" },
};

export default function Careers() {
  const [open, setOpen] = useState<string|null>(null);
  const active = roles.find(r => r.id === open);

  return (
    <>
      {/* HERO */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340 0%,#1A3A70 55%,#0C4A6E 100%)", padding:"80px 24px 64px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:400, height:400, borderRadius:"50%", background:"rgba(245,130,10,0.07)", pointerEvents:"none" }} />
        <div className="container-sm">

          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>🐆 Join the Team</div>
          <h1 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(28px,5vw,48px)", fontWeight:900, color:"white", marginBottom:18, lineHeight:1.1 }}>
            Build the Future of<br/><span style={{ color:"#F5820A" }}>Literacy Together</span>
          </h1>
          <p style={{ fontSize:"clamp(14px,1.8vw,17px)", color:"rgba(255,255,255,0.65)", lineHeight:1.8, maxWidth:520, margin:"0 auto 32px" }}>
            CHEETAH® is growing. We are looking for passionate, driven people across Jamaica, the United States, and globally to join our literacy mission.
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:clamp("16px","3vw","32px"), flexWrap:"wrap" }}>
            {[["5","Open Roles"],["3","Countries"],["May 2026","Next Intake"]].map(([n,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#F5820A" }}>{n}</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", letterSpacing:"1px", textTransform:"uppercase", marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION BANNER */}
      <section className="section-sm" style={{ background:"#FFF9F4", borderBottom:"1px solid #EDE0D0", textAlign:"center", padding:"28px 24px" }}>
        <p style={{ fontSize:"clamp(14px,1.7vw,16px)", color:"#5A5240", maxWidth:700, margin:"0 auto", lineHeight:1.8 }}>
          <strong style={{ color:"#0C2340" }}>Our mission:</strong> Every child can read. Every child must read. Join a team that is turning that belief into reality — one classroom, one parish, one nation at a time.
        </p>
      </section>

      {/* JOB LISTINGS */}
      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div className="section-chip">Open Positions</div>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(24px,4vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>Current Opportunities</h2>
            <p style={{ fontSize:"clamp(13px,1.6vw,16px)", color:"#8A7A6A", maxWidth:480, margin:"0 auto" }}>Click any role to read the full description and apply.</p>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {roles.map(role => (
              <div
                key={role.id}
                onClick={() => setOpen(role.id)}
                style={{ background:"#FFFBF7", border:`1.5px solid ${open===role.id ? "#F5820A" : "#EDE0D0"}`, borderRadius:16, padding:"clamp(18px,3vw,28px)", cursor:"pointer", transition:"all 0.2s", boxShadow: open===role.id ? "0 4px 24px rgba(245,130,10,0.1)" : "none" }}
              >
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:clamp("12px","2vw","20px") }}>
                    <div style={{ width:52, height:52, borderRadius:14, background:"#FFF0E0", border:"1px solid #EDE0D0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>{role.icon}</div>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                        <span style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(15px,2vw,18px)", fontWeight:800, color:"#0C2340" }}>{role.title}</span>
                        <span style={{ background:tagColors[role.tagColor].bg, color:tagColors[role.tagColor].tc, fontSize:10, fontWeight:700, padding:"2px 10px", borderRadius:50, letterSpacing:"0.5px" }}>{role.tag}</span>
                      </div>
                      <div style={{ fontSize:"clamp(12px,1.4vw,14px)", color:"#8A7A6A" }}>{role.subtitle} · {role.type}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0, flexWrap:"wrap" }}>
                    <div style={{ fontSize:"clamp(11px,1.3vw,13px)", color:"#8A7A6A" }}>📍 {role.location}</div>

                    <div style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"8px 20px", fontSize:13, fontWeight:700, fontFamily:"'Nunito',sans-serif", whiteSpace:"nowrap", cursor:"pointer" }}>
                      {open===role.id ? "Close ✕" : "View Role →"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE-OVER DRAWER */}
      {open && active && (
        <div style={{ position:"fixed", inset:0, zIndex:200, display:"flex", justifyContent:"flex-end" }}>
          <div onClick={() => setOpen(null)} style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.45)", backdropFilter:"blur(4px)" }} />
          <div style={{ position:"relative", width:"min(580px,100vw)", height:"100svh", background:"white", boxShadow:"-8px 0 48px rgba(0,0,0,0.15)", overflowY:"auto", padding:"clamp(24px,4vw,44px)" }}>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24 }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                  <span style={{ fontSize:28 }}>{active.icon}</span>
                  <span style={{ background:tagColors[active.tagColor].bg, color:tagColors[active.tagColor].tc, fontSize:11, fontWeight:700, padding:"3px 12px", borderRadius:50 }}>{active.tag}</span>
                </div>
                <h2 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(18px,3vw,26px)", fontWeight:900, color:"#0C2340", lineHeight:1.2, marginBottom:4 }}>{active.title}</h2>
                <div style={{ fontSize:"clamp(12px,1.5vw,14px)", color:"#8A7A6A" }}>{active.subtitle}</div>
              </div>
              <button onClick={() => setOpen(null)} style={{ background:"#F5EEE4", border:"none", borderRadius:"50%", width:36, height:36, fontSize:16, cursor:"pointer", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
            </div>

            {/* Meta */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:24 }}>
              {[["📍 Location", active.location],["⏰ Start Date", active.start],["💼 Type", active.type],["📧 Apply To", active.apply]].map(([l,v]) => (
                <div key={l} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:10, padding:"10px 14px" }}>
                  <div style={{ fontSize:10, color:"#A0927A", letterSpacing:"1px", textTransform:"uppercase", marginBottom:3 }}>{l}</div>
                  <div style={{ fontSize:"clamp(11px,1.3vw,13px)", fontWeight:600, color:"#0C2340" }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ width:40, height:2, background:"#F5820A", borderRadius:1, marginBottom:20 }} />

            {/* Overview */}
            <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", marginBottom:10 }}>Role Overview</h3>
            <p style={{ fontSize:"clamp(13px,1.5vw,15px)", color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>{active.overview}</p>

            {/* Responsibilities */}
            <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", marginBottom:14 }}>Key Responsibilities</h3>
            {active.responsibilities.map(section => (
              <div key={section.heading} style={{ marginBottom:16 }}>
                <div style={{ fontSize:12, fontWeight:700, color:"#F5820A", letterSpacing:"0.5px", textTransform:"uppercase", marginBottom:6 }}>{section.heading}</div>
                <ul style={{ listStyle:"none", padding:0 }}>
                  {section.items.map(item => (
                    <li key={item} style={{ display:"flex", gap:8, marginBottom:5, fontSize:"clamp(12px,1.4vw,14px)", color:"#5A5240", lineHeight:1.7 }}>
                      <span style={{ color:"#F5820A", flexShrink:0, marginTop:2 }}>→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Requirements */}
            <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", margin:"20px 0 12px" }}>Requirements</h3>
            <ul style={{ listStyle:"none", padding:0, marginBottom:20 }}>
              {active.requirements.map(r => (
                <li key={r} style={{ display:"flex", gap:8, marginBottom:6, fontSize:"clamp(12px,1.4vw,14px)", color:"#5A5240", lineHeight:1.7 }}>
                  <span style={{ color:"#22C55E", flexShrink:0, marginTop:2 }}>✓</span>{r}
                </li>
              ))}
            </ul>

            {/* Compensation */}
            <div style={{ background:"#FFF0E0", borderLeft:"3px solid #F5820A", borderRadius:"0 10px 10px 0", padding:"12px 16px", marginBottom:24 }}>
              <div style={{ fontSize:11, color:"#A0927A", letterSpacing:"1px", textTransform:"uppercase", marginBottom:4 }}>Compensation</div>
              <div style={{ fontSize:"clamp(13px,1.5vw,14px)", color:"#0C2340", fontWeight:600 }}>{active.compensation}</div>
            </div>

            {/* Apply CTA */}
            <div style={{ background:"#FFF0E0", border:"1px solid #EDE0D0", borderRadius:12, padding:"14px 18px", textAlign:"center" }}>
              <div style={{ fontSize:12, color:"#8A7A6A", marginBottom:4 }}>To apply, send your CV and portfolio to:</div>
              <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340" }}>info@mycheetahinc.com</div>
            </div>
          </div>
        </div>
      )}

      {/* BOTTOM CTA */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", textAlign:"center" }}>
        <div className="container-sm">
          <h2 style={{ fontFamily:"'Nunito',sans-serif", fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"white", marginBottom:14 }}>
            Don't See the Right Role?
          </h2>
          <p style={{ fontSize:"clamp(13px,1.6vw,16px)", color:"rgba(255,255,255,0.6)", lineHeight:1.8, marginBottom:28 }}>
            We are always looking for passionate people who believe in our mission. Send us your details and we will be in touch.
          </p>
          <Link href="/contact" style={{ background:"#F5820A", color:"white", textDecoration:"none", padding:"14px 32px", borderRadius:50, fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", display:"inline-block" }}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}

function clamp(a: string, b: string, c: string) { return `clamp(${a},${b},${c})`; }

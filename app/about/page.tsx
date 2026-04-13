"use client";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Our Story</div>
          <h1 style={{ fontSize:"clamp(30px,5vw,50px)", fontWeight:900, color:"white", marginBottom:20 }}>About <span style={{ color:"#F5820A" }}>CHEETAH®</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>CHEETAH® (Connect to Higher Education, Electronic Tools, Apps & Help) Toys & More, LLC is a global education and technology company designing complete literacy ecosystems for children worldwide.</p>
        </div>
      </section>

      <section className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🏢 Who We Are</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>A Global Literacy Ecosystem</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Founded in the United States and Jamaica in 2014 and 2015, CHEETAH® has grown from national assessment workbooks (Primary Exit Profile) into textbooks and a comprehensive literacy system with over 90 resources.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>These resources are customised for markets including Jamaica, the USA, and several countries in Africa. Its flagship program, <strong>FastTrack Literacy™</strong>, is delivered in Jamaica as <strong>JamDER™</strong> (Jamaica Decodable and Early Readers).</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85 }}>CHEETAH® provides a full ecosystem of tools and training — combining curriculum, content, assessment, technology, and AI to improve reading outcomes at scale.</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[{icon:"📖",title:"Evidence-Based Programs",desc:"Posters, flashcards, reggae phoneme songs, and decodable readers (fiction and nonfiction)"},{icon:"🌍",title:"Customised Country Editions",desc:"Including JamDER™ and other localised versions for Jamaica, USA, and Africa"},{icon:"🤖",title:"Technology & AI Integration",desc:"iCHEETAH™, tablets, apps, and digital training tools"},{icon:"🏫",title:"ICT Solutions for Schools",desc:"Mobile learning carts, projectors, and all-in-one systems"},{icon:"🤝",title:"Government Partnerships",desc:"National mobilisation across thousands of schools"},{icon:"❤️",title:"Community Literacy Initiatives",desc:"School donations, scholarships, and media rooms with books and tablets"}].map(w=>(
                <div key={w.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:16, display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ fontSize:22, flexShrink:0 }}>{w.icon}</div>
                  <div><h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:3 }}>{w.title}</h4><p style={{ fontSize:12, color:"#5A5240", lineHeight:1.6 }}>{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section" style={{ background:"#FFF9F4" }}>
        <div className="container">
          <div className="grid-2">
            <div style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", borderRadius:24, padding:40 }}>
              <div style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg,#F5820A,#FF9F2F)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, marginBottom:20 }}>👩‍💼</div>
              <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"white", marginBottom:6 }}>Paulette Trowers-Lawrence, JD</h3>
              <div style={{ fontSize:13, color:"#F5820A", fontWeight:600, marginBottom:20 }}>Founder & CEO, CHEETAH Toys & More, LLC</div>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[{icon:"🏆",text:"USA Presidential Lifetime Achievement Award (2024)"},{icon:"🎓",text:"Honorary Doctorate of Humanitarianism"},{icon:"⚖️",text:"Juris Doctor with Honors"},{icon:"📚",text:"1,100+ Educational Resources Developed"},{icon:"🌍",text:"30+ Years Corporate & Business Experience"}].map(a=>(
                  <div key={a.text} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:13, color:"rgba(255,255,255,0.8)" }}><span style={{ flexShrink:0 }}>{a.icon}</span>{a.text}</div>
                ))}
              </div>
              <div style={{ marginTop:20, fontSize:12, color:"rgba(255,255,255,0.5)" }}>info@mycheetahinc.com · 876-909-6311 · 860-781-1276</div>
            </div>
            <div>
              <div className="section-chip">🌟 Our Founder</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>Visionary. Educator. Global Leader.</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Paulette Trowers-Lawrence, JD is a global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>With over 30 years of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85 }}>Her work continues to impact classrooms, communities, and education systems across Jamaica, the United States, and several African countries.</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0", marginTop:20 }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"Every child can read, and every child must read." — Our founding mission</p>
              </div>
              <div style={{ marginTop:24 }}>
                <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" className="btn-orange">Visit CHEETAH® →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div className="grid-auto">
            {[["2014/15","Founded in USA & Jamaica"],["90+","Educational Resources"],["1,100+","Total Resources Developed"],["3+","Countries Served"],["770M+","Global Literacy Need We're Addressing"],["#1","Mission: Every Child Can Read"]].map(([n,l])=>(
              <div key={l} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:16, padding:24, textAlign:"center" }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:28, fontWeight:900, color:"#F5820A" }}>{n}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Want to Partner With CHEETAH®?</h2>
        <p style={{ fontSize:15, color:"#5A5240", marginBottom:28, maxWidth:480, margin:"0 auto 28px" }}>Whether you run a school, an NGO, or a government literacy programme — we want to hear from you.</p>
        <Link href="/contact" className="btn-orange">Get In Touch →</Link>
      </section>
    </>
  );
}

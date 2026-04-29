"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"flex", justifyContent:"center", marginBottom:20 }}>
            <Image src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy™" width={320} height={100} style={{ height:64, width:"auto", objectFit:"contain", filter:"brightness(0) invert(1)" }} />
          </div>


          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Our Story</div>
          <h1 style={{ fontSize:"clamp(30px,5vw,50px)", fontWeight:900, color:"white", marginBottom:20 }}>About <span style={{ color:"#F5820A" }}>CHEETAH®</span></h1>
          <p style={{ fontSize:"clamp(14px,2vw,17px)", color:"rgba(255,255,255,0.8)", lineHeight:1.8 }}>CHEETAH® (Connect to Higher Education, Electronic Tools, Apps & Help) Toys & More, LLC is a global education and technology company designing complete literacy ecosystems for children worldwide.</p>
        </div>
      </section>

      <section id="who-we-are" className="section" style={{ background:"white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-chip">🏢 Who We Are</div>
              <div style={{ marginBottom:16 }}>
                <Image src="/images/cheetah-logo.png" alt="CHEETAH® Toys & More, LLC" width={120} height={60} style={{ height:56, width:"auto", objectFit:"contain" }} />
              </div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:16 }}>A Global Literacy Ecosystem</h2>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>CHEETAH® (Connect to Higher Education, Electronic Tools, Apps & Help) Toys & More, LLC is a global education and technology company that designs complete literacy ecosystems—combining curriculum, content, assessment, technology, and AI to improve reading outcomes at scale.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Founded in the United States and Jamaica in 2014 and 2015, respectively, CHEETAH® has grown from national assessment workbooks (Primary Exit Profile) into textbooks and a comprehensive literacy system with over 90 resources. These resources are customised for markets including Jamaica, the USA, Kenya, Uganda, and other countries.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:0 }}>Its flagship programme, <strong>FastTrack Literacy™</strong>, is delivered in Jamaica as <strong>JamDER™ (Jamaica Decodable and Early Readers)</strong>.</p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {[{icon:"📖",title:"Evidence-Based Programmes",desc:"Posters, flashcards, reggae phoneme songs, and decodable readers (fiction and nonfiction)"},{icon:"🌍",title:"Customised Country Editions",desc:"Including JamDER™ and other localised versions"},{icon:"🤖",title:"Technology & AI Integration",desc:"iCHEETAH™, tablets, apps, and digital training"},{icon:"🏫",title:"ICT Solutions for Schools",desc:"Mobile learning carts, projectors, and all-in-one systems"},{icon:"🤝",title:"Government Partnerships",desc:"National mobilisation across thousands of schools"},{icon:"❤️",title:"Community Literacy Initiatives",desc:"School donations, scholarships, and a media room with books and tablets developed in collaboration with the Jamaican Ministry of Education"}].map(w=>(
                <div key={w.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:12, padding:16, display:"flex", gap:12, alignItems:"flex-start" }}>
                  <div style={{ fontSize:22, flexShrink:0 }}>{w.icon}</div>
                  <div><h4 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:3 }}>{w.title}</h4><p style={{ fontSize:12, color:"#5A5240", lineHeight:1.6 }}>{w.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }} id="ecosystem">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🌍 A Global Literacy Ecosystem</div>
            <h2 style={{ fontSize:"clamp(24px,4vw,38px)", fontWeight:900, color:"#0C2340" }}>The CHEETAH® Literacy Ecosystem</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:600, margin:"12px auto 24px", lineHeight:1.7 }}>A comprehensive framework combining educational resources, technological innovations, and extensive training to improve reading outcomes at scale — across Kenya, Uganda, Jamaica, the USA, and beyond.</p>
          </div>
          <Image src="/images/image13.png" alt="The CHEETAH Literacy Ecosystem — A Global Framework" width={1200} height={680} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)", marginBottom:32 }} />
        </div>
      </section>

      <section className="section" style={{ background:"white" }} id="fasttrack">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>📚 What is FastTrack Literacy™</div>
            <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>A Complete Literacy System</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:560, margin:"0 auto", lineHeight:1.7 }}>A comprehensive, Science of Reading–aligned system combining decodable books, reggae-inspired phoneme songs, AI-powered technology, flashcards, and structured learning tools.</p>
          </div>
          <Image src="/images/jamder-books.png" alt="FastTrack Literacy™ — JamDER and C-DER Books Collection" width={1400} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)" }} />
          <p style={{ textAlign:"center", marginTop:20, fontSize:14, color:"#5A5240", lineHeight:1.7 }}>Founded by <strong>Paulette Trowers-Lawrence, JD</strong>, CHEETAH® is driven by one mission: <strong>every child can learn to read and write, and every child must be given the resources to succeed.</strong></p>
        </div>
      </section>

      <section className="section" style={{ background:"#FFF9F4" }} id="founder">
        <div className="container">
          <div className="grid-2">
            <div>
              <Image src="/images/paulette-uganda.jpg" alt="Paulette Trowers-Lawrence, JD — Founder & CEO, CHEETAH®" width={600} height={800} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.1)" }} />
            </div>
            <div>
              <div className="section-chip">🌟 Who is Our Founder &amp; CEO</div>
              <h2 style={{ fontSize:"clamp(22px,3.5vw,34px)", fontWeight:900, color:"#0C2340", marginBottom:6 }}>Paulette Trowers-Lawrence, JD</h2>
              <div style={{ fontSize:13, color:"#F5820A", fontWeight:700, marginBottom:20 }}>Founder &amp; CEO, CHEETAH Toys &amp; More, LLC</div>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>Paulette Trowers-Lawrence, JD is the Founder and CEO of CHEETAH Toys &amp; More, LLC and the visionary behind FastTrack Literacy™.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>A trained USA lawyer, global literacy leader, author, entrepreneur, and education innovator committed to improving reading outcomes for children worldwide.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>She holds a <strong>Juris Doctor with honors</strong>, is a recipient of the <strong>USA Presidential Lifetime Achievement Award (2024)</strong>, and has been awarded an <strong>Honorary Doctorate of Humanitarianism</strong>.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>With over 30 years of corporate and business experience, she has led the development of more than <strong>1,100 educational resources</strong>, integrating curriculum, technology, and AI to support learning across diverse environments.</p>
              <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:24 }}>Her work continues to impact classrooms, communities, and education systems across Jamaica, the United States, Kenya, Uganda, and beyond.</p>
              <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0", marginBottom:24 }}>
                <p style={{ fontSize:14, fontStyle:"italic", color:"#0C2340", lineHeight:1.7 }}>"Every child can read, and every child must read." — Paulette Trowers-Lawrence, JD</p>
              </div>
              <a href="https://mycheetahinc.com" target="_blank" rel="noopener noreferrer" className="btn-navy" style={{ textDecoration:"none" }}>Visit CHEETAH® →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"white" }} id="team">
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div className="section-chip" style={{ margin:"0 auto 16px" }}>🤝 Our Team Members and Partners</div>
            <h2 style={{ fontSize:"clamp(22px,4vw,36px)", fontWeight:900, color:"#0C2340", marginBottom:12 }}>A Global Network</h2>
            <p style={{ fontSize:15, color:"#5A5240", maxWidth:680, margin:"0 auto", lineHeight:1.7 }}>CHEETAH® is supported by a diverse network of consultants and collaborators across Jamaica, the United States, India, Pakistan, Indonesia, Uganda, and England.</p>
          </div>
          <div className="grid-auto">
            {[
              { icon:"✍️", title:"Editorial & Design", desc:"Experienced writers, editors, graphic designers, book designers, and illustrators. Our Chief Editor, Fiona Porter-Lawson, provides editorial oversight and reviews most literary works prior to publication." },
              { icon:"📣", title:"Administrative & Marketing", desc:"A dedicated core of administrative and marketing professionals supporting programme development and global outreach." },
              { icon:"🤖", title:"Technology Team", desc:"Our technology team is based in Shenzhen, China, operating under a licensing arrangement to produce CHEETAH®-branded devices." },
              { icon:"🏦", title:"Development Bank of Jamaica", desc:"CHEETAH® gratefully acknowledges the Development Bank of Jamaica for its financial support, instrumental in enabling production of our integrated ecosystem including hardware, books, and digital content." },
              { icon:"🎓", title:"HEDCO, Hartford", desc:"We recognise the continued support of HEDCO in Hartford, whose collaboration has been integral to our growth and impact." },
              { icon:"🌍", title:"Key Partners", desc:"Ministries of Education, Jamaica Teachers' Association, Upper Albany Merchants, NCB Bank, JMMB, the Private Sector Organisation of Jamaica, and others across multiple regions." },
            ].map(t=>(
              <div key={t.title} style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:16, padding:24 }}>
                <div style={{ fontSize:32, marginBottom:14 }}>{t.icon}</div>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:15, color:"#0C2340", marginBottom:8 }}>{t.title}</h3>
                <p style={{ fontSize:13, color:"#5A5240", lineHeight:1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)" }}>
        <div className="container">
          <div className="grid-auto">
            {[["2014/15","Founded in USA & Jamaica"],["90+","Educational Resources"],["1,100+","Total Resources Developed"],["770M+","People globally lacking literacy"],["5","Countries Served"]].map(([n,l])=>(
              <div key={l} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:16, padding:24, textAlign:"center" }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontSize:28, fontWeight:900, color:"#F5820A" }}>{n}</div>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.6)", marginTop:6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="section-sm" style={{ background:"#FFF0E0", textAlign:"center" }}>
        <div className="container-xs">
          <div className="section-chip" style={{ margin:"0 auto 16px" }}>🤝 How to Partner with Us</div>
          <h2 style={{ fontSize:"clamp(20px,3vw,30px)", fontWeight:900, color:"#0C2340", marginBottom:14 }}>Want to Partner With CHEETAH®?</h2>
          <p style={{ fontSize:15, color:"#5A5240", marginBottom:32, maxWidth:480, margin:"0 auto 32px" }}>Whether you run a school, an NGO, or a government literacy programme — we want to hear from you. We work with Ministries of Education, community organisations, and private sector partners to expand literacy access worldwide.</p>
          <Image src="/images/team-partners.png" alt="Stronger Together — Collaborating Today for a Better Tomorrow" width={900} height={560} style={{ width:"100%", height:"auto", borderRadius:16, boxShadow:"0 8px 32px rgba(0,0,0,0.08)", marginBottom:32 }} />
          <Link href="/contact" className="btn-orange">Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}

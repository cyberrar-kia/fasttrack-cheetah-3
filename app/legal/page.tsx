export default function Legal() {
  return (
    <>
      <section className="section" style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", padding:"80px 24px 60px", textAlign:"center" }}>
        <div className="container-sm">
          <div style={{ display:"inline-flex", background:"rgba(245,130,10,0.15)", border:"1px solid rgba(245,130,10,0.3)", color:"#FFB366", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"6px 14px", borderRadius:50, marginBottom:20 }}>Legal</div>
          <h1 style={{ fontSize:"clamp(28px,5vw,44px)", fontWeight:900, color:"white", marginBottom:18 }}>Privacy Policy & <span style={{ color:"#F5820A" }}>Legal Notice</span></h1>
        </div>
      </section>
      <section className="section" style={{ background:"white" }}>
        <div className="container-xs">
          <div style={{ background:"#FFF9F4", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(24px,5vw,48px)" }}>
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340", marginBottom:8 }}>Privacy Policy</h2>
            <p style={{ fontSize:13, color:"#A0927A", marginBottom:28 }}>Effective Date: April 19, 2026</p>
            <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>FastTrack Literacy™ is a program of CHEETAH® Toys & More, LLC ("we," "our," or "us"). JamDER© is the customised version for Jamaica. We respect your privacy and are committed to protecting your personal information.</p>
            {[
              {title:"1. Information We Collect", body:"We may collect: Name, Email address, Role (Parent, Teacher, School, Ministry), any information you voluntarily provide, and technical data (browser, device, usage)."},
              {title:"2. How We Use Your Information", body:"We use your information to provide access to resources, communicate with you, respond to inquiries, and improve services."},
              {title:"3. Legal Basis (for international users)", body:"We process data based on consent and legitimate interest (education and communication)."},
              {title:"4. Sharing of Information", body:"We do not sell your data. We may share with service providers (email, hosting) and legal authorities if required."},
              {title:"5. Data Security", body:"We take reasonable measures to protect your data."},
              {title:"6. Data Retention", body:"We retain data only as long as necessary."},
              {title:"7. Your Rights", body:"You may request access, request correction, request deletion, and opt out of communications."},
              {title:"8. Cookies and Tracking", body:"We may use cookies and analytics tools."},
              {title:"9. Third-Party Services", body:"We may use external platforms (e.g., flipbooks, analytics)."},
              {title:"10. Children's Privacy", body:"We do not knowingly collect data directly from children."},
              {title:"11. International Users", body:"Your data may be processed in other countries."},
              {title:"12. Contact", body:"CHEETAH® Toys & More, LLC · Email: info@fasttrackliteracy.com · Website: https://fasttrackliteracy.com"},
              {title:"13. Updates", body:"We may update this policy periodically."},
            ].map(item => (
              <div key={item.title} style={{ marginBottom:20, paddingBottom:20, borderBottom:"1px solid #EDE0D0" }}>
                <h3 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:16, color:"#0C2340", marginBottom:8 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:"#5A5240", lineHeight:1.8 }}>{item.body}</p>
              </div>
            ))}
            <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:22, color:"#0C2340", marginTop:32, marginBottom:20 }}>Intellectual Property Notice</h2>
            <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>All content featured on this site and within the FastTrack Phonics™ program — including, but not limited to, the FastTrack Train character, JamDER™ and C-DER™ books, logos, illustrations, digital assets, songs, and instructional materials — is the intellectual property of <strong>CHEETAH® Purrrrrrr Publishing</strong>, a division of CHEETAH Toys & More, LLC.</p>
            <p style={{ fontSize:15, color:"#5A5240", lineHeight:1.85, marginBottom:16 }}>These materials are <strong>protected by copyright, trademark, and other applicable laws</strong> in Jamaica, the United States, and internationally. No part may be reproduced, stored, or transmitted in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without <strong>prior written permission</strong> from the publisher.</p>
            <div style={{ background:"#FFF0E0", borderLeft:"4px solid #F5820A", padding:"16px 20px", borderRadius:"0 12px 12px 0" }}>
              <p style={{ fontSize:14, fontWeight:700, color:"#0C2340" }}>© 2025 CHEETAH Toys & More, LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

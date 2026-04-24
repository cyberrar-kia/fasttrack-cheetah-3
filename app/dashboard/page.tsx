import { redirect } from "next/navigation";
import { getUserAccess } from "@/lib/supabase/access";
import { signOut } from "@/app/actions/auth";
import { initializePayment } from "@/app/actions/payment";
import Link from "next/link";

const books = [
  { title:"Teacher's Helper", vol:"Volume 1", url:"https://heyzine.com/flip-book/0a66e4e5a7.html", color:"#DBEAFE" },
  { title:"Teacher's Helper", vol:"Volume 2", url:"https://heyzine.com/flip-book/01cc4943e4.html", color:"#DCFCE7" },
  { title:"Pupil's Helper", vol:"Volume 1", url:"https://heyzine.com/flip-book/c3b25db878.html", color:"#FEF3C7" },
  { title:"Pupil's Helper", vol:"Volume 2", url:"https://heyzine.com/flip-book/16a9bc1676.html", color:"#FCE7F3" },
  { title:"Pupil's Helper", vol:"Volume 3", url:"https://heyzine.com/flip-book/639bcdbb20.html", color:"#EDE9FE" },
  { title:"JamDER™ Reader", vol:"Special Edition", url:"https://heyzine.com/flip-book/eda08f4c87.html", color:"#FFF0E0" },
];

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ payment?: string; updated?: string; already_paid?: string }>;
}) {
  const { user, hasAccess, isLoggedIn } = await getUserAccess();
  const params = await searchParams;

  if (!isLoggedIn) redirect("/login");

  const paymentStatus = params.payment;
  const updated = params.updated;

  return (
    <div style={{ minHeight:"100svh", background:"#FFF9F4" }}>
      {/* Nav */}
      <nav style={{ background:"rgba(12,35,64,0.97)", padding:"0 clamp(16px,4vw,40px)", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/">
          <img src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy" style={{ height:40, width:"auto", objectFit:"contain" }} />
        </Link>
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <span style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>{user.email}</span>
          <form action={signOut}>
            <button type="submit" style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.2)", color:"rgba(255,255,255,0.6)", padding:"7px 16px", borderRadius:50, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
              Log out
            </button>
          </form>
        </div>
      </nav>

      <div style={{ maxWidth:1100, margin:"0 auto", padding:"clamp(32px,5vh,56px) clamp(16px,4vw,40px)" }}>

        {/* Status messages */}
        {paymentStatus === "success" && (
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"16px 20px", marginBottom:24, fontSize:14, color:"#166534", fontFamily:"'Nunito',sans-serif", fontWeight:700 }}>
            🎉 Payment successful! You now have full access to all books.
          </div>
        )}
        {paymentStatus === "failed" && (
          <div style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:12, padding:"16px 20px", marginBottom:24, fontSize:14, color:"#B91C1C" }}>
            Payment was not completed. Please try again.
          </div>
        )}
        {updated && (
          <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:12, padding:"16px 20px", marginBottom:24, fontSize:14, color:"#166534" }}>
            ✅ Password updated successfully.
          </div>
        )}

        {/* Header */}
        <div style={{ marginBottom:32 }}>
          <h1 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(22px,4vw,32px)", color:"#0C2340", marginBottom:6 }}>
            Hello, {user.user_metadata?.full_name?.split(" ")[0] || "Reader"} 👋
          </h1>
          <p style={{ fontSize:14, color:"#8A7A6A" }}>{hasAccess ? "You have full access to all JamDER™ books." : "Get full access to unlock all books below."}</p>
        </div>

        {/* Payment CTA if not paid */}
        {!hasAccess && (
          <div style={{ background:"linear-gradient(135deg,#0C2340,#1A3A70)", borderRadius:20, padding:"clamp(24px,4vw,36px)", marginBottom:32, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:20 }}>
            <div>
              <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(18px,3vw,24px)", color:"white", marginBottom:6 }}>Unlock Full Access</div>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.6)", maxWidth:420, lineHeight:1.7 }}>Get complete access to all 6 JamDER™ books — every page, every volume. One payment, lifetime access.</p>
            </div>
            <form action={initializePayment}>
              <button type="submit" style={{ background:"#F5820A", color:"white", border:"none", borderRadius:50, padding:"14px 32px", fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor:"pointer", whiteSpace:"nowrap" }}>
                Get Full Access →
              </button>
            </form>
          </div>
        )}

        {/* Books grid */}
        <h2 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(18px,3vw,24px)", color:"#0C2340", marginBottom:20 }}>
          {hasAccess ? "Your Books" : "Book Preview"}
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(clamp(240px,28vw,300px),1fr))", gap:16 }}>
          {books.map(book => (
            <div key={book.url} style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:16, overflow:"hidden" }}>
              <div style={{ background:book.color, padding:"20px", display:"flex", alignItems:"center", justifyContent:"center", height:120 }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:32, color:"#0C2340", opacity:0.2 }}>📗</div>
              </div>
              <div style={{ padding:"14px 16px" }}>
                <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14, color:"#0C2340", marginBottom:2 }}>{book.title}</div>
                <div style={{ fontSize:12, color:"#8A7A6A", marginBottom:12 }}>{book.vol}</div>
                {hasAccess ? (
                  <a href={book.url} target="_blank" rel="noopener noreferrer" style={{ display:"block", background:"#F5820A", color:"white", textAlign:"center", textDecoration:"none", padding:"9px", borderRadius:50, fontSize:13, fontWeight:700, fontFamily:"'Nunito',sans-serif" }}>
                    Read Now →
                  </a>
                ) : (
                  <div style={{ background:"#F5EEE4", color:"#8A7A6A", textAlign:"center", padding:"9px", borderRadius:50, fontSize:12, fontFamily:"'Nunito',sans-serif" }}>
                    🔒 Locked
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

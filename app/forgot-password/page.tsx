"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import { resetPassword } from "../actions/auth";

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await resetPassword(formData);
      if (result?.error) setError(result.error);
      if (result?.success) setSuccess(result.success);
    });
  }

  return (
    <div style={{ minHeight:"100svh", background:"#FFF9F4", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      <div style={{ width:"100%", maxWidth:420 }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <Link href="/">
            <img src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy" style={{ height:48, width:"auto", objectFit:"contain" }} />
          </Link>
        </div>

        <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(24px,5vw,40px)" }}>
          <h1 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(20px,3vw,24px)", color:"#0C2340", marginBottom:6 }}>Reset your password</h1>
          <p style={{ fontSize:14, color:"#8A7A6A", marginBottom:28 }}>Enter your email and we'll send a reset link.</p>

          {error && (
            <div style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:10, padding:"12px 16px", marginBottom:20, fontSize:13, color:"#B91C1C" }}>
              {error}
            </div>
          )}

          {success ? (
            <div style={{ background:"#F0FDF4", border:"1px solid #BBF7D0", borderRadius:10, padding:"16px", marginBottom:20, fontSize:14, color:"#166534", lineHeight:1.7 }}>
              ✅ {success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
              <div>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#0C2340", marginBottom:6 }}>Email address</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  style={{ width:"100%", padding:"11px 14px", border:"1px solid #EDE0D0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", background:"#FAFAFA" }}
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                style={{ background: isPending ? "#C8B89A" : "#F5820A", color:"white", border:"none", borderRadius:50, padding:"13px", fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor: isPending ? "not-allowed" : "pointer" }}
              >
                {isPending ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          )}

          <p style={{ textAlign:"center", fontSize:13, color:"#8A7A6A", marginTop:20 }}>
            <Link href="/login" style={{ color:"#F5820A", fontWeight:700, textDecoration:"none" }}>← Back to login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

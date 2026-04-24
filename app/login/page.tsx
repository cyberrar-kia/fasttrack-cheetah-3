"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import { signIn } from "../actions/auth";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await signIn(formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div style={{ minHeight:"100svh", background:"#FFF9F4", display:"flex", alignItems:"center", justifyContent:"center", padding:"24px" }}>
      <div style={{ width:"100%", maxWidth:420 }}>
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <Link href="/">
            <img src="/images/fasttrack-literacy-logo.png" alt="FastTrack Literacy" style={{ height:48, width:"auto", objectFit:"contain" }} />
          </Link>
        </div>

        <div style={{ background:"white", border:"1px solid #EDE0D0", borderRadius:20, padding:"clamp(24px,5vw,40px)" }}>
          <h1 style={{ fontFamily:"'Nunito',sans-serif", fontWeight:900, fontSize:"clamp(20px,3vw,26px)", color:"#0C2340", marginBottom:6 }}>Welcome back</h1>
          <p style={{ fontSize:14, color:"#8A7A6A", marginBottom:28 }}>Log in to access your FastTrack books.</p>

          {error && (
            <div style={{ background:"#FEF2F2", border:"1px solid #FECACA", borderRadius:10, padding:"12px 16px", marginBottom:20, fontSize:13, color:"#B91C1C" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <div>
              <label style={{ display:"block", fontSize:13, fontWeight:600, color:"#0C2340", marginBottom:6 }}>Email address</label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                style={{ width:"100%", padding:"11px 14px", border:"1px solid #EDE0D0", borderRadius:10, fontSize:14, color:"#3A3020", outline:"none", fontFamily:"inherit", background:"#FAFAFA" }}
              />
            </div>

            <div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                <label style={{ fontSize:13, fontWeight:600, color:"#0C2340" }}>Password</label>
                <Link href="/forgot-password" style={{ fontSize:12, color:"#F5820A", textDecoration:"none" }}>Forgot password?</Link>
              </div>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                style={{ width:"100%", padding:"11px 14px", border:"1px solid #EDE0D0", borderRadius:10, fontSize:14, color:"#3A3020", outline:"none", fontFamily:"inherit", background:"#FAFAFA" }}
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              style={{ background: isPending ? "#C8B89A" : "#F5820A", color:"white", border:"none", borderRadius:50, padding:"13px", fontSize:15, fontWeight:800, fontFamily:"'Nunito',sans-serif", cursor: isPending ? "not-allowed" : "pointer", marginTop:4, transition:"background 0.2s" }}
            >
              {isPending ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p style={{ textAlign:"center", fontSize:13, color:"#8A7A6A", marginTop:20 }}>
            Don't have an account?{" "}
            <Link href="/register" style={{ color:"#F5820A", fontWeight:700, textDecoration:"none" }}>Create one →</Link>
          </p>
        </div>

        <p style={{ textAlign:"center", marginTop:20, fontSize:12, color:"#A0927A" }}>
          <Link href="/" style={{ color:"#A0927A" }}>← Back to FastTrack Literacy™</Link>
        </p>
      </div>
    </div>
  );
}

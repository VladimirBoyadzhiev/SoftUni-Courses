:root {
  --bg:#070b16; --panel:#0f172a; --text:#e5ecff; --muted:#9fb0db;
  --acc1:#3b82f6; --acc2:#7c3aed; --line:#233153;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:'Inter',system-ui,sans-serif;background:radial-gradient(circle at 80% -10%,#1e3a8a33,transparent 40%),var(--bg);color:var(--text)}
.container{width:min(1120px,92%);margin:auto}
.hero{position:relative;min-height:74vh;overflow:hidden;border-bottom:1px solid var(--line)}
.hero-bg{position:absolute;inset:0;background:linear-gradient(120deg,#1e1b4b,#0c4a6e 45%,#312e81);opacity:.85}
.hero::after{content:"";position:absolute;inset:0;background-image:radial-gradient(#ffffff22 1px,transparent 1px);background-size:28px 28px;animation:drift 30s linear infinite}
@keyframes drift{from{transform:translateY(0)}to{transform:translateY(28px)}}
.nav,.hero-content{position:relative;z-index:2}
.nav{display:flex;justify-content:space-between;align-items:center;padding:1.2rem 0}
.brand{font-weight:700}
.hero-content{padding:6rem 0 4rem}
.kicker{color:#c7d2fe;font-weight:600}
h1{font-size:clamp(2rem,4vw,3.4rem);max-width:900px;margin:.6rem 0}
.subtitle{max-width:760px;color:#d4dcff;font-size:1.08rem}
.btn{display:inline-block;background:linear-gradient(90deg,var(--acc1),var(--acc2));color:white;padding:.8rem 1.2rem;border-radius:10px;text-decoration:none;font-weight:600;border:none}
.btn-outline{background:transparent;border:1px solid #9fb0db66}
.section{padding:4rem 0}
h2{font-size:clamp(1.6rem,2.8vw,2.3rem);margin:.2rem 0 1rem}
.section-sub,p{color:var(--muted);line-height:1.7}
.grid{display:grid;gap:1rem}
.cards-3{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.cards-4{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.card,.panel{background:linear-gradient(180deg,#101a33,#0c1326);border:1px solid var(--line);border-radius:14px;padding:1rem}
.card h3,.panel h3{margin:.3rem 0}
.usecase{font-size:.9rem;color:#cad6ff;background:#1f2b4d;padding:.45rem .6rem;border-radius:8px;display:block;margin-top:.6rem}
.infra-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem}
ul{padding-left:1rem;margin:.4rem 0}
li{margin:.45rem 0;color:#d4ddff}
.cta{background:linear-gradient(180deg,#0d1427,#0d142710);border:1px solid var(--line);border-radius:16px;padding:2rem}
.footer{padding:1.4rem;text-align:center;color:#8fa1cc;border-top:1px solid var(--line);margin-top:3rem}
.reveal{opacity:0;transform:translateY(22px);transition:.65s ease}
.reveal.visible{opacity:1;transform:none}

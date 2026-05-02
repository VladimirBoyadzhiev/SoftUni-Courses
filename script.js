:root { --bg:#070b16; --panel:#0f172a; --text:#e5ecff; --muted:#9fb0db; --acc1:#3b82f6; --acc2:#7c3aed; --line:#233153; }
*{box-sizing:border-box} html{scroll-behavior:smooth}
body{margin:0;font-family:'Inter',system-ui,sans-serif;background:radial-gradient(circle at 80% -10%,#1e3a8a33,transparent 40%),var(--bg);color:var(--text)}
.container{width:min(1120px,92%);margin:auto}.hero{position:relative;min-height:70vh;overflow:hidden;border-bottom:1px solid var(--line)}
.hero-bg{position:absolute;inset:0;background:linear-gradient(120deg,#1e1b4b,#0c4a6e 45%,#312e81);opacity:.85}
.hero::after{content:"";position:absolute;inset:0;background-image:radial-gradient(#ffffff22 1px,transparent 1px);background-size:28px 28px;animation:drift 30s linear infinite}
@keyframes drift{from{transform:translateY(0)}to{transform:translateY(28px)}}
.nav,.hero-content{position:relative;z-index:2}.nav{display:flex;justify-content:space-between;padding:1.2rem 0}.brand{font-weight:700}.hero-content{padding:5.5rem 0 4rem}
h1{font-size:clamp(2rem,4vw,3.4rem)}.subtitle{max-width:760px;color:#d4dcff}.kicker{color:#c7d2fe}
.btn{display:inline-block;background:linear-gradient(90deg,var(--acc1),var(--acc2));color:#fff;padding:.8rem 1.2rem;border-radius:10px;text-decoration:none;font-weight:600}.btn-outline{background:transparent;border:1px solid #9fb0db66}
.section{padding:3.5rem 0}h2{font-size:clamp(1.5rem,2.8vw,2.2rem)}.section-sub,p{color:var(--muted);line-height:1.7}
.grid{display:grid;gap:1rem}.cards-3{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.cards-4{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.card{background:linear-gradient(180deg,#101a33,#0c1326);border:1px solid var(--line);border-radius:14px;overflow:hidden}
.card .content{padding:1rem}.card img{width:100%;height:165px;object-fit:cover;background:#1c2744}.card button{all:unset;cursor:pointer;display:block}
.usecase{font-size:.9rem;color:#cad6ff;background:#1f2b4d;padding:.45rem .6rem;border-radius:8px;display:block;margin-top:.6rem}
.tag{display:inline-block;background:#213056;color:#c5d4ff;padding:.2rem .5rem;border-radius:99px;font-size:.75rem}
.cta{background:linear-gradient(180deg,#0d1427,#0d142710);border:1px solid var(--line);border-radius:16px;padding:2rem}
.footer{padding:1.4rem;text-align:center;color:#8fa1cc;border-top:1px solid var(--line);margin-top:3rem}
.reveal{opacity:0;transform:translateY(22px);transition:.65s ease}.reveal.visible{opacity:1;transform:none}

dialog{width:min(860px,92vw);border:none;border-radius:14px;background:#0f172a;color:#e7edff} dialog::backdrop{background:#020617c7}
dialog article{position:relative} #closeDialog{position:absolute;right:.4rem;top:.4rem;border:0;background:none;color:white;font-size:1.4rem;cursor:pointer}
#dialogImage{width:100%;max-height:350px;object-fit:cover;border-radius:10px}
.hero-visual{position:absolute;left:5%;bottom:6%;z-index:2;color:#bfdbfe;background:#0b122a8c;border:1px solid #6c84d455;padding:.8rem;border-radius:14px;backdrop-filter:blur(4px);max-width:270px;opacity:0;animation:droneReveal 5.6s ease-in-out infinite}
.hero-visual svg{width:100%;display:block}
.hero-visual p{margin:.3rem 0 0;color:#c7d2fe;font-size:.84rem}
@media (max-width: 980px){.hero-visual{position:relative;left:auto;bottom:auto;margin:0 auto 2rem;max-width:320px}}
.hero-visual .rotor{stroke-dasharray:10 8;animation:spin 1.2s linear infinite;transform-box:fill-box;transform-origin:center}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes droneReveal{0%,70%{opacity:0;transform:translateY(8px)}82%,100%{opacity:1;transform:translateY(0)}}
.hero::before{content:"";position:absolute;top:0;bottom:0;width:2px;left:50%;background:linear-gradient(180deg,transparent,#93c5fd,transparent);box-shadow:0 0 16px #60a5fa;animation:scanFull 5.6s ease-in-out infinite;z-index:1}
@keyframes scanFull{0%{transform:translateY(0);opacity:.35}45%{transform:translateY(calc(100% - 10px));opacity:1}100%{transform:translateY(0);opacity:.45}}

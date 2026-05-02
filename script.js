const capabilities = [
  { title:"AI & Machine Learning", description:"Model prototyping and decision intelligence for operational optimization.", useCase:"Predictive scoring for resource planning." },
  { title:"XR / Mixed Reality", description:"Immersive interfaces for training and remote collaboration.", useCase:"XR workflows for simulation and onboarding." },
  { title:"Digital Twins (Tech Properties)", description:"Virtual replicas of buildings/spaces with monitoring and analytics.", useCase:"Property performance twin for energy and maintenance." },
  { title:"Smart Agriculture", description:"AI + IoT systems for crop, irrigation and microclimate control.", useCase:"Sensor-driven irrigation strategy." },
  { title:"3D Digital Art", description:"Generative visual environments for product storytelling.", useCase:"Procedural 3D scenes for demo campaigns." },
  { title:"Cloud & DevOps", description:"Reliable CI/CD and scalable cloud delivery.", useCase:"Fast deployment of pilot AI products." },
  { title:"Cybersecurity", description:"Security-first architecture for partner integrations.", useCase:"Secure data and endpoint operations." }
];

const assets = [
  {name:"DJI Drone", type:"Hardware", image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80", desc:"Aerial capture platform for mapping and visual inspection.", value:"Captures high-quality aerial datasets for digital twins and site analytics.", useCase:"Drone captures top-view imagery of a house/site, then AI reconstructs a Digital Twin for inspection and planning."},
  {name:"High-end PC (i9 / RTX 4070 / 64GB)", type:"Hardware", image:"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1200&q=80", desc:"Core compute workstation for AI, rendering and simulation.", value:"Runs AI model experiments, 3D rendering and XR app builds locally.", useCase:"Real-time rendering of digital twin scenes and AI inference pipelines."},
  {name:"XR Headsets (Vive / Quest / PSVR)", type:"Hardware", image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80", desc:"Immersive hardware for training and visualization.", value:"Turns AI outputs into immersive, investor-ready XR experiences.", useCase:"Walk through a digital twin of a property and inspect systems in VR."},
  {name:"Raspberry Pi + Arduino + Sensors", type:"IoT Stack", image:"https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1200&q=80", desc:"Edge nodes for sensor ingestion and automation prototypes.", value:"Provides low-cost field telemetry for smart agriculture and proptech pilots.", useCase:"Collect temperature/humidity/soil data to update twin dashboards."},
  {name:"3D Printers (Ultimaker / Snapmaker)", type:"Fabrication", image:"https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80", desc:"Rapid prototyping for enclosures and physical concept models.", value:"Speeds up hardware iteration and demo readiness.", useCase:"Print scale models linked to digital twins for client workshops."},
  {name:"Adobe + Substance 3D + GenAI Tools", type:"Software", image:"https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=80", desc:"Creative stack for visuals, content and brand-grade storytelling.", value:"Transforms technical outputs into compelling investor communications.", useCase:"Create high-impact pitch visuals for AI/XR propositions."}
];

const areas = ["AI Digital Twins","XR Platforms","Smart Agriculture Systems","Generative 3D Environments"];

const fallbackImage = label => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'><rect width='100%' height='100%' fill='#1e293b'/><text x='50%' y='50%' fill='#cbd5e1' font-size='44' font-family='Arial' text-anchor='middle'>${label}</text></svg>`)}`;

function render() {
  document.getElementById("capabilities").innerHTML = capabilities.map(c => `<article class='card reveal'><div class='content'><h3>${c.title}</h3><p>${c.description}</p><span class='usecase'>Use case: ${c.useCase}</span></div></article>`).join("");
  document.getElementById("innovationAreas").innerHTML = areas.map(a => `<article class='card reveal'><div class='content'><h3>${a}</h3><p>Focused development stream for scalable, partner-ready innovation outcomes.</p></div></article>`).join("");
  document.getElementById("assetGrid").innerHTML = assets.map((a,i)=>`<article class='card reveal'><button data-id='${i}'><img src='${a.image}' alt='${a.name}' onerror="this.src='${fallbackImage("Asset")}'"><div class='content'><span class='tag'>${a.type}</span><h3>${a.name}</h3><p>${a.desc}</p></div></button></article>`).join("");

  document.querySelectorAll("#assetGrid button").forEach(btn => btn.addEventListener("click", () => openAsset(assets[Number(btn.dataset.id)])));
}

function openAsset(asset){
  const img = document.getElementById("dialogImage");
  img.src = asset.image; img.onerror = () => img.src = fallbackImage(asset.name);
  document.getElementById("dialogTitle").textContent = asset.name;
  document.getElementById("dialogDesc").textContent = asset.desc;
  document.getElementById("dialogValue").textContent = asset.value;
  document.getElementById("dialogUseCase").textContent = asset.useCase;
  document.getElementById("assetDialog").showModal();
}

function setupReveal(){
  const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}

document.getElementById("closeDialog").addEventListener("click",()=>document.getElementById("assetDialog").close());
document.getElementById("year").textContent = new Date().getFullYear();
render();
setupReveal();

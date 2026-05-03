// Capabilities - Business Solutions
const capabilities = [
  { title: "Virtual Staging", description: "Превръщаме празни обекти в напълно обзаведени домове.", useCase: "Substance 3D + Unreal Engine" },
  { title: "Cyber-Physical Security", description: "Одит на IoT и Smart Home мрежи в нови комплекси.", useCase: "KPMG-grade Security Audit" },
  { title: "Digital Twins", description: "Интерактивни копия на сгради за дистанционно управление.", useCase: "NVIDIA Omniverse / Unity" },
  { title: "Drone Mapping", description: "Въздушно картографиране за строителство и агро проекти.", useCase: "Pix4D / DJI Workflow" },
  { title: "Scan-to-BIM", description: "Превръщане на 3D облаци от точки в архитектурни модели.", useCase: "Autodesk ReCap / Revit" },
  { title: "AI Surveillance", description: "Computer vision за сигурност и мониторинг на обекти.", useCase: "Custom AI Models" }
];

// Software Stack Categorized
const techStack = [
  { category: "Capture & Photogrammetry", tools: ["Polycam", "Luma AI", "Agisoft Metashape", "RealityCapture", "Matterport"] },
  { category: "Drone & Smart Agri", tools: ["Pix4D", "DroneDeploy", "DJI Terra"] },
  { category: "3D & Texture Engine", tools: ["Blender", "Adobe Substance 3D Painter/Sampler", "ZBrush"] },
  { category: "Visuals & XR", tools: ["Unreal Engine 5", "Twinmotion", "Unity", "Three.js"] },
  { category: "BIM & Engineering", tools: ["Revit", "Navisworks", "Autodesk Construction Cloud"] },
  { category: "Data & Dashboards", tools: ["Grafana", "Power BI", "IoT Sensors / Python"] }
];

// Workflows
const workflows = [
  { title: "Quick Asset Test", steps: "Polycam Web → Blender → Twinmotion", color: "#3b82f6" },
  { title: "Professional ArchViz", steps: "Metashape → Blender → Unreal Engine", color: "#7c3aed" },
  { title: "Smart Agri / GIS", steps: "DJI Drone → Pix4D → GIS / Dashboard", color: "#10b981" }
];

// Hardware Assets
const assets = [
  { name: "DJI Mapping Drone", type: "Aerial Capture", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f", desc: "За фотограметрия и ортофотопланове.", value: "Drone photogrammetry", useCase: "Mapping Sofia Periphery" },
  { name: "RTX Workstation (i9/64GB)", type: "Compute", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c", desc: "Local AI & 3D Rendering Powerhouse.", value: "High-speed rendering", useCase: "Unreal Engine 5 / Omniverse" },
  { name: "MacBook Pro M-Series", type: "Mobile Lab", image: "https://images.unsplash.com/photo-1517336714460-4578f9b92783", desc: "За Polycam Web и Agisoft Metashape.", value: "On-site 3D processing", useCase: "Field data collection" }
];

function render() {
  document.getElementById("capabilities").innerHTML = capabilities.map(c => `<article class='card reveal'><div class='content'><h3>${c.title}</h3><p>${c.description}</p><span class='usecase'>${c.useCase}</span></div></article>`).join("");
  
  document.getElementById("techStackGrid").innerHTML = techStack.map(s => `
    <div class='tech-cat reveal'>
      <h4>${s.category}</h4>
      <ul>${s.tools.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>`).join("");

  document.getElementById("workflowGrid").innerHTML = workflows.map(w => `
    <article class='card reveal' style='border-top: 4px solid ${w.color}'>
      <div class='content'><h3>${w.title}</h3><p>${w.steps}</p></div>
    </article>`).join("");

  document.getElementById("assetGrid").innerHTML = assets.map((a,i)=>`<article class='card reveal'><button><img src='${a.image}' alt='${a.name}'><div class='content'><span class='tag'>${a.type}</span><h3>${a.name}</h3><p>${a.desc}</p></div></button></article>`).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();

// Simple scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("visible"));
}, { threshold: 0.1 });

render();
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

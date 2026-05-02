const capabilities = [
  { title:"AI & Machine Learning", description:"Model prototyping, automation pipelines, and data-driven decision engines.", useCase:"Use case: predictive scoring and optimization for operations." },
  { title:"XR / Mixed Reality", description:"Immersive interfaces for training, remote collaboration, and simulation.", useCase:"Use case: XR onboarding and maintenance simulation workflows." },
  { title:"Digital Twins (PropTech)", description:"Virtual replicas of assets and spaces with real-time monitoring layers.", useCase:"Use case: smart building performance twin for energy optimization." },
  { title:"Smart Agriculture", description:"Sensor-based intelligence for crop, irrigation, and microclimate decisions.", useCase:"Use case: AI-assisted irrigation scheduling from IoT field data." },
  { title:"3D Digital Art", description:"Generative visuals and environments for product storytelling and brand worlds.", useCase:"Use case: procedural 3D showcase spaces for marketing campaigns." },
  { title:"Cloud & DevOps", description:"Scalable deployment architecture with CI/CD and observability.", useCase:"Use case: cloud-native rollout of AI services for pilot clients." },
  { title:"Cybersecurity", description:"Security-first approach for infrastructure, data workflows, and endpoints.", useCase:"Use case: secure-by-design architecture for partner integrations." }
];

const infrastructure = {
  software:["Adobe Creative Cloud","Adobe Substance 3D","ChatGPT","Microsoft Copilot","Google Gemini"],
  hardware:["High-end PC (i9, RTX 4070, 64GB RAM)","XR Headsets (HTC Vive, Meta Quest, PSVR)","DJI Drone","Raspberry Pi","Arduino + sensors","3D Printers (Ultimaker, Snapmaker)","Haptics Suit"],
  setup:["XR lab","AI experimentation","IoT + Computer Vision"]
};

const areas = ["AI Digital Twins","XR Platforms","Smart Agriculture Systems","Generative 3D Environments"];

function renderCards() {
  document.getElementById("capabilities").innerHTML = capabilities.map(c => `
    <article class="card reveal">
      <h3>${c.title}</h3>
      <p>${c.description}</p>
      <span class="usecase">${c.useCase}</span>
    </article>
  `).join("");

  document.getElementById("innovationAreas").innerHTML = areas.map(a => `
    <article class="card reveal"><h3>${a}</h3><p>Focused development stream for scalable, partner-ready innovation outcomes.</p></article>
  `).join("");

  const fillList = (id, items) => document.getElementById(id).innerHTML = items.map(i => `<li>${i}</li>`).join("");
  fillList("softwareList", infrastructure.software);
  fillList("hardwareList", infrastructure.hardware);
  fillList("setupList", infrastructure.setup);
}

function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.getElementById("year").textContent = new Date().getFullYear();
renderCards();
setupReveal();

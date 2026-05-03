const capabilities = [
  { 
    title: "Virtual Staging & ArchViz", 
    description: "Трансформираме празни обекти 'на тапа' в напълно обзаведени луксозни имоти чрез Adobe Substance 3D и Unreal Engine.", 
    useCase: "Повишаване на привлекателността на обяви в новостроящи се сгради." 
  },
  { 
    title: "Smart Building Cybersecurity", 
    description: "Професионален одит и защита на IoT мрежи, системи за достъп и видеонаблюдение в затворени комплекси.", 
    useCase: "Гарантиране на сигурността на обитателите и интегритета на сградата." 
  },
  { 
    title: "Digital Twins (Tech Properties)", 
    description: "Създаване на интерактивни дигитални копия на сгради за дистанционен мониторинг и VR огледи.", 
    useCase: "3D визуализация на имоти за международни инвеститори." 
  },
  { 
    title: "Drone-Based Monitoring", 
    description: "Въздушно картографиране и седмичен отчет на строителния прогрес за инвеститори и купувачи.", 
    useCase: "Прозрачност и визуален контрол на строителни площадки." 
  },
  { 
    title: "Digital Law & Compliance", 
    description: "Правна експертиза при внедряване на иновативни технологии, защита на данните и смарт договори.", 
    useCase: "Юридическо обезпечаване на PropTech платформи." 
  },
  { 
    title: "Smart Agriculture Systems", 
    description: "AI + IoT системи за прецизно земеделие и автоматизиран мониторинг на ресурси.", 
    useCase: "Управление на микроклимат и напояване чрез сензори." 
  }
];

const assets = [
  {
    name: "Substance 3D & RTX Lab", 
    type: "3D Visuals", 
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c", 
    desc: "Мощна работна станция за 3D рендериране и виртуално обзавеждане.", 
    value: "Превръща техническите чертежи във фотореалистичен маркетинг актив.", 
    useCase: "Бързо генериране на интериорни варианти за брокери."
  },
  {
    name: "DJI Mapping Drone", 
    type: "Hardware", 
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f", 
    desc: "Платформа за въздушно заснемане и генериране на ортофотопланове.", 
    value: "Осигурява сурови данни за създаване на Digital Twins на големи терени.", 
    useCase: "Картографиране на нови строителни зони в периферията на София."
  },
  {
    name: "Cybersecurity Audit Stack", 
    type: "Software/Law", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", 
    desc: "Стек от инструменти за мрежов анализ и проверка на сигурността.", 
    value: "Осигурява корпоративно ниво на защита за домашна и сградна автоматизация.", 
    useCase: "Одит на сигурността на умен комплекс преди пускане в експлоатация."
  },
  {
    name: "XR Reality Suite", 
    type: "Hardware", 
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac", 
    desc: "VR/AR хедсети за потапящи разходки в несъществуващи сгради.", 
    value: "Позволява на клиентите да преживеят имота преди първата копка.", 
    useCase: "Виртуални огледи за брокерски къщи."
  },
  {
    name: "IoT Sensor Nodes", 
    type: "Electronics", 
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76", 
    desc: "Микроконтролери за събиране на данни в реално време.", 
    value: "Тестване на концепции за умни сгради и прецизно земеделие.", 
    useCase: "Прототипи за автоматизирано управление на сградни ресурси."
  }
];

const areas = ["PropTech & Real Estate AI", "Cyber-Physical Security", "Digital Twin Infrastructure", "XR Training & Simulation"];

const fallbackImage = label => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'><rect width='100%' height='100%' fill='#1e293b'/><text x='50%' y='50%' fill='#cbd5e1' font-size='44' font-family='Arial' text-anchor='middle'>${label}</text></svg>`)}`;

function render() {
  document.getElementById("capabilities").innerHTML = capabilities.map(c => `<article class='card reveal'><div class='content'><h3>${c.title}</h3><p>${c.description}</p><span class='usecase'>Business Case: ${c.useCase}</span></div></article>`).join("");
  document.getElementById("innovationAreas").innerHTML = areas.map(a => `<article class='card reveal'><div class='content'><h3>${a}</h3><p>Стратегическо направление за иновации и партньорства.</p></div></article>`).join("");
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

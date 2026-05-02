const assets = [
  {
    name: "Adobe Creative Cloud Pro",
    category: "software",
    type: "Creative Suite",
    description: "Пакет от 20+ приложения (Photoshop, Premiere Pro, Illustrator и др.) за дизайн, видео и дигитално съдържание с AI функции и cloud услуги.",
    value: "Позволява end-to-end създаване на маркетинг, бранд и продуктово съдържание в професионално качество.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_Creative_Cloud_rainbow_icon.svg",
    source: "https://www.adobe.com/creativecloud/plans.html"
  },
  {
    name: "ChatGPT Pro",
    category: "software",
    type: "AI Assistant",
    description: "Премиум достъп до модели на OpenAI с по-високи лимити, приоритетен достъп и разширени функции за анализ, писане и прототипиране.",
    value: "Ускорява изследване, автоматизация и създаване на бизнес документация/идеи за партньорства.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    source: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus"
  },
  {
    name: "Gemini Pro",
    category: "software",
    type: "AI Assistant",
    description: "Google AI абонамент с достъп до по-мощни Gemini модели и допълнителни AI възможности за проучване, генерация и продуктивност.",
    value: "Подобрява скоростта за анализ на пазари и подготовка на презентации за инвеститори.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg",
    source: "https://gemini.google/advanced/"
  },
  {
    name: "Copilot 365 Pro",
    category: "software",
    type: "AI for Office",
    description: "Интегриран AI асистент в Microsoft 365 приложения като Word, Excel, PowerPoint и Outlook за автоматизирано създаване и анализ на съдържание.",
    value: "Дава бързо изготвяне на оферти, финансови резюмета и investor-ready презентации.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Microsoft_Copilot_Icon.svg",
    source: "https://www.microsoft.com/en-us/microsoft-365/enterprise/copilot-for-microsoft-365"
  },
  { name:"PC i9 / RTX 4070 / 64GB RAM", category:"hardware", type:"Workstation", description:"Високопроизводителна станция за 3D, AI workloads, рендер и софтуерна разработка.", value:"Поддържа сложни демо среди и бърз цикъл прототип → тест → презентация.", image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80", source:"https://www.intel.com/content/www/us/en/products/details/processors/core.html" },
  { name:"Secondary PC i7 / RTX 2070", category:"hardware", type:"Backup Compute", description:"Вторична работна машина за паралелни задачи, стрийминг и тестове.", value:"Осигурява надеждност и едновременна работа по няколко проекта.", image:"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=80", source:"https://www.nvidia.com/en-us/geforce/graphics-cards/20-series/" },
  { name:"DJI Air 3S", category:"hardware", type:"Drone", description:"Дрон за аеро заснемане с висока стабилизация и интелигентни flight режими.", value:"Добавя premium видео и визуални активи за маркетинг и продуктови кампании.", image:"https://upload.wikimedia.org/wikipedia/commons/8/82/DJI_Mavic_3_Pro_Cine.jpg", source:"https://www.dji.com/" },
  { name:"Raspberry Pi 4/5", category:"hardware", type:"Edge Computing", description:"Компактни SBC системи за IoT, edge automation и embedded прототипи.", value:"Позволяват евтини пилоти за индустриални/умни решения преди мащабиране.", image:"https://upload.wikimedia.org/wikipedia/commons/5/51/Raspberry_Pi_5.jpg", source:"https://www.raspberrypi.com/products/" },
  { name:"Arduino + Mega Sensor Set", category:"hardware", type:"Electronics Prototyping", description:"Платформа за бързо прототипиране на електроника, контролери и сензорни системи.", value:"Съкращава времето от идея до proof-of-concept за роботика и IoT.", image:"https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg", source:"https://www.arduino.cc/" },
  { name:"Robo Arm", category:"hardware", type:"Robotics", description:"Роботизирана ръка за automation експерименти, pick-and-place и демонстрации.", value:"Доказва реални сценарии за индустриална автоматизация пред партньори.", image:"https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1000&q=80", source:"https://en.wikipedia.org/wiki/Robotic_arm" },
  { name:"Ultimaker 2+", category:"hardware", type:"3D Printing", description:"Надежден FDM 3D принтер за функционални прототипи и продуктови макети.", value:"Позволява бърза физическа валидация на идеи и custom parts.", image:"https://upload.wikimedia.org/wikipedia/commons/0/0e/Ultimaker_2%2B_Connect.jpg", source:"https://ultimaker.com/" },
  { name:"Snapmaker 3-in-1", category:"hardware", type:"Fabrication", description:"Модулна машина за 3D печат, CNC и лазерно гравиране в една платформа.", value:"Консолидира multiple prototyping workflows с по-ниски разходи.", image:"https://upload.wikimedia.org/wikipedia/commons/5/53/Snapmaker_2.0_A350.jpg", source:"https://us.snapmaker.com/" },
  { name:"Alexa + Google Hub", category:"hardware", type:"Voice/Smart Home", description:"Гласови асистенти и smart displays за IoT integration и user interaction тестове.", value:"Подходящи за демо на voice-driven продукти и домашна автоматизация.", image:"https://upload.wikimedia.org/wikipedia/commons/4/47/Amazon_Echo_Dot_%283rd_generation%29.jpg", source:"https://www.amazon.com/alexa" },
  { name:"HTC Vive Eye", category:"xr", type:"VR + Eye Tracking", description:"VR headset с eye-tracking за по-добра интеракция и аналитика на поведението в XR.", value:"Дава advanced UX измервания при VR обучения и симулации.", image:"https://upload.wikimedia.org/wikipedia/commons/0/08/HTC_Vive_Pro.jpg", source:"https://www.vive.com/" },
  { name:"Meta Quest 2 & 3", category:"xr", type:"Standalone VR", description:"Standalone VR устройства за immersive обучения, игри и бизнес демонстрации.", value:"Подходящи за мащабируеми XR дема без нужда от мощен компютър.", image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Meta_Quest_3_%28cropped%29.jpg", source:"https://www.meta.com/quest/" },
  { name:"PlayStation VR 1 & 2", category:"xr", type:"Console VR", description:"VR екосистема на Sony за висококачествени immersive преживявания.", value:"Разширява възможностите за демонстрации в entertainment и training сценарии.", image:"https://upload.wikimedia.org/wikipedia/commons/e/e2/PlayStation_VR2_Headset.jpg", source:"https://www.playstation.com/ps-vr2/" },
  { name:"bHaptics Suit & Gloves", category:"xr", type:"Haptic Feedback", description:"Хаптични устройства за тактилна обратна връзка в VR/AR среди.", value:"Добавят реалистичност и силен wow-ефект при investor демонстрации.", image:"https://www.bhaptics.com/img/og_image.jpg", source:"https://www.bhaptics.com/" }
];

const roots = { software: document.getElementById("software"), hardware: document.getElementById("hardware"), xr: document.getElementById("xr") };
const search = document.getElementById("search");
const dialog = document.getElementById("assetDialog");

function render(filter = "") {
  Object.values(roots).forEach(el => el.innerHTML = "");
  assets
    .filter(a => a.name.toLowerCase().includes(filter) || a.description.toLowerCase().includes(filter))
    .forEach(asset => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${asset.image}" alt="${asset.name}" loading="lazy" referrerpolicy="no-referrer" />
        <div class="content">
          <span class="tag">${asset.type}</span>
          <h3>${asset.name}</h3>
          <p>${asset.description}</p>
        </div>`;
      card.addEventListener("click", () => openDialog(asset));
      roots[asset.category].appendChild(card);
    });
}

function openDialog(asset) {
  document.getElementById("dialogImage").src = asset.image;
  document.getElementById("dialogImage").alt = asset.name;
  document.getElementById("dialogTitle").textContent = asset.name;
  document.getElementById("dialogDescription").textContent = asset.description;
  document.getElementById("dialogValue").textContent = asset.value;
  const link = document.getElementById("dialogSource");
  link.href = asset.source;
  dialog.showModal();
}

document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
search.addEventListener("input", e => render(e.target.value.trim().toLowerCase()));
render();

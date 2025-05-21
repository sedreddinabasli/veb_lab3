const melumatlar = {
  "PROFILE": [
    "I have a deep interest in the field of information security. I am specializing in systems protection and security risk management."
  ],
  "WORK EXPERIENCE": [
    "CyberTech MMC (2024 - PRESENT) - Security Analyst: Threat Detection and Monitoring, Incident Response, Vulnerability Assessment, Risk Assessment and Management, Data Protection and Privacy.",
    "SyberSec MMC (2023 - 2024) - Marketing Manager & Specialist: Develop and maintain strong relationships with partners and agencies. Monitor and maintain brand consistency across all marketing materials."
  ],
  "REFERENCE": [
    "Ali Aliyev - Wardiere Inc. / CTO",
    "Vali Valiyev - Wardiere Inc. / CEO"
  ]
};

window.onload = function () {
  const bolmeler = document.getElementsByClassName("bolme");
  
  for (let i = 0; i < bolmeler.length; i++) {
    const bolme = bolmeler[i];
    const h2 = bolme.getElementsByTagName("h2")[0];
    const basliq = h2.textContent;
    const content = bolme.getElementsByClassName("content")[0];
    
    if (!content.classList.contains("icerik")) {
      content.classList.add("icerik");
    }
    
    if (!content.querySelector("input")) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Yeni məlumat daxil edin");
      content.appendChild(input);
      
      const btn = document.createElement("button");
      btn.textContent = "Əlavə et";
      btn.classList.add("addData");
      btn.classList.add("elave-et");
      content.appendChild(btn);
    }
    
    if (melumatlar[basliq]) {
      const ul = document.createElement("ul");
      for (let j = 0; j < melumatlar[basliq].length; j++) {
        const li = document.createElement("li");
        li.textContent = melumatlar[basliq][j];
       
        li.onclick = function () {
          const yeni = prompt("Məlumatı dəyiş:", li.textContent);
          if (yeni) li.textContent = yeni;
        };
        ul.appendChild(li);
      }
     
      const input = content.querySelector("input");
      content.insertBefore(ul, input);
    }
    
   
    h2.onclick = function () {
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    };
    
    const btn = content.querySelector(".addData");
    const input = content.querySelector("input");
    
    if (btn && input) {
      btn.onclick = function () {
        const melumat = input.value;
        if (melumat !== "") {
          let ul = content.getElementsByTagName("ul")[0];
          if (!ul) {
            ul = document.createElement("ul");
            content.insertBefore(ul, input);
          }
          const li = document.createElement("li");
          li.textContent = melumat;
    
          li.onclick = function () {
            const yeni = prompt("Məlumatı dəyiş:", li.textContent);
            if (yeni) li.textContent = yeni;
          };
          ul.appendChild(li);
          input.value = "";
          
          if (!melumatlar[basliq]) {
            melumatlar[basliq] = [];
          }
          melumatlar[basliq].push(melumat);
        }
      };
    }
  }
};

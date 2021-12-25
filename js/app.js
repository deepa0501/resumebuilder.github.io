let AddworkExpBtn = document.querySelector("#weAdd-btn");
let RMworkExpBtn = document.querySelector("#weRem-btn");

let workExpFeild = document.querySelector("#workExp");
let workExpTime = document.getElementsByClassName("weFieldTIME");

let eduAddBtn = document.querySelector("#eduAddbtn");
let eduRMBtn = document.querySelector("#eduRem-btn");

let ProjAddBtn = document.querySelector("#PAdd-btn");
let ProjRMBtn = document.querySelector("#PRRem-btn");
let ProjectField = document.querySelector("#projectUser");

let skillAddBtn = document.querySelector("#skAdd-btn");
let skillRMBtn = document.querySelector("#skRem-btn");
let skillField = document.querySelector("#skilltUser");

let InterestAddBtn = document.querySelector("#ITAdd-btn");
let InterestRMBtn = document.querySelector("#ITRem-btn");

let educationField = document.querySelector("#education");
let InterestField = document.querySelector("#interest");

let workfeid;
let timeworkxp;
// work exp Add
AddworkExpBtn.addEventListener("click", () => {
  workfeid = document.createElement("textarea");
  workfeid.classList.add("form-control");
  workfeid.classList.add("weField");
  workfeid.classList.add("mt-3");
  workfeid.setAttribute("rows", 2);
  workfeid.setAttribute("placeholder", "Role at company");

  timeworkxp = document.createElement("input");
  timeworkxp.classList.add("form-control");
  timeworkxp.classList.add("weFieldTIME");
  timeworkxp.classList.add("mt-2");
  timeworkxp.setAttribute("placeholder", "TimePeriod");
  timeworkxp.setAttribute("maxlength", "20");

  workExpFeild.appendChild(workfeid);
  workExpFeild.appendChild(timeworkxp);
});

// work exp remove
RMworkExpBtn.addEventListener("click", () => {
  let del = confirm("Do you really want to remove it");

  if (del == true) {
    // remove

    workExpFeild.removeChild(workExpFeild.lastElementChild);
    workExpFeild.removeChild(workExpFeild.lastElementChild);
  } else {
    console.log(2);
  }
});

//Edu Add
eduAddBtn.addEventListener("click", () => {
  let ed = document.createElement("textarea");
  ed.classList.add("form-control");
  ed.classList.add("EdField");
  ed.classList.add("mt-3");
  ed.setAttribute("rows", 2);
  ed.setAttribute("placeholder", "Enter here");

  educationField.appendChild(ed);
});

// edu remove

eduRMBtn.addEventListener("click", () => {
  let del = confirm("Do you really want to remove it");

  if (del == true) {
    // remove

    educationField.removeChild(educationField.lastElementChild);
  } else {
    console.log(2);
  }
});

// Interest add

InterestAddBtn.addEventListener("click", () => {
  let Interestf = document.createElement("textarea");
  Interestf.classList.add("form-control");
  Interestf.classList.add("interestField");
  Interestf.classList.add("mt-3");
  Interestf.setAttribute("rows", 1);
  Interestf.setAttribute("placeholder", "Enter here");

  InterestField.appendChild(Interestf);
});

//  Interest remove

InterestRMBtn.addEventListener("click", () => {
  let del = confirm("Do you really want to remove it");

  if (del == true) {
    // remove

    InterestField.removeChild(InterestField.lastElementChild);
  } else {
    console.log(2);
  }
});

// Project add btn

ProjAddBtn.addEventListener("click", () => {
  let projectittle = document.createElement("input");
  projectittle.classList.add("form-control");
  projectittle.classList.add("projectFieldTittle");
  projectittle.classList.add("mt-3");
  projectittle.setAttribute("type", "text");
  projectittle.setAttribute("placeholder", "Project tittle");

  ProjectField.appendChild(projectittle);
});

// Project remove btn
ProjRMBtn.addEventListener("click", () => {
  let del = confirm("Do you really want to remove it");

  if (del == true) {
    // remove

    ProjectField.removeChild(ProjectField.lastElementChild);
  } else {
    console.log(2);
  }
});

// skills add btn

skillAddBtn.addEventListener("click", () => {
  let skilltittle = document.createElement("input");
  skilltittle.classList.add("form-control");
  skilltittle.classList.add("skillFieldTittle");
  skilltittle.classList.add("mt-3");
  skilltittle.setAttribute("type", "text");
  skilltittle.setAttribute("placeholder", "skill title");

  skillField.appendChild(skilltittle);
});

// skill rem btn

skillRMBtn.addEventListener("click", () => {
  let del = confirm("Do you really want to remove it");

  if (del == true) {
    // remove

    skillField.removeChild(skillField.lastElementChild);
  } else {
    console.log(2);
  }
});

GenerateCV = () => {
  // PhotoCV

  let photoField = document.getElementById("photocvfield").files;

  let imgTemplate = document.getElementById("imgT");

  // console.log(photoField);

  let imageReader = new FileReader();

  if (photoField.length != 0) imageReader.readAsDataURL(photoField[0]);

  imageReader.onload = () => {
    // fixed to read img time

    //  console.log(imageReader.result);

    if (imageReader.result != "") {
      imgTemplate.src = imageReader.result;
    }
  };

  // names
  let nameField = document.getElementById("nameField").value;

  let templateName = document.getElementById("nameT");

  templateName.innerHTML = nameField;

  //  mobile

  let mobieField = document.getElementById("contactField").value;
  let mobileT = document.getElementById("mobileT");
  mobileT.innerHTML = mobieField;

  // address
  let addressField = document.getElementById("addressField").value;
  let addressT = document.getElementById("addressT");
  addressT.innerHTML = addressField;

  // email
  let emailField = document.getElementById("emailField").value;

  let emailtT = document.getElementById("emailT");

  emailtT.innerHTML = emailField;

  // job title

  let jobField = document.getElementById("jobtitleField").value;

  let templateJobtitle = document.getElementById("JobNameT");

  templateJobtitle.innerHTML = jobField;

  //  Social links

  let linkField = document.getElementById("linkedinField").value;
  let linkT = document.getElementById("linkIdT");

  // console.log(linkField);

  let alinkedin = document.createElement("a");

  alinkedin.href = linkField;
  alinkedin.innerText = "Linkedin";
  linkT.innerHTML = "";

  linkT.appendChild(alinkedin);

  // github
  let gitField = document.getElementById("gitField").value;
  let gitT = document.getElementById("gitIdT");

  let agitub = document.createElement("a");

  agitub.href = gitField;
  agitub.innerText = "Github";
  gitT.innerHTML = "";
  gitT.appendChild(agitub);

  // portfolio

  // Work Experience

  let workExp = document.getElementsByClassName("weField"); //array
  let str = "";
  for (let i of workExp) {
    str =
      str +
      ` <li style="
        margin-bottom: 10px;
    ">${i.value}</li>`;
  }

  let weTemplate = document.getElementById("weT");

  weTemplate.innerHTML = str;

  let workexperiod = document.getElementById("TworkPeriod");

  let expString = "";

  for (let j of workExpTime) {
    expString =
      expString +
      ` <li style="margin-bottom: 10px; list-style-type: none;">${j.value}</li>`;
  }

  workexperiod.innerHTML = expString;

  // Projects

  let projtittle = document.getElementsByClassName("projectFieldTittle");
  let projdesc = document.getElementsByClassName("projectFieldDesc");

  let tittleStr = "";
  let descStr = "";

  for (let i of projtittle) {
    tittleStr =
      tittleStr +
      `<li class="project-title" id="TprojTitle" style="display: block margin-bottom: 10px;">${i.value}</li> `;
  }

  let TprojTitle = document.getElementById("projSec");
  TprojTitle.innerHTML = tittleStr;

  // for(let j of projdesc){
  //     descStr+= `<span id="TprojDesc" class="project-tagline">${j.value}</span>`
  // }
  // let Tprojdesc = document.getElementById("TprojDesc")
  // Tprojdesc.innerHTML=descStr;

  // skills

  let skilltittle = document.getElementsByClassName("skillFieldTittle");
  let skilltemp = document.getElementById("skillId");

  let skillStr = "";

  for (let i of skilltittle) {
    skillStr =
      skillStr +
      `<li class="level-title badge badge-pill badge-primary"style="display: block margin-bottom: 10px;">${i.value}</li> `;
  }

  skilltemp.innerHTML = skillStr;

  // Languages

  let nativeLanField = document.getElementById("NatLField").value;
  let proLanField = document.getElementById("proLField").value;

  let proLag = document.getElementById("proL");
  let nativeLag = document.getElementById("nativeL");

  proLag.innerHTML = proLanField;
  nativeLag.innerHTML = nativeLanField;

  // Interest

  let interestFvalue = document.getElementsByClassName("interestField");
  let interest = document.getElementById("TInterest");

  let intStr = "";

  for (let i of interestFvalue) {
    intStr += ` <li>${i.value}</li>`;
  }

  interest.innerHTML = intStr;

  // Education Qualification

  let EdField = document.getElementsByClassName("EdField");
  let str1 = "";

  for (let i of EdField) {
    str1 = str1 + `<li>${i.value}</li>`;
  }

  let eduTemplate = document.getElementById("edT");

  eduTemplate.innerHTML = str1;
  //   console.log(str1);

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("department").style.display = "block";

};

PrintCV = () => {
  window.print();
};

EditBack = () => {
  document.getElementById("cv-template").style.display = "none";
  document.getElementById("cv-form").style.display = "block";
};

function company_list(){
  let dep = document.getElementById("Department").value;
  document.getElementById('d_l').style.display="none";
  document.getElementById('d_s').style.display="none";
  document.getElementById('d_b').style.display="none";
  document.getElementById('d_b').style.display="none";
  document.getElementById('dep_hed').style.display="block";

  switch(dep){
    case "CSE" :
      document.getElementById('dep_list').innerText = "Microsoft\n\nGoogle\n\nIBM\n\nAmazon\n\nEMC\n\nBMC\n\nPaypal\n\nOracle\n\nTCS\n\nCognizent\n\nAccenture\n\nInfosys\n\nWipro\n\nmu sigma\n\nCISCO\n\nVMWare\n\nRedhat\n\nDrupal\n\nAllscripts\n\nAmdocs\n\nSymantec\n\nAdobe\n\nZoho\n\nDruva\n\nTally\n\nFinacle from Infosys\n\nEka\n\nQuickHeal\n\nCapillary\n\nSapience\n\nPubMatic\n\nInMobi\n\nAdNear\n\nBrowserStack\n\nFreshdesk\n\nNewgen\n\nNucleus Software\n\nCRMNext\n\nRamco\n\nPersistent\n\nVserv\n\nWingify\n\nMindtree\n\nSunTec";
      break;
    
    case "IT" :
      document.getElementById('dep_list').innerText = "Microsoft\n\nGoogle\n\nIBM\n\nAmazon\n\nEMC\n\nBMC\n\nPaypal\n\nOracle\n\nTCS\n\nCognizent\n\nAccenture\n\nInfosys\n\nWipro\n\nmu sigma\n\nCISCO\n\nVMWare\n\nRedhat\n\nDrupal\n\nAllscripts\n\nAmdocs\n\nSymantec\n\nAdobe\n\nZoho\n\nDruva\n\nTally\n\nFinacle from Infosys\n\nEka\n\nQuickHeal\n\nCapillary\n\nSapience\n\nPubMatic\n\nInMobi\n\nAdNear\n\nBrowserStack\n\nFreshdesk\n\nNewgen\n\nNucleus Software\n\nCRMNext\n\nRamco\n\nPersistent\n\nVserv\n\nWingify\n\nMindtree\n\nSunTec";
      break;
    
    case "ECE" :
      document.getElementById('dep_list').innerText = "Dell India (Networking)\n\nReliance (Communications)\n\nInfotech (Analog & Digital Electronics)\n\nRedpine (Signal Processing)\n\nGeneral Electric (Electronics & Communication)\n\nTexas Instruments (Analog & Digital Electronics)\n\nMicrochip (Analog and Digital Electronics)\n\nTata tele services (Telecommunications)\n\nVodafone (Telecommunications & Networking)\n\nSamsung (Analog and Digital Communications)\n\nIntel (Analog & Digital Electronics)\n\nLG Electronics (Analog & Digital Electronics)\n\nWipro (Wireless Networking)\n\nCisco Networking (Computer Networks)";
      break;
    
    case "EEE" : 
      document.getElementById('dep_list').innerText = "ABB India Ltd\n\nBajaj electricals Ltd\n\nBharat electronics Ltd\n\nCrompton Greaves Consumers electricals Ltd\n\nExide Industries Ltd\n\nFinolex cables Ltd\n\nHavells India Ltd\n\nPolycab India Ltd\n\nSurya Roshni Ltd\n\nSchneider electric India Pvt Ltd\n\nReliance industries\n\nLarsen and toubro\n\nIndian Navy\n\nPower grid corporation of india\n\nCEAT\n\nOil and Natural Gas\n\nEmcure Pharmaceuticals\n\nIndian Oil \n\nTexas Instruments\n\nBharat Heavy electricals\n\nQualcomm\n\nLam research\n\nTata steel\n\nKONE\n\nNational Thermal Power\n\nMott MacDonald\n\nNokia\n\nAFCONS Infrastructure ";
      break;

    case "CIVIL" : 
        document.getElementById('dep_list').innerText = "Afcons infrastructure limited\n\nPunj Lloyd\n\nNewton engineering and chemicals Ltd\n\nConsolidated construction consortium Ltd\n\nAkme projects Ltd\n\nAnant raj industries limited\n\nB Seenaiah and company Ltd\n\nBGR Energy Systems Ltd\n\nBridge and roof Co limited\n\nCoastal projects pvt ltd\n\nDSC limited\n\nCQRA\n\nEast Coast Constructions and industries Ltd\n\nGammon India Ltd\n\nGammon infrastructure projects limited\n\nGround engineering ltd\n\nRNS infrastructure Ltd\n\nRoman Tarmat Ltd\n\nStewarts and Lloyds of India Ltd\n\nS E. Constructions Ltd\n\nTantia Construction Ltd";
        break;
    
    case "MECH" : 
        document.getElementById('dep_list').innerText = "Skyy Rider Institutions \n\nZenq\n\nGSPANN technologie \n\nSai Sectretarial Services";
        break;

    case "AUTOMOBILE" :
        document.getElementById('dep_list').innerText = "Satyam Venture engineering services\n\nGo Speedy Go\n\nFreshEngineers.com\n\nService advisor\n\nTata Motors Ltd\n\nMaruti Suzuki India Ltd\n\nMahindra and Mahindra Ltd \n\nHero motocorp Ltd\n\nBajaj Auto Ltd\n\nAshok Leyland Ltd\n\nTVS motor company Ltd\n\nEicher Motors Ltd\n\nForce Motors Ltd\n\nSML ISUZU Ltd";
        break;
  }

}


// دالة لمنع الحروف وقبول الأرقام والفواصل فقط (للعمليات الحسابية)
function validateDecimalInput(event) {
  // السماح بالأرقام، النقطة، والفاصلة فقط
  event.target.value = event.target.value.replace(/[^0-9,.]/g, '');
}

// دالة لمنع الحروف وقبول الأرقام والنقطتين فقط (لحاسبة الوقت)
function validateTimeInput(event) {
  // السماح بالأرقام والنقطتين الرأسيتين فقط
  event.target.value = event.target.value.replace(/[^0-9:]/g, '');
}

// ربط الرقابة بجميع الحقول فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  // حقول الأعداد الحسابية
  const decimalInputs = ['add_n1', 'add_n2', 'sub_n1', 'sub_n2', 'mul_n1', 'mul_n2', 'div_n1', 'div_n2'];
  decimalInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', validateDecimalInput);
    }
  });

  // حقول الوقت
  const timeInputs = ['time1', 'time2'];
  timeInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', validateTimeInput);
    }
  });
});
// --- 1. إدارة التنقل بين التبويبات (Tabs Layout) ---
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// ميثود مساعدة لبناء الأسطر في الجداول الحسابية
function buildRow(
  arr,
  cellClass,
  signeToDisplay,
  sepIndex,
  sepClass,
  sepContent,
) {
  let html = "<tr>";
  if (signeToDisplay) {
    html += "<td class='colonne-signe'>" + signeToDisplay + "</td>";
  } else {
    html += "<td></td>";
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === sepIndex) {
      html +=
        "<td class='" +
        (sepClass || "separator") +
        "'>" +
        (sepContent !== undefined ? sepContent : "") +
        "</td>";
    }
    let content = arr[i];
    html += "<td class='" + cellClass + "'>" + content + "</td>";
  }
  html += "</tr>";
  return html;
}

function toDisplay(arr, sepIndex, decLen) {
  if (sepIndex < 0) return arr.join("");
  let a = arr.filter((c) => c !== "");
  let pos = a.length - decLen;
  return a.slice(0, pos).join("") + "," + a.slice(pos).join("");
}

// --- 2. كود عملية الجمع العمودي المطور ---
function runAddition() {
  let n1raw = document.getElementById("add_n1").value.trim().replace(",", ".");
  let n2raw = document.getElementById("add_n2").value.trim().replace(",", ".");

  if (n1raw == "" || n2raw == "") {
    alert("الرجاء إدخل عددين");
    return;
  }

  n1raw = n1raw.replace(/[^0-9.]/g, "");
  n2raw = n2raw.replace(/[^0-9.]/g, "");

  let [int1, dec1 = ""] = n1raw.split(".");
  let [int2, dec2 = ""] = n2raw.split(".");
  if (int1 == "") int1 = "0";
  if (int2 == "") int2 = "0";

  let intLen = Math.max(int1.length, int2.length);
  int1 = int1.padStart(intLen, "0");
  int2 = int2.padStart(intLen, "0");

  let decLen = Math.max(dec1.length, dec2.length);
  dec1 = dec1.padEnd(decLen, "0");
  dec2 = dec2.padEnd(decLen, "0");

  let digits1 = (int1 + dec1).split("");
  let digits2 = (int2 + dec2).split("");
  let longueur = digits1.length;

  let resultats = [];
  let retenues = new Array(longueur).fill("");
  let retenue = 0;

  for (let i = longueur - 1; i >= 0; i--) {
    let somme = Number(digits1[i]) + Number(digits2[i]) + retenue;
    if (somme >= 10) {
      resultats.unshift(somme - 10);
      retenue = 1;
      if (i > 0) {
        retenues[i - 1] = "¹";
      }
    } else {
      resultats.unshift(somme);
      retenue = 0;
    }
  }

  if (retenue == 1) {
    resultats.unshift(1);
    retenues.unshift("");
    digits1.unshift("");
    digits2.unshift("");
  }

  let totalLen = resultats.length;
  let sepIndex = decLen > 0 ? totalLen - decLen : -1;

  let html = "";
  html += buildRow(retenues, "retenue", "", sepIndex, "separator", "");
  html += buildRow(digits1, "", "", sepIndex, "separator", ",");
  html += buildRow(digits2, "", "+", sepIndex, "separator", ",");
  html += buildRow(
    new Array(totalLen).fill(""),
    "ligne",
    " ",
    sepIndex,
    "ligne",
  );
  html += buildRow(resultats, "", "", sepIndex, "separator", ",");

  document.getElementById("add_table_body").innerHTML = html;

  let n1Display = toDisplay(
    digits1.filter((c, i) => i !== 0 || c !== ""),
    sepIndex,
    decLen,
  ).replace(/^0+(?=\d)/, "");
  let n2Display = toDisplay(
    digits2.filter((c, i) => i !== 0 || c !== ""),
    sepIndex,
    decLen,
  ).replace(/^0+(?=\d)/, "");
  let resDisplay = toDisplay(resultats, sepIndex, decLen);

  document.getElementById("add_operation").innerHTML =
    n1Display + " + " + n2Display + " = " + resDisplay;
  document.getElementById("add_result_section").style.display = "block";
}

// --- 3. كود عملية الطرح العمودي المطور ---
function runSubtraction() {
  let n1raw = document.getElementById("sub_n1").value.trim().replace(",", ".");
  let n2raw = document.getElementById("sub_n2").value.trim().replace(",", ".");

  if (n1raw == "" || n2raw == "") {
    alert("الرجاء إدخال عددين");
    return;
  }

  n1raw = n1raw.replace(/[^0-9.]/g, "");
  n2raw = n2raw.replace(/[^0-9.]/g, "");

  if (parseFloat(n1raw) < parseFloat(n2raw)) {
    alert("يرجى إدخال العدد الأكبر أولاً لضمان بقاء النتيجة موجبة تعليمياً.");
    return;
  }

  let [int1, dec1 = ""] = n1raw.split(".");
  let [int2, dec2 = ""] = n2raw.split(".");

  let intLen = Math.max(int1.length, int2.length);
  int1 = int1.padStart(intLen, "0");
  int2 = int2.padStart(intLen, "0");

  let decLen = Math.max(dec1.length, dec2.length);
  dec1 = dec1.padEnd(decLen, "0");
  dec2 = dec2.padEnd(decLen, "0");

  let digits1 = (int1 + dec1).split("").map(Number);
  let digits2 = (int2 + dec2).split("").map(Number);
  let longueur = digits1.length;

  let resultats = [];
  let retenuesHaut = new Array(longueur).fill(""); // للاستعارة فوق العدد الأول
  let retenuesBas = new Array(longueur).fill(""); // للإرجاع تحت العدد الثاني
  let borrow = 0;

  for (let i = longueur - 1; i >= 0; i--) {
    let topDigit = digits1[i];
    let bottomDigit = digits2[i] + borrow;

    if (topDigit < bottomDigit) {
      retenuesHaut[i] = "¹⁰";
      resultats.unshift(topDigit + 10 - bottomDigit);
      borrow = 1;
      if (i > 0) {
        retenuesBas[i - 1] = "₁";
      }
    } else {
      resultats.unshift(topDigit - bottomDigit);
      borrow = 0;
    }
  }

  let sepIndex = decLen > 0 ? longueur - decLen : -1;

  let html = "";
  html += buildRow(retenuesHaut, "retenue", "", sepIndex, "separator", "");
  html += buildRow(digits1, "", "", sepIndex, "separator", ",");
  html += buildRow(
    digits2.map((d, idx) => d),
    "",
    "-",
    sepIndex,
    "separator",
    ",",
  );
  html += buildRow(
    new Array(longueur).fill(""),
    "ligne",
    " ",
    sepIndex,
    "ligne",
  );
  html += buildRow(resultats, "", "", sepIndex, "separator", ",");

  document.getElementById("sub_table_body").innerHTML = html;

  let n1Display = n1raw.replace(".", ",");
  let n2Display = n2raw.replace(".", ",");
  let resDisplay = toDisplay(resultats, sepIndex, decLen).replace(
    /^0+(?=\d)/,
    "",
  );

  document.getElementById("sub_operation").innerHTML =
    n1Display + " - " + n2Display + " = " + resDisplay;
  document.getElementById("sub_result_section").style.display = "block";
}

// --- 4. كود عملية الضرب العمودي المطور ---
function runMultiplication() {
  let n1raw = document.getElementById("mul_n1").value.trim().replace(",", ".");
  let n2raw = document.getElementById("mul_n2").value.trim().replace(",", ".");

  if (n1raw == "" || n2raw == "") {
    alert("الرجاء إدخال رقمين");
    return;
  }

  n1raw = n1raw.replace(/[^0-9.]/g, "");
  n2raw = n2raw.replace(/[^0-9.]/g, "");

  let dec1 = n1raw.includes(".") ? n1raw.split(".")[1].length : 0;
  let dec2 = n2raw.includes(".") ? n2raw.split(".")[1].length : 0;
  let totalDec = dec1 + dec2;

  let val1Str = n1raw.replace(".", "");
  let val2Str = n2raw.replace(".", "");

  let digits1 = val1Str.split("");
  let digits2 = val2Str.split("");

  let lignesIntermediaires = [];
  let retenuesLignes = [];

  for (let j = digits2.length - 1; j >= 0; j--) {
    let multiplicateur = Number(digits2[j]);
    let ligneResultat = [];
    let ligneRetenues = [];
    let retenue = 0;

    let decalage = digits2.length - 1 - j;
    for (let d = 0; d < decalage; d++) {
      ligneResultat.unshift("0");
      ligneRetenues.unshift("");
    }

    for (let i = digits1.length - 1; i >= 0; i--) {
      let produit = Number(digits1[i]) * multiplicateur + retenue;
      ligneResultat.unshift(produit % 10);
      retenue = Math.floor(produit / 10);
      ligneRetenues.unshift(retenue > 0 ? retenue : "");
    }
    if (retenue > 0) {
      ligneResultat.unshift(retenue);
      ligneRetenues.unshift("");
    }

    lignesIntermediaires.push(ligneResultat);
    retenuesLignes.push(ligneRetenues);
  }

  let num1Brut = BigInt(val1Str);
  let num2Brut = BigInt(val2Str);
  let produitTotalStr = (num1Brut * num2Brut).toString();
  let digitsResultat = produitTotalStr.split("");

  let maxLen = digitsResultat.length;
  for (let ligne of lignesIntermediaires) {
    maxLen = Math.max(maxLen, ligne.length);
  }
  maxLen = Math.max(maxLen, digits1.length, digits2.length);

  let f1Aligned = val1Str.padStart(maxLen, " ");
  let f2Aligned = val2Str.padStart(maxLen, " ");
  let resAligned = produitTotalStr.padStart(maxLen, " ");

  let lignesAjustees = lignesIntermediaires.map((ligne) => {
    let str = ligne.join("");
    return str.padStart(maxLen, " ").split("");
  });

  let sepIndex = totalDec > 0 ? maxLen - totalDec : -1;
  let sepIndexF1 = dec1 > 0 ? maxLen - dec1 : -1;
  let sepIndexF2 = dec2 > 0 ? maxLen - dec2 : -1;

  function buildRowMulti(arr, cellClass, signeToDisplay, virguleApresIndex) {
    let html = "<tr>";
    if (signeToDisplay) {
      html += "<td class='colonne-signe'>" + signeToDisplay + "</td>";
    } else {
      html += "<td></td>";
    }
    for (let i = 0; i < arr.length; i++) {
      let content = arr[i] === " " ? "" : arr[i];
      let classes = cellClass;
      if (virguleApresIndex !== -1 && i === virguleApresIndex) {
        classes += (classes ? " " : "") + "virgule-apres";
      }
      html += "<td class='" + classes.trim() + "'>" + content + "</td>";
    }
    html += "</tr>";
    return html;
  }

  let html = "";
  let toutesRetenues = new Array(maxLen).fill("");
  retenuesLignes.forEach((retLigne) => {
    for (let k = 0; k < retLigne.length; k++) {
      if (retLigne[k] !== "") {
        let index = maxLen - retLigne.length + k;
        if (index >= 0) {
          toutesRetenues[index] +=
            (toutesRetenues[index] ? "," : "") + retLigne[k];
        }
      }
    }
  });

  html += buildRowMulti(toutesRetenues, "retenue", "", -1);
  html += buildRowMulti(
    f1Aligned.split(""),
    "",
    "",
    sepIndexF1 !== -1 ? sepIndexF1 - 1 : -1,
  );
  html += buildRowMulti(
    f2Aligned.split(""),
    "",
    "×",
    sepIndexF2 !== -1 ? sepIndexF2 - 1 : -1,
  );
  html += buildRowMulti(new Array(maxLen).fill(""), "ligne", " ", -1);

  if (digits2.length > 1) {
    lignesAjustees.forEach((ligne) => {
      html += buildRowMulti(ligne, "", "", -1);
    });
    html += buildRowMulti(new Array(maxLen).fill(""), "ligne", " ", -1);
  }

  html += buildRowMulti(
    resAligned.split(""),
    "",
    "",
    sepIndex !== -1 ? sepIndex - 1 : -1,
  );

  document.getElementById("mul_table_body").innerHTML = html;

  let formattedRes = "";
  if (totalDec > 0) {
    let integerPart = produitTotalStr.slice(0, -totalDec) || "0";
    let decimalPart = produitTotalStr.slice(-totalDec);
    decimalPart = decimalPart.replace(/0+$/, "");
    formattedRes = decimalPart ? integerPart + "," + decimalPart : integerPart;
  } else {
    formattedRes = produitTotalStr;
  }

  document.getElementById("mul_operation").innerHTML =
    n1raw.replace(".", ",") +
    " × " +
    n2raw.replace(".", ",") +
    " = " +
    formattedRes;
  document.getElementById("mul_result_section").style.display = "block";
}

// --- 5. كود عملية القسمة الإقليدية والعشرية ---
function runDivision() {
  let n1raw = document.getElementById("div_n1").value.trim().replace(",", ".");
  let n2raw = document.getElementById("div_n2").value.trim().replace(",", ".");

  if (n1raw == "" || n2raw == "") {
    alert("يرجى إدخال عددين للقسمة");
    return;
  }

  let decDiviseur = n2raw.includes(".") ? n2raw.split(".")[1].length : 0;
  let factor = Math.pow(10, decDiviseur);
  let diviseurNum = Math.round(parseFloat(n2raw) * factor);
  let dividendeNum = parseFloat(n1raw) * factor;

  let divStr = Number(dividendeNum.toFixed(10)).toString();
  let diviseurStr = diviseurNum.toString();

  let parties = divStr.split(".");
  let partieEntiere = parties[0];
  let partieDecimale = parties[1] || "";

  let chiffresInitiaux = (partieEntiere + partieDecimale).split("");
  let indexVirguleInitiale = partieEntiere.length;

  let etapes = [];
  let quotientChiffres = [];
  let indexVirguleQuotient = -1;

  let indexActuel = 0;
  let resteEnCoursStr = "";
  let quotientCommence = false;
  let maxDecimaleSecurite = 8;

  while (
    indexActuel < chiffresInitiaux.length ||
    (parseInt(resteEnCoursStr, 10) !== 0 &&
      (indexVirguleQuotient === -1 ||
        quotientChiffres.length - indexVirguleQuotient < maxDecimaleSecurite))
  ) {
    if (indexActuel === indexVirguleInitiale && quotientCommence) {
      indexVirguleQuotient = quotientChiffres.length;
    }

    let prochainChiffre = "0";
    if (indexActuel < chiffresInitiaux.length) {
      prochainChiffre = chiffresInitiaux[indexActuel];
    } else if (indexVirguleQuotient === -1 && quotientCommence) {
      indexVirguleQuotient = quotientChiffres.length;
    }

    resteEnCoursStr += prochainChiffre;
    let resteEnCoursVal = parseInt(resteEnCoursStr, 10);

    if (
      resteEnCoursVal >= diviseurNum ||
      quotientCommence ||
      indexActuel >= chiffresInitiaux.length - 1
    ) {
      quotientCommence = true;
      let q = Math.floor(resteEnCoursVal / diviseurNum);
      let produit = q * diviseurNum;
      let nouveauReste = resteEnCoursVal - produit;

      etapes.push({
        chiffreIndex: indexActuel,
        resteInitial: resteEnCoursStr,
        produitSoustrait: produit.toString(),
        resteFinal: nouveauReste.toString(),
      });

      quotientChiffres.push(q.toString());
      resteEnCoursStr = nouveauReste.toString();
    }
    indexActuel++;
  }

  let quotientFinal = quotientChiffres.join("");
  if (indexVirguleQuotient !== -1) {
    quotientFinal =
      quotientFinal.slice(0, indexVirguleQuotient) +
      "," +
      quotientFinal.slice(indexVirguleQuotient);
  }

  let totalChiffresCalcules = Math.max(chiffresInitiaux.length, indexActuel);
  let nbColonnesGauche = totalChiffresCalcules + 2;
  let grilleGaucheData = [];

  let ligneDividende = Array(nbColonnesGauche).fill("");
  let virguleAfficheIdx = -1;

  for (let i = 0; i < totalChiffresCalcules; i++) {
    if (i < chiffresInitiaux.length) {
      ligneDividende[i + 1] = chiffresInitiaux[i];
    } else {
      ligneDividende[i + 1] = "";
    }
    if (i === indexVirguleInitiale - 1 && partieDecimale.length > 0) {
      virguleAfficheIdx = i + 1;
    }
  }
  grilleGaucheData.push({
    type: "normal",
    cells: ligneDividende,
    virguleIndex: virguleAfficheIdx,
  });

  etapes.forEach((etape, idx) => {
    let ligneProd = Array(nbColonnesGauche).fill("");
    let alignementDroit = etape.chiffreIndex + 1;
    let startProd = alignementDroit - etape.produitSoustrait.length + 1;

    for (let k = 0; k < etape.produitSoustrait.length; k++) {
      nodeProd = ligneProd[startProd + k] = etape.produitSoustrait[k];
    }
    ligneProd[startProd - 1] = "-";

    let indicesTrait = [];
    for (let k = -1; k < etape.produitSoustrait.length; k++) {
      indicesTrait.push(startProd + k);
    }
    grilleGaucheData.push({
      type: "soustraction",
      cells: ligneProd,
      traitIndices: indicesTrait,
    });

    let ligneReste = Array(nbColonnesGauche).fill("");
    let startReste = alignementDroit - etape.resteFinal.length + 1;
    for (let k = 0; k < etape.resteFinal.length; k++) {
      ligneReste[startReste + k] = etape.resteFinal[k];
    }

    if (idx < etapes.length - 1) {
      let prochainIndex = etape.chiffreIndex + 1;
      if (prochainIndex < chiffresInitiaux.length) {
        ligneReste[prochainIndex + 1] = chiffresInitiaux[prochainIndex];
      } else {
        ligneReste[prochainIndex + 1] = "0";
      }
    }
    grilleGaucheData.push({ type: "normal", cells: ligneReste });
  });

  let htmlGauche = "<table class='grille-gauche'>";
  grilleGaucheData.forEach((row) => {
    htmlGauche += "<tr>";
    for (let col = 0; col < nbColonnesGauche; col++) {
      let content = row.cells[col];
      let classes = [];
      let style = "";

      if (row.type === "soustraction" && row.traitIndices.includes(col)) {
        classes.push("trait-soustraction");
      }

      if (row.virguleIndex === col && content !== "") {
        content +=
          "<span style='color: red; position: absolute; margin-left: 1px;'>,</span>";
        style = "position: relative;";
      }
      htmlGauche += `<td class="${classes.join(" ")}" style="${style}">${content}</td>`;
    }
    htmlGauche += "</tr>";
  });
  htmlGauche += "</table>";

  let maxLenDroite = Math.max(diviseurStr.length, quotientFinal.length, 5);
  let htmlDroite = "<table class='grille-droite'>";

  htmlDroite +=
    "<tr>" +
    buildCellsRight(diviseurStr.padEnd(maxLenDroite, " "), "ligne-potence") +
    "</tr>";
  htmlDroite +=
    "<tr>" +
    buildCellsRight(quotientFinal.padEnd(maxLenDroite, " "), "") +
    "</tr>";

  let hauteurGauche = grilleGaucheData.length;
  for (let l = 2; l < hauteurGauche; l++) {
    htmlDroite +=
      "<tr>" + buildCellsRight(" ".repeat(maxLenDroite), "") + "</tr>";
  }
  htmlDroite += "</table>";

  document.getElementById("div_potence").innerHTML = htmlGauche + htmlDroite;
  document.getElementById("div_operation").innerHTML =
    `${n1raw.replace(".", ",")} ÷ ${n2raw.replace(".", ",")} = ${quotientFinal}` +
    `<br><small style="color: #666; font-weight: normal; direction: rtl; display: inline-block; font-size:15px; margin-top:5px;">` +
    `(العملية بعد إزاحة الفاصلة: ${divStr.replace(".", ",")} ÷ ${diviseurStr})` +
    `</small>`;
  document.getElementById("div_result_section").style.display = "block";
}

function buildCellsRight(str, cellClass) {
  let html = "";
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ",") continue;
    let content = arr[i] === " " ? "" : arr[i];
    if (i + 1 < arr.length && arr[i + 1] === ",") {
      if (content !== "") {
        content +=
          "<span style='color: red; position: absolute; margin-left: 1px;'>,</span>";
      }
    }
    html += `<td class="${cellClass}" style="position: relative;">${content}</td>`;
  }
  return html;
}

// --- 6. كود حاسبة الوقت والزمن العمودية ---
function toggleTimeInputs() {
  const op = document.getElementById("time_operator").value;
  const label2 = document.getElementById("labelTime2");
  const input2 = document.getElementById("time2");

  if (op === "*") {
    label2.innerText = "العدد (المضروب في)";
    input2.placeholder = "3";
    input2.value = "3";
  } else {
    label2.innerText = "الوقت الثاني (ساعة:دقيقة)";
    input2.placeholder = "01:45";
    input2.value = "01:45";
  }
}

function parseTimeToMinutes(str) {
  const parts = str.trim().split(":");
  if (parts.length !== 2) return null;
  const h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  if (isNaN(h) || isNaN(m) || m < 0 || m >= 60 || h < 0) return null;
  return { hours: h, minutes: m, total: h * 60 + m };
}

function formatTime(h, m) {
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
}

function runTimeCalcul() {
  const t1Str = document.getElementById("time1").value;
  const op = document.getElementById("time_operator").value;
  const t2Str = document.getElementById("time2").value;

  const t1 = parseTimeToMinutes(t1Str);
  if (!t1) {
    alert("الرجاء إدخال الوقت الأول بشكل صحيح (HH:MM)");
    return;
  }

  let resH = 0,
    resM = 0;
  let explanationHtml = "";
  let htmlVertical = "";

  let h1_disp = t1.hours,
    m1_disp = t1.minutes;
  let h2_disp = "",
    m2_disp = "",
    sign_disp = op;

  const tableStyle = `style="font-size: 24px; font-weight: bold; border-collapse: collapse; margin: 15px auto; min-width: 200px; text-align: center;"`;
  const tdStyle = `style="padding: 10px 15px; text-align: center;"`;
  const opStyle = `style="padding: 10px 15px; text-align: center; font-size: 26px; color: var(--time-color, #2b6cb0); font-weight: bold;"`;

  if (op === "+" || op === "-") {
    const t2 = parseTimeToMinutes(t2Str);
    if (!t2) {
      alert("الرجاء إدخال الوقت الثاني بشكل صحيح (HH:MM)");
      return;
    }

    h2_disp = t2.hours;
    m2_disp = t2.minutes;

    if (op === "+") {
      let rawMinutes = t1.minutes + t2.minutes;
      let rawHours = t1.hours + t2.hours;

      explanationHtml = `<strong>مراحل الحساب النظري:</strong><br>`;
      explanationHtml += `1. نجمع الدقائق: ${t1.minutes} + ${t2.minutes} = ${rawMinutes} دقيقة.<br>`;
      explanationHtml += `2. نجمع الساعات: ${t1.hours} + ${t2.hours} = ${rawHours} ساعة.<br>`;

      if (rawMinutes >= 60) {
        let extraHours = Math.floor(rawMinutes / 60);
        resM = rawMinutes % 60;
        resH = rawHours + extraHours;
        explanationHtml += `3. نقوم بتحويل الساعات الزائدة من عمود الدقائق: ${rawMinutes} دقيقة تعطي ${extraHours} ساعة وتبقى ${resM} دقيقة.<br>`;
      } else {
        resM = rawMinutes;
        resH = rawHours;
      }

      htmlVertical = `
        <table class="table-vertical" ${tableStyle}>
          <tr><td ${tdStyle}></td><td ${tdStyle}>${h1_disp} <small>س</small></td><td ${tdStyle}>${m1_disp} <small>د</small></td></tr>
          <tr class="trait-calcul"><td ${opStyle}>${sign_disp}</td><td ${tdStyle}>${h2_disp} <small>س</small></td><td ${tdStyle}>${m2_disp} <small>د</small></td></tr>
          <tr><td ${tdStyle}>=</td><td ${tdStyle}>${rawHours} <small>س</small></td><td ${tdStyle}>${rawMinutes} <small>د</small></td></tr>
          <tr style="color: var(--time-color, #2b6cb0);"><td ${tdStyle} style="font-size: 14px; font-weight: normal; color: #666;">بعد التحويل</td><td ${tdStyle}>${resH} <small>س</small></td><td ${tdStyle}>${resM} <small>د</small></td></tr>
        </table>`;
    } else {
      if (t1.total < t2.total) {
        alert("الوقت الأول يجب أن يكون أكبر من الوقت الثاني في عملية الطرح!");
        return;
      }

      explanationHtml = `<strong>مراحل الحساب النظري:</strong><br>`;
      let h1 = t1.hours;
      let m1 = t1.minutes;

      if (m1 < t2.minutes) {
        explanationHtml += `1. بما أن دقائق السطر الأول (${m1}) أصغر من دقائق السطر الثاني (${t2.minutes})، نستعير 1 ساعة (60 دقيقة) من خانة الساعات.<br>`;
        h1 -= 1;
        m1 += 60;
        explanationHtml += `2. تصبح خانة الساعات الأولى: ${t1.hours} - 1 = ${h1} سا، وتصبح خانة الدقائق الأولى: ${t1.minutes} + 60 = ${m1} د.<br>`;
      }

      resM = m1 - t2.minutes;
      resH = h1 - t2.hours;
      explanationHtml += `3. نطرح الدقائق: ${m1} - ${t2.minutes} = ${resM} دقيقة.<br>`;
      explanationHtml += `4. نطرح الساعات: ${h1} - ${t2.hours} = ${resH} ساعة.<br>`;

      if (t1.minutes < t2.minutes) {
        htmlVertical = `
          <table class="table-vertical" ${tableStyle}>
            <tr style="color: #ef4444; font-size: 16px;"><td ${tdStyle}></td><td ${tdStyle}>(1سا-)</td><td ${tdStyle}>(60+ د)</td></tr>
            <tr><td ${tdStyle}></td><td ${tdStyle}>${t1.hours} <small>س</small></td><td ${tdStyle}>${t1.minutes} <small>د</small></td></tr>
            <tr class="trait-calcul"><td ${opStyle}>${sign_disp}</td><td ${tdStyle}>${h2_disp} <small>س</small></td><td ${tdStyle}>${m2_disp} <small>د</small></td></tr>
            <tr style="color: var(--time-color, #2b6cb0);"><td ${tdStyle}>=</td><td ${tdStyle}>${resH} <small>س</small></td><td ${tdStyle}>${resM} <small>د</small></td></tr>
          </table>`;
      } else {
        htmlVertical = `
          <table class="table-vertical" ${tableStyle}>
            <tr><td ${tdStyle}></td><td ${tdStyle}>${h1_disp} <small>س</small></td><td ${tdStyle}>${m1_disp} <small>د</small></td></tr>
            <tr class="trait-calcul"><td ${opStyle}>${sign_disp}</td><td ${tdStyle}>${h2_disp} <small>س</small></td><td ${tdStyle}>${m2_disp} <small>د</small></td></tr>
            <tr style="color: var(--time-color, #2b6cb0);"><td ${tdStyle}>=</td><td ${tdStyle}>${resH} <small>س</small></td><td ${tdStyle}>${resM} <small>د</small></td></tr>
          </table>`;
      }
    }
  } else if (op === "*") {
    const multiplier = parseInt(t2Str, 10);
    if (isNaN(multiplier) || multiplier <= 0) {
      alert("الرجاء إدخال عدد صحيح موجب للمضاعفة (مثال: 3)");
      return;
    }

    let rawMinutes = t1.minutes * multiplier;
    let rawHours = t1.hours * multiplier;

    explanationHtml = `<strong>مراحل الحساب النظري:</strong><br>`;
    explanationHtml += `1. نضرب الدقائق: ${t1.minutes} × ${multiplier} = ${rawMinutes} دقيقة.<br>`;
    explanationHtml += `2. نضرب الساعات: ${t1.hours} × ${multiplier} = ${rawHours} ساعة.<br>`;

    if (rawMinutes >= 60) {
      let extraHours = Math.floor(rawMinutes / 60);
      resM = rawMinutes % 60;
      resH = rawHours + extraHours;
      explanationHtml += `3. نحول الدقائق الزائدة الناتجة (${rawMinutes} د) إلى ساعات بقسمتها على 60: تعطي ${extraHours} سا و تبقى ${resM} د.<br>`;
    } else {
      resM = rawMinutes;
      resH = rawHours;
    }

    htmlVertical = `
      <table class="table-vertical" ${tableStyle}>
        <tr><td ${tdStyle}></td><td ${tdStyle}>${h1_disp} <small>س</small></td><td ${tdStyle}>${m1_disp} <small>د</small></td></tr>
        <tr class="trait-calcul"><td ${opStyle}>${sign_disp}</td><td ${tdStyle} colspan="2" style="text-align: right; padding-right: 40px; font-size:24px;">${multiplier}</td></tr>
        <tr><td ${tdStyle}>=</td><td ${tdStyle}>${rawHours} <small>س</small></td><td ${tdStyle}>${rawMinutes} <small>د</small></td></tr>
        <tr style="color: var(--time-color, #2b6cb0);"><td ${tdStyle} style="font-size: 14px; font-weight: normal; color: #666;">بعد التحويل</td><td ${tdStyle}>${resH} <small>س</small></td><td ${tdStyle}>${resM} <small>د</small></td></tr>
      </table>`;
  }

  document.getElementById("time_zone_calcul").innerHTML = htmlVertical;
  document.getElementById("time_final").innerHTML =
    `النتيجة النهائية: ${formatTime(resH, resM)}`;
  document.getElementById("time_steps").innerHTML = explanationHtml;
  document.getElementById("time_result_section").style.display = "block";
}

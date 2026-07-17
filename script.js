// ======================================================
// CALCULATRICE INTERACTIVE
// Langues : العربية | Français | English | Български
// ======================================================


// ======================================================
// 1. TRADUCTIONS
// ======================================================

const translations = {

    ar: {
        errLetters: "الرجاء إدخال أرقام صالحة فقط وليس حروفاً!",
        errEmpty: "الرجاء إدخال عددين.",
        errZero: "لا يمكن القسمة على الصفر!",
        errSub: "يرجى إدخال العدد الأكبر أولاً لضمان بقاء النتيجة موجبة.",
        errTime: "الرجاء إدخال وقت أو أرقام صالحة فقط وليس حروفاً!",
        errTimeOrder: "يجب أن يكون الوقت الأول أكبر من الوقت الثاني في عملية الطرح!",
        errTimeFormat: "الرجاء إدخال الوقت الأول بشكل صحيح (HH:MM).",
        errMultiplier: "الرجاء إدخال عدد صحيح موجب للمضاعفة (مثال: 3).",

        afterShift: "العملية بعد إزاحة الفاصلة:",
        finalRes: "النتيجة النهائية:",
        theoSteps: "مراحل الحساب النظري:",

        stepAddMin: "1. نجمع الدقائق:",
        stepAddH: "2. نجمع الساعات:",
        stepConvert: "3. نحول الدقائق الزائدة إلى ساعات:",

        stepSubBorrow: "1. بما أن الدقائق الأولى أصغر، نستعير ساعة واحدة (60 دقيقة) من الساعات.",
        stepSubNew: "2. تصبح القيم الجديدة:",
        stepSubMin: "3. نطرح الدقائق:",
        stepSubH: "4. نطرح الساعات:",

        stepMulMin: "1. نضرب الدقائق:",
        stepMulH: "2. نضرب الساعات:",
        stepMulConvert: "3. نحول الدقائق الزائدة إلى ساعات:",

        hUnit: "س",
        mUnit: "د",
        converted: "بعد التحويل",

        pageH1: "منصة العمليات الحسابية التفاعلية",
        pageSubtitle: "اختر العملية الحسابية التي تريد تطبيقها والتعلم منها خطوة بخطوة",

        tabAdd: "الجمع",
        tabSub: "الطرح",
        tabMul: "الضرب",
        tabDiv: "القسمة",
        tabTime: "حساب الوقت",

        explAddStrong: "طريقة الجمع:",
        explAddText: " رتب الأعداد عمودياً بحيث تكون الفواصل تحت بعضها والآحاد تحت الآحاد، ثم اجمع من اليمين إلى اليسار مع ترحيل الاحتفاظ الفائض للخانة التالية.",

        explSubStrong: "طريقة الطرح:",
        explSubText: " رتب الأعداد عمودياً (الفواصل فوق بعضها). إذا كان الرقم العلوي أصغر من السفلي، نستعير \"1\" من الخانة التالية جهة اليسار ونضيف \"10\" للخانة الحالية.",

        explMulStrong: "طريقة الضرب:",
        explMulText: " أنجز عملية الضرب دون اعتبار للفاصلة، ثم في الناتج النهائي ضع الفاصلة بحيث يكون عدد أرقامها مساوياً لمجموع عدد الأرقام بعد الفاصلة في العددين المضروبين.",

        explDivStrong: "طريقة القسمة:",
        explDivText: " إذا كان المقسوم عليه عشرياً، نضربه والمقسوم معاً في (10، 100، أو 1000...) للتخلص من الفاصلة في المقسوم عليه أولاً، ثم ننجز عملية القسمة بالشبكة كالمعتاد.",

        explTimeStrong: "طريقة حساب الزمن:",
        explTimeText: " نجمع أو نطرح الساعات تحت الساعات والدقائق تحت الدقائق بشكل عمودي مستقل، مع مراعاة التحويل عند الضرورة (1 ساعة = 60 دقيقة).",

        labelAddN1: "العدد الأول",
        labelAddN2: "العدد الثاني",
        labelSubN1: "العدد الأول (الأكبر)",
        labelSubN2: "العدد الثاني (الأصغر)",
        labelMulN1: "المضروب",
        labelMulN2: "المضروب فيه",
        labelDivN1: "المقسوم",
        labelDivN2: "المقسوم عليه",
        labelTime1: "الوقت الأول (ساعة:دقيقة)",
        labelTime2: "الوقت الثاني (ساعة:دقيقة)",
        labelOperator: "العملية",

        btnAdd: "احسب المجموع",
        btnSub: "احسب الفرق",
        btnMul: "احسب حاصل الضرب",
        btnDiv: "احسب عملية القسمة",
        btnTime: "احسب ناتج الوقت",

        phAddN1: "مثال: 12,5",
        phAddN2: "مثال: 3,75",
        phSubN1: "مثال: 15,2",
        phSubN2: "مثال: 6,75",
        phMulN1: "مثال: 153,2",
        phMulN2: "مثال: 1,2",
        phDivN1: "مثال: 12,25",
        phDivN2: "مثال: 2,5"
    },


    fr: {
        errLetters: "Veuillez saisir uniquement des nombres valides, pas des lettres !",
        errEmpty: "Veuillez saisir deux nombres.",
        errZero: "Impossible de diviser par zéro !",
        errSub: "Veuillez saisir le plus grand nombre en premier afin que le résultat reste positif.",
        errTime: "Veuillez saisir un format de temps ou des nombres valides, pas de lettres !",
        errTimeOrder: "Le premier temps doit être supérieur au second pour la soustraction !",
        errTimeFormat: "Veuillez saisir correctement le premier temps (HH:MM).",
        errMultiplier: "Veuillez saisir un nombre entier positif pour le multiplicateur (ex. : 3).",

        afterShift: "Opération après déplacement de la virgule :",
        finalRes: "Résultat final :",
        theoSteps: "Étapes du calcul théorique :",

        stepAddMin: "1. On additionne les minutes :",
        stepAddH: "2. On additionne les heures :",
        stepConvert: "3. On convertit les minutes supplémentaires en heures :",

        stepSubBorrow: "1. Les premières minutes étant plus petites, on emprunte 1 heure (60 minutes) aux heures.",
        stepSubNew: "2. Les nouvelles valeurs sont :",
        stepSubMin: "3. On soustrait les minutes :",
        stepSubH: "4. On soustrait les heures :",

        stepMulMin: "1. On multiplie les minutes :",
        stepMulH: "2. On multiplie les heures :",
        stepMulConvert: "3. On convertit les minutes supplémentaires en heures :",

        hUnit: "h",
        mUnit: "min",
        converted: "Après conversion",

        pageH1: "Plateforme interactive des opérations de calcul",
        pageSubtitle: "Choisissez l'opération que vous voulez pratiquer et apprendre étape par étape",

        tabAdd: "Addition",
        tabSub: "Soustraction",
        tabMul: "Multiplication",
        tabDiv: "Division",
        tabTime: "Calcul du temps",

        explAddStrong: "Méthode de l'addition :",
        explAddText: " Alignez les nombres verticalement de sorte que les virgules soient les unes sous les autres et les unités sous les unités, puis additionnez de droite à gauche en reportant la retenue à la colonne suivante.",

        explSubStrong: "Méthode de la soustraction :",
        explSubText: " Alignez les nombres verticalement (virgules alignées). Si le chiffre du haut est plus petit que celui du bas, on emprunte \"1\" à la colonne suivante à gauche et on ajoute \"10\" à la colonne actuelle.",

        explMulStrong: "Méthode de la multiplication :",
        explMulText: " Effectuez la multiplication sans tenir compte de la virgule, puis dans le résultat final, placez la virgule de sorte que le nombre de chiffres après celle-ci soit égal à la somme des chiffres après la virgule dans les deux nombres multipliés.",

        explDivStrong: "Méthode de la division :",
        explDivText: " Si le diviseur est décimal, multipliez-le ainsi que le dividende par (10, 100 ou 1000...) pour éliminer d'abord la virgule du diviseur, puis effectuez la division en potence comme d'habitude.",

        explTimeStrong: "Méthode du calcul du temps :",
        explTimeText: " On additionne ou on soustrait les heures sous les heures et les minutes sous les minutes de façon indépendante et verticale, en tenant compte de la conversion si nécessaire (1 heure = 60 minutes).",

        labelAddN1: "Premier nombre",
        labelAddN2: "Deuxième nombre",
        labelSubN1: "Premier nombre (le plus grand)",
        labelSubN2: "Deuxième nombre (le plus petit)",
        labelMulN1: "Multiplicande",
        labelMulN2: "Multiplicateur",
        labelDivN1: "Dividende",
        labelDivN2: "Diviseur",
        labelTime1: "Premier temps (heure:minute)",
        labelTime2: "Deuxième temps (heure:minute)",
        labelOperator: "Opération",

        btnAdd: "Calculer la somme",
        btnSub: "Calculer la différence",
        btnMul: "Calculer le produit",
        btnDiv: "Calculer la division",
        btnTime: "Calculer le résultat du temps",

        phAddN1: "ex. : 12,5",
        phAddN2: "ex. : 3,75",
        phSubN1: "ex. : 15,2",
        phSubN2: "ex. : 6,75",
        phMulN1: "ex. : 153,2",
        phMulN2: "ex. : 1,2",
        phDivN1: "ex. : 12,25",
        phDivN2: "ex. : 2,5"
    },


    en: {
        errLetters: "Please enter valid numbers only, not letters!",
        errEmpty: "Please enter two numbers.",
        errZero: "Cannot divide by zero!",
        errSub: "Please enter the larger number first to keep the result positive.",
        errTime: "Please enter a valid time format or numbers only, not letters!",
        errTimeOrder: "The first time must be greater than the second time for subtraction!",
        errTimeFormat: "Please enter the first time correctly (HH:MM).",
        errMultiplier: "Please enter a positive whole number for the multiplier (e.g. 3).",

        afterShift: "Operation after moving the decimal point:",
        finalRes: "Final Result:",
        theoSteps: "Theoretical calculation steps:",

        stepAddMin: "1. Add the minutes:",
        stepAddH: "2. Add the hours:",
        stepConvert: "3. Convert extra minutes into hours:",

        stepSubBorrow: "1. Since the first minutes are smaller, we borrow 1 hour (60 minutes) from the hours.",
        stepSubNew: "2. The new values are:",
        stepSubMin: "3. Subtract the minutes:",
        stepSubH: "4. Subtract the hours:",

        stepMulMin: "1. Multiply the minutes:",
        stepMulH: "2. Multiply the hours:",
        stepMulConvert: "3. Convert extra minutes into hours:",

        hUnit: "h",
        mUnit: "min",
        converted: "After conversion",

        pageH1: "Interactive Arithmetic Operations Platform",
        pageSubtitle: "Choose the arithmetic operation you want to practice and learn step by step",

        tabAdd: "Addition",
        tabSub: "Subtraction",
        tabMul: "Multiplication",
        tabDiv: "Division",
        tabTime: "Time Calculation",

        explAddStrong: "Addition method:",
        explAddText: " Line up the numbers vertically so the decimal points and units are aligned, then add from right to left, carrying any extra to the next column.",

        explSubStrong: "Subtraction method:",
        explSubText: " Line up the numbers vertically (decimal points aligned). If the top digit is smaller than the bottom one, borrow \"1\" from the next column to the left and add \"10\" to the current column.",

        explMulStrong: "Multiplication method:",
        explMulText: " Perform the multiplication ignoring the decimal point, then in the final result place the decimal point so that the number of digits after it equals the total number of decimal digits in both numbers multiplied.",

        explDivStrong: "Division method:",
        explDivText: " If the divisor is decimal, multiply both it and the dividend by (10, 100, or 1000...) to remove the decimal point from the divisor first, then perform the long division as usual.",

        explTimeStrong: "Time calculation method:",
        explTimeText: " Add or subtract hours under hours and minutes under minutes independently in a column, converting when necessary (1 hour = 60 minutes).",

        labelAddN1: "First number",
        labelAddN2: "Second number",
        labelSubN1: "First number (larger)",
        labelSubN2: "Second number (smaller)",
        labelMulN1: "Multiplicand",
        labelMulN2: "Multiplier",
        labelDivN1: "Dividend",
        labelDivN2: "Divisor",
        labelTime1: "First time (hour:minute)",
        labelTime2: "Second time (hour:minute)",
        labelOperator: "Operation",

        btnAdd: "Calculate the sum",
        btnSub: "Calculate the difference",
        btnMul: "Calculate the product",
        btnDiv: "Calculate the division",
        btnTime: "Calculate the time result",

        phAddN1: "e.g.: 12.5",
        phAddN2: "e.g.: 3.75",
        phSubN1: "e.g.: 15.2",
        phSubN2: "e.g.: 6.75",
        phMulN1: "e.g.: 153.2",
        phMulN2: "e.g.: 1.2",
        phDivN1: "e.g.: 12.25",
        phDivN2: "e.g.: 2.5"
    },


    bg: {
        errLetters: "Моля, въвеждайте само валидни числа, а не букви!",
        errEmpty: "Моля, въведете две числа.",
        errZero: "Не може да се дели на нула!",
        errSub: "Моля, въведете първо по-голямото число, за да остане резултатът положителен.",
        errTime: "Моля, въведете валиден формат за време или само числа, без букви!",
        errTimeOrder: "Първото време трябва да бъде по-голямо от второто при изваждане!",
        errTimeFormat: "Моля, въведете първото време правилно (ЧЧ:ММ).",
        errMultiplier: "Моля, въведете положително цяло число за множител (например: 3).",

        afterShift: "Операция след преместване на десетичната запетая:",
        finalRes: "Краен резултат:",
        theoSteps: "Стъпки на теоретичното изчисление:",

        stepAddMin: "1. Събираме минутите:",
        stepAddH: "2. Събираме часовете:",
        stepConvert: "3. Преобразуваме излишните минути в часове:",

        stepSubBorrow: "1. Тъй като първите минути са по-малки, заемаме 1 час (60 минути) от часовете.",
        stepSubNew: "2. Новите стойности са:",
        stepSubMin: "3. Изваждаме минутите:",
        stepSubH: "4. Изваждаме часовете:",

        stepMulMin: "1. Умножаваме минутите:",
        stepMulH: "2. Умножаваме часовете:",
        stepMulConvert: "3. Преобразуваме излишните минути в часове:",

        hUnit: "ч",
        mUnit: "мин",
        converted: "След преобразуване",

        pageH1: "Интерактивна платформа за аритметични операции",
        pageSubtitle: "Изберете аритметичната операция, която искате да упражните и научите стъпка по стъпка",

        tabAdd: "събиране",
        tabSub: "изваждане",
        tabMul: "умножение",
        tabDiv: "деление",
        tabTime: "Изчисляване на времето",

        explAddStrong: "Метод на събиране:",
        explAddText: " Подредете числата вертикално така, че запетаите да са една под друга и единиците под единиците, след което съберете от дясно наляво, пренасяйки остатъка към следващата колона.",

        explSubStrong: "Метод на изваждане:",
        explSubText: " Подредете числата вертикално (запетаите една над друга). Ако горната цифра е по-малка от долната, заемаме \"1\" от следващата колона отляво и добавяме \"10\" към текущата колона.",

        explMulStrong: "Метод на умножение:",
        explMulText: " Извършете умножението без да отчитате запетаята, след което в крайния резултат поставете запетаята така, че броят на цифрите след нея да е равен на сбора от цифрите след запетаята в двете умножени числа.",

        explDivStrong: "Метод на деление:",
        explDivText: " Ако делителят е десетичен, умножете него и делимото по (10, 100 или 1000...), за да премахнете запетаята от делителя първо, след което извършете делението по обичайния начин.",

        explTimeStrong: "Метод за изчисляване на времето:",
        explTimeText: " Събираме или изваждаме часовете под часовете и минутите под минутите вертикално и независимо, като преобразуваме при необходимост (1 час = 60 минути).",

        labelAddN1: "Първо число",
        labelAddN2: "Второ число",
        labelSubN1: "Първо число (по-голямото)",
        labelSubN2: "Второ число (по-малкото)",
        labelMulN1: "Множимо",
        labelMulN2: "Множител",
        labelDivN1: "Делимо",
        labelDivN2: "Делител",
        labelTime1: "Първо време (час:минута)",
        labelTime2: "Второ време (час:минута)",
        labelOperator: "Операция",

        btnAdd: "Изчисли сумата",
        btnSub: "Изчисли разликата",
        btnMul: "Изчисли произведението",
        btnDiv: "Изчисли делението",
        btnTime: "Изчисли резултата от времето",

        phAddN1: "напр.: 12,5",
        phAddN2: "напр.: 3,75",
        phSubN1: "напр.: 15,2",
        phSubN2: "напр.: 6,75",
        phMulN1: "напр.: 153,2",
        phMulN2: "напр.: 1,2",
        phDivN1: "напр.: 12,25",
        phDivN2: "напр.: 2,5"
    }

};


// ======================================================
// 2. اللغة الحالية
// ======================================================

let currentLang =
    localStorage.getItem("calculatorLanguage") || "ar";


// ======================================================
// 3. تغيير اللغة
// ======================================================

function changeLanguage(lang) {

    if (!translations[lang]) {
        return;
    }

    currentLang = lang;

    localStorage.setItem(
        "calculatorLanguage",
        lang
    );

    // تغيير لغة الصفحة
    document.documentElement.lang = lang;

    // العربية RTL
    if (lang === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }

    // ترجمة العناصر التي تحتوي data-i18n
    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (
                translations[lang][key] !== undefined
            ) {
                element.textContent =
                    translations[lang][key];
            }

        });


    // ترجمة placeholders
    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (
                translations[lang][key] !== undefined
            ) {
                element.placeholder =
                    translations[lang][key];
            }

        });


    // تحديث حاسبة الوقت
    if (
        typeof toggleTimeInputs === "function"
    ) {
        toggleTimeInputs();
    }

    // مزامنة قائمة اختيار اللغة مع اللغة الحالية
    const langSelectEl =
        document.getElementById("langSelect");

    if (langSelectEl) {
        langSelectEl.value = lang;
    }

}


// ======================================================
// 4. التبويبات
// ======================================================

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");


tabButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            tabButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            tabContents.forEach(content => {
                content.classList.remove("active");
            });


            button.classList.add("active");


            const tabId =
                button.getAttribute("data-tab");


            const selectedTab =
                document.getElementById(tabId);


            if (selectedTab) {
                selectedTab.classList.add("active");
            }

        }
    );

});


// ======================================================
// 5. بناء صفوف العمليات
// ======================================================

function buildRow(
    arr,
    cellClass,
    signeToDisplay,
    sepIndex,
    sepClass,
    sepContent
) {

    let html = "<tr>";

    if (signeToDisplay) {

        html +=
            "<td class='colonne-signe'>" +
            signeToDisplay +
            "</td>";

    } else {

        html += "<td></td>";

    }


    for (
        let i = 0;
        i < arr.length;
        i++
    ) {

        if (i === sepIndex) {

            html +=
                "<td class='" +
                (sepClass || "separator") +
                "'>" +
                (
                    sepContent !== undefined
                        ? sepContent
                        : ""
                ) +
                "</td>";

        }


        html +=
            "<td class='" +
            cellClass +
            "'>" +
            arr[i] +
            "</td>";

    }


    html += "</tr>";

    return html;

}


// ======================================================
// 6. عرض الأرقام
// ======================================================

function toDisplay(
    arr,
    sepIndex,
    decLen
) {

    if (sepIndex < 0) {
        return arr.join("");
    }


    const values =
        arr.filter(c => c !== "");


    const pos =
        values.length - decLen;


    return (
        values.slice(0, pos).join("") +
        "," +
        values.slice(pos).join("")
    );

}


// ======================================================
// 7. الجمع
// ======================================================

function runAddition() {

    let n1raw =
        document
            .getElementById("add_n1")
            .value
            .trim()
            .replace(",", ".");


    let n2raw =
        document
            .getElementById("add_n2")
            .value
            .trim()
            .replace(",", ".");


    if (
        n1raw === "" ||
        n2raw === ""
    ) {

        alert(
            translations[currentLang]
                .errEmpty
        );

        return;

    }


    if (
        isNaN(n1raw) ||
        isNaN(n2raw)
    ) {

        alert(
            translations[currentLang]
                .errLetters
        );

        return;

    }


    let [
        int1,
        dec1 = ""
    ] = n1raw.split(".");


    let [
        int2,
        dec2 = ""
    ] = n2raw.split(".");


    if (int1 === "") int1 = "0";
    if (int2 === "") int2 = "0";


    const intLen =
        Math.max(
            int1.length,
            int2.length
        );


    int1 =
        int1.padStart(
            intLen,
            "0"
        );


    int2 =
        int2.padStart(
            intLen,
            "0"
        );


    const decLen =
        Math.max(
            dec1.length,
            dec2.length
        );


    dec1 =
        dec1.padEnd(
            decLen,
            "0"
        );


    dec2 =
        dec2.padEnd(
            decLen,
            "0"
        );


    const digits1 =
        (
            int1 + dec1
        ).split("");


    const digits2 =
        (
            int2 + dec2
        ).split("");


    const length =
        digits1.length;


    const resultats = [];


    const retenues =
        new Array(length)
            .fill("");


    let retenue = 0;


    for (
        let i = length - 1;
        i >= 0;
        i--
    ) {

        const somme =
            Number(digits1[i]) +
            Number(digits2[i]) +
            retenue;


        if (somme >= 10) {

            resultats.unshift(
                somme - 10
            );

            retenue = 1;

            if (i > 0) {
                retenues[i - 1] = "¹";
            }

        } else {

            resultats.unshift(
                somme
            );

            retenue = 0;

        }

    }


    if (retenue === 1) {

        resultats.unshift(1);
        retenues.unshift("");
        digits1.unshift("");
        digits2.unshift("");

    }


    const totalLen =
        resultats.length;


    const sepIndex =
        decLen > 0
            ? totalLen - decLen
            : -1;


    let html = "";


    html += buildRow(
        retenues,
        "retenue",
        "",
        sepIndex,
        "separator",
        ""
    );


    html += buildRow(
        digits1,
        "",
        "",
        sepIndex,
        "separator",
        ","
    );


    html += buildRow(
        digits2,
        "",
        "+",
        sepIndex,
        "separator",
        ","
    );


    html += buildRow(
        new Array(totalLen).fill(""),
        "ligne",
        " ",
        sepIndex,
        "ligne"
    );


    html += buildRow(
        resultats,
        "",
        "",
        sepIndex,
        "separator",
        ","
    );


    document
        .getElementById(
            "add_table_body"
        )
        .innerHTML = html;


    const n1Display =
        int1 +
        (
            decLen > 0
                ? "," + dec1
                : ""
        );


    const n2Display =
        int2 +
        (
            decLen > 0
                ? "," + dec2
                : ""
        );


    const resDisplay =
        toDisplay(
            resultats,
            sepIndex,
            decLen
        );


    document
        .getElementById(
            "add_operation"
        )
        .innerHTML =
            n1Display +
            " + " +
            n2Display +
            " = " +
            resDisplay;


    document
        .getElementById(
            "add_result_section"
        )
        .style.display = "block";

}


// ======================================================
// 8. الطرح
// ======================================================

function runSubtraction() {

    let n1raw =
        document
            .getElementById("sub_n1")
            .value
            .trim()
            .replace(",", ".");


    let n2raw =
        document
            .getElementById("sub_n2")
            .value
            .trim()
            .replace(",", ".");


    if (
        n1raw === "" ||
        n2raw === ""
    ) {

        alert(
            translations[currentLang]
                .errEmpty
        );

        return;

    }


    if (
        isNaN(n1raw) ||
        isNaN(n2raw)
    ) {

        alert(
            translations[currentLang]
                .errLetters
        );

        return;

    }


    if (
        parseFloat(n1raw) <
        parseFloat(n2raw)
    ) {

        alert(
            translations[currentLang]
                .errSub
        );

        return;

    }


    const parts1 =
        n1raw.split(".");


    const parts2 =
        n2raw.split(".");


    let int1 =
        parts1[0];


    let dec1 =
        parts1[1] || "";


    let int2 =
        parts2[0];


    let dec2 =
        parts2[1] || "";


    const intLen =
        Math.max(
            int1.length,
            int2.length
        );


    int1 =
        int1.padStart(
            intLen,
            "0"
        );


    int2 =
        int2.padStart(
            intLen,
            "0"
        );


    const decLen =
        Math.max(
            dec1.length,
            dec2.length
        );


    dec1 =
        dec1.padEnd(
            decLen,
            "0"
        );


    dec2 =
        dec2.padEnd(
            decLen,
            "0"
        );


    const digits1 =
        (
            int1 + dec1
        )
        .split("")
        .map(Number);


    const digits2 =
        (
            int2 + dec2
        )
        .split("")
        .map(Number);


    const length =
        digits1.length;


    const resultats = [];


    const retenues =
        new Array(length)
            .fill("");


    let borrow = 0;


    for (
        let i = length - 1;
        i >= 0;
        i--
    ) {

        const top =
            digits1[i];


        const bottom =
            digits2[i] + borrow;


        if (
            top < bottom
        ) {

            resultats.unshift(
                top + 10 - bottom
            );


            borrow = 1;


            if (i > 0) {
                retenues[i - 1] = "¹⁰";
            }

        } else {

            resultats.unshift(
                top - bottom
            );


            borrow = 0;

        }

    }


    const sepIndex =
        decLen > 0
            ? length - decLen
            : -1;


    let html = "";


    html += buildRow(
        retenues,
        "retenue",
        "",
        sepIndex,
        "separator",
        ""
    );


    html += buildRow(
        digits1,
        "",
        "",
        sepIndex,
        "separator",
        ","
    );


    html += buildRow(
        digits2,
        "",
        "-",
        sepIndex,
        "separator",
        ","
    );


    html += buildRow(
        new Array(length).fill(""),
        "ligne",
        " ",
        sepIndex,
        "ligne"
    );


    html += buildRow(
        resultats,
        "",
        "",
        sepIndex,
        "separator",
        ","
    );


    document
        .getElementById(
            "sub_table_body"
        )
        .innerHTML = html;


    const result =
        toDisplay(
            resultats,
            sepIndex,
            decLen
        )
        .replace(
            /^0+(?=\d)/,
            ""
        );


    document
        .getElementById(
            "sub_operation"
        )
        .innerHTML =
            n1raw.replace(".", ",") +
            " - " +
            n2raw.replace(".", ",") +
            " = " +
            result;


    document
        .getElementById(
            "sub_result_section"
        )
        .style.display = "block";

}


// ======================================================
// 9. الضرب
// ======================================================

function runMultiplication() {

    let n1raw =
        document
            .getElementById("mul_n1")
            .value
            .trim()
            .replace(",", ".");


    let n2raw =
        document
            .getElementById("mul_n2")
            .value
            .trim()
            .replace(",", ".");


    if (
        n1raw === "" ||
        n2raw === ""
    ) {

        alert(
            translations[currentLang]
                .errEmpty
        );

        return;

    }


    if (
        isNaN(n1raw) ||
        isNaN(n2raw)
    ) {

        alert(
            translations[currentLang]
                .errLetters
        );

        return;

    }


    const dec1 =
        n1raw.includes(".")
            ? n1raw.split(".")[1].length
            : 0;


    const dec2 =
        n2raw.includes(".")
            ? n2raw.split(".")[1].length
            : 0;


    const totalDec =
        dec1 + dec2;


    const val1 =
        n1raw.replace(".", "");


    const val2 =
        n2raw.replace(".", "");


    const result =
        (
            BigInt(val1) *
            BigInt(val2)
        )
        .toString();


    let formattedResult;


    if (
        totalDec > 0
    ) {

        const integerPart =
            result.slice(
                0,
                -totalDec
            ) || "0";


        let decimalPart =
            result.slice(
                -totalDec
            );


        decimalPart =
            decimalPart.replace(
                /0+$/,
                ""
            );


        formattedResult =
            decimalPart
                ? integerPart +
                  "," +
                  decimalPart
                : integerPart;

    } else {

        formattedResult =
            result;

    }


    document
        .getElementById(
            "mul_operation"
        )
        .innerHTML =
            n1raw.replace(".", ",") +
            " × " +
            n2raw.replace(".", ",") +
            " = " +
            formattedResult;


    document
        .getElementById(
            "mul_result_section"
        )
        .style.display = "block";

}


// ======================================================
// 10. القسمة
// ======================================================

function runDivision() {

    let n1raw =
        document
            .getElementById("div_n1")
            .value
            .trim()
            .replace(",", ".");


    let n2raw =
        document
            .getElementById("div_n2")
            .value
            .trim()
            .replace(",", ".");


    if (
        n1raw === "" ||
        n2raw === ""
    ) {

        alert(
            translations[currentLang]
                .errEmpty
        );

        return;

    }


    if (
        isNaN(n1raw) ||
        isNaN(n2raw)
    ) {

        alert(
            translations[currentLang]
                .errLetters
        );

        return;

    }


    if (
        parseFloat(n2raw) === 0
    ) {

        alert(
            translations[currentLang]
                .errZero
        );

        return;

    }


    const result =
        parseFloat(n1raw) /
        parseFloat(n2raw);


    document
        .getElementById(
            "div_operation"
        )
        .innerHTML =
            n1raw.replace(".", ",") +
            " ÷ " +
            n2raw.replace(".", ",") +
            " = " +
            result;


    document
        .getElementById(
            "div_result_section"
        )
        .style.display = "block";

}


// ======================================================
// 11. حاسبة الوقت
// ======================================================

function toggleTimeInputs() {

    const op =
        document
            .getElementById(
                "time_operator"
            )
            .value;


    const label2 =
        document
            .getElementById(
                "labelTime2"
            );


    const input2 =
        document
            .getElementById(
                "time2"
            );


    if (
        op === "*"
    ) {

        label2.innerText = "×";
        input2.placeholder = "3";
        input2.value = "3";

    } else {

        label2.innerText = "HH:MM";
        input2.placeholder = "01:45";
        input2.value = "01:45";

    }

}


// ======================================================
// 12. تحويل الوقت إلى دقائق
// ======================================================

function parseTimeToMinutes(
    str
) {

    const parts =
        str
            .trim()
            .split(":");


    if (
        parts.length !== 2
    ) {

        return null;

    }


    const hours =
        parseInt(
            parts[0],
            10
        );


    const minutes =
        parseInt(
            parts[1],
            10
        );


    if (
        isNaN(hours) ||
        isNaN(minutes) ||
        hours < 0 ||
        minutes < 0 ||
        minutes >= 60
    ) {

        return null;

    }


    return {

        hours,

        minutes,

        total:
            hours * 60 +
            minutes

    };

}


// ======================================================
// 13. تنسيق الوقت
// ======================================================

function formatTime(
    h,
    m
) {

    return (

        String(h)
            .padStart(2, "0")

        +

        ":"

        +

        String(m)
            .padStart(2, "0")

    );

}


// ======================================================
// 14. حساب الوقت
// ======================================================

function runTimeCalcul() {

    const t1Str =
        document
            .getElementById(
                "time1"
            )
            .value;


    const op =
        document
            .getElementById(
                "time_operator"
            )
            .value;


    const t2Str =
        document
            .getElementById(
                "time2"
            )
            .value;


    if (
        /[^\d:]/.test(t1Str) ||
        (
            op !== "*" &&
            /[^\d:]/.test(t2Str)
        ) ||
        (
            op === "*" &&
            /\D/.test(t2Str)
        )
    ) {

        alert(
            translations[currentLang]
                .errTime
        );

        return;

    }


    const t1 =
        parseTimeToMinutes(
            t1Str
        );


    if (!t1) {

        alert(
            translations[currentLang]
                .errTimeFormat
        );

        return;

    }


    let resultHours = 0;
    let resultMinutes = 0;


    const t =
        translations[currentLang];


    if (
        op === "+" ||
        op === "-"
    ) {

        const t2 =
            parseTimeToMinutes(
                t2Str
            );


        if (!t2) {

            alert(
                t.errTimeFormat
            );

            return;

        }


        if (
            op === "+"
        ) {

            const total =
                t1.total +
                t2.total;


            resultHours =
                Math.floor(
                    total / 60
                );


            resultMinutes =
                total % 60;


        } else {


            if (
                t1.total <
                t2.total
            ) {

                alert(
                    t.errTimeOrder
                );

                return;

            }


            const total =
                t1.total -
                t2.total;


            resultHours =
                Math.floor(
                    total / 60
                );


            resultMinutes =
                total % 60;

        }


    } else if (
        op === "*"
    ) {

        const multiplier =
            parseInt(
                t2Str,
                10
            );


        if (
            isNaN(multiplier) ||
            multiplier <= 0
        ) {

            alert(
                t.errMultiplier
            );

            return;

        }


        const total =
            t1.total *
            multiplier;


        resultHours =
            Math.floor(
                total / 60
            );


        resultMinutes =
            total % 60;

    }


    document
        .getElementById(
            "time_final"
        )
        .innerHTML =
            t.finalRes +
            " " +
            formatTime(
                resultHours,
                resultMinutes
            );


    document
        .getElementById(
            "time_result_section"
        )
        .style.display =
            "block";

}


// ======================================================
// 15. تشغيل اللغة المحفوظة عند فتح الصفحة
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        changeLanguage(
            currentLang
        );

    }
);

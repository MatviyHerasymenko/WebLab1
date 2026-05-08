// 1. функція діалогу з користувачем

function dialogWithUser() {
    const questions = [
        { question: "Який у вас бюджет?\n1 — до 800 000 грн\n2 — до 1 200 000 грн\n3 — понад 1 200 000 грн", answers: ["1", "2", "3"] },
        { question: "Який клас авто вас цікавить?\n1 — Седан\n2 — Кросовер\n3 — Преміум", answers: ["1", "2", "3"] }
    ];

    let answers = [];
    let i = 0;

    while (i < questions.length) {
        let answer = prompt(questions[i].question);

        if (answer === null) {
            alert("Підбір автомобіля скасовано. Будемо раді бачити вас у нашому салоні!");
            return;
        }

        if (!questions[i].answers.includes(answer.trim())) {
            alert("Будь ласка, введіть одне з допустимих значень: " + questions[i].answers.join(", "));
            continue;
        }

        answers.push(answer.trim());
        i++;
    }

    let recommendation = "";

    if (answers[0] === "1" && answers[1] === "1") recommendation = "Skoda Octavia — від 680 000 грн";
    else if (answers[0] === "1" && answers[1] === "2") recommendation = "Hyundai Tucson — від 870 000 грн";
    else if (answers[0] === "2" && answers[1] === "1") recommendation = "Toyota Camry — від 890 000 грн";
    else if (answers[0] === "2" && answers[1] === "2") recommendation = "Toyota RAV4 Hybrid — від 1 120 000 грн";
    else if (answers[0] === "3" && answers[1] === "3") recommendation = "Audi A6 — від 1 720 000 грн";
    else if (answers[1] === "3") recommendation = "BMW 5 Series — від 1 650 000 грн";
    else recommendation = "Volkswagen Passat — від 720 000 грн";

    alert("Наша рекомендація для вас:\n\n🚗 " + recommendation + "\n\nЗавітайте до нашого каталогу або зателефонуйте: +38 (099) 123-45-67");
}



// 2. функція інформації про розробника

function showDeveloperInfo(lastName, firstName, position = "Fullstack розробник") {
    alert(
        "👨‍💻 Інформація про розробника сторінки:\n\n" +
        "Прізвище: " + lastName + "\n" +
        "Ім'я: " + firstName + "\n" +
        "Посада: " + position
    );
}


// 3. функція порівняння двох рядків за довжиною

function compareStrings() {
    let str1 = prompt("Введіть першу назву автомобіля:");
    if (str1 === null || str1.trim() === "") {
        alert("Порівняння скасовано.");
        return;
    }

    let str2 = prompt("Введіть другу назву автомобіля:");
    if (str2 === null || str2.trim() === "") {
        alert("Порівняння скасовано.");
        return;
    }

    str1 = str1.trim();
    str2 = str2.trim();

    let result = "";
    if (str1.length > str2.length) {
        result = "Довша назва: \"" + str1 + "\"\n(" + str1.length + " символів проти " + str2.length + ")";
    } else if (str2.length > str1.length) {
        result = "Довша назва: \"" + str2 + "\"\n(" + str2.length + " символів проти " + str1.length + ")";
    } else {
        result = "Назви однакової довжини: " + str1.length + " символів кожна";
    }

    alert("📏 Порівняння рядків:\n\n\"" + str1 + "\" — " + str1.length + " символів\n\"" + str2 + "\" — " + str2.length + " символів\n\n" + result);
}


// 4. зміна фону сторінки на 30 секунд 

function toggleNightMode() {
    const originalBg = document.body.style.backgroundColor;
    const originalColor = document.body.style.color;

    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "#e0e0e0";

    const btn = document.getElementById("night-mode-btn");
    if (btn) {
        btn.textContent = "🌙 Нічний режим активний (30 сек)";
        btn.disabled = true;
    }

    alert(" Нічний режим активовано на 30 секунд!");

    setTimeout(function () {
        document.body.style.backgroundColor = originalBg;
        document.body.style.color = originalColor;
        if (btn) {
            btn.textContent = "🌙 Нічний режим (30 сек)";
            btn.disabled = false;
        }
        alert(" Нічний режим вимкнено. Звичайний режим відновлено.");
    }, 30000);
}



// 5. підсвічування активного пункту навбара

function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const allLinks = document.querySelectorAll(".navbar a");

    allLinks.forEach(link => {
        link.style.borderBottom = "none";
    });

    const activeLink = document.getElementById("nav-" + currentPage.replace(".html", ""));
    if (activeLink) {
        activeLink.style.borderBottom = "2px solid #add8ff";
        activeLink.style.paddingBottom = "2px";
    }
}


// 6. блок Авто дня — innerHTML, outerHTML, textContent, nodeValue

function showCarOfDay() {
    const cars = [
        {
            name: "Toyota Camry",
            engine: "2.5 л, 200 к.с.",
            price: "890 000 грн",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/2025_Toyota_Camry_Hybrid_XSE_%28United_States%29_front_view.png",
            label: "ХІТ ПРОДАЖІВ"
        },
        {
            name: "Toyota RAV4 Hybrid",
            engine: "2.5 Hybrid, 222 к.с.",
            price: "1 120 000 грн",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Toyota_RAV4_Plug-in_Hybrid_GR_Sport_IMG_9891.jpg",
            label: "HYBRID"
        },
        {
            name: "Audi A6",
            engine: "2.0 TFSI, 204 к.с.",
            price: "1 720 000 грн",
            img: "https://gagadget.com/media/post_big/A250467_large.jpg",
            label: "НОВИНКА"
        }
    ];

    const randomCar = cars[Math.floor(Math.random() * cars.length)];
    const container = document.getElementById("car-of-day");

    if (!container) return;


    container.innerHTML =
        "<div style='background:#f0f6ff; border:2px solid #4a90d9; border-radius:8px; padding:16px; display:flex; gap:20px; align-items:center; flex-wrap:wrap;'>" +
        "<img src='" + randomCar.img + "' width='260' height='155' alt='" + randomCar.name + "' style='border-radius:6px; border:2px solid #4a90d9;'>" +
        "<div>" +
        "<h3 id='car-day-title' style='color:#1a3a5c; margin:0 0 8px;'>" + randomCar.name + "</h3>" +
        "<p id='car-day-desc' style='margin:4px 0;'>Двигун: <b>" + randomCar.engine + "</b></p>" +
        "<p id='car-day-price' style='margin:4px 0;'>Ціна від: <span class='price-tag' id='car-day-price-val'>" + randomCar.price + "</span></p>" +
        "<span style='background:#e01b24;color:#fff;padding:3px 9px;border-radius:4px;font-size:12px;font-weight:bold;'>" + randomCar.label + "</span>" +
        "</div>" +
        "</div>";

    const caption = document.getElementById("car-day-caption");
    if (caption) {
        caption.textContent = "Актуальна пропозиція дня: " + randomCar.name + " вже чекає на вас у салоні!";
    }

    const title = document.getElementById("car-of-day-heading");
    if (title) {
        title.outerHTML = "<h2 id='car-of-day-heading' style='color:#1a3a5c;border-bottom:2px solid #4a90d9;padding-bottom:5px;'>⭐ Авто дня — " + randomCar.name + "</h2>";
    }

    // nodeValue
    const priceVal = document.getElementById("car-day-price-val");
    if (priceVal && priceVal.firstChild) {
        priceVal.firstChild.nodeValue = randomCar.price;
    }

    document.getElementById("show-car-btn").style.display = "none";
    document.getElementById("reset-car-btn").style.display = "inline-block";
}

function resetCarOfDay() {
    const container = document.getElementById("car-of-day");
    if (container) container.innerHTML = "";

    const title = document.getElementById("car-of-day-heading");
    if (title) {
        title.outerHTML = "<h2 id='car-of-day-heading'>⭐ Авто дня</h2>";
    }

    const caption = document.getElementById("car-day-caption");
    if (caption) caption.textContent = "";

    document.getElementById("show-car-btn").style.display = "inline-block";
    document.getElementById("reset-car-btn").style.display = "none";
}



// 7. банер акції на Service.html


function showPromoBanner() {
    const btn = document.getElementById("show-promo-btn");
    if (!btn) return;


    const banner = document.createElement("div");
    banner.id = "promo-banner";
    banner.style.cssText = "background:linear-gradient(135deg,#1a3a5c,#4a90d9);color:#fff;border-radius:10px;padding:20px 24px;margin:20px 0;box-shadow:0 4px 16px rgba(0,0,0,0.2);";

    const icon = document.createElement("span");
    icon.style.cssText = "font-size:28px;display:block;margin-bottom:8px;";
    icon.textContent = "🔧";

    const heading = document.createElement("h3");
    heading.id = "promo-heading";
    heading.style.cssText = "margin:0 0 8px;font-size:20px; color:#fff;";

  
    const headingText = document.createTextNode("Акція цього тижня: знижка 10% на ТО!");
    heading.append(headingText);

    const desc = document.createElement("p");
    desc.id = "promo-desc";
    desc.style.cssText = "margin:0 0 14px;font-size:15px;opacity:0.9;";


    const descText = document.createTextNode("При записі онлайн або за телефоном до кінця тижня — знижка 10% на будь-яке технічне обслуговування.");
    desc.append(descText);

    const btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;";

    const replaceBtn = document.createElement("button");
    replaceBtn.textContent = "🔄 Інша пропозиція";
    replaceBtn.style.cssText = "padding:8px 16px;border:2px solid #fff;background:transparent;color:#fff;border-radius:6px;cursor:pointer;font-weight:bold;";
    replaceBtn.onclick = replacePromoDesc;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✕ Закрити";
    closeBtn.style.cssText = "padding:8px 16px;border:2px solid #fff;background:transparent;color:#fff;border-radius:6px;cursor:pointer;font-weight:bold;";
    closeBtn.onclick = removePromoBanner;

    btnRow.append(replaceBtn, closeBtn);
    banner.append(heading, desc, btnRow);

    banner.prepend(icon);

    const priceTable = document.querySelector("#prices + table, #prices ~ table");
    if (priceTable) {
        priceTable.after(banner);
    } else {
        const content = document.querySelector(".content");
        content.append(banner);
    }

    btn.style.display = "none";
}

function replacePromoDesc() {
    const oldDesc = document.getElementById("promo-desc");
    if (!oldDesc) return;

    const newDesc = document.createElement("p");
    newDesc.id = "promo-desc";
    newDesc.style.cssText = "margin:0 0 14px;font-size:15px;opacity:0.9;";
    newDesc.textContent = "Безкоштовна комп'ютерна діагностика при замовленні будь-якого ремонту від 1500 грн. Діє до кінця місяця!";

    oldDesc.replaceWith(newDesc);
}

function removePromoBanner() {
    const banner = document.getElementById("promo-banner");
    if (banner) {
        //1.5 видаляємо об'єкт-обробник через removeEventListener
        if (window._bannerHandler) {
            banner.removeEventListener("mouseover", window._bannerHandler);
            banner.removeEventListener("mouseout", window._bannerHandler);
            window._bannerHandler = null;
        }
        banner.remove();
    }

    const btn = document.getElementById("show-promo-btn");
    if (btn) btn.style.display = "inline-block";
}




// 1.1 обробники через атрибут (onmouseover/onmouseout HTML) — картки авто в Catalog

function carCardMouseOver(el) {
    el.style.transform = "scale(1.04)";
    el.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    el.style.boxShadow = "0 6px 24px rgba(74,144,217,0.45)";
    el.style.zIndex = "10";
}

function carCardMouseOut(el) {
    el.style.transform = "";
    el.style.boxShadow = "";
    el.style.zIndex = "";
}

// 1.2 Обробник через властивість блок .car-of-day-wrapper
function initCarOfDayWrapperHover() {
    const wrapper = document.querySelector(".car-of-day-wrapper");
    if (!wrapper) return;

    wrapper.onmouseover = function() {
        wrapper.style.boxShadow = "0 4px 18px rgba(74,144,217,0.35)";
        wrapper.style.borderColor = "#4a90d9";
        wrapper.style.transition = "box-shadow 0.2s ease, border-color 0.2s ease";
    };

    wrapper.onmouseout = function() {
        wrapper.style.boxShadow = "";
        wrapper.style.borderColor = "";
    };
}


// 1.3 addEventListener два різних обробники на кнопці авто дня
let carViewCount = 0;

function initShowCarBtnListeners() {
    const btn = document.getElementById("show-car-btn");
    if (!btn) return;

    btn.addEventListener("click", showCarOfDay);

    btn.addEventListener("click", function() {
        carViewCount++;
        let counter = document.getElementById("car-view-counter");
        if (!counter) {
            counter = document.createElement("p");
            counter.id = "car-view-counter";
            counter.style.cssText = "font-size:13px; color:#3475ab; margin-top:6px; font-style:italic;";
            btn.parentNode.insertBefore(counter, btn.nextSibling);
        }
        counter.textContent = "👁 Ви переглянули авто дня: " + carViewCount + " раз(и) за цю сесію";
    });
}


// 1.4 обробник-об'єкт з handleEvent + event.currentTarget + removeEventListener в Service
const bannerHoverHandler = {
    _tooltip: null,

    handleEvent(event) {
        const target = event.currentTarget; 

        if (event.type === "mouseover") {

            const hoveredBtn = event.target.closest("button");
            let msg = "Банер акції AutoDrive Service";
            if (hoveredBtn) {
                msg = "Активна кнопка: «" + hoveredBtn.textContent.trim() + "»";
            }

            if (!this._tooltip) {
                this._tooltip = document.createElement("div");
                this._tooltip.style.cssText =
                    "position:absolute; background:#1a3a5c; color:#fff; font-size:12px;" +
                    "padding:4px 10px; border-radius:4px; pointer-events:none; z-index:999;" +
                    "white-space:nowrap; box-shadow:0 2px 8px rgba(0,0,0,0.3);";
                document.body.appendChild(this._tooltip);
            }
            this._tooltip.textContent = msg;
            this._tooltip.style.display = "block";

            const rect = target.getBoundingClientRect();
            this._tooltip.style.top = (window.scrollY + rect.bottom + 6) + "px";
            this._tooltip.style.left = (window.scrollX + rect.left) + "px";

        } else if (event.type === "mouseout") {
            if (this._tooltip) {
                this._tooltip.style.display = "none";
            }
        }
    },

    destroy() {
        if (this._tooltip) {
            this._tooltip.remove();
            this._tooltip = null;
        }
    }
};

// прикріплюємо об'єкт-обробник до банера після його появи
function attachBannerObjectHandler() {
    const banner = document.getElementById("promo-banner");
    if (!banner) return;
    banner.addEventListener("mouseover", bannerHoverHandler);
    banner.addEventListener("mouseout", bannerHoverHandler);
    window._bannerHandler = bannerHoverHandler;
}

const _origShowPromoBanner = showPromoBanner;
showPromoBanner = function() {
    _origShowPromoBanner();
    setTimeout(attachBannerObjectHandler, 0);
};

const _origRemovePromoBanner = removePromoBanner;
removePromoBanner = function() {
    const banner = document.getElementById("promo-banner");
    if (banner && window._bannerHandler) {
        banner.removeEventListener("mouseover", window._bannerHandler);
        banner.removeEventListener("mouseout", window._bannerHandler);
        bannerHoverHandler.destroy();
        window._bannerHandler = null;
    }

    const b = document.getElementById("promo-banner");
    if (b) b.remove();
    const btn = document.getElementById("show-promo-btn");
    if (btn) btn.style.display = "inline-block";
};



// 2.1 Підсвічування елементів списку через event.target на батьківському <ul> на index.html
function initWhyListHighlight() {
    const list = document.getElementById("why-list");
    if (!list) return;

    list.onclick = function(event) {
        const li = event.target.closest("li");
        if (!li || !list.contains(li)) return;

        list.querySelectorAll("li").forEach(function(item) {
            item.classList.remove("li-active");
        });

        li.classList.add("li-active");
    };
}


// 2.2 Меню з data-action + один обробник для всього меню Service
function initServiceQuickMenu() {
    const menu = document.getElementById("service-quick-menu");
    if (!menu) return;

    menu.addEventListener("click", function(event) {
        const btn = event.target.closest("[data-action]");
        if (!btn) return;

        const action = btn.dataset.action;

        if (action === "book") {
            alert("📅 Запис на сервіс\n\nЗателефонуйте: +38 (099) 123-45-67\nабо надішліть email: service@autodrive.ua\n\nГрафік: Пн–Пт 08:00–20:00, Сб 09:00–18:00");
        } else if (action === "promo") {
            showPromoBanner();
        } else if (action === "contacts") {
            const target = document.getElementById("schedule");
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }
    });
}


// 2.3 прийом поведінка та data-tooltip
function initTooltipBehavior() {
    const elements = document.querySelectorAll("[data-tooltip]");

    let tooltipEl = document.createElement("div");
    tooltipEl.id = "behavior-tooltip";
    tooltipEl.style.cssText =
        "display:none; position:absolute; background:#1a3a5c; color:#fff;" +
        "font-size:12px; padding:5px 12px; border-radius:5px; pointer-events:none;" +
        "z-index:9999; max-width:240px; box-shadow:0 3px 10px rgba(0,0,0,0.25);" +
        "line-height:1.5; white-space:normal;";
    document.body.appendChild(tooltipEl);

    elements.forEach(function(el) {
        el.addEventListener("mouseenter", function(e) {
            tooltipEl.textContent = el.dataset.tooltip;
            tooltipEl.style.display = "block";
            positionTooltip(e);
        });
        el.addEventListener("mousemove", positionTooltip);
        el.addEventListener("mouseleave", function() {
            tooltipEl.style.display = "none";
        });
    });

    function positionTooltip(e) {
        tooltipEl.style.top = (window.scrollY + e.clientY + 14) + "px";
        tooltipEl.style.left = (window.scrollX + e.clientX + 10) + "px";
    }
}



// ініціалізація всіх нових функцій при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function() {
    initCarOfDayWrapperHover(); 
    initShowCarBtnListeners();    
    initWhyListHighlight();        
    initServiceQuickMenu();        
    initTooltipBehavior();         
});
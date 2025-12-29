// const btn = document.getElementById('btnpress');
// const menu = document.getElementById('menu');

// function menutoggle() {
//     if (menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//     } else {
//         menu.classList.add('hidden');
//     }
// }

// btn.addEventListener('click', menutoggle);

function forToggleMenu() {
    let sidebarbtn = document.querySelector("#sidebarbtn");
    let sidebarbtncross = document.querySelector("#sidebarbtncross");
    let sidebarmenumbl = document.querySelector("#sidebarmenumbl");

    function toggleMenu() {
        if (sidebarmenumbl.classList.contains("left-0")) {
            sidebarmenumbl.classList.remove("left-0");
            sidebarmenumbl.classList.add("-left-full");
        } else {
            sidebarmenumbl.classList.remove("-left-full");
            sidebarmenumbl.classList.add("left-0");
        }
    }
    if (!sidebarbtn || !sidebarbtncross || !sidebarmenumbl) {
        return;
    }

    sidebarbtn.addEventListener("click", toggleMenu);
    sidebarbtncross.addEventListener("click", toggleMenu);
}
forToggleMenu();


function authorTable() {
    const tables = [
        { image: "images/one.png", name: "Esthera Jackson", email: "esthera@simmmple.com", position: "Manager", designation: "Organization", status: "online", date: "14/06/21", edit: "edit" },
        { image: "images/two.png", name: "Alexa Liras", email: "alexa@simmmple.com", position: "Programmer", designation: "Developer", status: "offline", date: "14/06/21", edit: "edit" },
        { image: "images/three.png", name: "Laurent Michael", email: "laurent@simmmple.com", position: "Executive", designation: "Projects", status: "online", date: "14/06/21", edit: "edit" },
        { image: "images/four.png", name: "Freduardo Hill", email: "freduardo@simmmple.com", position: "Manager", designation: "Organization", status: "online", date: "14/06/21", edit: "edit" },
        { image: "images/five.png", name: "Daniel Thomas", email: "daniel@simmmple.com", position: "Programmer", designation: "Developer", status: "offline", date: "14/06/21", edit: "edit" },
        { image: "images/six.png", name: "Mark Wilson", email: "mark@simmmple.com", position: "Designer", designation: "UI/UX Design", status: "offline", date: "14/06/21", edit: "edit" },
    ];

    let authorContent = document.querySelector("#authorContent")
    let functionContent = document.querySelector("#functionContent")
    let StatusContent = document.querySelector("#StatusContent")
    let EmployedContent = document.querySelector("#EmployedContent")
    let editContent = document.querySelector("#editContent")
    if (!authorContent || !functionContent || !StatusContent || !EmployedContent || !editContent) {
        return;
    }

    for (let i = 0; i < tables.length; i++) {
        authorContent.innerHTML +=
            `
    <div class="flex items-center mt-4">
    <div>
    <img src="${tables[i].image}" class="object-contain w-10 rounded-xl">
    </div>
    <div class="ml-4 text-xs">
    <h1>${tables[i].name}</h1>
    <p>${tables[i].email}</p>
    </div>
    </div>
    <div class="absolute w-[93%] h-[1px] bg-gray-400 mt-1"></div>
    `

        functionContent.innerHTML += `
    <div class="mt-4 text-sm">
    <h1 class="font-bold">${tables[i].position}</h1>
    <p>${tables[i].position}</p>
    </div>
    `

        if (tables[i].status === "online") {
            StatusContent.innerHTML += `
        <div class="mt-7 text-sm">
        <button class="bg-[#01b574] px-2 py-1 rounded-lg">Online</button>
        </div>
        `
        }
        else {
            StatusContent.innerHTML += `
        <div class="mt-7 text-sm">
        <button class="px-2 py-1 border-1 rounded-xl">Ofline</button>
        </div>
        `
        }

        EmployedContent.innerHTML += `
    <div class="mt-9 text-sm">
    <h1 class="">${tables[i].date}</h1>
    </div>
    `
        editContent.innerHTML += `
    <div class="mt-9 text-sm">
    <h1 class="text-center">${tables[i].edit}</h1>
    </div>
    `


    }
}
authorTable();


const tables = [
    { members: { img1: "images/mem1.png", img2: "images/mem2.png", img3: "images/mem3.png", img4: "images/mem4.png", img5: "images/mem5.png" }, image: "images/xd.png", name: "Chakra Soft UI version", budget: 14000, status: "Working", complition: 60, edit: "ri-more-2-fill" },
    { members: { img3: "images/mem3.png", img4: "images/mem4.png", img5: "images/mem5.png" }, image: "images/add-progress.png", name: "Add Progress Track", budget: 3000, status: "Canceled", complition: 10, edit: "ri-more-2-fill" },
    { members: { img1: "images/mem1.png", img2: "images/mem2.png" }, image: "images/fix-error.svg", name: "Fix Platform Errors", budget: "Not Set", status: "Done", complition: 100, edit: "ri-more-2-fill" },
    { members: { img1: "images/mem1.png", img2: "images/mem2.png", img3: "images/mem3.png", img4: "images/mem4.png" }, image: "images/spotify.svg", name: "Launch our Mobile App", budget: 32000, status: "Done", complition: 100, edit: "ri-more-2-fill" },
    { members: { img1: "images/mem1.png", img2: "images/mem2.png", img3: "images/mem3.png", img4: "images/mem4.png", img5: "images/mem5.png" }, image: "images/pricing.svg", name: "Add the new Pricing Page", budget: 400, status: "Working", complition: 25, edit: "ri-more-2-fill" },
    { image: "images/shop-online.svg", name: "Redesign New Online Shop", budget: 7600, complition: 40, members: { img1: "images/mem1.png", img2: "images/mem2.png" } }
];

function projectTable() {

    let companyContent = document.querySelector("#companyContent")
    let budgetContent = document.querySelector("#budgetContent")
    let StatusContent2 = document.querySelector("#StatusContent2")
    let CompletionContent = document.querySelector("#CompletionContent")
    let DotsContent = document.querySelector("#DotsContent")
    if (!companyContent || !budgetContent || !StatusContent2 || !CompletionContent || !DotsContent) {
        return;
    }

    for (let i = 0; i < tables.length; i++) {
        companyContent.innerHTML +=
            `
    <div class="flex items-center mt-7">
    <div>
    <img src="${tables[i].image}" class="object-contain w-6 rounded-xl">
    </div>
    <div class="ml-4 text-xs">
    <h1>${tables[i].name}</h1>
    </div>
    </div>
    <div class="absolute w-[93%] h-[1px] bg-gray-400 mt-1"></div>
    `

        budgetContent.innerHTML += `
    <div class="mt-7 text-sm">
    <h1 class="font-bold">$ ${tables[i].budget}</h1>
    </div>
    `
        StatusContent2.innerHTML += `
    <div class="mt-7 text-sm">
    <h1 class="font-bold">${tables[i].status}</h1>
    </div>
    `


        CompletionContent.innerHTML += `
    <div class="mt-7 text-sm">
    <h1 class="">${tables[i].complition} %</h1>
    <div class="w-[90%] h-[2px] bg-gray-600">
      <div class="w-[${tables[i].complition}%] h-[2px] bg-blue-600"></div>
    </div>
    </div>
    `
        DotsContent.innerHTML += `
    <div class="mt-8 text-sm">
    <a href="">
    <i class="${tables[i].edit}"></i>
    </a>
    </div>
    `


    }
}
projectTable();

function projectDashtable() {
    let companyContent = document.querySelector("#companyContent")
    let membersContent = document.querySelector("#membersContent")
    let budgetContent = document.querySelector("#budgetContent")
    let CompletionContent = document.querySelector("#CompletionContent")
    let memberimg;
    if (!companyContent || !membersContent || !budgetContent || !CompletionContent) {
        return;
    }
    for (let i = 0; i < tables.length; i++) {
        memberimg = tables[i].members;
        let imagesrow = "";
        for (const mem in memberimg) {
            images = memberimg[mem];
            imagesrow += `
            
               <img src="${images}" class="rounded-xl border-2 w-5"> 
            `
        }
        membersContent.innerHTML += `
        <div class="flex mt-5">
                <div class="flex">${imagesrow}</div>
            </div>
        `
    }
    for (let i = 0; i < tables.length; i++) {
        companyContent.innerHTML += ` 
        <div class="flex items-center mt-6">
    <div>
     <img src="${tables[i].image}" class="object-contain w-5 rounded-xl">
     </div>
     <div class="ml-4 text-xs">
     <h1>${tables[i].name}</h1>
    </div>
     </div>
        `

        budgetContent.innerHTML += `
        <div class="mt-6">
        <h1 class="text-sm">${tables[i].budget}</h1>
        </div>
        `

        CompletionContent.innerHTML += `
     <div class="mt-7 text-sm">
     <h1 class="">${tables[i].complition} %</h1>
     <div class="w-[90%] h-[2px] bg-gray-600">
       <div class="w-[${tables[i].complition}%] h-[2px] bg-blue-600"></div>
     </div>   </div>
     `
    }
}

projectDashtable();


function editDelete() {
    let maindiv = document.querySelector("#maindiv")
    if (!maindiv) {
        return;
    }
    maindiv.addEventListener("click", function (e) {
        let button = e.target.tagName;
        if (button === "BUTTON") {
            let div = e.target.closest(".deletediv");
            if (e.target.classList.contains("delete")) {
                if (!div) {
                    console.log("this is not a div");
                }
                else {
                    div.remove();
                    console.log("div deleted seuuessfully");
                }
            }
            else {
                let para = div.querySelectorAll("p")
                para = Array.from(para);
                let newpara = para.map(e => e.textContent);
                console.log(para);
                for (let i = 0; i < newpara.length; i++) {
                    let newtext = prompt("Edit text", newpara[i].textContent)
                    console.log(para[i]);
                    para[i].textContent = newtext
                }
            }
        }
    })
}
editDelete();

function addnewcard() {
    let newcard = document.querySelector("#newbtncard");
    let section = document.querySelector("section");
    if (!newcard || !section) {
        return;
    }
    newcard.addEventListener("click", function () {
        section.innerHTML += `<div class="fixed z-20 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm w-[100%] h-[100%] flex justify-center items-center">
        <div class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm  w-[400px] px-4 py-4">
        <div class="bg-white w-8 h-8 rounded-full text-lg flex justify-center items-center absolute right-2 top-1 cursor-pointer" id="closecardbtn"><i class="ri-close-fill"></i></div>
        <form action="" class="w=[100%] flex flex-col gap-3 mt-6">
        <input type="number" name="" id="cardnum" class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-[100%] border border-gray-400 text-white px-3 py-3">
        <input type="number" name="" id="carddate" class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-[100%] border border-gray-400 text-white px-3 py-3">
        <input type="number" name="" id="cardcvc" class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-[100%] border border-gray-400 text-white px-3 py-3">
        <button class="bg-blue-600 text-white py-2">Add Details</button>
        </form>
        </div>
        </div>`;
        let closecardbtn = document.querySelector("#closecardbtn");
        closecardbtn.addEventListener("click", function () {
            closecardbtn.closest(".fixed").remove();
        })

        document.querySelector("form").addEventListener("submit", function (e) {
            e.preventDefault();
            let card = document.querySelector(".card");
            let cardnum = document.querySelector("#cardnum").value, carddate = document.querySelector("#carddate").value, cardcvc = document.querySelector("#cardcvc").value;
            console.log(cardcvc, carddate, cardnum);
            let h1 = card.querySelectorAll("h1")
            let newh1s = Array.from(h1);
            if (newh1s.length >= 3) {
                newh1s[1].textContent = cardnum
                newh1s[2].textContent = carddate
                newh1s[3].textContent = cardcvc
            }
        })

    })
}
addnewcard();

function searchAnyThing() {
    let search = document.querySelector("#search");
    let section = document.querySelector("section");
    if (!search || !section) {
        return;
    }
    search.addEventListener("click", function () {
        section.innerHTML += `<div class="fixed z-20 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm w-[100%] h-[100%] flex justify-center items-center">
        <div class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm  w-[400px] px-4 py-4">
        <div class="bg-white w-8 h-8 rounded-full text-lg flex justify-center items-center absolute right-2 top-1 cursor-pointer" id="closecardbtn"><i class="ri-close-fill"></i></div>
        <form action="" class="w=[100%] flex flex-col gap-3 mt-6">
        <input type="text" name="" id="cardcvc" class="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-[100%] border border-gray-400 text-white px-3 py-3">
        <button class="bg-blue-600 text-white py-2">Search anything</button>
        </form>
        </div>
        </div>`;
        let closecardbtn = document.querySelector("#closecardbtn");
        closecardbtn.addEventListener("click", function () {
            closecardbtn.closest(".fixed").remove();
        })
    })
}
searchAnyThing();

// function Signup() {
//     let form = document.querySelector("form")
//     if (!form) {
//         return;
//     }
//     form.addEventListener("submit", function (e) {
//         e.preventDefault();
//         let name = document.querySelector("#name")?.value || "";
//         let email = document.querySelector("#email").value;
//         let password = document.querySelector("#password").value;
//         if (name === "" || email === "" || password === "") {
//             alert("enter something for signup")
//         }
//         else {
//             let newobj = {
//                 fullName: name,
//                 email: email,
//                 Password: password
//             }
//             let newStore = localStorage.setItem("User", JSON.stringify(newobj))
//             console.log(newStore);
//             // window.location.href = "login.html"
//         }

//     })

// }

// function Login() {
//     let form = document.querySelector("form");
//     let welcomeName = document.querySelector("#welcomeName");
//     if (!form || !welcomeName) {
//         return;
//     }
//     form.addEventListener("submit", function (e) {
//         let emailInput = document.querySelector("#email").value;
//         let passwordInput = document.querySelector("#password").value;
//         e.preventDefault();
//         if (emailInput === "" || passwordInput === "") {
//             alert("enter something for signin")
//         }
//         else {
//             let getnewvalue = localStorage.getItem("User")
//             let userData = JSON.parse(getnewvalue)
//             let { fullName, email, Password } = userData;
//             if (emailInput === email && passwordInput === Password) {
//                 // window.location.href = "dashboard.html"
//                 welcomeName.textContent = fullName
//             }
//             else {
//                 alert("wrong details")
//             }
//         }
//     })

// }
// Login();
// Signup();
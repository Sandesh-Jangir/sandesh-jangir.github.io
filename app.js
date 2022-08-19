let projects = [
    {
        title:"Coder Studio",
        desc:"A simple text editor which can run Python Files, open HTML Document in your web-browser and also shows all the files & directories in the present folder and you can also change the themes in it.",
        link:"https://github.com/Sandesh-Jangir/Coder-Studio"
    },
    {
        title:"Command Driven Assistant",
        desc:"It is a command driven assistant which takes input from the user and give output in selected format (There are 2 Formats one is Standard Output and other is Voice Output) ",
        link:"https://github.com/Sandesh-Jangir/Command-Driven-Assistant"
    },
    {
        title:"Flask Weather App",
        desc:"It is a Flask web application which takes Latitude and Longitude as input from the user and then fetches weather details and returns the following details to the user.",
        link:"https://github.com/Sandesh-Jangir/Flask-Weather-App"
    },
    {
        title:"Hand Written Notes",
        desc:"A notes website which uses JavaScript and Bootstrap. With the use of this website you can manage your notes, create and edit them.",
        link:"https://github.com/Sandesh-Jangir/Hand-Written-Notes"
    },
    {
        title:"Cryptocurrency Tracker",
        desc:"It is a python flask application which uses CoinLore Cryptocurrency API to fetch crypto data. Then it filters the fetched data for different use cases.",
        link:"https://github.com/Sandesh-Jangir/Cryptocurrency-Tracker"
    },
    {
        title:"The Headliner",
        desc:"It is a GUI application which provides you the Global Headlines from BBC NEWS , it uses python-eel as a backend and standard HTML CSS JS for the frontend.",
        link:"https://github.com/Sandesh-Jangir/The-Headliner"
    }
]

for (let i = 0; i < projects.length; i++) {
    let card = projects[i]
    let card_group = document.getElementById("crd-grp")
    card_group.innerHTML+=`
    <div class="card">
    <div class="title">${card["title"]}</div>
    <div class="desc">${card["desc"]}</div>
    <div class="github-link">
        <a href="${card["link"]}" target="_blank"><button>Github <span class="material-symbols-rounded">trending_flat</span></button></a>
    </div>
    </div>
    `
}

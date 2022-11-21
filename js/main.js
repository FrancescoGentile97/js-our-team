// creo la const per prendere l'id dall'html
const teamListEl = document.getElementById("teamList");

const ourTeam = [
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        photo:"wayne-barnett-founder-ceo.jpg",
    }, {
        name:"Angela Caroll",
        role:"Chief Editor",
        photo:"angela-caroll-chief-editor.jpg",
    }, {
        name:"Walter Gordon",
        role:"Office Manager",
        photo:"walter-gordon-office-manager.jpg",
    }, {
        name:"Angela Lopez",
        role:"Social Media Manager",
        photo:"angela-lopez-social-media-manager.jpg",
    }, {
        name:"Scott Estrada",
        role:"Developer",
        photo:"scott-estrada-developer.jpg",
    }, {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        photo:"barbara-ramos-graphic-designer.jpg",
    }
];

for (let key in ourTeam) {
    console.log(ourTeam[key]);
}

for (i = 0; i < ourTeam.length; i++) {
    const info = ourTeam[i];
    const teamSpec = document.createElement("div");
    teamSpec.classList.add("m-4");
    teamListEl.append(teamSpec);
    teamSpec.innerHTML += `<strong>Name:</strong> ${info.name}; <strong>Role:</strong> ${info.role};`;
    const imgEl = document.createElement("img");
    imgEl.src = "imgs/" + info.photo;
    teamSpec.append(imgEl);
}


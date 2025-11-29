const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const hambutton = document.querySelector('#menubutton');
const navigation = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Santiago Chile Temple",
        location: "Santiago, Region Metropolitana",
        dedicated: "1983, September, 15",
        area: 20831,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    },
    {
        templeName: "Lima Peru Los Olivos Temple",
        location: "San Martin de Porres",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, RM",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
];

createTemplecard(temples);

const oldlinnk = document.querySelector("#old");
const newlink = document.querySelector("#new");


oldlinnk.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.slice(0, 4), 10);
        return year < 1900;
    });
    createTemplecard(oldTemples)
});

newlink.addEventListener("click", (event) => {
    event.preventDefault();
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.slice(0, 4), 10);
        return year > 2000;
    });
    createTemplecard(newTemples);
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter(temple => temple.area > 90000);

    createTemplecard(largeTemples);
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter(temple => temple.area < 10000);

    createTemplecard(smallTemples);
});

const homeLink = document.querySelector("#home");

homeLink.addEventListener("click", (event) => {
    event.preventDefault();

    createTemplecard(temples);
});



function createTemplecard(filteredtemples) {
    document.querySelector(".container").innerHTML = "";
    filteredtemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}

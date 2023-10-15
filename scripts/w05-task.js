/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach( (t) => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = t.templeName;
        let img = document.createElement("img");
        img.src = t.imageUrl;
        img.alt = t.location;
        article.appendChild(h3).appendChild(img);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (response.ok) {
            templeList = await response.json();
            displayTemples(templeList); 
        }
}

/* reset Function */

const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            const utahTemples = temples.filter((temple) => {
                return temple.location.includes("Utah");
            });
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notUtah = temples.filter((temple) => {
                return !temple.location.includes("Utah");
            });
            displayTemples(notUtah);
            break;
        case "older":
            const olderTemples = temples.filter((temple) => {
                const date = new Date(temple.dedicated);
                return date < new Date(1950, 0, 1);
            });
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(templeList);
      }
}

/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();
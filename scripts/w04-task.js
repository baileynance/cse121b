/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myObject = {
    name: "Bailey",
    photo: "images/649.jpeg",
    favoriteFoods: ["pizza", "curry", "burgers", "chili"],
    hobbies: ["Playing Video Games", "Watching TV", "Playing Soccer"],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myObject.placesLived.push({
    place: "Washington",
    length: "22 Years"
})

myObject.placesLived.push({
    place: "Oregon",
    length: "1 Year"
})

/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").innerHTML = myObject.name;

/* Photo with attributes */

document.getElementById("photo").src = myObject.photo;
document.getElementById("photo").alt = myObject.name;

/* Favorite Foods List*/

myObject.favoriteFoods.forEach( food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

/* Hobbies List */

myObject.hobbies.forEach( hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

/* Places Lived DataList */

myObject.placesLived.forEach( place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt).appendChild(dd);
});

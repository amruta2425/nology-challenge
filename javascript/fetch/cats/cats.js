const CATFACTS_URL = "https://catfact.ninja";

const getBreeds = async (pageNumber) => {
    const response = await fetch(`${CATFACTS_URL}/breeds?page=${pageNumber}`);
    const info = await response.json();
    // info is a big object with a lot of properties that I don't need, I only need the array of breeds object -> the data property
    // console.log(info);

    // I want to return clean data, also jsut the stuff I'm after
    const cleanedData = info.data.map((cat) => {
        // I want to return name
        // and country
        // if no country, I want "No country provided"
        const { breed, country } = cat;
        return {
            breed,
            country: country === "" ? "No country provided" : country,
        };
    });
    return cleanedData;
};
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector("section").innerHTML = "";
    const input = document.querySelector("#pageNo");
    const breedsData = await getBreeds(input.value);
    console.log(breedsData);
    // I awaited breedData, now I can do something with it
    // I can create a card for every single cat from breedData
    breedsData.forEach((breed) => {
        return createCard(
            document.querySelector("section"),
            breed.breed,
            breed.country
        );
    });

    input.value = "";
});
 const createCard = (parent, catName, catCountry) => {
    const div = document.createElement("div");
    div.className = "card";
    const heading = document.createElement("h3");
    const nameText = document.createTextNode(catName);
    heading.appendChild(nameText);
    const para = document.createElement("p");
    const countryText = document.createTextNode(catCountry);
    para.appendChild(countryText);
    div.appendChild(heading);
    div.appendChild(para);
    parent.appendChild(div);
};

class Country {
    countryname: string;
    lang: string;
    greeting: string;
    colors: string[];
    flagURL: string;

    constructor(countryname: string, lang: string, greeting: string, colors: string[], flagURL: string) {
        this.countryname = countryname;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagURL = flagURL;
    }
}

let countries: Country[] = [];
let usa = countries.push(new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "USAFlag.jpg"));
let mexico = countries.push(new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "MexicanFlag.jpg"));
let algeria = countries.push(new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "AlgerianFlag.jpg"));
let germany = countries.push(new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"], "GermanFlag.jpg"));
let france = countries.push(new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"], "FrenchFlag.jpg"));

console.log(countries);

function SwitchCountry() {
    let input: string = document.getElementById("CountryList").value;
    for (let i = 0; i < countries.length; i++) {
        if (input === countries[i].countryname) {
            document.getElementById("CountryName").innerText = countries[i].countryname;
            document.getElementById("OfficialLanguage").innerText = countries[i].lang;
            document.getElementById("HelloWorld").innerText = countries[i].greeting;
            document.getElementById("Image").src = countries[i].flagURL;

            document.getElementById("Color1").style.backgroundColor = countries[i].colors[0];
            document.getElementById("Color2").style.backgroundColor = countries[i].colors[1];
            document.getElementById("Color3").style.backgroundColor = countries[i].colors[2];
        }
    }
}


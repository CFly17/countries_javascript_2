var Country = /** @class */ (function () {
    function Country(countryname, lang, greeting, colors, flagURL) {
        this.countryname = countryname;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagURL = flagURL;
    }
    return Country;
}());
var countries = [];
var usa = countries.push(new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "USAFlag.jpg"));
var mexico = countries.push(new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "MexicanFlag.jpg"));
var algeria = countries.push(new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "AlgerianFlag.jpg"));
var germany = countries.push(new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"], "GermanFlag.jpg"));
var france = countries.push(new Country("France", "French", "Bonjour le monde!", ["blue", "white", "red"], "FrenchFlag.jpg"));
console.log(countries);
function SwitchCountry() {
    var input = document.getElementById("CountryList").value;
    for (var i = 0; i < countries.length; i++) {
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

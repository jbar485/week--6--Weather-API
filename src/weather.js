// export var MyLetters = function(){

export class WeatherService {
  async getWeatherByCity(city) {
    try{
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  } catch(error) {
    console.error("There as an error handling your request:" + error.message);
    }
  }
}


//    this.vowels = ["a","e","i","o","u"];
//    this.consanants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
// }
//
// export var Poem = function(lineOne, lineTwo, lineThree){
//   this.lineOne = lineOne
//   this.lineTwo = lineTwo
//   this.lineThree = lineThree
//   this.syllableCount = 0;
// }
//
// Poem.prototype.convertString = function(string){
//   var result = string.split(" ");
//   return result;
// }
//
// Poem.prototype.syllables = function(){
//
// }

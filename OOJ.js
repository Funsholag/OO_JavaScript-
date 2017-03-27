//Solution 1
function Poster(filePath, location) {
  this.filePath = filePath
  this.location = location
}
//This is what I had originally. I couldn't really get this to work
/*var movies = new Array();
new Array() = ["HiddenFigures.jpg", "KongIsland.jpeg", "Logan.jpg", "johnwick3.jpg", "powerrangers.jpg", "tbe_gallagher.jpg", "legobatmanonesheet.jpg", "whyIhaveTrustIssues.jpg", "theEye.jpeg", "Scream_movie_poster.jpg", "silence_of_the_lambs_ver2.jpg", "mirrors.jpg", "Amityville.jpg", "rambo.jpeg", "expendables2.jpg", "badboyII.jpeg"];
//["HiddenFigures.jpg", "KongIsland.jpeg", "Logan.jpg", "johnwick3.jpg", "powerrangers.jpg", "tbe_gallagher.jpg", "legobatmanonesheet.jpg", "whyIhaveTrustIssues.jpg", "theEye.jpeg", "Scream_movie_poster.jpg", "silence_of_the_lambs_ver2.jpg", "mirrors.jpg", "Amityville.jpg", "rambo.jpeg", "expendables2.jpg", "badboyII.jpeg"];

movies[0]= ("whyIhaveTrustIssues.jpg", "Current")
movies[1]= ("HiddenFigures.jpg", "Current" )
movies[2]= ("johnwick3.jpg", "Current")
movies[3]= ("KongIsland.jpeg", "Current")
movies[4]= ("legobatmanonesheet.jpg", "Current")
movies[5]= ("Logan.jpg", "Current")
movies[6]= ("powerrangers.jpg", "Current")
movies[7]= ("tbe_gallagher.jpg", "Current")
movies[8]= ("theEye.jpeg", "Scary" )
movies[9]= ("Scream_movie_poster.jpg", "Scary")
movies[10]= ("silence_of_the_lambs_ver2.jpg", "Scary")
movies[11]= ("mirrors.jpg", "Scary")
movies[12]= ("Amityville.jpg", "Scary")
movies[13]= ("rambo.jpeg", "Action")
movies[14]= ("expendables2.jpg", "Action")
movies[15]= ("badboyII.jpeg", "Action")*/

var trustIssuesPoster = new Poster ("whyIhaveTrustIssues.jpg", "Current")
var powerrangersPoster = new Poster ("powerrangers.jpg", "Current")
var LoganPoster = new Poster ("Logan.jpg", "Current")
var LegoBatmanPoster = new Poster ("legobatmanonesheet.jpg", "Current")
var KongIslandPoster = new Poster ("KongIsland.jpeg", "Current")
var HiddenFiguresPoster = new Poster ("HiddenFigures.jpg", "Current")
var JohnWick2Poster = new Poster ("johnwick3.jpg", "Current")
var theEyePoster = new Poster ("theEye.jpeg", "Scary" )
var ramboPoster = new Poster ("rambo.jpeg", "Action")
var ScreamPoster = new Poster ("Scream_movie_poster.jpg", "Scary")
var SilencePoster = new Poster ("silence_of_the_lambs_ver2.jpg", "Scary")
var TBE_GallagherPoster = new Poster ("tbe_gallagher.jpg", "Current")
var mirrorsPoster = new Poster ("mirrors.jpg", "Scary")
var expendablesPoster = new Poster ("expendables2.jpg", "Action")
var BadBoys2Poster = new Poster ("badboyII.jpeg", "Action")
var AmityvillePoster = new Poster ("Amityville.jpg", "Scary")

function posterAlbum() {
  this.posters = []
}

posterAlbum.prototype.addingPosters =
function(poster) {
  this.posters.push(poster)
}

var currentMoviesAlbum = new posterAlbum()
//currentMoviesAlbum.addingPosters(movies[0], movies[1], movies[2], movies[3], movies[4], movies[5], movies[6], movies[7])
currentMoviesAlbum.addingPosters(trustIssuesPoster)
currentMoviesAlbum.addingPosters(powerrangersPoster)
currentMoviesAlbum.addingPosters(LoganPoster)
currentMoviesAlbum.addingPosters(LegoBatmanPoster)
currentMoviesAlbum.addingPosters(KongIslandPoster)
currentMoviesAlbum.addingPosters(HiddenFiguresPoster)
currentMoviesAlbum.addingPosters(JohnWick2Poster)
currentMoviesAlbum.addingPosters(TBE_GallagherPoster)

var scaryMoviesAlbum = new posterAlbum()
//scaryMoviesAlbum.addingPosters(movies[8], movies[9], movies[10], movies[11], movies[12])
scaryMoviesAlbum.addingPosters(ScreamPoster)
scaryMoviesAlbum.addingPosters(SilencePoster)
scaryMoviesAlbum.addingPosters(theEyePoster)
scaryMoviesAlbum.addingPosters(AmityvillePoster)
scaryMoviesAlbum.addingPosters(mirrorsPoster)

var oldActionAlbum = new posterAlbum()
//oldActionAlbum.addingPosters(movies[13], movies[14], movies[15])
oldActionAlbum.addingPosters(ramboPoster)
oldActionAlbum.addingPosters(expendablesPoster)
oldActionAlbum.addingPosters(BadBoys2Poster)

posterAlbum.prototype.getPoster = function(number) {
  console.log(this.posters[number])
}

posterAlbum.prototype.listItems = function() {
for(var i = 0; i < this.posters.length; i++){
  console.log(this.posters[i]);
  }
}

scaryMoviesAlbum.getPoster(3)

oldActionAlbum.getPoster(1)

currentMoviesAlbum.getPoster(3)
;

//Solution 2

function Person(name, age, gender, weight, height){
  this.name= name
  this.age = age
  this.gender = gender
  this.weight = weight
  this.height = height
}

Student.prototype = Object.create(Person.prototype)

function Student(name, age, gender, weight, height){
  Person.call (this, name, age, gender, weight, height)
  this.studies = false
}

Person.prototype.displayAllInfo = function(){
  return this.name + "," + this.age + "," + this.gender + "," + this.weight + "," this.height + ",";
}

Teacher.prototype = Object.create(Person.prototype)

function Teacher (name, age, gender, weight, height){
  Person.call(this, name, age, gender, weight, height)
  this.studies = true
}

function Class(subject, level) {
  this.subject= subject
  this.level = level
}

function School(){
  this.person = []
}

School.prototype.addPerson = function(person){
  this.person.push(person)
}

var gianCarlos= new Person ("Giancarlos Neuman", 18, "Male", 222,"8ft 1in")
var DinaVegas= new Person ("Dina Vegas", 31, "Female", 111, "5ft 5in")
var VindaLoo= new Person ("Vinda Loo", 6, "Male", 65, "4ft 10in")
var CarlaNoel= new Person ("Carla Noel", 50, "Female", 125, "5ft 10in")
var French= new Class ("French", "AP")
console.log(French);

var school = new School()

school.addPerson(CarlaNoel)
school.addPerson(gianCarlos)
school.addPerson(French)

console.log(CarlaNoel.displayAllInfo())
console.log(gianCarlos.displayAllInfo())

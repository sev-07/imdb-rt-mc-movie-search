let movieName = prompt("Movie name: ");
console.log("input " + typeof(movieName) + ":", movieName);

let movieNameImdb = movieName.split(" ").join("+");
console.log("IMDb " + typeof(movieNameImdb) + ":", movieNameImdb);

let movieNameRt = movieName.split(" ").join("_");
console.log("Rotten Tomatoes " + typeof(movieNameRt) + ":", movieNameRt);

let movieNameMc = movieName.split(" ").join("-");
console.log("metacritic " + typeof(movieNameMc) + ":", movieNameMc);

let tabImdb = window.open("https://www.imdb.com/find?ref_=nv_sr_fn&q=" + movieNameImdb + "&s=all", "_blank");
let tabRt = window.open("https://www.rottentomatoes.com/m/" + movieNameRt, "_blank");
let tabMc = window.open("https://www.metacritic.com/movie/" + movieNameMc, "_blank");

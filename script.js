console.log("Script file")
// EX1
let numChildren=2;
let partnerName= "Lily";
let geoLocation= "Tijuana";
let jobTitle= "Mechatronic Engineering";
var age=10;//initialization and assignation
let userName="Mike";
let taxes=11.5;
const URL="https://google.com/";

console.log(age, userName, taxes);//Displaying in the console

userName="Edward";//changing the username value
taxes=12;//changing taxes value
console.log(userName,taxes,URL);//Displaying in the console
// concatenationn
console.log("You will be a "+jobTitle+ " in " +geoLocation+" and married to " +partnerName+ " with "+numChildren+ 
" kids ");
// template string
document.write(`<p> You will a be ${jobTitle} </p>
<p> in ${geoLocation}, and married to ${partnerName} </p>
<p>with ${numChildren} kids </p>`)

//asignment 1 Disney+
let title= "The Santa Clauses";
let releaseDate= "2022";
let rating= "10+";
let clasification= "CC";
let sound= "Dolby atmos";
let season= "1";
let starring= "Tim Alle, Elizabeth Mitchell, Kal Penn";
let genre="Family, Comedy, Fantasy";
let creator= "Jack Burditt";
let duration= "32m";
let description= "Scott Calvin is back! After being Santa Claus foir nearly thirty years, he's as jolly as ever";
let extras= "View a promo of this release";
let episode= "1";

document.write(`<p> we'll see ${title} wich was published in ${releaseDate} with a rating ${rating} and clasification ${clasification}. The sound is ${sound}. The serie has ${season} season and the chapter has duration of ${duration}. The ${starring} is genre ${genre}. Its creator is ${creator}. The episode is ${episode} and the extras ${extras}. its description is ${description}.  </p>`)


$(document).ready(function () {
  console.log("doc is ready");
});
const games = [

  {
    title: "Doge Game",
    link: "https://rish4863.github.io/doge-game/", 
    author: "Rishi Doreswamy"
  },
  {
    title: "Wes' Game",
    link: "https://westyler28.github.io/Echo-Lab/",
    author: "Wes Wallace"
    },
    {
      title: "Garretts Game",
      link: "https://github.com/gdodd1/CIS-376/blob/main/GOLF-LAB/data.json", 
      author: "Garrett Dodd"
    },    
    {
      title: "Chavvavi's Game",
      link: "https://viii21.github.io/dob-facts/", 
      author: "Chhavi"
    },
    {
      title: "Omonegho's Game",
      link: "https://ougheoke.github.io/echo-lab/", 
      author: "Omonegho Ugheoke"
    },
    {
      title: "Alec's Game",
      link: "https://alecmo26.github.io/CharlieLab/", 
      author: "Alec Moore"
    },
    {
      title: "Katheryn's Game",
      link: "https://codepen.io/katherynisabell/full/WNzWGNd", 
      author: "Katheryn Grant"
    },
    {
      title: "Lanes Game",
      link: "https://lane30schmidt.github.io/echo-376/", 
      author: "Lane Schmidt"
    },
    {
      title: "Emily Tinnon's Game",
      link: "https://etinnon.github.io/cis376-delta/", 
      author: "Emily Tinnon"
    },
    {
      title: "Nicole's Game",
      link: "https://nicolereilly.github.io/echo-lab/", 
      author: "Nicole Reilly"
    },
    {
      title: "Ethan Hubbard",
      link: "https://hubbbabubbba.github.io/Delta-Lab-Name-Wow/", 
      author: "Ethan Hubbard"
    },
    {
      title: "Ty's Game",
      link: "https://tythomas21.github.io/charlie-lab/", 
      author: "Tychicus Thomas"
    },
    {
      title: "Ethan Criddle's game",
      link: "https://stalewhitebread.github.io/urban-invention/", 
      author: "Ethan Criddle"
    },
    {
      title: "Solid-octo-happiness",
      link: "https://github.com/KBrian5/solid-octo-happiness", 
      author: "Kevin Salgado"
    },
    {
      title: "A Stricklandds game",
      link: "https://astricklandd.github.io/echo-lab/", 
      author: "Alex Stricklandd"
    },
    {
      title: "Hunter McGriff's Game",
      link: "https://hunter-mcgriff.github.io/dev-lab-charlie/ ", 
      author: "Hunter McGriff"
    },
      {
      title: "Ashlyn Paruzynski's Game",
      link: "https://ashmcflash.github.io/echo-lab/", 
      author: "Ashlyn Paruzynski"
    },
  {
      title: "Kristina Williams' Game",
      link: "https://kwilliams31.github.io/Echo-Cool-Games/", 
      author: "Kristina Williams"
    },
  {
      title: "Meghan Skelton's Game",
      link: "mskel1.github.io/sturdy-rotary-phone/", 
      author: "Meghan Skelton"
    },
  {
      title: "Elijah Aday's Game",
      link: "https://github.com/EAday22/delta_Lab", 
      author: "Elijah Aday"
    },
  {
      title: "Hau Huynh's Game",
      link: "https://hauhuynh90.github.io/Delta/", 
      author: "Hau Huynh"
    },
  {
      title: "Cody Mcdonald's Game",
      link: "https://nutenjoyer.github.io/miniature-winner", 
      author: "Cody Mcdonald"
    },
  {
      title: "Ethan Rinke's Game",
      link: "https://crimsonhog.github.io/probable-octo-carnival/", 
      author: "Ethan Rinke"
    },
  {
      title: "Maggie Little's Game",
      link: "https://mlittle98.github.io/DELTALAB/", 
      author: "Maggie Little"
    },
  {
      title: "Rachel Thompson's Game",
      link: "https://github.com/panhead63/bravo/tree/main", 
      author: "Rachel Thompson"
    },
    
];
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);
  
  var el = `<div class='card'> \
  <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
   <div class='cardHide mx-auto'> \
       <br> \
       <a class="btn btn-primary" href="${ item.link }" target="_blank" class="link-info" >GAME LINK</a> \
       </div>
       <p class="text-white">Create by: ${ item.author } </p> \
       <br> \
 </div>`; 

 console.log(el); 


 $('#gameCard').append(el);
});

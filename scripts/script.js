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
      title: "Etinnons Game",
      link: "https://etinnon.github.io/cis376-delta/", 
      author: "Etinnon"
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
      title: "Stale breads game",
      link: "https://stalewhitebread.github.io/urban-invention/", 
      author: "Stale White Bread"
    },
    {
      title: "Solid-octo-happiness",
      link: "https://github.com/KBrian5/solid-octo-happiness", 
      author: "K Brian"
    },
    {
      title: "A Stricklandds game",
      link: "https://astricklandd.github.io/echo-lab/", 
      author: "Alex Stricklandd"
    },
    {
      title: "Ty's Game",
      link: "https://tythomas21.github.io/charlie-lab/", 
      author: "Tychicus Thomas"
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
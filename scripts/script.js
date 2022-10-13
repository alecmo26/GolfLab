$(document).ready(function () {
  console.log("doc is ready");

  //let revName;

  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();
    $("#spiritAnimalOutput").html();
    // handle it if input is blank

    let userName = $("#userName").val();
    console.log("user name = ", userName);
    //let coolFacts = generateCoolNameFacts(userName);

    console.log("name length f/n = ", nameLength(userName));

    console.log("you clicked the button");
    //console.log("from ln 12", generateCoolNameFacts(userName));

    $("#coolNameFactsOutput").html(nameLength(userName));

    $("#spiritAnimalOutput").html(getSpiritAnimal(userName));

     //$("#coolNameFactsOutput").html(
    //   '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y-YVLipceJt1DMU3Bs8uIAHaFj%26pid%3DApi&f=1">'
     //);

     
  });
});

function generateCoolNameFacts(userName) {
  let coolFacts = "";

  coolFacts = reverseName(userName);
  coolFacts += " <br> " + nameStart(userName);
  coolFacts += "<h3> " + nameEnd(userName) + "</h3>";


  console.log("initialized the'm coolFacts variable: " + coolFacts);

  return coolFacts;
}

function nameLength(name) {
  let arrName = name.split("");

  revName = arrName.reverse();

  joinName = revName.join("");

  return `Your first name spelled backwards is ` + joinName;
}



function getSpiritAnimal(x) {
  //flow control: case switch, loop, if/then

  if (x.length == 5) {
    //execute some code
    $("#coolNameImg").attr(
      "src",
      "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220613153916-growling-bear-stock.jpg"
    );
    return "you are a bear!";

  } else if (x.length > 7) {
    $("#coolNameImg").attr(
      "src",
      "https://i.guim.co.uk/img/media/3d7f6137a0257a29fc5b619e2444181828f61455/0_351_5184_3105/master/5184.jpg?width=700&quality=85&auto=format&fit=max&s=7deaefd21b6ab61388ddc6c030be1b8c"
    );
    return "you are a toad!";

  } else {
    $("#coolNameImg").attr(
      "src",
      "https://assets3.thrillist.com/v1/image/3010676/792x1056/flatten;scale;webp=auto;jpeg_quality=60.jpg"
    );
    return "you are an elephant!";
  }
}

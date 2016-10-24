$("document").ready(function() {
  var favoriteFood = [];
  var favoriteAnimal = [];
  var favoriteColor = [];
  var favoriteHobby = [];
  var favoriteOS = [];
  var favoriteThings = [];
  var partialArray = [];
  $("#myForm").submit( function(event) {
    event.preventDefault();
    favoriteFood.push($("#food").val());
    favoriteAnimal.push($("#animal").val());
    favoriteColor.push($("#color").val());
    favoriteHobby.push($("#hobby").val());
    favoriteOS.push($("#os").val());
    favoriteThings = favoriteFood.concat(favoriteAnimal, favoriteColor, favoriteHobby, favoriteOS);
    console.log(favoriteThings);
  });
  $("#test").click( function() {
    console.log(favoriteThings);
    partialArray.push(favoriteThings[1]);
    partialArray.push(favoriteThings[0]);
    partialArray.push(favoriteThings[2]);
    console.log(partialArray);
    $("#fav1").text(partialArray[0]);
    $("#fav2").text(partialArray[1]);
    $("#fav3").text(partialArray[2]);
    $("#display").show();
  });
});

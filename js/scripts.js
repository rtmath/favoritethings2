$("document").ready(function() {
  var favoriteFood = [];
  var favoriteAnimal = [];
  var favoriteColor = [];
  var favoriteHobby = [];
  var favoriteOS = [];
  var favoriteThings = [];
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
  });
});

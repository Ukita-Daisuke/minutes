
$("#category_id").change(function(){
  $("#hidearea").show();
});

$("#plus").click(function(){
  $("#player_name").clone.appendTo("#player_name");
  $("#player_role").clone.appendTo("#player_role");
});

$(function() {
    $("#devourBurg").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredstate = {
        devoured: newDevoured
      };
    
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredstate
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".newBurg").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
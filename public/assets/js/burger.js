$(function () {
    $(".newBurgDisplay").on("click", ".devourBurg", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        var newDevouredstate = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredstate
        }).then(
            function () {
                console.log("changed devoured to", newDevouredstate);
                location.reload();
            }
        );
    });

    $(".create-form").on("click", "#newBurgButton", function (event) {
        event.preventDefault();
        console.log("in here")

        var newBurger = {
            burger_name: $("#newBurg").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".ateBurgDisplay").on("click", ".deleteBurg", function (event) {
        var id = $(this).data("id");
        event.preventDefault();

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        );
    });
});
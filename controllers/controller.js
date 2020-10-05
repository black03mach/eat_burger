const express = require("express");
const router = express.Router();
const beef = require("../models/burger");

router.get("/", function (req, res) {
    beef.all(function (data) {
        const burgObject = {
            beefs: data
        };
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    beef.create([
        "burgName", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.inserId })
    })
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log(req.body.devoured)
    console.log(req.params.id);
    beef.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    beef.delete(condition, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

module.exports = router;
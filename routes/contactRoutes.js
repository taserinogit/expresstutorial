const express = require("express");
const router = express.Router();

router.route("/").get ((req,res) => {
    res.status(200).json({message:"Get all contacts"});
});



router.post("/",(req,res) => {
    try {
        res.status(200).send("sa");
        
    } catch (error) {
        console.log(error);
    }
})


router.route("/:id").get ((req,res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});


router.route("/:id").put ((req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
});

router.route("/:id").delete ((req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});

module.exports = router;
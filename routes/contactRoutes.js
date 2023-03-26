const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getSingleContact,
  editContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .put(editContact)
  .delete(deleteContact);

module.exports = router;

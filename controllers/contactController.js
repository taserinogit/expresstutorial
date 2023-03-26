const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    console.log(req.body);

    if (phone.length !== 11) {
      res.status(400);
      throw new Error("Lütfen 11 haneli bir telefon numarası giriniz.");
    }

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mendatory");
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
    });

    res.status(201).send(contact);
  } catch (error) {
    console.log(error);
  }
});

//@desc Get contact
//@route GET /api/contacts/id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Edit contact
//@route PUT /api/contacts/id
//@access public
const editContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getSingleContact,
  editContact,
  deleteContact,
};

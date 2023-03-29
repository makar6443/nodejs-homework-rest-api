// const express = require('express')

// const router = express.Router()

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// module.exports = router

const express = require("express");
const {
  contactsList,
  getContact,
  createContact,
  deleteContact,
  refreshContact,
  } = require("../../controllers/controllers");
const {
  toAddContactMiddlware,
  toUpdateContactMiddlware,
  } = require("../../middlewares/middlewares");

const catchAsync = require("../../utils/catchAsync");

const router = express.Router();

router.get("/", catchAsync(contactsList));
router.post("/", toAddContactMiddlware, catchAsync(createContact));
router.put("/:contactId", toUpdateContactMiddlware, catchAsync(refreshContact));
router.get("/:contactId", catchAsync(getContact));
router.delete("/:contactId", catchAsync(deleteContact));

module.exports = router;

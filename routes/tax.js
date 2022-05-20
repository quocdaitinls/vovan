const {Router} = require("express");
const TaxModel = require("../model/Tax");

const router = Router();

router.get("/", async (req, res) => {
  const allTax = await TaxModel.find({});
  res.status(200).json(allTax);
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newTax = await TaxModel.create(data);
    res.status(201).json(newTax);
  } catch (err) {
    res.status(500);
  }
});

router.put("/:tax_id", async (req, res) => {
  const {tax_id} = req.params;
  const data = req.body;
  const query = {tax_id};

  const tax = await TaxModel.findOne(query);
  tax.set(data);
  await tax.save();

  res.status(200).json(tax);
});

module.exports = router;

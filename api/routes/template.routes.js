const router = require("express").Router();

const generateContent = (req, res) => {
  // TO DO: validate params
  // TO DO: validate body params
  // TO DO: Get outputs from data folder for the corresponding template
};

router.route("/:templateId").post(generateContent);

module.exports = router;

const express = require("express");
const {
  getAllOrganizations
} = require("../controllers/OrganizationController");

const router = express.Router();

router.route("/orgs").get(getAllOrganizations);

module.exports = router;

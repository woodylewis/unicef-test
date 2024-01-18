const organizationService = require("../services/OrganizationService");

exports.getAllOrganizations = async (req, res) => {
  try {
    const organizations = await organizationService.getAllOrganizations();
    res.json({ data: organizations, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
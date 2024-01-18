const OrganizationModel = require("../models/Organization");

exports.getAllOrganizations = async () => {
  return await OrganizationModel.find();
};

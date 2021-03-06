function metadata(selections) {
  if (!selections.selectedStartDate || !selections.selectedEndDate)
    throw new Error("Date selection wasn't set.");

  if (!selections.selectedAccount || !selections.selectedProperty || !selections.selectedProfile)
    throw new Error("GA selection wasn't set.");

  return {
    metadata: {
      generated_on: new Date(),
      data_start_date: selections.selectedStartDate,
      data_end_date: selections.selectedEndDate,
      account: {
        id: selections.selectedAccount.id,
        name: selections.selectedAccount.name,
      },
      property: {
        id: selections.selectedProperty.id,
        name: selections.selectedProperty.name,
      },
      profile: {
        id: selections.selectedProfile.id,
        name: selections.selectedProfile.name,
      },
    },
  };
}

function getMetaData(properties) {
  return {
    selectedProfile: properties.selectedProfile,
    selectedAccount: properties.selectedAccount,
    selectedProperty: properties.selectedProperty,
    selectedStartDate: properties.startDate,
    selectedEndDate: properties.endDate,
  };
}

module.exports = {
  metadata,
  getMetaData,
};

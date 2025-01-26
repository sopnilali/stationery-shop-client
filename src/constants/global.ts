export const genders = ['Male', 'Female', 'Other'];

export const genderOptions = genders.map((item) => ({
    value: item.toLowerCase(),
    label: item,
  }));

  export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  export const bloodGroupOptions = bloodGroups.map((item) => ({
    value: item,
    label: item,
  }));
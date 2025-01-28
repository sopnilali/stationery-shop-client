export const category = ['Notebooks', 'Pen & Pencils', 'Calculator', 'Drawing & Copier Papers', 'Highlighter'];

export const categoryOptions = category.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));


export const brand = ['Xiaomi', 'Good Luck Stationery', 'Matador', 'Fullmark', 'RFL Houseware'];

export const brandOptions = brand.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const role = ['admin', 'user']
export const roleOptions = role.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
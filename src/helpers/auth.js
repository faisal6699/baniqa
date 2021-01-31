

export const adminCheck = (type) => {
  localStorage.setItem('admin', type)
};

export const validAdmin = () => {
  return false
};

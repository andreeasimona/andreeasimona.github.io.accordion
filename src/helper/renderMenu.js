/* Helper to render the html markup of the menu */

/* Creates a section */
export const createSection = (index) => {
  const dt = document.createElement('dt');
  dt.className = 'Section';
  dt.innerHTML = `Section ${index + 1}`;
  return dt;
};

/* Creates a panel */
export const createPanel = () => {
  const dd = document.createElement('dd');
  dd.className = 'Panel';
  return dd;
};

/* Creates the content of a panel */
export const createPanelContent = (index) => {
  const p = document.createElement('p');
  p.innerHTML = `Section ${index + 1} Content...`;
  return p;
};

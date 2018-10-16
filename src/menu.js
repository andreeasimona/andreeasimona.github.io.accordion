const sections = [...document.getElementsByClassName('Section')];
const panels = [...document.getElementsByClassName('Panel')];

const isPanelOpen = (panel) => {
  return panel.classList.contains('is-open');
};

const findOpenPanel = () => {
  return panels.find((element) => { return isPanelOpen(element); });
};

const closePanels = () => {
  const openPanel = findOpenPanel();
  if (openPanel !== undefined) {
    openPanel.classList.remove('is-open');
  }
};

const onClick = (section) => {
  const panel = section.nextElementSibling;
  const isCurrentPanelOpen = isPanelOpen(panel);

  closePanels();
  if (!isCurrentPanelOpen) {
    panel.classList.toggle('is-open');
  }
};

export const initMenu = () => {
  sections.forEach((section) => {
    section.addEventListener('click', () => onClick(section));
  });
};

/* Accordion Menu Component */
import getSection from '../api/section';
import templateSection from '../templates/section';
export default class Menu {
  constructor(menu) {
    this.menu = menu;
  }

  init() {
    this.addExtraSection();
    this.bindEvents();
  }

  /* Add new section with ajax */
  addExtraSection = () => {
    getSection().then(response => {
      this.menu.innerHTML += templateSection(response);
    });
  }

  /* Check if a panel is opened */
  isPanelOpen = (panel) => {
    return panel.classList.contains('Menu-panel--active');
  };

  /* Finds an open panel */
  findOpenPanel = () => {
    this.panels = Array.from(document.querySelectorAll('dd')); // todo move this
    return this.panels.find((element) => this.isPanelOpen(element));
  };

  /* Close the panel if it is opened */
  closePanels = () => {
    const openPanel = this.findOpenPanel();
    if (openPanel !== undefined) {
      openPanel.classList.remove('Menu-panel--active');
    }
  };

  /* Binding for the click event */
  onClick = (event) => {
    const section = event.target;
    const panel = section.nextElementSibling;
    const isCurrentPanelOpen = this.isPanelOpen(panel);

    this.closePanels();
    if (!isCurrentPanelOpen) {
      panel.classList.toggle('Menu-panel--active');
    }
  };

  /* Binds the menu events */
  bindEvents = () => {
    this.menu.addEventListener('click', this.onClick);
  };
}

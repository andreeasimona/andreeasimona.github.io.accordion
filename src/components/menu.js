/* Accordion Menu Component */
export default class Menu {
  /** Private class constructor
  * @constructor
  * @param number arguments variable reprezenting the number of sections
  */
  constructor(menu) {
    this.menu = menu;
  }

  init() {
    this.addExtraSection();
    this.panels = Array.from(document.querySelectorAll('dd'));
    this.bindEvents();
  }

  addExtraSection = () => {
    // todo get extra section
  }

  /* Check if a panel is opened */
  isPanelOpen = (panel) => {
    return panel.classList.contains('Menu-panel--active');
  };

  /* Finds an open panel */
  findOpenPanel = () => {
    return this.panels.find((element) => { return this.isPanelOpen(element); });
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

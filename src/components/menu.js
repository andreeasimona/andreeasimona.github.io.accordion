import { createSection, createPanel, createPanelContent } from '../helper/renderMenu';

/* Accordion Menu Component */
export default class Menu {
  /** Private class constructor
  * @constructor
  * @param number arguments variable reprezenting the number of sections
  */
  constructor(menuSize) {
    this.sections = [];
    this.panels = [];
    this.render(menuSize);
  }

  /** Render function; It creates the html for the menu at renders it in the dom.
  * @param number arguments variable reprezenting the number of sections
  */
  render = (menuSize) => {
    const menuContainer = document.getElementById('menu');
    const menuWrapper = document.createElement('dl');
    const helperIterator = [...Array(menuSize)];

    helperIterator.forEach((item, index) => {
      const section = createSection(index);
      const panel = createPanel();
      const panelContent = createPanelContent(index);
      this.appendMenuItem(section, panel, panelContent, menuWrapper);
    });
    menuContainer.appendChild(menuWrapper);
  }

  /** Appends one portion of the menu to the menu wrapper.
  * Stores the section and the panel in the class.
  */
  appendMenuItem = (section, panel, panelContent, menuWrapper) => {
    menuWrapper.appendChild(section);
    panel.appendChild(panelContent);
    menuWrapper.appendChild(panel);

    this.sections.push(section);
    this.panels.push(panel);
  }

  /* Check if a panel is opened */
  isPanelOpen = (panel) => {
    return panel.classList.contains('is-open');
  };

  /* Finds an open panel */
  findOpenPanel = () => {
    return this.panels.find((element) => { return this.isPanelOpen(element); });
  };

  /* Close the panels */
  closePanels = () => {
    const openPanel = this.findOpenPanel();
    if (openPanel !== undefined) {
      openPanel.classList.remove('is-open');
    }
  };

  /* Binding for the click element */
  onClick = (section) => {
    const panel = section.nextElementSibling;
    const isCurrentPanelOpen = this.isPanelOpen(panel);

    this.closePanels();
    if (!isCurrentPanelOpen) {
      panel.classList.toggle('is-open');
    }
  };

  /* Binds each seaction click event */
  initMenuEvents = () => {
    this.sections.forEach((section) => {
      section.addEventListener('click', () => this.onClick(section));
    });
  };
}

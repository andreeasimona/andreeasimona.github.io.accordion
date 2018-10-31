import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Menu from '../components/Menu';

describe('Accordion Menu', () => {
  it('should exists', () => {
    expect(Menu).to.not.be.undefined;
  });

  describe('Accordion Menu', () => {
    let accordion;
    const jsDom = new JSDOM('<!DOCTYPE html><body></body>');
    const menuElement = jsDom.window.document.createElement('dl');

    beforeEach(() => {
      accordion = new Menu(menuElement);
    });

    afterEach(() => {
      accordion = null;
    });

    it('should have a menu property', () => {
      expect(accordion.menu).to.not.be.undefined;
    });
  });
});

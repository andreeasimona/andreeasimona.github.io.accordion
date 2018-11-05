import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Menu from '../components/Menu';
import { bodyHtml, expectedHtml } from '../templates/htmlHelper';

describe('Accordion Menu', () => {
  it('should exists', () => {
    expect(Menu).to.not.be.equal(undefined);
  });

  describe('Accordion Menu Logic', () => {
    let accordion;
    const jsDom = new JSDOM(bodyHtml);
    const menuElement = jsDom.window.document.querySelector('.Menu');
    global.fetch = () => new Promise(function (resolve) {
      resolve({
        json: function () {
          return { login: 'test' };
        }
      });
    });
    global.document = jsDom.window.document;

    beforeEach(() => {
      accordion = new Menu(menuElement);
      accordion.init();
    });

    afterEach(() => {
      accordion = null;
    });

    it('should have a menu property', () => {
      expect(accordion.menu).to.be.equal(menuElement);
    });

    it('should get a new section with ajax', () => {
      expect(accordion.menu.innerHTML).to.be.equal(expectedHtml);
    });

    it('should have a click function', () => {
      expect(accordion.onClick).to.be.a('function');
    });
  });
});

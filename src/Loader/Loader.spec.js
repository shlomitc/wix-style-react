import React from 'react';
import Loader from './Loader';
import loaderDriverFactory from './Loader.driver';
import {createDriverFactory} from '../test-common';
import {loaderTestkitFactory} from '../../testkit';
import {loaderTestkitFactory as enzymeLoaderTestkitFactory} from '../../testkit/enzyme';
import {isEnzymeTestkitExists, isTestkitExists} from '../../testkit/test-common';

describe('Loader', () => {
  const createDriver = createDriverFactory(loaderDriverFactory);

  describe('size property', () => {
    it('should create a component with default medium size', () => {
      const driver = createDriver(<Loader/>);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a small loader', () => {
      const driver = createDriver(<Loader size="small"/>);
      expect(driver.isSmall()).toEqual(true);
    });

    it('should allow creating a medium loader', () => {
      const driver = createDriver(<Loader size="medium"/>);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a large loader', () => {
      const driver = createDriver(<Loader size="large"/>);
      expect(driver.isLarge()).toEqual(true);
    });

  });

  describe('text property', () => {
    it('should create a component with no text by default', () => {
      const driver = createDriver(<Loader/>);
      expect(driver.hasText()).toEqual(false);
    });

    it('should create a component with text', () => {
      const text = 'All computers wait at the same speed';
      const driver = createDriver(<Loader text={text}/>);
      expect(driver.hasText()).toEqual(true);
      expect(driver.getText()).toEqual(text);
    });

  });

  describe('color property', () => {
    it('should be blue by default', () => {
      const driver = createDriver(<Loader/>);
      expect(driver.getColor()).toEqual('blue');
    });

    it('should get the given color', () => {
      const driver = createDriver(<Loader color="white"/>);
      expect(driver.getColor()).toEqual('white');
    });
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<Loader/>, loaderTestkitFactory)).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<Loader/>, enzymeLoaderTestkitFactory)).toBe(true);
    });
  });

  it(`shouldn't throw when the Loader doesn't exist`, () => {
    expect(() => loaderDriverFactory({})).not.toThrow();
  });
});

import React from 'react';
import Page from './Page';
import pageDriverFactory from './Page.driver';
import {createDriverFactory} from '../test-common';

const Content = () => (
  <div>content</div>
);

const Tail = () => (
  <div>tail</div>
);

const renderPageWithProps = (props = {}) => (
  <Page {...props}>
    <Page.Header title="title"/>
    <Page.Content>
      <Content/>
    </Page.Content>
  </Page>
);

describe('Page', () => {
  const createDriver = createDriverFactory(pageDriverFactory);

  it('should initialize component', () => {
    const driver = createDriver(renderPageWithProps());
    expect(driver.exists()).toBeTruthy();
  });

  describe('backgroundImage', () => {
    it('should initialize component with background image', () => {
      const driver = createDriver(renderPageWithProps({backgroundImageUrl: '/some/image'}));
      expect(driver.backgroundImageExists()).toBeTruthy();
    });

    it('should not initialize component with background image', () => {
      const driver = createDriver(renderPageWithProps());
      expect(driver.backgroundImageExists()).toBeFalsy();
    });
  });

  describe('gradientClassName', () => {
    it('should initialize component with gradient class name', () => {
      const driver = createDriver(renderPageWithProps({gradientClassName: 'class'}));
      expect(driver.gradientClassNameExists()).toBeTruthy();
    });

    it('should not initialize component with gradiet class name by default', () => {
      const driver = createDriver(renderPageWithProps());
      expect(driver.gradientClassNameExists()).toBeFalsy();
    });
  });

  describe('Page.Tail', () => {
    it('should attach a tail component', () => {
      const driver = createDriver(
        <Page>
          <Page.Header title="title"/>
          <Page.Tail>
            <Tail/>
          </Page.Tail>
          <Page.Content>
            <Content/>
          </Page.Content>
        </Page>
      );

      expect(driver.tailExists()).toBeTruthy();
    });

    it('should not attach a tail component', () => {
      const driver = createDriver(renderPageWithProps());
      expect(driver.tailExists()).toBeFalsy();
    });
  });

  describe('Prop Validation', () => {
    let React;
    const stub = console.error = jest.fn();
    const createDriver = createDriverFactory(pageDriverFactory);
    const prefixWarning = 'Warning: Failed prop type: ';
    const suffixWarning = '\n    in Page';

    beforeEach(() => {
      React = require('react');
    });

    afterEach(() => {
      jest.resetModules();
      stub.mockReset();
    });

    it('should not initialize without a PageContent component', () => {
      const page = (
        <Page>
          <Page.Header title="title"/>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(`${prefixWarning}Page: Invalid Prop children, must contain Page.Content${suffixWarning}`);
    });

    it('should not initialize without a PageHeader component', () => {
      const page = (
        <Page>
          <Page.Content>
            <div/>
          </Page.Content>
          <div/>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(`${prefixWarning}Page: Invalid Prop children, must contain Page.Header${suffixWarning}`);
    });

    it('should not initialize component with an unknown type', () => {
      const page = (
        <Page>
          <Page.Header title="title"/>
          <Page.Content>
            <div/>
          </Page.Content>
          <div>Unwanted child</div>
        </Page>
      );

      createDriver(page);
      expect(stub).toHaveBeenCalledWith(`${prefixWarning}Page: Invalid Prop children, unknown child div${suffixWarning}`);
    });
  });
});



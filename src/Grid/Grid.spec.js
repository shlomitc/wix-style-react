/**
 * Created by lioru on 05/05/2017.
 */
import React from 'react';
import {mount} from 'enzyme';
import {Col, Columns} from './Grid';
import classNames from 'classnames';

describe('Grid', () => {

  describe('breakpoints col options', () => {
    it('should add col xs class when using span attribute ', () => {
      const element = mount(<Col span="6"/>);
      expect(element.hasClass('colXs6')).toEqual(true);
    });

    it('should add col xs class when no span attribute is given and 12 is default', () => {
      const element = mount(<Col/>);
      expect(element.hasClass('colXs12')).toEqual(true);
    });

    it('should add col sm class when using sm attribute ', () => {
      const element = mount(<Col sm="3"/>);
      expect(element.hasClass('colSm3')).toEqual(true);
    });

    it('should add col md class when using md attribute ', () => {
      const element = mount(<Col md="12"/>);
      expect(element.hasClass('colMd12')).toEqual(true);
    });

    it('should add col lg class when using lg attribute ', () => {
      const element = mount(<Col lg="1"/>);
      expect(element.hasClass('colLg1')).toEqual(true);
    });

    it('should add col xl class when using xl attribute ', () => {
      const element = mount(<Col xl="5"/>);
      expect(element.hasClass('colXl5')).toEqual(true);
    });

    it('should accept numeric values', () => {
      const element = mount(<Col md={12}/>);
      expect(element.hasClass('colMd12')).toEqual(true);
    });

    it('should add col xl class when using xl attribute ', () => {
      const element = mount(<Col sm="3" md="12" lg="1" xl="5"/>);
      expect(element.hasClass('colXl5')).toEqual(true);
      expect(element.hasClass('colLg1')).toEqual(true);
      expect(element.hasClass('colMd12')).toEqual(true);
      expect(element.hasClass('colSm3')).toEqual(true);
    });
  });

  describe('breakpoints hide options', () => {
    it('should add hidden xs class when using hiddenxs attribute ', () => {
      const element = mount(<Col xs="hidden"/>);
      expect(element.hasClass('hiddenXs')).toEqual(true);
    });

    it('should add hidden sm class when using hiddensm attribute ', () => {
      const element = mount(<Col sm="hidden"/>);
      expect(element.hasClass('hiddenSm')).toEqual(true);
    });

    it('should add hidden md class when using hiddenmd attribute ', () => {
      const element = mount(<Col md="hidden"/>);
      expect(element.hasClass('hiddenMd')).toEqual(true);
    });

    it('should add hidden lg class when using hiddenlg attribute ', () => {
      const element = mount(<Col lg="hidden"/>);
      expect(element.hasClass('hiddenLg')).toEqual(true);
    });

  });

  describe('breakpoints show options', () => {
    it('should add visible xs class when using xs attribute ', () => {
      const element = mount(<Col xs="visible"/>);
      expect(element.hasClass('visibleXs')).toEqual(true);
    });

    it('should add visible sm class when using sm attribute ', () => {
      const element = mount(<Col sm="visible"/>);
      expect(element.hasClass('visibleSm')).toEqual(true);
    });

    it('should add visible md class when using md attribute ', () => {
      const element = mount(<Col md="visible"/>);
      expect(element.hasClass('visibleMd')).toEqual(true);
    });

    it('should add visible lg class when using lg attribute ', () => {
      const element = mount(<Col lg="visible"/>);
      expect(element.hasClass('visibleLg')).toEqual(true);
    });

  });

  describe('pass className', () => {

    it('should pass className to col element', () => {
      const element = mount(<Col className="test"/>);
      expect(element.hasClass('test')).toEqual(true);
    });

    it('should pass className to columns element', () => {
      const element = mount(<Columns className="test"/>);
      expect(element.hasClass('test')).toEqual(true);
    });

    it('should pass multiple className to col element', () => {
      const element = mount(<Col className={classNames('test1', 'test2')}/>);
      expect(element.hasClass('test1')).toEqual(true);
      expect(element.hasClass('test2')).toEqual(true);
    });

    it('should pass className to columns element', () => {
      const element = mount(<Columns className={classNames('test1', 'test2')}/>);
      expect(element.hasClass('test1')).toEqual(true);
      expect(element.hasClass('test2')).toEqual(true);
    });
  });

  describe('support dataHook', () => {
    it('for Col', () => {
      const element = mount(<Col dataHook="test"/>);
      expect(element.find('[data-hook="test"]').length).toEqual(1);
    });

    it('for Columns', () => {
      const element = mount(<Columns dataHook="test"/>);
      expect(element.find('[data-hook="test"]').length).toEqual(1);
    });
  });
});

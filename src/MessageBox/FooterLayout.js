import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Backoffice/Button';
import * as styles from './FooterLayout.scss';
import classNames from 'classnames';

const FooterLayout = ({bottomChildren, children, theme, cancelText, onCancel, onOk, confirmText, buttonsHeight, enableOk, enableCancel, withTopPadding}) => {

  return (
    <div>
      <div className={classNames(styles.footer, {[styles.withTopPadding]: withTopPadding})} data-hook="message-box-footer">
        {children}
        <div className={styles.footerbuttons}>
          {cancelText ?
            <Button disabled={!enableCancel} height={buttonsHeight} theme={'empty' + theme} onClick={onCancel} dataHook="cancellation-button" >
              {cancelText}
            </Button> : null
          }
          <Button disabled={!enableOk} height={buttonsHeight} theme={'full' + theme} onClick={onOk} dataHook="confirmation-button">
            {confirmText}
          </Button>
        </div>
      </div>
      {bottomChildren ? (
        <div className={styles.bottomChildren} data-hook="footer-layout-bottom-children">
          {bottomChildren}
        </div>) : null}
    </div>
  );
};

FooterLayout.propTypes = {
  confirmText: PropTypes.node,
  cancelText: PropTypes.node,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  enableOk: PropTypes.bool,
  enableCancel: PropTypes.bool,
  theme: PropTypes.string,
  buttonsHeight: PropTypes.string,
  children: PropTypes.any,
  bottomChildren: PropTypes.node,
  withTopPadding: PropTypes.bool
};

FooterLayout.defaultProps = {
  theme: 'blue',
  buttonsHeight: 'small',
  enableOk: true,
  enableCancel: true,
  withTopPadding: false
};

export default FooterLayout;

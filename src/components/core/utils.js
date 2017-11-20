import React from 'react';

export const withTheme = (Component, theme) =>
  React.cloneElement(Component, {theme});

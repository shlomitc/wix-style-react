const radioGroupDriverFactory = component => ({
  selectByIndex: index => component.$$(`div [data-hook="radio-label"]`).get(index).click(),
  isRadioChecked: index => component.$$(`div input`).get(index).isSelected(),
  isRadioDisabled: index => !!component.$$(`div input`).get(index).getAttribute('disabled'),
  element: () => component
});

export default radioGroupDriverFactory;

const radioGroupDriverFactory = component => {

  const radioAtIndex = index => component.$$(`div [data-hook="radio-label"]`).get(index);

  return {
    getRadioAtIndex: index => radioAtIndex(index),
    selectByIndex: index => radioAtIndex(index).click(),
    isRadioChecked: index => component.$$(`div input`).get(index).isSelected(),
    isRadioDisabled: index => !!component.$$(`div input`).get(index).getAttribute('disabled'),
    element: () => component
  };
};

export default radioGroupDriverFactory;

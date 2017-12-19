import React from 'react';
import story from 'story';
import times from 'lodash/times';

const allItems = times(50, i => ({
  id: i,
  title: `Title ${i}`,
  subtitle: `Subtitle ${i}`,
  extraText: `Extra Text ${i}`,
  image: <img width="100%" height="100%" src="http://via.placeholder.com/100x100"/>
}));

story({
  category: '4. Selection',
  storyName: '4.10 Modal Selector Layout',
  componentSrcFolder: 'ModalSelectorLayout',
  componentProps: setProps => ({
    dataHook: 'storybook-modal-selector-layout',
    height: '540px',
    onClose: () => setProps({isOpen: false}),
    onCancel: () => setProps({isOpen: false}),
    itemsPerPage: 4,
    dataSource: (searchQuery, offset, limit) =>
      new Promise(resolve => setTimeout(() => {
        const filteredItems = allItems.filter(item => item.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        return resolve({
          items: filteredItems.slice(offset, offset + limit),
          totalCount: filteredItems.length
        });
      }, 2000))
  }),
  exampleProps: {
    onOk: ({id, title, subtitle}) => JSON.stringify({id, title, subtitle})
  }
});

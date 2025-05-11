const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Islands',
      collapsible: true,
      collapsed: false,
      items: [
        'islands/corvo',
        'islands/flores',
        'islands/faial',
        'islands/pico',
        'islands/sao-jorge',
        'islands/graciosa',
        'islands/terceira',
        'islands/sao-miguel',
        'islands/santa-maria',
      ],
    },
    {
      type: 'doc',
      id: 'history',
      label: 'History',
    },
    {
      type: 'doc',
      id: 'geography',
      label: 'Geography',
    },
    {
      type: 'doc',
      id: 'demographics',
      label: 'Demographics',
    },
  ],
};

export default sidebars;
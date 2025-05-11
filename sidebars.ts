const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
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
  ],
};

export default sidebars;
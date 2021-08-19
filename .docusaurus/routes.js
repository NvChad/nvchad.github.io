
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','f4a'),
    routes: [
      {
        path: '/docs/Acknowledgements',
        component: ComponentCreator('/docs/Acknowledgements','55c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Config',
        component: ComponentCreator('/docs/Config','d96'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Contribute',
        component: ComponentCreator('/docs/Contribute','22b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Features',
        component: ComponentCreator('/docs/Features','9be'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Getting started/Learn lua',
        component: ComponentCreator('/docs/Getting started/Learn lua','c95'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Getting started/Post Install',
        component: ComponentCreator('/docs/Getting started/Post Install','1dd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Getting started/Setup',
        component: ComponentCreator('/docs/Getting started/Setup','384'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/Support',
        component: ComponentCreator('/docs/Support','154'),
        exact: true,
        'sidebar': "mySidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

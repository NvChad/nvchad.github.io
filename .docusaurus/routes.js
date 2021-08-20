
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
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

export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'tasks',
        data: {
          menu: {
            title: 'Tasks',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              }
            }
          },
          {
            path: 'new',
            data: {
              menu: {
                title: 'New',
              }
            }
          }
        ]
      },
      {
        path: 'interfaces',
        data: {
          menu: {
            title: 'Interfaces',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'new',
            data: {
              menu: {
                title: 'New',
              }
            }
          }
        ]
      },
      {
        path: 'environments',
        data: {
          menu: {
            title: 'Environments',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'new',
            data: {
              menu: {
                title: 'New',
              }
            }
          }
        ]
      },
      {
        path: 'templates',
        data: {
          menu: {
            title: 'Templates',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'new',
            data: {
              menu: {
                title: 'New',
              }
            }
          }
        ]
      },

    ]
  }
];

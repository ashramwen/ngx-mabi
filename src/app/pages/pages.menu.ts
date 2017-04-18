export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'fa fa-github-alt',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.notebook',
            icon: 'ion-social-snapchat',
            selected: false,
            expanded: false,
            order: 100
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.panda',
            icon: 'fa fa-paw',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      }
    ]
  }
];

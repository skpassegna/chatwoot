import { frontendURL } from '../../../../helper/URLHelper';

const SettingsContent = () => import('../Wrapper.vue');
const CannedHome = () => import('./Index.vue');

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/settings/canned-response'),
      component: SettingsContent,
      props: {
        headerTitle: 'CANNED_MGMT.HEADER',
        icon: 'chat-multiple',
        showNewButton: false,
      },
      children: [
        {
          path: '',
          name: 'canned_wrapper',
          redirect: 'list',
        },
        {
          path: 'list',
          name: 'canned_list',
          meta: {
            permissions: [
              'account_manage',
              'conversation_manage',
              'conversation_participating_manage',
              'conversation_unassigned_manage',
            ],
          },
          component: CannedHome,
        },
      ],
    },
  ],
};

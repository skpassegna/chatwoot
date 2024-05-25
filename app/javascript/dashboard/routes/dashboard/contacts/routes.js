/* eslint arrow-body-style: 0 */
import { frontendURL } from '../../../helper/URLHelper';
const ContactsView = () => import('./components/ContactsView.vue');
const ContactManageView = () => import('./pages/ContactManageView.vue');

export const routes = [
  {
    path: frontendURL('accounts/:accountId/contacts'),
    name: 'contacts_dashboard',
    meta: {
      permissions: [
        'account_manage',
        'conversation_manage',
        'conversation_participating_manage',
        'conversation_unassigned_manage',
      ],
    },
    component: ContactsView,
  },
  {
    path: frontendURL('accounts/:accountId/contacts/custom_view/:id'),
    name: 'contacts_segments_dashboard',
    meta: {
      permissions: [
        'account_manage',
        'conversation_manage',
        'conversation_participating_manage',
        'conversation_unassigned_manage',
      ],
    },
    component: ContactsView,
    props: route => {
      return { segmentsId: route.params.id };
    },
  },
  {
    path: frontendURL('accounts/:accountId/labels/:label/contacts'),
    name: 'contacts_labels_dashboard',
    meta: {
      permissions: [
        'account_manage',
        'conversation_manage',
        'conversation_participating_manage',
        'conversation_unassigned_manage',
      ],
    },
    component: ContactsView,
    props: route => {
      return { label: route.params.label };
    },
  },
  {
    path: frontendURL('accounts/:accountId/contacts/:contactId'),
    name: 'contact_profile_dashboard',
    meta: {
      permissions: [
        'account_manage',
        'conversation_manage',
        'conversation_participating_manage',
        'conversation_unassigned_manage',
      ],
    },
    component: ContactManageView,
    props: route => {
      return { contactId: route.params.contactId };
    },
  },
];

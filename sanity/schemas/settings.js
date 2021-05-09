import { FiSettings as icon } from 'react-icons/fi';

export default {
  name: 'settings', // Computer Name
  title: 'Site Settings', // Visible Title
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'code',
      title: 'Gate Code',
      type: 'string',
    },
    {
      name: 'termsEnabled',
      title: 'Show Terms & Conditions',
      type: 'boolean',
      description:
        'Toggle to show or hide the terms and conditions link in the footer.',
    },
    {
      name: 'privacyEnabled',
      title: 'Show Privacy Policy',
      type: 'boolean',
      description:
        'Toggle to show or hide the privacy policy link in the footer.',
    },
    {
      name: 'cookieEnabled',
      title: 'Show Cookies Policy',
      type: 'boolean',
      description:
        'Toggle to show or hide the cookies policy link in the footer.',
    },
  ],
};

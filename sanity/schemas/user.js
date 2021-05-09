import { AiOutlineUser as icon } from 'react-icons/ai';

export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true,
    },
    {
      name: 'dogArr',
      title: 'Dog(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dog' }] }],
    },
  ],
};

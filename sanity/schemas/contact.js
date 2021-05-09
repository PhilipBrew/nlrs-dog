import { MdQuestionAnswer as icon } from 'react-icons/md';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'coordinate',
    },
  ],
};

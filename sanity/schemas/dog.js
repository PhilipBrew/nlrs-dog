import { FaDog as icon } from 'react-icons/fa';

export default {
  name: 'dog',
  title: 'Dogs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'vaccination',
      title: 'Vaccination Proof',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

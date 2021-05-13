import { AiOutlineClockCircle as icon } from 'react-icons/ai';
import Image from '../components/image';

export default {
  name: 'order', // Computer Name
  title: 'Orders', // Visible Title
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the person attending the booking',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address of the person who booked',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Phone number of the person who booked',
    },
    {
      name: 'time',
      title: 'Time of booking',
      type: 'datetime',
      description: 'Date and time of the booking',
    },
    {
      name: 'dogName',
      title: 'Dog Name',
      type: 'string',
      description: 'Optional name of dog',
    },
    {
      name: 'vaccination',
      title: 'Vaccination Proof',
      type: 'string',
      description: 'Image of vaccination proof',
      inputComponent: Image,
    },
  ],
};

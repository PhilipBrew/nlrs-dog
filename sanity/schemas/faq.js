import { MdQuestionAnswer as icon } from 'react-icons/md';

export default {
  name: 'faq',
  title: 'FAQ',
  icon,
  type: 'document',
  fields: [
    { name: 'question', type: 'string', title: 'Question' },
    { name: 'answer', type: 'text', title: 'Answer' },
  ],
};

import { useAppContext } from '../providers/AppProvider';

const useSubmitForm = ({}) => {
  const { order, setOrder } = useAppContext();

  console.log('ORDER ------->', order);
};

export default useSubmitForm;

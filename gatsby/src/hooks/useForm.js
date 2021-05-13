import { useState } from 'react';

import { useAppContext } from '../providers/AppProvider';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);
  const { order, setOrder } = useAppContext();

  const updateValue = (e) => {
    // If number, convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      ...value,
      [e.target.name]: value,
    });
    setOrder({
      ...order,
      [e.target.name]: value,
    });
  };

  return {
    values,
    updateValue,
  };
};

export default useForm;

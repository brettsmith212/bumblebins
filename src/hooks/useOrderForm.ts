import { useState, useEffect, useContext } from 'react';
import AuthContext from '../auth-context';
import { orderFormSchema } from '../components/OrderFormSchema';
import * as yup from 'yup';

const initialFormError: object = {
  name: "",
}

const useOrderForm = () => {
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [disabled, setDisabled] = useState(true);
  const ctx = useContext(AuthContext);

  const validateForm = (name: any, value: any): void => {
    yup
    .reach(orderFormSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch((err: any) => setFormErrors({...formErrors, [name]: err.errors[0]}))
  };

  const handleChange = (e: any): void => {
    validateForm(e.target.name, e.target.value);
    ctx.setValues({
      ...ctx.values,
      [e.target.name]: e.target.value
    });
    ctx.setBins(e.target.value)
  }
  useEffect(() => {
    orderFormSchema.isValid(ctx.values).then(valid => setDisabled(!valid));
  }, [ctx.values]);

  return([formErrors, disabled, handleChange]);
}

export default useOrderForm;
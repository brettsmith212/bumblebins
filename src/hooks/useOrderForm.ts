import { useState, useEffect, useContext } from 'react';
import AuthContext from '../auth-context';
import { orderFormSchema } from '../components/OrderFormSchema';
import * as yup from 'yup';


interface formErrors {
  name: string,
  email: string,
  phoneNumber: string,
  dropOffDate: string,
  dropOffAddress: string,
  pickUpDate: string,
  pickUpAddress: string,
  totalBins: string,
}
const initialFormError: formErrors = {
  name: "",
  email: "",
  phoneNumber: "",
  dropOffDate: "",
  dropOffAddress: "",
  pickUpDate: "",
  pickUpAddress: "",
  totalBins: "",
}

const useOrderForm = () => {
  const [formErrors, setFormErrors] = useState<formErrors>(initialFormError);
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
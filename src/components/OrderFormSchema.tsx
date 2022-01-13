import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const orderFormSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Must be a valid email").trim().required("Email is required"),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  dropOffDate: yup.string().required("Drop off date is required"),
  dropOffAddress: yup.string().required("Drop off address is required"),
  pickUpDate: yup.string().required("Pick up date is required"),
  pickUpAddress: yup.string().required("Pick up address is required"),
  totalBins: yup.string().required("Number of bins is required"),
})


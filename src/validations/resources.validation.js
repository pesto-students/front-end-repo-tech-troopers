import * as yup from 'yup';

const PHONE_REGEX = /^[0-9]{10}$/;

const resourceSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  phoneNumber: yup
    .string()
    .matches(PHONE_REGEX, 'Phone number is not valid')
    .required('Phone number is required'),
  email: yup.string().email().required('email is required'),
  address: yup.object().shape({
    addressLine1: yup.string().required('Address line 1 is required'),
    addressLine2: yup.string().required('Address line 2 is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    pinCode: yup.number()
      .positive('pin code must be positive')
      .integer('pin code must be an integer')
      .test('is-six-digits', 'pin code must be exactly 6 digits', (value) => {
        if (!value) return false;
        return value.toString().length === 6;
      })
      .required('pin code is required'),
  }).required(),
});

export default resourceSchema;

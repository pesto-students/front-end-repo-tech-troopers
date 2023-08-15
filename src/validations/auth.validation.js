import * as yup from 'yup';

const PHONE_REGEX = /^[0-9]{10}$/;

export const SignupSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('E-mail is required.'),
    phoneNumber: yup
        .string()
        .matches(PHONE_REGEX, 'Phone number is not valid')
        .required('Phone number is required'),
    role: yup.string().required('Role is required'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
    confirmPassword: yup.string().required('Confirm Password is required'),
});

export const loginSchema = yup.object().shape({
    email: yup.string().required('E-mail is required.'),
    password: yup.string().required('Password is required.'),
});
export const ngoDetailsSchema = yup.object().shape({
    address: yup
        .object()
        .shape({
            addressLine1: yup.string().required('Address line 1 is required'),
            addressLine2: yup.string().required('Address line 2 is required'),
            city: yup.string().required('City is required'),
            state: yup.string().required('State is required'),
            pinCode: yup.number()
                .positive('pin code must be positive')
                .integer('pin code must be an integer')
                .test('is-six-digits', 'pin code must be exactly 6 digits', value => {
                    if (!value) return false;
                    return value.toString().length === 6;
                })
                .required('pin code is required'),
        })
        .required(),
    ngoDetails: yup
        .object()
        .shape({
            ngoName: yup.string().required('NGO name is required'),
            registrationNumber: yup
                .number()
                .required('Registration Number is required'),
            typeOfNGO: yup.string().required('NGO type is required'),
        })
        .required(),
});
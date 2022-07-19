import * as Yup from 'yup';

export const CustomerSchema = Yup.object().shape({
    name: Yup.string().required('Name is a required field'),
    address: Yup.string().required('Address is a required field'),
    creditLimit: Yup.number()
        .required('Credit limit is a required field')
        .min(0, 'Credit limit must be greater than 0')
        .typeError('The limit must be a number'),
    installmentLimit: Yup.number()
        .required('Maximum installments is a required field')
        .min(0, 'Maximum installments must be greater than 0')
        .typeError('The maximum must be a number'),
});

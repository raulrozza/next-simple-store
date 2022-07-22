import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
    customer: Yup.string().required('Please select a customer'),
    installments: Yup.number()
        .required('Please select the number of installments')
        .min(0, 'Maximum installments must be greater than 0')
        .typeError('The installments must be a number'),
});

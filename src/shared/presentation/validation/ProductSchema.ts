import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
    name: Yup.string().required('Name is a required field'),
    description: Yup.string().required('Description is a required field'),
    price: Yup.number()
        .required('Price is a required field')
        .typeError('Price must be a number'),
    slug: Yup.string().required('Slug is a required field'),
});

import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    padding: ${({ theme }) => theme.layout.spacing(1)};
`;

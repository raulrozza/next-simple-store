import { FC, useCallback } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { ToastProviderContext } from '../../context';
import 'react-toastify/dist/ReactToastify.css';

const ReactToastifyProvider: FC = ({ children }) => {
    const error = useCallback((message: string) => toast.error(message), []);

    const info = useCallback((message: string) => toast.info(message), []);

    return (
        <ToastProviderContext.Provider
            value={{
                error,
                info,
            }}
        >
            {children}
            <ToastContainer />
        </ToastProviderContext.Provider>
    );
};

export default ReactToastifyProvider;

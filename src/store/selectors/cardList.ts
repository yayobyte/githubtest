import { useSelector } from 'react-redux'
import Store from "../../types/reducer";

export const useLoading = () => {
    const loading  = useSelector<{github: Store}, boolean>(({ github }) => (
        github.loading
    ));
    return { loading };
};

export const useError = () => {
    const error  = useSelector<{github: Store}, string | undefined>(({ github }) => (
        github.error
    ));
    return { error };
};

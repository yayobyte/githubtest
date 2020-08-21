import { useSelector } from 'react-redux'
import Store from "../../types/reducer";

export const useSearch = () => {
    const  search  = useSelector<{github: Store}, string>(({ github }) => (
        github.search
    ));
    return { search };
};

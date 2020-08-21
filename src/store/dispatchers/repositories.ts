import { useDispatch } from "react-redux";
import queryGithubAction, {
    cleanUserResults as cleanUserResultsAction,
    setSearch as setSearchAction,
} from "../actions";
import { EndpointQuery } from "../../types/reducer";

export const useQueryGithub = () => {
    const dispatch = useDispatch();
    const queryGithub = ({ endpoint, query }: EndpointQuery) => dispatch(queryGithubAction({ endpoint, query }));
    return queryGithub;
};

export const useCleanUserResults = () => {
    const dispatch = useDispatch();
    const cleanResults = () => dispatch(cleanUserResultsAction());
    return cleanResults;
};

export const useSetSearch = () => {
    const dispatch = useDispatch();
    const setSearch = (search: string) => dispatch(setSearchAction(search));
    return setSearch;
};

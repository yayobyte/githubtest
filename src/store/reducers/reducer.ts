import Store from "../../types/reducer";
import { Action } from "../../types/actions";
import {
    GET_INFO_REQ,
    GET_INFO_FAIL,
    GET_INFO_USER_SUC,
    GET_INFO_REPO_SUC,
    CLEAN_RESULTS,
    SET_SEARCH,
} from "../actions/types.actions";

const initialState : Store = {
    loading: false,
    error: undefined,
    userData: [],
    repoData: [],
    dropdown: "users",
    search: '',
};

const reducer = (state : Store = initialState, action : Action) : Store => {
    switch (action.type) {
        case GET_INFO_REQ:
            return {
                ...state,
                loading: true,
            };
        case GET_INFO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        case GET_INFO_USER_SUC:
            return {
                ...state,
                loading: false,
                error: undefined,
                userData: action.data,
            };
        case GET_INFO_REPO_SUC:
            return {
                ...state,
                loading: false,
                error: undefined,
                repoData: action.data,
            };
        case CLEAN_RESULTS:
            return {
                ...state,
                userData: [],
                repoData: [],
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.search,
            }
    }
    return state;
}

export default reducer;

import { Dispatch } from "redux";
import {
    GET_INFO_REQ,
    GET_INFO_FAIL,
    GET_INFO_USER_SUC,
    GET_INFO_REPO_SUC,
    CLEAN_RESULTS,
    SET_SEARCH,
} from "./types.actions";
import {
    InfoRequestAction,
    InfoFailAction,
    RepoSuccessAction,
    UserSuccessAction,
    SearchType,
} from "../../types/actions";
import { UserData, EndpointQuery, ErrorMessage, RepoData } from "../../types/reducer";
import axios, {AxiosResponse} from "axios";
import { getApiUrl } from "../../config";

const getInfoReq = () : InfoRequestAction => ({
    type: GET_INFO_REQ,
});

const getInfoFail = ({ message }: { message: ErrorMessage }) : InfoFailAction => ({
    type: GET_INFO_FAIL,
    message,
});

const getInfoUserSuccess = (data : Array<UserData>) : UserSuccessAction => ({
    type: GET_INFO_USER_SUC,
    data,
});

const getInfoRepoSuccess = (data : Array<RepoData>) : RepoSuccessAction => ({
    type: GET_INFO_REPO_SUC,
    data,
});

const setSearch = (search : string) : SearchType => ({
    type: SET_SEARCH,
    search,
});

const cleanUserResults = () => ({
    type: CLEAN_RESULTS,
});

const queryGithub = ({ endpoint, query } : EndpointQuery) => {
    return async (dispatch : Dispatch) => {
        const isUser = endpoint === 'users';
        dispatch(getInfoReq());
        try {
            const response : AxiosResponse = await axios.get(`${getApiUrl(endpoint)}?q=${query}`)
            const data = response.data.items;
            dispatch(isUser ? getInfoUserSuccess(data) : getInfoRepoSuccess(data));
        } catch ({ message }) {
            dispatch(getInfoFail({ message }));
        }
    }
};

export {
    cleanUserResults,
    setSearch,
}

export default queryGithub

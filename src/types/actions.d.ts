import { Endpoint } from "../config";
import { UserData, RepoData } from "./reducer";
import { DropdownState } from "./Search";
import {
    GET_INFO_REQ,
    GET_INFO_FAIL,
    GET_INFO_USER_SUC,
    GET_INFO_REPO_SUC,
    SET_SEARCH,
} from "../store/actions/types.actions";

/** Actions */
type InfoRequestAction = {
    type: GET_INFO_REQ;
}
type InfoFailAction = {
    type: GET_INFO_FAIL;
    message: string;
}
type UserSuccessAction = {
    type: GET_INFO_USER_SUC;
    data: Array<UserData>;
}
type RepoSuccessAction = {
    type: GET_INFO_REPO_SUC;
    data: Array<RepoData>;
}
type SearchType = {
    type: SET_SEARCH;
    search: string;
}

type Action = InfoRequestAction
    & InfoFailAction
    & UserSuccessAction
    & RepoSuccessAction
    & DropdownChange;

export {
    InfoRequestAction,
    InfoFailAction,
    UserSuccessAction,
    RepoSuccessAction,
    SearchType,
    Action,
}
import { DropdownState } from "./Search";
/** Types */
type UserData = {
    login: string;
    avatar_url: string;
    html_url: string;
    id: number;
    score: number;
}

type Owner = {
    login: string;
    avatar_url: string;
}

type RepoData = {
    id: number;
    name: number;
    owner: Owner;
    avatar_url: string;
    html_url: string;
    forks: number;
    watchers: number;
}

/** Data*/
type EndpointQuery = {
    endpoint: Endpoint;
    query: string;
}

type ErrorMessage = string;

type Store = {
    loading: boolean;
    error?: string;
    userData: Array<UserData>;
    repoData: Array<RepoData>;
    dropdown: DropdownState,
    search: string;
};

export {
    UserData,
    RepoData,
    EndpointQuery,
    ErrorMessage,
}

export default Store;


import { EndpointQuery } from "./actions";

export type DropdownState = 'repositories' | 'users';

export type SearchProps = IMapDispatchers & IMapState;

export interface IMapDispatchers {
    queryGithub: (T : EndpointQuery) => void;
    cleanUserResults: () => void;
    setSearch: (T: string) => void;
};

export interface IMapState {
    search: string,
};

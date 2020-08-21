import React, {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import { useHistory, useLocation } from 'react-router-dom';
import _ from "lodash";
import Input from "../../components/Input";
import { DropdownState } from "../../types/Search";
import { HtmlInputChangeProps } from "../../types/HtmlInput";
import { useCleanUserResults, useQueryGithub, useSetSearch } from "../../store/dispatchers/repositories";
import { useSearch } from "../../store/selectors/search";

const SearchContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin: auto;
  padding: 15px;
  
  @media only screen and (max-width: 768px) {
    margin: 15px;
    padding: 0;
    width: 100%;
  }
`;

const delayer = (func : Dispatch<SetStateAction<boolean>>) => (
    _.debounce(() => func(false),
    1500,
    {leading:false, trailing:true}
));

const Search : React.FC = () => {
    /* Hooks */
    const { search } = useSearch();
    const history = useHistory();
    const location = useLocation();
    const [searchState, setSearchState] = useState(search);
    const [dropdown, setDropdown] = useState(location.pathname.substr(1));
    const [isTyping, setIsTyping] = useState(false);
    const cleanUserResults = useCleanUserResults();
    const queryGithub = useQueryGithub();
    const setSearch = useSetSearch();

    /* Functions */
    const onChangeText = useCallback(({
        target: { value }} : HtmlInputChangeProps<string>
    ) => {
        setSearch(value);
        setSearchState(value);
        setIsTyping(true);
    }, [setSearch, setIsTyping]);

    const onChangeDropdown = useCallback(({
        target: { value }} : HtmlInputChangeProps<DropdownState>
    ) => {
        setSearch(searchState);
        setDropdown(value);
        history.push(`/${value}`);
    }, [history, searchState, setSearch]);

    /* Effects */
    useEffect(() => {
        delayer(setIsTyping)();
        if (searchState.length >= 3 && !isTyping) {
            if(dropdown !== ""){
                queryGithub({ endpoint: dropdown , query: searchState });
            }
        } else {
            if (searchState!=='') {
                cleanUserResults();
            }
        }
    }, [cleanUserResults, dropdown, isTyping, queryGithub, searchState]);

    useEffect(() => {
        if(dropdown === ""){
            setDropdown(`users`);
            history.push(`/users`);
            return;
        }
    }, []);

    return (
        <SearchContainer>
            <Input type="text" value={searchState} onChange={onChangeText} id="search-input"/>
            <Input type="select" value={dropdown} onChange={onChangeDropdown} id="select-dropdown"/>
        </SearchContainer>
    );
}

export default Search;

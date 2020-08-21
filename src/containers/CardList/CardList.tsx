import React from "react";
import styled from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "../Users";
import Repositories from "../Repositories";
import Loader from "../../components/Loader";
import { UserInfo } from "./styled";
import { useLoading, useError } from "../../store/selectors/cardList";

const CardListContainer : React.FC = styled.div`
  padding: 15px;
`;

const CardList : React.FC = () => {
    const { loading } = useLoading();
    const { error } = useError(); 
    if (loading) {
        return (<Loader />);
    }
    if (error) {
        return (<UserInfo>There is an error: {error}</UserInfo>);
    }
    return (
        <CardListContainer>
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/repositories" component={Repositories} />
                <Redirect to="/users" />
            </Switch>
        </CardListContainer>
    );
}

export default CardList;

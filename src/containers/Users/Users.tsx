import React from "react";
import UserCard from "../../components/UserCard";
import { UserData } from "../../types/reducer";
import CardsContainer, {UserInfo} from "../CardList/styled";

type UsersProps = {
    userData: Array<UserData>;
};

const Users = ({ userData } : UsersProps) => (
    <CardsContainer>
        {userData && userData.map(({ login, avatar_url, html_url, id, score }) => (
            <UserCard
                login={login}
                avatar_url={avatar_url}
                html_url={html_url}
                id={id}
                score={score}
                key={login}
            />
        ))}
        {userData.length === 0 && (
            <UserInfo>No data to show</UserInfo>
        )}
    </CardsContainer>
);

export default Users;

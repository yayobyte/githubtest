import React from "react";
import RepoCard from "../../components/RepoCard";
import CardsContainer, { UserInfo } from "../CardList/styled";
import { useRepoData } from "../../store/selectors/repositories";


const Repositories = () => {
    const { repoData } = useRepoData();
    return (
    <CardsContainer>
        {repoData && repoData.map(({
            owner, avatar_url, html_url, forks, watchers, id,name,
        }) => (
            <RepoCard
                key={id}
                owner={owner}
                avatar_url={avatar_url}
                html_url={html_url}
                id={id}
                forks={forks}
                name={name}
                watchers={watchers}
            />
        ))}
        {repoData.length === 0 && (
            <UserInfo>No data to show</UserInfo>
        )}
    </CardsContainer>
);
        }
export default Repositories;

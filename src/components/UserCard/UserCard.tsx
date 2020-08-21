import React from "react";
import styled from "styled-components";
import { UserData } from "../../types/reducer";

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  width: 280px;
  height: 100px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  border-radius: 4px; 
  
  img.avatar {
    width: 100px;
    height: 100px;
  }
  
  div.user-info {
    flex-direction: column;
    margin-left: 10px;
    flex-grow: 2;
    
    div.login{
      font-size: 1.1em;
      color: grey;
      margin-bottom: 10px;
      margin-right: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 150px;
      
    }
    
    div.userId {
      font-size: 0.8em;
      color: var(--primary);
    }
    
    div.userScore {
      font-size: 0.9em;
      color: var(--input-border);
    }
  }
  
  @media only screen and (max-width: 480px) {
    max-width: 400px;
    width: 100%;
  }
  
`;

const UserCard : React.FC<UserData> = ({
    login, avatar_url, html_url, id, score,
}) => (
    <UserContainer onClick={()=> window.open(html_url, "_blank")} >
        <img src={avatar_url}  alt="avatar" className="avatar"/>
        <div className="user-info" >
            <div className="login">{login}</div>
            <div className="userId">User Id: <span data-testid="user-id">{id}</span></div>
            <div className="userScore">Score: {score}</div>
        </div>
    </UserContainer>
);

export default UserCard;

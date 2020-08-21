import React from "react";
import styled from "styled-components";
import { RepoData } from "../../types/reducer";

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 280px;
  height: 100px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 0px;
  cursor: pointer;
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
  border-radius: 4px; 
}

  
  div.name{
    font-size: 1.1em;
    color: var(--text);
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  div.user-info {
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    
    img.avatar {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
    
    div.text-container {
      flex-direction: column;
      div.statistics {
        font-size: 0.9em;
        color: var(--primary);
      }
        
      div.repo-id {
        font-size: 0.8em;
        color: var(--input-border);
      }
    }
  }
  
  @media only screen and (max-width: 480px) {
    max-width: 400px;
    width: 100%;
  }
  
`;

const RepoCard : React.FC<RepoData> = ({
    owner, html_url, forks, watchers, id, name,
}) => (
    <RepoContainer onClick={()=> window.open(html_url, "_blank")} >
        <div className="name">{name}</div>
        <div className="user-info" >
            <img src={owner.avatar_url}  alt="avatar" className="avatar"/>
            <div className="text-container">
                <div className="repo-id"><span data-testid="repo-id">{id}</span></div>
                <div className="statistics">Forks: {forks}</div>
                <div className="statistics">Watchers: {watchers}</div>
            </div>
        </div>
    </RepoContainer>
);

export default RepoCard;

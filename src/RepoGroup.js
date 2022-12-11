import React from 'react';
import { CardGroup } from '@douyinfe/semi-ui';
import RepoCard from './RepoCard';
import axios from 'axios';
import EmptyPage from './EmptyPage'
export default function ReposGroup(props) {

    const repoList = props.repoList
    return (
        
        repoList.length == 0?<EmptyPage/>:<CardGroup>
            {
                repoList.map((repo,index) => (
                    <RepoCard 
                        onSubmitRepo={(url) => {props.onSubmitRepo(url)}}
                        url = {repo.link}
                        idx = {index}
                        showing_url = {props.showing_url}
                        key={repo.id} about={repo.about} name={repo.name} link={repo.link}></RepoCard>
                ))
            }
        </CardGroup>
    );
}

// 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
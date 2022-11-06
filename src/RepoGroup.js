import React from 'react';
import { CardGroup } from '@douyinfe/semi-ui';
import RepoCard from './RepoCard';
import axios from 'axios';

export default function ReposGroup(props) {

    const repoList = props.repoList

    return (
        <CardGroup>
            {
                repoList.map((repo) => (
                    <RepoCard key={repo.id} about={repo.about} name={repo.name} link={repo.link}></RepoCard>
                ))
            }
        </CardGroup>
    );
}

// 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
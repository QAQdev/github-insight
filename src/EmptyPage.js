import React from 'react';
import { Empty, Button } from '@douyinfe/semi-ui';
import { IllustrationNoResult,IllustrationNoContent} from '@douyinfe/semi-illustrations';

export default function ErrorPage() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <Empty
                title={'暂时没有仓库'}
                image={<IllustrationNoContent style={{width: 200, height: 200}}/>}
                layout="horizontal"
                style={{width: 500, margin: 'auto', padding: 100,}}
            >
            </Empty>
        </div>
    );
}

import { CardGroup } from '@douyinfe/semi-ui';
import React from 'react'
import Cloud from './Cloud';

export default function Clouds(props)
{
    if(! props.cloud_links)
    {
        return (
            <CardGroup></CardGroup>
        )
    }

    const target_clouds = 
    props.cloud_links
    // [
    //     {
    //         num : 1
    //     },
    //     {
    //         num : 2
    //     }
    // ]

    if(target_clouds.length < 2)
    {
        return (
            <CardGroup></CardGroup>
        )
    }

    var dyna_id = props.id

    return (
        <CardGroup>
            {
                target_clouds.map((i) => (
                    <Cloud num = {i.num} key = { ++ dyna_id } ></Cloud>
                ))
            }
        </CardGroup>
    );
}
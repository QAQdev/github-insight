
import { Card } from '@douyinfe/semi-ui'
import React from 'react'

export default function Cloud(props) 
{
    const cloud_value = props.num
    console.log(cloud_value + " " + props.num)

    return (
        <Card
            style={{ maxWidth: 1000 }}
            shadows='hover'
        >
            <img src={window.back_url + window.get_cloud + cloud_value}
                alt={"云图无法显示" + cloud_value} width={900} height={540}>
            </img>
        </Card>
    )
}

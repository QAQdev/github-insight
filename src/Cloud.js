
import { Card } from '@douyinfe/semi-ui'
import React from 'react'

export default class Cloud extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            is_init : false
        }
    }


    render()
    {
        const cloud_value = this.props.num
        const url = this.props.url
        if(this.state.is_init)
        {
            console.log("img reloads" + cloud_value)
            console.log("cloud_url:" + url)
            return (
                <Card
                    style={{ maxWidth: 900 }}
                    shadows='hover'
                >
                    <img src={window.back_url + window.get_cloud + cloud_value+'/'+url}
                        alt={"云图无法显示" + cloud_value} width={800} height={540}>
                    </img>
                </Card>
            )
        }
        else 
        {
            this.setState
            (
                {is_init : true}
            )

            return (
                <div>loading</div>
            )
        }
    }    
}

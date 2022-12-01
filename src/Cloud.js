
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
        if(this.state.is_init)
        {
            console.log("img reloads" + cloud_value)
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

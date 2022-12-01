
import { CardGroup } from '@douyinfe/semi-ui';
import React from 'react'
import Allin from './Allin';
import Cloud from './Cloud';

export default class Clouds extends React.Component
{
    // cloud_links
    // repo_names
    constructor(props)
    {
        super(props)
        this.state =
        {
            target_urls : props.cloud_links,
            target_names : props.repo_names
        }
    }

    get_allins()
    {
        if(this.state.target_names == null)
        {
            return (<div>NULL</div>)
        }

        if(this.state.target_urls.length < 2)
        {
            return
        }
        else 
        {
            var array = []
            for(var i=0; i<2; i++)
            {
                console.log("clouds url" + this.state.target_urls[i].num)
                array.push
                (
                    <Allin 
                        url = {this.state.target_urls[i].num}
                        repo_name = {this.state.target_names[i]}
                        key = {i}
                    ></Allin>
                )
            }
            return array
        }
    }

    render()
    {
        return ( 
            <CardGroup>
                {
                    this.get_allins()
                }
            </CardGroup>
        );
    }
    
    // if(! props.cloud_links)
    // {
    //     return (
    //         <CardGroup></CardGroup>
    //     )
    // }

    // const target_clouds = 
    // props.cloud_links

    
    // // [
    // //     {
    // //         num : 1
    // //     },
    // //     {
    // //         num : 2
    // //     }
    // // ]

    // if(target_clouds.length < 2)
    // {
    //     return (
    //         <CardGroup></CardGroup>
    //     )
    // }

    // var dyna_id = props.id

    // return (
    //     <CardGroup>
    //         {
    //             this.get_allins()
    //         }
    //     </CardGroup>
    // );
}
import { Button } from "@douyinfe/semi-ui";
import React from "react";
import CallLineGraph from "./CallLineGraph";
import CallRoundGraph from "./CallRoundGraph";
import Cloud from "./Cloud";


export default class Allin extends React.Component 
{
    // url
    // repo_name
    constructor(props)
    {
        super(props);
        var url = "https://github.com/pytorch/pytorch"
        var repo_name = "default name (all in)"
        if(props.url)
        {
            url = props.url
        }
        if(props.repo_name)
        {
            repo_name = props.repo_name
        }
        this.state = 
        {
            url : url,
            repo_name : repo_name
        }
    }

    render()
    {
        return (
            <div>
                <div>{this.state.repo_name}</div>
                <Button>update repo</Button>
                <CallLineGraph 
                    url = {this.state.url}
                    repo_name = {this.state.repo_name}
                ></CallLineGraph>
                <CallRoundGraph
                    url = {this.state.url}
                ></CallRoundGraph>
                <CallRoundGraph
                    url = {this.state.url}
                    is_core = {true}
                ></CallRoundGraph>
                <Cloud
                    num = {window.repo_map[this.state.url]}
                ></Cloud>
            </div>
        )
    }
}
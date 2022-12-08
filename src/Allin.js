import { Button } from "@douyinfe/semi-ui";
import axios from "axios";
import React from "react";
import CallBarChart from "./CallBarChart";
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
            repo_name : repo_name,
            is_init : false,
            is_waiting : false
        }
    }

    update_database()
    {
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };
        var pack = 
        {
            url : this.state.url,
        }
        this.setState 
        (
            {is_waiting : true}
        )
        axios.post
        (
            window.back_url + window.get_update,
            JSON.stringify(pack),
            {headers : headerJSON}
        ).then
        (
            (res) => 
            {
                this.setState
                (
                    {
                        is_init : false,
                        is_waiting : false
                    }
                )
            }
        )
    }

    render()
    {
        if(this.state.is_init)
        {
            console.log("All in url: " + this.state.url)
            var msg = ""
            if(this.state.is_waiting)
            {
                msg = "waiting for the server to update..."
            }
            return (
                <div>
                    <div>{this.state.repo_name}</div>
                    <Button
                        onClick={() => {this.update_database()}}
                    >update repo</Button>
                    <div>{msg}</div>
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
                    <CallBarChart
                        url = {this.state.url}
                    ></CallBarChart>
                    <Cloud
                        url = {this.state.url}
                        num = {window.repo_map[this.state.url]}
                    ></Cloud>
                </div>
            )
        }
        else 
        {
            if(this.state.is_waiting)
            {
                return (
                    <div>waiting</div>
                )
            }
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
import axios from "axios";
import React from "react";
import LineGraph from "./LineGraph";
import { Spin } from "@douyinfe/semi-ui";
export default class CallLineGraph extends React.Component 
{
    // repo_name
    // url
    constructor(props)
    {
        super(props);
        
        this.state = 
        {
            content : {timeline : [] , ydata : []}
        }
    }

    get_from_server()
    {
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };
        let temp_url = "https://github.com/pytorch/pytorch";
        if(this.props.url)
        {
            temp_url = this.props.url
        }
        var pack = 
        {
            url : temp_url,
        }

        var content = {}
        console.log("get from server");
        axios.post
        (
            window.back_url + window.get_commit_by_time,
            JSON.stringify(pack),
            {headers : headerJSON}
        )
        .then
        (
            (res) =>
            {
                content = res.data.content;
                this.setState
                (
                    {
                        is_inited : true,
                        content : content
                    }
                )
            }
        ).catch
        (
            (e) => 
            {
                console.log(e)
            }
        )
    }

    render()
    {
        if(this.state.is_inited)
        {
            console.log("content")
            console.log(this.state.content)
            return (
                <LineGraph 
                    timeline = {this.state.content.timeline}
                    ydata = {this.state.content.ydata}
                    repo_name = {this.props.repo_name}
                ></LineGraph>
            )
        }
        else  
        {
            this.get_from_server();
            return (
                <Spin size="large" />
            )
        }
    }

}
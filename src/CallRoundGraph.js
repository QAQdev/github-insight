import axios from "axios";
import React from "react";
import RoundGraph from "./RoundGraph";

export default class CallRoundGraph extends React.Component 
{
    // is_core
    // url
    constructor(props)
    {
        super(props);
        var is_core = false;
        if(props.is_core)
        {
            is_core = true;
        }
        this.state = 
        {
            is_inited : false,
            is_core : is_core,
            content : []
        }
    }

    get_from_server()
    {
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };
        let temp_url = "https://github.com/pytorch/pytorch";
        if(this.props.url)  //否则contributors全是pytorch的
        {
            temp_url = this.props.url
        }
        var pack = 
        {
            url : temp_url,
        }

        var content = {}
        console.log("get from server");
        var url = window.back_url + window.get_contributors_all;
        if(this.state.is_core)
        {
            url = window.back_url + window.get_contributors_core;
        }
        axios.post
        (
            url,
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
            var text = "contributors";
            if(this.state.is_core)
            {
                text = "core contributors";
            }
            return (
                <RoundGraph
                    content = {this.state.content}
                    text = {text}
                    maxWidth = {this.props.maxWidth}
                    showlegend = {this.props.showlegend}
                ></RoundGraph>
            )
        }
        else  
        {
            this.get_from_server();
            return (
                <div>loading</div>
            )
        }
    }

}
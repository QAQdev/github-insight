import axios from "axios";
import React from "react";
import RoundGraph from "./RoundGraph";
import { Spin } from "@douyinfe/semi-ui";
export default class CallRoundGraph extends React.Component 
{
    // is_core
    // url
    constructor(props)
    {
        super(props);
        var is_core = false;
        var is_company = false;
        var company = "No";
        if(props.is_core)
        {
            is_core = true;
        }
        if(props.is_company)
        {
            is_company = true;
            company = props.text
        }
        this.state = 
        {
            is_inited : false,
            is_company : is_company,
            company : company,
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
        var url = window.back_url + window.get_contributors_all;
        if(this.state.is_core)
        {
            url = window.back_url + window.get_contributors_core;
        }
        if(this.state.is_company&&this.state.company == "Stargazer")
        {
            url = window.back_url + window.get_company_stargazers;
        }
        if(this.state.is_company&&this.state.company == "Committer")
        {
            url = window.back_url + window.get_company_commits;
        }
        if(this.state.is_company&&this.state.company == "Issue")
        {
            url = window.back_url + window.get_company_issues;
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
                // console.log(e)
            }
        )
    }

    render()
    {
        if(this.state.is_inited)
        {
            var text = "contributors";
            if(this.state.is_core)
            {
                text = "core contributors";
            }
            if(this.props.text == "Stargazer"||this.props.text == "Committer"||this.props.text == "Issue")
            {
                this.state.is_company = true;
            }
            return (
                <RoundGraph
                    title = {this.props.title}
                    is_company = {this.state.is_company}
                    content = {this.state.content}
                    text = {this.props.text}
                    maxWidth = {this.props.maxWidth}
                    showlegend = {this.props.showlegend}
                ></RoundGraph>
            )
        }
        else  
        {
            this.get_from_server();
            return (
                <Spin size="large"></Spin>
            )
        }
    }

}
import axios from "axios";
import React from "react";
import BarChart from "./BarChart";

export default class CallBarChart extends React.Component 
{
    // url
    constructor(props)
    {
        super(props);
        var url = "https://github.com/pytorch/pytorch";
        if(props.url)
        {
            url = props.url
        }
        this.state = 
        {
            is_inited : false,
            content : {timeline : [] , ydata : []},
            url : url
        }
    }

    get_from_server()
    {
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };
        var pack = 
        {
            url : this.state.url,
        }

        var content = {}
        console.log("get from server");
        console.log(pack)
        axios.post
        (
            window.back_url + window.get_company_commits,
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
            console.log("call bar content")
            console.log(this.state.content)
            return (
                <BarChart
                    contributer = {this.state.content.contributer}
                    data = {this.state.content.data}
                ></BarChart>
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
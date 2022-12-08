import React from "react";
import Clouds from "./Clouds";
import CustomRenderDragDemo from "./CustomRenderDragDemo";


export default class CompareShowing extends React.Component
{
    // urls
    // repo_names
    constructor(props)
    {
        super(props);
        var urls = 
        [
            "https://github.com/pytorch/pytorch",
            "https://github.com/pytorch/pytorch1",
            "https://github.com/pytorch/pytorch2",
            "https://github.com/pytorch/pytorch3",
            "https://github.com/pytorch/pytorch4",
            "https://github.com/pytorch/pytorch5",
            "https://github.com/pytorch/pytorch6",
            "https://github.com/pytorch/pytorch7",
            "https://github.com/pytorch/pytorch8",
            "https://github.com/pytorch/pytorch9",
            "https://github.com/pytorch/pytorch10"
        ]
        var repo_names =
        [
            "pytorch1",
            "pytorch2",
            "pytorch3",
            "pytorch4",
            "pytorch5",
            "pytorch6",
            "pytorch7",
            "pytorch8",
            "pytorch9",
            "pytorch10",
            "pytorch11"
        ]
        if(this.props.urls)
        {
            urls = this.props.urls
        }
        if(this.props.repo_names)
        {
            repo_names = this.props.repo_names
        }
        this.state = 
        {
            urls : urls,
            repo_names : repo_names,
            links : [],
            names : [],
            is_init : false
        }
    }

    handelSubmit(new_links)
    {
        console.log("handelsubmit")
        console.log(new_links)
        var new_state_links;
        var new_state_names;
        if(new_links.length >= 2)
        {
            new_state_links = [ {num : this.state.urls[new_links[0]]} , 
                                {num : this.state.urls[new_links[1]]}];
            new_state_names = [ this.state.repo_names[new_links[0]],
                                this.state.repo_names[new_links[1]]];
        }
        else 
        {
            new_state_links = [];
            new_state_names = [];
        }
        
        this.setState
        (
            {
                links : new_state_links,
                names : new_state_names,
                is_init : false
            }
        )
        console.log("handel submit" + new_links);
    }

    render()
    {
        var clouds_components;
        if(this.state.is_init)
        {
            clouds_components = 
            (
                <Clouds cloud_links = {this.state.links}
                    repo_names = {this.state.names}
                />
            )
        }
        else 
        {
            this.setState
            (
                {is_init : true}
            )

            clouds_components = 
            (
                <div>loading</div>
            )
        }
        
        return (
            <div style={{minHeight:560,margin:50}}>
                <CustomRenderDragDemo 
                    repo_names = {this.state.repo_names}
                    onChange = {this.handelSubmit.bind(this)}
                />
                {clouds_components}
            </div>
        )
    }
    
}
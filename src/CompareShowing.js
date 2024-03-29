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
        var urls = []
        var repo_names = []
        var stars = []
        if(this.props.urls)
        {
            urls = this.props.urls
        }
        if(this.props.repo_names)
        {
            repo_names = this.props.repo_names
        }
        if(this.props.starlist)
        {
            stars = this.props.starlist
        }
        this.state = 
        {
            starslist : stars,
            urls : urls,
            repo_names : repo_names,
            links : [],
            names : [],
            stars : [],
            is_init : false
        }
    }

    handelSubmit(new_links)
    {
        // console.log("handelsubmit")
        // console.log(new_links)
        var new_state_links;
        var new_state_names;
        var new_state_stars;
        if(new_links.length >= 2)
        {
            new_state_links = [ {num : this.state.urls[new_links[0]]} , 
                                {num : this.state.urls[new_links[1]]}];
            new_state_names = [ this.state.repo_names[new_links[0]],
                                this.state.repo_names[new_links[1]]];
            new_state_stars = [ this.state.starslist[new_links[0]],
                                this.state.starslist[new_links[1]]];
        }
        else 
        {
            new_state_links = [];
            new_state_names = [];
            new_state_stars = [];
        }
        
        this.setState
        (
            {
                links : new_state_links,
                names : new_state_names,
                stars : new_state_stars,
                is_init : false
            }
        )
        // console.log("handel submit" + new_links);
    }

    render()
    {
        var clouds_components;
        if(this.state.is_init)
        {
            clouds_components = 
            (
                
                <Clouds 
                    stars = {this.state.stars}
                    cloud_links = {this.state.links}
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
import React from "react";
import Clouds from "./Clouds";
import CustomRenderDragDemo from "./CustomRenderDragDemo";


export default class CompareShowing extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            links : 
            []
        }
    }

    handelSubmit(new_links)
    {
        var new_state_links;
        if(new_links.length >= 2)
        {
            new_state_links = [ {num : new_links[0]} , {num : new_links[1]}];
        }
        else 
        {
            new_state_links = [];
        }
        this.state.links = new_state_links;
        
        this.setState
        (
            {
                links : this.state.links
            }
        )
        console.log("handel submit" + new_links);
    }

    render()
    {
        return (
            <div>
                <CustomRenderDragDemo onChange = {this.handelSubmit.bind(this)}/>
                <Clouds cloud_links = {this.state.links}/>
            </div>
        )
    }
    
}
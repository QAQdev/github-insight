import React, { useCallback } from "react";
import CardOfName from "./CardOfName";
import CustomerLogin from "./CustomerLogin";


export default class CustomerPage extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            user_name : "",
            user_code : null,
            user_id   : null,
            is_logged : false,
            content : null
        }
    }

    handelLogin(data) {
        if (data) {
            this.state.content = data;
            this.setState
            (
                {
                    content: this.state.content,
                    is_logged: true
                }
                // // console.log("aaa", co)
            )
        }
    }

    getCustomerPage()
    {
        if(!this.state.is_logged)
        {
            return (
                <CustomerLogin onChange = {this.handelLogin.bind(this)}></CustomerLogin>
            )
        }
        else 
        {
            return (
                <CardOfName content = {this.state.content}></CardOfName>
            )
        }
    }

    render()
    {
        return (
            this.getCustomerPage()
        )
    }
}
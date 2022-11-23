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
            is_logged : false
        }
    }

    handelLogin(data)
    {
        if(data)
        {
            this.state.user_name = data.user_name;
            this.state.user_code = data.user_code;
            this.setState
            (
                {
                    user_name : this.state.user_name,
                    user_code : this.state.user_code,
                    is_logged : true
                }
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
                <CardOfName user_name = {this.state.user_name}></CardOfName>
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
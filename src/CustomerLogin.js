import React, { useCallback } from 'react';
import { Card, Form, Space } from '@douyinfe/semi-ui';
import { Button } from '@douyinfe/semi-ui/lib/es/skeleton/item';
import { Input } from '@douyinfe/semi-ui';
import axios from "axios";

export default class CustomerLogin extends React.Component
{
    constructor() 
    {
        super();
        this.state = 
        {
            user_name : "",
            user_code : null
        }
    }

    changeUserName(e)
    {
        this.setState 
        (
            {user_name : e}
        )
    }

    changeUserCode(e)
    {
        this.setState
        (
            {user_code : e}
        )
    }

    login() {
        const headerJSON =
            {
                "Content-Type": "application/json"
            };
        var data = {};
        var url = window.back_url + window.get_user + this.state.user_name + "/";
        var pack = {}
        axios.get
        (
            url,
            pack,
            headerJSON
        )
            .then
            (
                (res) => {
                    data = res.data;
                    // console.log(data);
                    if (this.props.onChange) {
                        this.props.onChange(data)
                    }
                }
            ).catch((e) => {
                console.log(e);
            }
        )
    }

    render() {
        return (
            <Card
                style={{ maxWidth: 500, textAlign: "center" , justifyContent : "center" }}
                shadows='hover'
            >
                <div>
                    
                    <div>
                        <h4>
                            用户名
                        </h4>
                        <Input mode="" defaultValue="" onChange={(e) => {this.changeUserName(e)}}></Input>
                    </div>
                    
                    {/*<div>*/}
                    {/*    <h4>*/}
                    {/*        密码*/}
                    {/*    </h4>*/}
                    {/*    <Input mode="password" defaultValue="" onChange={(e) => {this.changeUserCode(e)}}></Input>*/}
                    {/*</div>*/}

                    <div>
                        <Space></Space>
                    </div>

                    <Space style={{textAlign: "center" , justifyContent : "center"} }>
                        <button style={{textAlign: "center" , justifyContent : "center"}} theme="borderless" onClick = {this.login.bind(this)} >Login</button>
                    </Space>
                </div>
            </Card>
        );
    }
}
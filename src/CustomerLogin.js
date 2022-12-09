import React, { useCallback } from 'react';
import { Card, Form, Space } from '@douyinfe/semi-ui';
import {Button} from '@douyinfe/semi-ui';
import { Input } from '@douyinfe/semi-ui';
import {Col,Row} from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';
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
                    // // console.log(data);
                    if (this.props.onChange) {
                        this.props.onChange(data)
                    }
                }
            ).catch((e) => {
                // console.log(e);
            }
        )
    }

    render() {
        return (
            <div style={{height:470,margin:100}}>
               <Row>
                    <Col offset={10}> <div>
                    <img height="150" width="150" src={require('./github.jfif')} alt="" />
                </div></Col>
               </Row>
               <br></br>
                <Row >
                    <Col  span={10} offset={6}><div><Input placeholder='Input the Github User name' mode="" defaultValue="" onChange={(e) => {this.changeUserName(e)}}></Input ></div></Col>
                    <Col offset={16}><div><Button theme='light' type='primary' style={{ marginRight: 8 ,}} onClick = {this.login.bind(this)}>Seach</Button></div></Col>
                </Row>
            </div>
                
        );
    }
}
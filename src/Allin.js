import { Button, CardGroup } from "@douyinfe/semi-ui";
import axios from "axios";
import React from "react";
import CallBarChart from "./CallBarChart";
import CallLineGraph from "./CallLineGraph";
import Cloud from "./Cloud";
import { Card } from '@douyinfe/semi-ui';
import RoundGraph from './RoundGraph';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import { IconUserGroup, IconLink } from '@douyinfe/semi-icons';
import { Space } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import CallRoundGraph from "./CallRoundGraph";
import {Col,Row} from "@douyinfe/semi-ui";
export default class Allin extends React.Component 
{
    // url
    // repo_name
    constructor(props)
    {
        super(props);
        var url = "https://github.com/pytorch/pytorch"
        var repo_name = "default name (all in)"
        if(props.url)
        {
            url = props.url
        }
        if(props.repo_name)
        {
            repo_name = props.repo_name
        }
        this.state = 
        {
            url : url,
            repo_name : repo_name,
            is_init : false,
            is_waiting : false
        }
    }

    update_database()
    {
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };
        var pack = 
        {
            url : this.state.url,
        }
        this.setState 
        (
            {is_waiting : true}
        )
        axios.post
        (
            window.back_url + window.get_update,
            JSON.stringify(pack),
            {headers : headerJSON}
        ).then
        (
            (res) => 
            {
                this.setState
                (
                    {
                        is_init : false,
                        is_waiting : false
                    }
                )
            }
        )
    }

    render()
    {
        if(this.state.is_init)
        {
            console.log("All in url: " + this.state.url)
            var msg = "update repo"
            if(this.state.is_waiting)
            {
                msg = "waiting for the server to update..."
            }
            const { Title, Text, Paragraph } = Typography;
            return (
                <div>
                    {/* <CallLineGraph 
                        url = {this.state.url}
                        repo_name = {this.state.repo_name}
                    ></CallLineGraph> */}
                    {/* <Information 
                        url = {this.state.url}
                        repo_name = {this.state.repo_name}
                        num = {window.repo_map[this.state.url]}
                    /> */}
                    <Card
                        style={{ maxWidth: 1200 }}
                        shadows='hover'
                    >
                        <Title style={{ margin: '6px 0' }}>{this.state.repo_name}</Title>
                        <br></br>
                        <Space tab="loose" style={{ margin: '6px 0' }}>
                            <Text icon={<IconUserGroup />}>1.7k follower</Text>
                            <Text icon={<IconLink />} underline><a href={this.state.url}>{this.state.url}</a></Text>
                        </Space>
                        <br></br>
                        <Title heading={5}>About</Title>
                        <Paragraph>
                        {this.props.about}
                        </Paragraph>
                        <br></br>
                        <Button loading = {msg=="update repo"?false:true}onClick={() => {this.update_database()}}>{msg}</Button>
                        <Divider margin='24px' />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }}>Commits</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        <CallLineGraph 
                                    url = {this.state.url}
                                    repo_name = {this.state.repo_name}
                        ></CallLineGraph>
                        <br />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Contribution</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        {/* <BarChart /> */}
                        <CallBarChart 
                            repo_name = {this.state.repo_name}
                            url={this.state.url}>
                        </CallBarChart>
                        <CallRoundGraph
                            url = {this.state.url}
                            is_core = {true}
                            maxWidth = {1100}
                            showlegend = {true}
                        ></CallRoundGraph>
                        <br />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Company</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        {/* <CardGroup type='grid'>
                            <RoundGraph type={"Stargazer"} />
                            <RoundGraph type={"Committer"} />
                            <RoundGraph type={"Issue"} />
                        </CardGroup> */}
                        <Row>
                            <Col span={8} order={3}><div><RoundGraph text={"Stargazer"}/></div></Col>
                            <Col span={8} order={3}><div><RoundGraph text={"Committer"} /></div></Col>
                            <Col span={8} order={3}><div><RoundGraph text={"Language"} /></div></Col>
                        </Row>
                        <br />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Issue</Title>
                        <Text>What are the key words in the Issue section recently?</Text>
                        <Divider margin='12px' />
                        {/* <BarChart /> */}
                        <Cloud
                            url = {this.state.url}
                            num = {window.repo_map[this.state.url]}
                        ></Cloud>
                        <br />
                    </Card>
                    {/* <CallRoundGraph
                        url = {this.state.url}
                    ></CallRoundGraph>
                    <CallRoundGraph
                        url = {this.state.url}
                        is_core = {true}
                    ></CallRoundGraph> */}
                    {/* <CallBarChart
                        url = {this.state.url}
                    ></CallBarChart> */}
                    {/* <Cloud
                        url = {this.state.url}
                        num = {window.repo_map[this.state.url]}
                    ></Cloud> */}
                </div>
            )
        }
        else 
        {
            if(this.state.is_waiting)
            {
                return (
                    <div>waiting</div>
                )
            }
            this.setState 
            (
                {is_init : true}
            )
            return (
                <div>loading</div>
            )
        }
        
    }
}
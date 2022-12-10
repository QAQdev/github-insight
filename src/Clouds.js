
import { CardGroup } from '@douyinfe/semi-ui';
import React from 'react'
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
import {Col,Row} from '@douyinfe/semi-ui';
export default class Clouds extends React.Component
{
    // cloud_links
    // repo_names
    constructor(props)
    {
        super(props)
        this.state =
        {
            target_stars : props.stars,
            target_urls : props.cloud_links,
            target_names : props.repo_names
        }
    }

    get_allins()
    {
        if(this.state.target_names == null)
        {
            return (<div>NULL</div>)
        }

        if(this.state.target_urls.length < 2)
        {
            return
        }
        else 
        {
            // for(var i=0; i<2; i++)
            // {
            //     // console.log("clouds url" + this.state.target_urls[i].num)
            //     array.push
            //     (
            //         <Allin 
            //             url = {this.state.target_urls[i].num}
            //             repo_name = {this.state.target_names[i]}
            //             key = {i}
            //         ></Allin>
            //     )
            // }
            const { Title,Text,Paragraph } = Typography;
            return (
                <div>
                    <Card
                        style={{ maxWidth: 1000 }}
                        shadows='hover'
                    >
                        <Title style={{ margin: '24px 0' }}>{this.state.target_names[0].toUpperCase()} <text style={{"color":"red"}}>vs</text> {this.state.target_names[1].toUpperCase()}</Title>
                        <Text icon={<IconUserGroup />}>{this.state.target_stars[0]} follower <b>vs</b> {this.state.target_stars[1]} follower</Text>
                        <br></br>
                        <Paragraph>
                           Here we compare the selected 2 repos
                        </Paragraph>
                        {/* <Button loading = {msg=="update repo"?false:true}onClick={() => {this.update_database()}}>{msg}</Button> */}
                        <Divider margin='24px' />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }}>Commits</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        <CallLineGraph 
                                    url = {this.state.target_urls[0].num}
                                    repo_name = {this.state.target_names[0]}
                        ></CallLineGraph>
                        <CallLineGraph 
                                    url = {this.state.target_urls[1].num}
                                    repo_name = {this.state.target_names[1]}
                        ></CallLineGraph>
                        <br />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Contribution</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        {/* <BarChart /> */}
                        <CallBarChart 
                            repo_name={this.state.target_names[0]}
                            url={this.state.target_urls[0].num}>
                        </CallBarChart>
                        <CallBarChart 
                            repo_name={this.state.target_names[1]}
                            url={this.state.target_urls[1].num}>
                        </CallBarChart>
                        <br />
                        <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Company</Title>
                        <Text>Contributions to master, excluding merge commits and bot accounts</Text>
                        <Divider margin='12px' />
                        <Tabs type="button">
                            <TabPane tab="Stargazer" itemKey="1">
                                <Row>
                                    <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[0].num}
                                        text={"Stargazer"}
                                        title={this.state.target_names[0]}/>
                                    </div></Col>
                                    <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[1].num}
                                        text={"Stargazer"}
                                        title={this.state.target_names[1]}/>
                                        </div></Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="Committer" itemKey="2">
                                <Row>
                                    <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[0].num}
                                        text={"Committer"}
                                        title={this.state.target_names[0]}/>
                                    </div></Col>
                                    <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[1].num}
                                        text={"Committer"}
                                        title={this.state.target_names[1]}/>
                                    </div></Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="Issue" itemKey="3">
                                <Row>
                                <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[0].num}
                                        text={"Issue"}
                                        title={this.state.target_names[0]}/>
                                    </div></Col>
                                    <Col span={8} order={3}><div>
                                    <CallRoundGraph 
                                        is_company = {true}
                                        url = {this.state.target_urls[1].num}
                                        text={"Issue"}
                                        title={this.state.target_names[1]}/>
                                    </div></Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                        <br />
                    </Card>
                </div>
            )
        }
    }

    render()
    {
        return ( 
            this.get_allins()
        );
    }
    
    // if(! props.cloud_links)
    // {
    //     return (
    //         <CardGroup></CardGroup>
    //     )
    // }

    // const target_clouds = 
    // props.cloud_links

    
    // // [
    // //     {
    // //         num : 1
    // //     },
    // //     {
    // //         num : 2
    // //     }
    // // ]

    // if(target_clouds.length < 2)
    // {
    //     return (
    //         <CardGroup></CardGroup>
    //     )
    // }

    // var dyna_id = props.id

    // return (
    //     <CardGroup>
    //         {
    //             this.get_allins()
    //         }
    //     </CardGroup>
    // );
}
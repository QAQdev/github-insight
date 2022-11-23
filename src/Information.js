import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';
import Graph from './LineGraph';
import DoubleGraph from './DoublelineGraph'
import RoundGraph from './RoundGraph';
import BarChart from './BarChart'
import { Avatar } from '@douyinfe/semi-ui/lib/es/skeleton/item';
import { Typography } from '@douyinfe/semi-ui';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import { IconUserGroup, IconLink } from '@douyinfe/semi-icons';
import { Space } from '@douyinfe/semi-ui';
export default function Information() {
    const { Title, Text, Paragraph } = Typography;
    return (
        <Card
            style={{ maxWidth: 1000 }}
            shadows='hover'
        >
            <Title style={{ margin: '6px 0' }}>
                pytorch/pytorch
            </Title>
            <Space tab="loose" style={{ margin: '6px 0' }}>
                <Text icon={<IconUserGroup />}>1.7k follower</Text>
                <Text icon={<IconLink />} underline><a href="https://pytorch.org">https://pytorch.org</a></Text>
            </Space>
            <br></br>
            <Title heading={5}>About</Title>
            <Paragraph>
                About Tensors and Dynamic neural networks in Python with strong GPU acceleration
            </Paragraph>
            <Divider margin='24px' />
            <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }}>Commits</Title>
            <Text>Contributions to master, excluding merge commits and bot accounts</Text>
            <Divider margin='12px' />
            <Graph />
            <br />
            <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Contribution</Title>
            <Text>Contributions to master, excluding merge commits and bot accounts</Text>
            <Divider margin='12px' />
            <BarChart />
            <br />
            <Title heading={3} style={{ margin: '8px 0', color: 'rgba(var(--semi-violet-5),1)' }} >Company</Title>
            <Text>Contributions to master, excluding merge commits and bot accounts</Text>
            <Divider margin='12px' />
            <Tabs type="button">
                <TabPane tab="Stargazer" itemKey="1">
                    <RoundGraph type={"Stargazer"} />
                </TabPane>
                <TabPane tab="Committer" itemKey="2">
                    <RoundGraph type={"Committer"} />
                </TabPane>
                <TabPane tab="Issue" itemKey="3">
                    <RoundGraph type={"Issue"} />
                </TabPane>
            </Tabs>
            <br />
        </Card>
    )
}

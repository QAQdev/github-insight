import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';


export default function BarChart(props) 
{
  // axios获取后端数据
    const [data, setData] = useState(props.data)
    var repo_name = props.repo_name
    const options = {
    title: {
        left:'center',
        text: repo_name,
        subtext: 'Currently'
    },
    dataset: {
      dimensions: ['name', 'value'],
      source: data

    },
    xAxis: {
        type:'category', 
        axisLabel: { interval: 0, rotate: 40 },
    },
    yAxis: {
        type:'value',
        axisLine: {
        show: false
        },
        axisTick: {
        show: true
        },
        axisLabel: {
        color: '#999'
        }
    },
    dataZoom: [
        {
        type: 'inside'
        }
    ],

    grid: {
        left: '2%',
        right: '4%',
        bottom: '1%',
        top:'25%',
        containLabel: true
    },


    series: [
        {
        type: 'bar',
        itemStyle: {
            color:'#83D9E6'
        },
        label: {
            show: true,
            position: 'top',
            color: '#e4acb1'
          },
        emphasis: {
            itemStyle: {
            color: "#D1F1F6"
            }
        },
        }
    ]
    };
  return (
    <Card
      style={{ maxWidth: 1100 }}
      shadows='hover'
    >
      <ReactECharts option={options} />
    </Card>
  )
};
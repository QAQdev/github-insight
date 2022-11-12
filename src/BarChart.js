import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';


export default function Graph() {
  // axios获取后端数据
    const [data, setData] = useState({
        contributer: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        data: [820, 932, 901, 934, 1290, 1330, 1320]
    })
    const options = {
    title: {
        left:'center',
        text: 'Company',
        subtext: 'For Commiter/Stargazer/Issue'
    },


    xAxis: {
        type:'category',
        data: data.contributer
    },
    yAxis: {
        type:'value',
        axisLine: {
        show: false
        },
        axisTick: {
        show: false
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
            position: 'top'
          },
        emphasis: {
            itemStyle: {
            color: "#D1F1F6"
            }
        },
        data: data.data
        }
    ]
    };
  return (
    <Card
      style={{ maxWidth: 720 }}
      shadows='hover'
    >
      <ReactECharts option={options} />
    </Card>
  )
};
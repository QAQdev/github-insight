import React from 'react'
import ReactECharts from 'echarts-for-react';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';


export default function DoublelineGraph() {
  // axios获取后端数据
  const [data, setData] = useState({
    timeline: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7'],
    y1data: [820, 932, 901, 934, 1290, 1330, 1320],
    y2data: [375, 374, 958, 273, 1029, 675, 293]
  })
  const options = {
    title: {
      text: 'Repo1 vs Repo2',
      left: 'center'
    },
    grid: {
      bottom: 80
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      data: ['Repo1', 'Repo2'],
      left: 10
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100
      }
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: false },
        // prettier-ignore
        data: data.timeline.map(function (str) {
          return str.replace(' ', '\n');
        })
      }
    ],
    yAxis: [
      {
        name: 'Repo1',
        type: 'value'
      },
      {
        name: 'Repo2',
        nameLocation: 'start',
        alignTicks: true,
        type: 'value',
        inverse: true
      }
    ],
    series: [
      {
        name: 'Repo1',
        type: 'line',
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '2009/9/12\n7:00'
              },
              {
                xAxis: '2009/9/22\n7:00'
              }
            ]
          ]
        },
        // prettier-ignore
        data: data.y1data
      },
      {
        name: 'Repo2',
        type: 'line',
        yAxisIndex: 1,
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '2009/9/10\n7:00'
              },
              {
                xAxis: '2009/9/20\n7:00'
              }
            ]
          ]
        },
        // prettier-ignore
        data: data.y2data
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
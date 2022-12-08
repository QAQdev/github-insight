import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';


export default function LineGraph(props) {
  // axios获取后端数据
  var timeline;
  var ydata;
  if(props.timeline)
  {
    timeline = props.timeline
  }
  else 
  {
    timeline = ['2022/10/1', '2022/10/2', '2022/10/3', 
        '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7',
        '2021/10/1', '2021/10/2', '2021/10/3', 
        '2021/10/4', '2021/10/5', '2021/10/6', '2021/10/7',
        '2022/10/1', '2022/10/2', '2022/10/3', 
        '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7',
        '2021/10/1', '2021/10/2', '2021/10/3', 
        '2021/10/4', '2021/10/5', '2021/10/6', '2021/10/7',
        '2022/10/1', '2022/10/2', '2022/10/3', 
        '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7',
        '2021/10/1', '2021/10/2', '2021/10/3', 
        '2021/10/4', '2021/10/5', '2021/10/6', '2021/10/7'
      ]
  }

  if(props.ydata)
  {
    ydata = props.ydata
  }
  else 
  {
    ydata = [820, 932, 901, 934, 1290, 1330, 1320,
      820, 932, 901, 934, 1290, 1330, 1320,
      820, 932, 901, 934, 1290, 1330, 1320,
      820, 932, 901, 934, 1290, 1330, 1320,
      820, 932, 901, 934, 1290, 1330, 1320,
      820, 932, 901, 934, 1290, 1330, 1320
    ]
  }

  const [data, setData] = useState({
    timeline: timeline,
    ydata: ydata
  })

  var text = props.repo_name;
  const options = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },

    title: {
      left: 'center',
      text: text
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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.timeline
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100
      },
      {
        start: 0,
        end: 100
      }
    ],
    series: [
      {
        name: 'Commit',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data.ydata
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
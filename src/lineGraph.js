import React from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card } from '@douyinfe/semi-ui';
import { useState, useEffect } from 'react';


export default function Graph() {
  // axios获取后端数据
  const [data, setData] = useState({
    timeline: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7'],
    ydata: [820, 932, 901, 934, 1290, 1330, 1320]
  })

  const options = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Commit'
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
      style={{ maxWidth: 720 }}
      shadows='hover'
    >
      <ReactECharts option={options} />
    </Card>
  )
};
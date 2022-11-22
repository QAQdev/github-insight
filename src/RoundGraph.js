import React,{useState}from 'react'
import ReactECharts from 'echarts-for-react';
import { Card } from '@douyinfe/semi-ui';
export default function RoundGraph(props) {
    const [data,setData] = useState( [
        { value: 20, name: 'Python' },
        { value: 15, name: 'C++' },
        { value: 5, name: 'Javascript' },
        { value: 20, name: 'Cython' },
        { value: 40, name: 'Rust' }
        ])
    
    const options =  {
        title: {
          text: props.type,
          subtext: 'Currently',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {d}%" 
        },
        legend: {
          orient: 'vertical',
          top: 'top',
          left: 'left'
        },
        series: [
          {
            name: 'Proportion',
            type: 'pie',
            center: ['50%','50%'],
            radius: '50%',
            data:data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
}

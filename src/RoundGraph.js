import React,{useState}from 'react'
import ReactECharts from 'echarts-for-react';
import { Card } from '@douyinfe/semi-ui';
export default function RoundGraph(props) {

    var content = 
    [
      { value: 20, name: 'Python' },
      { value: 15, name: 'C++' },
      { value: 5, name: 'Javascript' },
      { value: 20, name: 'Cython' },
      { value: 40, name: 'Rust' }
    ]
    var text = 'Languaege'
    if(props.content)
    {
      content = props.content;
    }
    if(props.text)
    {
      text = props.text
    }

    const [data,setData] = useState(content)
    
    const options =  {
        title: {
          text: text,
          subtext: 'Currently',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {d}%" 
        },
        legend: {
          orient: 'horizontal',
          top: 'bottom',
          left: 'center'
        },
        series: [
          {
            name: 'Proportion',
            type: 'pie',
            center: ['50%','45%'],
            radius: '45%',
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
          style={{ maxWidth: 360 }}
          shadows='hover'
        >
        <ReactECharts option={options} />
        </Card>
    )
}

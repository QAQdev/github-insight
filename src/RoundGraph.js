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
      content = props.content.sort();
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
        legend: {
          show:props.showlegend,
          orient: 'vertical',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {d}%" 
        },
        series: [
          {
            name: 'Proportion',
            type: 'pie',
            center: ['50%','60%'],
            radius: '60%',
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
    var maxwidth = 360;
    if(props.maxWidth)maxwidth = props.maxWidth;
    return (
        <Card
          style={{ maxWidth: maxwidth }}
          shadows='hover'
        >
        <ReactECharts option={options} />
        </Card>
    )
}

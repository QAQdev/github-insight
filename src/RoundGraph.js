import React,{useState}from 'react'
import ReactECharts from 'echarts-for-react';
import { Card } from '@douyinfe/semi-ui';
export default function RoundGraph(props) {
    var content = []
    var text = 'Languaege'
    if(props.is_company == true)
    {
      props.content.contributer.map((item,idx)=>(
        content.push({
          value:props.content.data[idx],
          name:props.content.contributer[idx]
        })
      ))
    }else{
      content = props.content
    }
    if(props.text)
    {
      text = props.title
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
        color: ['#63b2ee','#76da91','#f8cb7f','#f89588','#7cd6cf','#9192ab','#7898e1','#efa666','#eddd86','#9987ce','#63b2ee','#76da91'],
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

import React from 'react';
import { Card } from '@douyinfe/semi-ui';
import { Avatar } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import Text from "@douyinfe/semi-ui/lib/es/typography/text";

export default class CardOfName extends React.Component {
    constructor(props) {
        super(props);
        const {Text} = Typography;
        this.state =
            {
                id: props.id
            }

        // // console.log(this.props.content.company);
    }

    render() {
        return (
           <div style={{height:470,margin:100}}>
                <div
                    style={{textAlign: "center", justifyContent: "center"}}
                >
                    <div
                        style={{textAlign: "center", justifyContent: "center"}}
                    >
                        <Avatar
                            size="extra-large"
                            alt={"图片无法显示"} width={600} height={700}
                            src={this.props.content.avatar_url}
                            style={{margin: 4}}
                        />
                    </div>
                </div>


                <div
                    style={{textAlign: "center", justifyContent: "center"}}
                >
                    <div
                        style={{textAlign: "center", justifyContent: "center"}}
                    >
                        <div>
                            <h4>
                                <Text
                                    link={{href: this.props.content.user_url}}
                                    // icon={<IconLink/>}
                                >
                                    👉 My page
                                </Text>
                            </h4>

                        </div>
                        <div>
                            <h4>
                                Company: {this.props.content.company === '' ? '（我像风一样自由~）' : this.props.content.company }
                            </h4>
                        </div>
                    </div>
                </div>
                {/*<div>*/}
                {/*    {this.props.user_name + ": " + this.props.user_name}*/}
                {/*    {"描述一下 head.S 各个阶段的工作。首先对 sp 进行初始化，不然之后无法        \*/}
                {/*做函数调用，无法做别的初始化；然后做一级虚拟页表的初始化和打开虚拟               \*/}
                {/*页表模式，不然之后 memory 初始化无法得到虚拟化的结果；再之后做内存              \*/}
                {/*的初始化，不然之后做页表的三级初始化的时候没有页可以拿来做页表；之               \*/}
                {/*后做三级页表的初始化和线程的分配；异常中断的初始化可以在时钟中断设                \*/}
                {/*置之前和虚拟化打开之后的任何时候做；时钟中断打开需要在线程初始化之                \*/}
                {/*后做，以免打断线程初始化；最后跳入 start_kernel 函数。"}*/}
                {/*</div>*/}

                </div>
        )
    }
}
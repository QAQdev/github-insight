import React from 'react';
import { Button, Card, Typography } from '@douyinfe/semi-ui';
import { IconLink } from '@douyinfe/semi-icons';

export default function RepoCard(props) {
    const { Text } = Typography;

    return (
        <Card
            key={props.id}
            shadows='hover'
            title={props.name}
            headerLine={true}
            style={{ width: 240 }}
            actions=
            {[
                <Button
                    onClick={() => 
                    {
                        (props.url === props.showing_url)?
                        props.onSubmitRepo(null):
                        props.onSubmitRepo(props.url)
                    }
                }
                >
                    {
                        (props.url === props.showing_url)?
                        "停止展示细节":
                        "显示仓库细节"
                    }
                </Button>,
            ]}
            headerExtraContent={
                <Text
                    link={{ href: props.link }}
                    icon={<IconLink />}
                >
                    Direct Link
                </Text>
            }
        >
            <Text>{props.about}</Text>
        </Card>
    );
}
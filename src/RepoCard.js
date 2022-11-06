import React from 'react';
import { Card, Typography } from '@douyinfe/semi-ui';
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
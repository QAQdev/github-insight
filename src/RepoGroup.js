import React from 'react';
import { Card, CardGroup, Typography } from '@douyinfe/semi-ui';

export default function ReposGroup() {
    const { Text } = Typography;

    return (
        <CardGroup>
            {
                [...new Array(2).keys()].map((id) => (
                    <Card
                        key={id}
                        shadows='hover'
                        title={'Repo'}
                        headerLine={true}
                        style={{ width: 260 }}
                        headerExtraContent={
                            <Text link>
                                More
                            </Text>
                        }
                    >
                        <Text>Card content</Text>
                    </Card>
                ))
            }
        </CardGroup>
    );
}


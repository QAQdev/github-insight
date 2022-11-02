import React from 'react';
import { Layout, Nav, Button, Avatar } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons';

export default function TopBar() {
    const Header = Layout;

    return (
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Nav
                mode="horizontal"
                footer={
                    <>
                        <Button
                            theme="borderless"
                            icon={<IconBell size="large" />}
                            style={{
                                color: 'var(--semi-color-text-2)',
                                marginRight: '13px',
                            }}
                        />
                        <Button
                            theme="borderless"
                            icon={<IconHelpCircle size="large" />}
                            style={{
                                color: 'var(--semi-color-text-2)',
                                marginRight: '13px',
                            }}
                        />
                        <Avatar color="blue" size="small">
                            CZL
                        </Avatar>
                    </>
                }
            ></Nav>
        </Header>
    )
}
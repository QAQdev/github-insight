import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import { IconGithubLogo } from '@douyinfe/semi-icons';

export default function Footer() {
    const Footer = Layout;

    return (
        <Footer
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                color: 'var(--semi-color-text-2)',
                backgroundColor: 'rgba(var(--semi-grey-0), 1)',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <IconGithubLogo size="large" style={{ marginRight: '8px' }} />
                <span>Copyright © 2022 五菱宏光 All Rights Reserved. </span>
            </span>
        </Footer>
    );
}
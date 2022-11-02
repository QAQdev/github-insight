import React from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { IconBox, IconUserSetting, IconSimilarity } from '@douyinfe/semi-icons';


export default function SideBar() {
    const Sider = Layout;

    return (
        <Sider>
            <Nav
                defaultSelectedKeys={['Repos']}
                style={{ maxWidth: 200, height: '100%' }}
                items={[
                    { itemKey: 'Repos', text: 'Repos', icon: <IconBox size="large" /> },
                    { itemKey: 'Comparing', text: 'Comparation', icon: <IconSimilarity size='large' /> },
                    { itemKey: 'Accounts', text: 'Accounts', icon: <IconUserSetting size="large" /> },
                ]}
                header={{
                    logo: <img alt='logo' src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />,
                    text: 'Github Searcher',
                }}
                footer={{
                    collapseButton: true,
                }}
            />
        </Sider>
    );
}
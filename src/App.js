import React from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';

import ReposGroup from './RepoGroup';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Graph from './LineGraph';
import DoubleGraph from './DoublelineGraph'
import RoundGraph from './RoundGraph';
import BarChart from './BarChart'
import { Nav } from '@douyinfe/semi-ui';
import { IconBox, IconUserSetting, IconSimilarity } from '@douyinfe/semi-icons';
import CustomRenderDragDemo from './CustomRenderDragDemo';
import Clouds from './Clouds';
import CompareShowing from './CompareShowing';
import CustomerLogin from './CustomerLogin';
import CardOfName from './CardOfName';
import CustomerPage from './CustomerPage';

// npm install react-sortable-hoc -S --legacy-peer-deps

export default function App() {
  const { Sider, Content } = Layout;

  const [repoList, addRepoToList] = React.useState([{
    "id": 1,
    "name": "pytorch",
    "about": "About Tensors and Dynamic neural networks in Python with strong GPU acceleration",
    "link": "https://github.com/pytorch/pytorch"
  }]);

  const [lay_out_state, changeLayoutState] = React.useState("Repos");

  function addNewRepo(repo) {
    addRepoToList(repoList.concat(repo))
  }

  function getLayOut()
  {
    if(lay_out_state == "Repos")
    {
      return (
        <Layout>
          <TopBar></TopBar>
  
          <Content style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
          >
            <div
              style={{
                borderRadius: '10px',
                border: '1px solid var(--semi-color-border)',
                height: 'auto',
                padding: '32px',
              }}
            >
              <SearchBar onSubmit={addNewRepo} />
              {/* repo数量非常多时，是全部平铺展示而不是在 Content 内部形成下滑条 */}
              <ReposGroup repoList={repoList} />
              <Graph/>
              <DoubleGraph/>
              <RoundGraph/>
              <BarChart/>
  
              <CustomRenderDragDemo />
              <CompareShowing />
              <CustomerLogin />
              <CardOfName></CardOfName>
            </div>
          </Content>
  
          {/* 目前还没办法固定在页面最下面 */}
          <Footer></Footer>
        </Layout>
      )
    }
    else if(lay_out_state == "Comparation")
    {
      return (
        <CompareShowing />
      )
    }
    else if(lay_out_state == "Accounts")
    {
      return (
        <div>
          <CustomerPage></CustomerPage>
        </div>
      )
    }
    else 
    {
      return (
        <div>
          未知状态
        </div>
      )
    }
  }

  const toRepos = () =>
  {
    console.log("repos")
    changeLayoutState("Repos");
  }

  const toComparation = () =>
  {
    changeLayoutState("Comparation");
  }

  const toAccounts = () =>
  {
    changeLayoutState("Accounts");
  }

  function getKey()
  {
    return lay_out_state;
  }

  return (
    <Layout>

      {/* 这个有点奇怪，分离之后反而显示不对了，你们拿到之后可以先看看怎么修 */}
      {/* <SideBar></SideBar>  */}

      <Sider>
        <Nav
          defaultSelectedKeys={[getKey()]}
          style={{ maxWidth: 200, height: '100%' }}
          items={[
            { itemKey: 'Repos', text: 'Repos', icon: <IconBox size="large" /> , onClick : toRepos},
            { itemKey: 'Comparation', text: 'Comparation', icon: <IconSimilarity size='large' />, onClick : toComparation },
            { itemKey: 'Accounts', text: 'Accounts', icon: <IconUserSetting size="large" /> , onClick : toAccounts },
          ]}
          header={{
            logo: <img alt='logo' src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" />,
            text: 'Github Insight',
          }}
          footer={{
            collapseButton: true,
          }}
        />
      </Sider>

      {getLayOut()}
      
    </Layout>
  );
};

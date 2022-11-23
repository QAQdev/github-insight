import React from 'react';
import { Transfer, Button, Spin, Input, Card } from '@douyinfe/semi-ui';
import { IconHandle, IconSearch } from '@douyinfe/semi-icons';
import { Divider } from '@douyinfe/semi-ui';
import Clouds from './Clouds';

// npm install react-sortable-hoc -S --legacy-peer-deps
// npm install echarts-for-react -S --legacy-peer-deps
// npm update -S --legacy-peer-deps

export default class CustomRenderDragDemo extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = 
        {
            is_comparing : false,
            cloud_links :
            [
                {
                    num : 1
                },
                {
                    num : 1
                }
            ]    
            ,
            dataSource: Array.from({ length: 10 }, (v, i) => ({
                label: `仓库 ${i}`,
                value: "" + i,
                disabled: false,
                key: i,
            })),
        };
        this.renderSourcePanel = this.renderSourcePanel.bind(this);
        this.renderSelectedPanel = this.renderSelectedPanel.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.is_comparing = false;
        this.ComparationComponets = <Clouds links = {this.state.cloud_links}/>; 
    }

    renderItem(type, item, onItemAction, selectedItems) {
        let buttonText = '删除';
        if (type === 'source') {
            let checked = selectedItems.has(item.key);
            buttonText = checked ? '删除' : '添加';
        }
        return (
            <div className="semi-transfer-item panel-item" key={item.label}>
                <p>{item.label}</p>
                <Button
                    theme="borderless"
                    type="primary"
                    onClick={() => onItemAction(item)}
                    className="panel-item-remove"
                    size="small"
                >
                    {buttonText}
                </Button>
            </div>
        );
    }

    renderSourcePanel(props) {
        const {
            loading,
            noMatch,
            filterData,
            selectedItems,
            allChecked,
            onAllClick,
            inputValue,
            onSearch,
            onSelectOrRemove,
        } = props;
        let content;
        switch (true) {
            case loading:
                content = <Spin loading />;
                break;
            case noMatch:
                content = <div className="empty sp-font">{inputValue ? '无搜索结果' : '暂无内容'}</div>;
                break;
            case !noMatch:
                content = filterData.map(item => this.renderItem('source', item, onSelectOrRemove, selectedItems));
                break;
            default:
                content = null;
                break;
        }
        return (
            <Card>
                <section className="source-panel">
                    <div className="panel-header sp-font">仓库列表</div>
                    <div className="panel-main">
                        <Input
                            style={{ width: 454, margin: '12px 14px' }}
                            prefix={<IconSearch />}
                            onChange={onSearch}
                            showClear
                        />
                        <div className="panel-controls sp-font">
                            <span>待选仓库: {filterData.length}</span>
                            <Button onClick={onAllClick} theme="borderless" size="small">
                                {allChecked ? '取消全选' : '全选'}
                            </Button>
                        </div>
                        <div className="panel-list">{content}</div>
                    </div>
                </section>
            </Card>
        );
    }

    renderSelectedPanel(props) 
    {
        var { selectedData, onClear, clearText, onRemove } = props;

        let mainContent = selectedData.map(item => this.renderItem('selected', item, onRemove));

        if (!selectedData.length) 
        {
            mainContent = <div className="empty sp-font">暂无数据，请从左侧筛选</div>;
        }

        let in_queue_content;
        
        if(selectedData.length >= 2)
        {
            in_queue_content = [mainContent[0], mainContent[1]];
            
        }
        else 
        {
            in_queue_content = <div className="empty sp-font">暂无数据，请从左侧筛选</div>;
        }

        let comp_queue;
        if(selectedData.length > 0)
        {
            comp_queue = 
            <div>
                <Divider margin='12px' align='left'>
                </Divider>
                <div>比较队列：</div>
                <div className="panel-main">{mainContent}</div>
            </div>
        }
        else
        {
            comp_queue = mainContent;
        }

        let comping_q;
        if(selectedData.length >= 2)
        {
            comping_q =
            <div>
                <Divider margin='12px' align='left'>
                </Divider>
                <div>正在比较：</div>
                <div className="panel-main">{in_queue_content}</div>
            </div>
        }
        else 
        {
            this.is_comparing = false;
        }

        return (
            <Card
                style={{ width : 500}}
                shadows='hover'
            >
                <section className="selected-panel">
                    <div className="panel-header sp-font">
                        <div>仓库比较队列: {selectedData.length}</div>
                        <Button theme="borderless" type="primary" onClick={onClear} size="small">
                            {clearText || '清空 '}
                        </Button>
                    </div>
                    {comping_q}
                    {comp_queue}
                </section>
            </Card>
        );
    }

    render() {
        const { dataSource } = this.state;

        return (
            <div>
                <Card
                    style={{ width : 1000 }}
                    shadows='hover'
                >
                    <Transfer
                        style={{ height : 500 }}
                        onChange = {values => this.props.onChange(values)}
                        className="component-transfer-demo-custom-panel"
                        renderSourcePanel={this.renderSourcePanel}
                        renderSelectedPanel={this.renderSelectedPanel}
                        dataSource={dataSource}
                    />
                </Card>
            </div>
        );
    }
}

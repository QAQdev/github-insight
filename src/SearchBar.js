import React from 'react';
import { Form, Row } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import axios from 'axios';

export default function SearchBar(props) {
    const [repoLink, setRepoLink] = React.useState()

    const [str, changeStr] = React.useState()

    function handleSubmit() {
        // 这里用 axios 向后端发起请求，获得这些内容
        const headerJSON = 
        {
            "Content-Type": "application/json"
        };

        var pack = 
        {
            url : str,
        }

        var url = window.back_url + window.get_repo;
        
        var content = {}
        props.onSubmit(content)
        axios.post
        (
            url,
            JSON.stringify(pack),
            {headers : headerJSON}
        )
        .then
        (
            (res) =>
            {
                content = res.data.content;
                // console.log(content.stargazers_count)
                props.onSubmit(content)
                // // console.log(res.data)
            }
        ).catch
        (
            (e) =>
            {
                // console.log(e)
            }
        )
    }

    return (

        <Form render={({ values }) => (
            <div>
                <Row>
                    <Form.Input 
                        onChange={(str) => {changeStr(str)}}
                        prefix={<IconSearch />} field='Try input a repo link!' 
                        placeholder="https://github.com/pytorch/pytorch" 
                        defaultValue="https://github.com/pytorch/pytorch"
                    />
                </Row>
            </div>
        )}
            onValueChange={values => setRepoLink(values['Try input a repo link!'])}
            onSubmit={handleSubmit}
        >
        </Form>
    );
}
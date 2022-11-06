import React from 'react';
import { Form, Row } from '@douyinfe/semi-ui';
import { IconSearch } from '@douyinfe/semi-icons';
import axios from 'axios';

export default function SearchBar(props) {
    const [repoLink, setRepoLink] = React.useState()

    function handleSubmit() {

        // 这里用 axios 向后端发起请求，获得这些内容
        props.onSubmit({
            "id": 1,
            "name": "pytorch",
            "about": "About Tensors and Dynamic neural networks in Python with strong GPU acceleration",
            "link": "https://github.com/pytorch/pytorch"
        })
    }

    return (

        <Form render={({ values }) => (
            <>
                <Row>
                    <Form.Input prefix={<IconSearch />} field='Try input a repo link!' placeholder='Dive into Github...' />
                </Row>
            </>
        )}
            onValueChange={values => setRepoLink(values['Try input a repo link!'])}
            onSubmit={handleSubmit}
        >
        </Form>
    );
}
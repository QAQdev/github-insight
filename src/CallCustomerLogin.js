import axios from "axios";
import React from "react";
import CustomerLogin from "./CustomerLogin";

export default class CallCustomerLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                is_inited: false,
                content: {
                    timeline: [], ydata: []
                }
            }
    }

    get_from_server() {
        const headerJSON =
            {
                "Content-Type": "application/json"
            };
        let formdata = new FormData();
        let temp_url = "https://github.com/pytorch/pytorch";
        // formdata.append("url", temp_url);
        // formdata.append("num_layout", 10);
        // let temp_url = "https://github.com/tianzhi0549/FCOS";
        // formdata.append("url", temp_url);
        // formdata.append("update", false);
        var pack =
            {
                url: temp_url,
            }

        var content = {}
        console.log("get from server");
        axios.post
        (
            window.back_url + window.get_user,
            JSON.stringify(pack),
            {headers: headerJSON}
        )
            .then
            (
                (res) => {
                    content = res.data.content;
                    this.setState
                    (
                        {
                            is_inited: true,
                            content: content
                        }
                    )
                }
            ).catch
        (
            (e) => {
                console.log(e)
            }
        )
    }

    render() {
        if (this.state.is_inited) {
            console.log("content")
            console.log(this.state.content)
            return (
                <CustomerLogin>

                </CustomerLogin>
            )
        } else {
            this.get_from_server();
            return (
                <div>loading</div>
            )
        }
    }
}
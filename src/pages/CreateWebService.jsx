import * as React from "react";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import axios from "axios";
import {getApiUrl} from "../helpers/API";
import {black, red} from "../helpers/colors/color";

export default function CreateWebServicePage(props) {
    const [host, setHost] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState('');

    const handlerHost = (e) => {
        setHost(e.target.value);
        setErrorMsg('');
    };

    const createWebService = () => {
        if (!host) {
            return
        }

        axios.post(getApiUrl("v1/webservices"), {
            host: host
        }).then((res) => {
            console.log(res);
            props.history.push("/services");
            // const webService = res.data.result;
            // const createEndpointUrl = `v1/webservices/${webService.id}/endpoints`;
            // console.log(createEndpointUrl);
            // axios.post(getApiUrl(createEndpointUrl), {
            //     path: '/',
            //     http_method: 'get',
            //     content_type: 'application/json',
            // }).then((res) => {
            //     console.log(res);
            // }).catch(error => {
            //     console.log(error.response);
            //     setErrorMsg(error.response.data.all);
            // });
        }).catch(error => {
            console.log(error.response);
            setErrorMsg(error.response.data.all);
        });

        console.log("Created web service")
    };

    return <Box>
        <Box
            display='flex'
            component='h1'
        >
            새로운 웹서비스 생성
        </Box>
        <Box
            display='flex'
            style={{
                marginBottom: '16px'
            }}
        >
            테스트하려는 API 또는 웹 사이트의 URL을 입력하여 시작하십시오.
        </Box>
        <hr />
        <br/>
        <br/>
        <Box>
            <Box
                display='flex'
                style={{
                    marginBottom: '8px'
                }}
            >
                <label>Enter a URL</label>
            </Box>
            <Box
                display='flex'
            >
                <Box
                    style={{
                        width: '75%',
                        marginRight: '15px'
                    }}
                >
                    <InputBase
                        name="host"
                        type="text"
                        className="form-control"
                        placeholder="https://example.com"
                        fullWidth={true}
                        onChange={handlerHost}
                        style={{
                            display: 'block',
                            padding: '.375rem .75rem',
                            fontSize: '1rem',
                            lineHeight: 1.5,
                            color: black,
                            backgroundColor: '#fff',
                            backgroundImage: 'none',
                            border: `1px solid ${errorMsg ? red : black}`,
                            borderRadius: '.25rem',
                        }}
                        error={true}
                    />
                </Box>
                <Button
                    color='primary'
                    variant="outlined"
                    disableRipple={true}
                    onClick={createWebService}
                >
                    Import URL
                </Button>
            </Box>
            <Box
                display='flex'
            >
                <span
                    style={{
                        color: red
                    }}
                >
                    {errorMsg}
                </span>
            </Box>
        </Box>
    </Box>;
}

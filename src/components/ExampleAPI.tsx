import React, { PropsWithChildren, useEffect, useState } from "react";
import { WithAPI, withAPI } from "../hocs/withAPI";

interface IProps {}

type Payload = {
    welcomeMessage: string;
};

const ExampleAPIDecorated = (props: PropsWithChildren<IProps & WithAPI>) => {
    const { api } = props;

    const [message, setMessage] = useState<string>("");

    const fetchResponse = async () => {
        try {
            const response = await api.get<Payload>("hello");
            setMessage(response.welcomeMessage);
        } catch (error) {
            setMessage(`API Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchResponse().then();
    }, [api]);

    return <div>API Says: {message}</div>;
};

export const ExampleAPI = withAPI(ExampleAPIDecorated);

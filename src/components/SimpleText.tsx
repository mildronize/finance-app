import React from "react";

type AppProps = { message: string }; 

const SimpleText = ({ message }: AppProps) => (
    <div>{message}</div>
);

export default SimpleText;


import React from 'react';
import useFetch from "react-fetch-hook";
import Button from 'react-bootstrap/Button';
import './main.scss';

function BasicExample(props) {
    const { isLoading, data } = useFetch("/api/hello", {
        formatter: (response) => response.text()
    });

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div className="example">
            <h1>{data} Monde</h1>
            <Button>Button</Button>
        </div>
    );
}

export default BasicExample;
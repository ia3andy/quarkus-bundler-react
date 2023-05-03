import React from 'react';
import useFetch from "react-fetch-hook";
function BasicExample(props) {
    const { isLoading, data } = useFetch("/api/hello", {
        formatter: (response) => response.text()
    });

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h1>{data}</h1>
        </div>
    );
}

export default BasicExample;
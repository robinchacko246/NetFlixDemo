import React from 'react'

function Counter(props) {
    console.log(props);
    let {count,title}=props;
    return (
        <div>
            <h1>{title} is {count}</h1>
        </div>
    )
}

export default Counter

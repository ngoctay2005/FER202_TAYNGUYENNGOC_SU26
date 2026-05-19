
function Hello() {
    const reactStyle = {
        color: 'blue',
        fontSize: '20px'
    };
    const helloStyle = {
        color: 'red',
        fontSize: '20px'
    };
    return(
        <div>
            <p> <span style={helloStyle}>Hello</span> <span style={reactStyle}>React</span> </p>
        </div>
    )
}

export default Hello;
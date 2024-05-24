const Screen = ({ input, result }) => {
    return (
        <div className="screen">
            <p className="inputrow">{input}</p>
            <p className="resultrow">{result}</p>
        </div>
    );
}

export default Screen;


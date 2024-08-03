function Title() {
    return React.createElement(
        'h1', 
        {className:"title"}, 
        "Hello React"
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(Title());
function List(props) {
    return (
        <ul>
            <li>LIST</li>
        </ul>
    )
}

class Todos extends React.Component {
    render() {
        return (
            <div>
                TODOS
                <List />
            </div>
        );
    }
}

class Goals extends React.Component {
    render() {
        return (
            <div>
                GOALS
                <List />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Todos />
                <Goals />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
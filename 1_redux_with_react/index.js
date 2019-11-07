function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.title}
          </span>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();
    const title = this.input.value;
    this.input.value = "";

    return fetch(`http://localhost:3500/todos`, {
      method: "POST",
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        id: generateId(),
        title,
        completed: false
      })
    })
      .then((data) => data.json())
      .then(todo => {
        this.props.store.dispatch(
          addTodoAction(todo)
        );
      })
      .catch(() => {
        alert("There was an error. Try again.")
      })


  };

  removeItem = todo => {
    this.props.store.dispatch(removeTodoAction(todo.id));
    return fetch(`http://localhost:3500/todos/${todo.id}`, { method: "DELETE" })
      .catch(() => {
        this.props.store.dispatch(addTodoAction(todo));
      })
  };

  toggleItem = todo => {
    this.props.store.dispatch(toggleTodoAction(todo.id));
    fetch(`http://localhost:3500/todos/${todo.id}`, {
      method: "PATCH",
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        completed: !todo.completed
      })
    })
      .catch(() => {
        this.props.store.dispatch(toggleTodoAction(id));
      })
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

class Goals extends React.Component {
  addItem = e => {
    e.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    this.props.store.dispatch(
      addGoalAction({
        id: generateId(),
        name
      })
    );
  };

  removeItem = goal => {
    this.props.store.dispatch(removeGoalAction(goal.id));
  };

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List items={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    Promise.all([
      fetch('http://localhost:3500/todos?_limit=20')
    ]).then(([todos]) => todos.json())
      .then(todos => {
        store.dispatch(receiveDataAction(todos));
      })

    store.subscribe(() => {
      console.log(store.getState())
      this.forceUpdate()
    });
  }

  render() {
    const { store } = this.props;
    const { todos, goals, loading } = this.props.store.getState();

    if (loading) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <Todos todos={todos} store={store} />
        <Goals goals={goals} store={store} />
      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById("root"));

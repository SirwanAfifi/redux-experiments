function List(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <span
            onClick={() => props.toggle && props.toggle(item.id)}
            style={{ textDecoration: item.complete ? "line-through" : "none" }}
          >
            {item.name}
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
    const name = this.input.value;
    this.input.value = "";

    this.props.store.dispatch(
      addTodoAction({
        id: generateId(),
        name,
        complete: false
      })
    );
  };

  removeItem = todo => {
    this.props.store.dispatch(removeTodoAction(todo.id));
  };

  toggleItem = id => {
    this.props.store.dispatch(toggleTodoAction(id));
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

    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { store } = this.props;
    const { todos, goals } = this.props.store.getState();
    return (
      <div>
        <Todos todos={todos} store={store} />
        <Goals goals={goals} store={store} />
      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById("root"));

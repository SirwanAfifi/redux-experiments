// Library Code
function createStore(app) {
    // The store should have four parts
    // 1. The state
    // 2. Get the state
    // 3. Listem to change on the state
    // 4. Update the state

    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        }
    };

    const dispatch = (action) => {
        state = app(state, action);
        listeners.forEach((listener) => listener());
    };

    return {
        getState,
        subscribe,
        dispatch
    };
}
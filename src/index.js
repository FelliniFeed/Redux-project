import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/actions";
import { initialeStore } from "./store/store";

const store = initialeStore();

const App = (params) => {
    const [state, setState] = useState(store.getState());

    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState());
        });
    }, []);

    const comleteTask = (taskId) => {
        store.dispatch(actions.taskCompleted(taskId));
    };

    const changeTitle = (taskId) => {
        store.dispatch(actions.titleChanged(taskId));
    };

    const deleteTask = (taskId) => {
        store.dispatch(actions.taskDeleted(taskId));
    };

    return (
        <>
            <h1>APP</h1>
            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => comleteTask(el.id)}>
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            changeTitle
                        </button>
                        <button onClick={() => deleteTask(el.id)}>
                            taskDelete
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

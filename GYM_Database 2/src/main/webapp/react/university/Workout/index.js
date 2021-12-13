import WorkoutList from "./workout-list";
import WorkoutFormEditor from "./workout-form-editor";
const {HashRouter, Link, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/workout", "/"]} exact={true}>
                    <WorkoutList/>
                </Route>
                <Route path="/workout/:id" exact={true}>
                    <WorkoutFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
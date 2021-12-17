import MemberList from "./member-list";
import MemberFormEditor from "./member-form-editor";
import MembershipList from "./membership-list";
import MembershipFormEditor from "./membership-form-editor";
import WorkoutList from "./workout-list";
import WorkoutFormEditor from "./workout-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/member", "/"]} exact={true}>
                    <MemberList/>
                </Route>
                <Route path="/member/:id" exact={true}>
                    <MemberFormEditor/>
                </Route>

                <Route path={["/membership_plan", "/"]} exact={true}>
                    <MembershipList/>
                </Route>
                <Route path="/membership_plan/:id" exact={true}>
                    <MembershipFormEditor/>
                </Route>

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

import MemberList from "./member-list";
import MemberFormEditor from "./member-form-editor";
import MembershipList from "../../university/MembershipPlan/membership-list";
import MembershipFormEditor from "../../university/MembershipPlan/membership-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/member", "/"]} exact={true}>
                    <MemberList/>
                </Route>
                <Route path="/member/:id" exact={true}>
                    <MemberFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;

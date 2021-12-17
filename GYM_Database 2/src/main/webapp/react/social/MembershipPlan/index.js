import MembershipList from "../membership-list";
import MembershipFormEditor from "../membership-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/membership_plan", "/"]} exact={true}>
                    <MembershipList/>
                </Route>
                <Route path="/membership_plan/:id" exact={true}>
                    <MembershipFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;

import membershipService from "./membership-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const MembershipFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findMembershipById(id)
        }
    }, []);
    const findMembershipById = (id) =>
        membershipService.findMembershipById(id)
            .then(user => setUser(user))
    const deleteMembership = (id) =>
        membershipService.deleteMembership(id)
            .then(() => history.goBack())
    const createMembership = (user) =>
        membershipService.createMembership(user)
            .then(() => history.goBack())
    const updateMembership = (id, newUser) =>
        membershipService.updateMembership(id, newUser)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Membership Plan Editor</h2>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Return to last page
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteMembership(user.id)}>
                Delete this Membership
            </button>
            <br/>
            <label>Membership Plan ID(Immutable)</label>
            <input value={user.id}/><br/>

            <label>Membership Type(ENUM)</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, membership_type: e.target.value}))}
                value={user.membership_type}/><br/>
            <label>Membership Description</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, membership_description: e.target.value}))}
                value={user.membership_description}/><br/>
            <label>Cost</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                        ({...user, membership_cost: e.target.value}))}
                value={user.membership_cost}/><br/>

            <button className="btn btn-success"
                    onClick={() => updateMembership(user.id, user)}>
                Update Info and Save
            </button>

            <button className="btn btn-primary"
                onClick={() => createMembership(user)}>
                Update Info and Create
            </button>

        </div>
    )
}

export default MembershipFormEditor

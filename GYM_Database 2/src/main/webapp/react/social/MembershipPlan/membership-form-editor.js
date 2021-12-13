import membershipService from "./membership-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const MembershipFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setMembership] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findMembershipById(id)
        }
    }, []);
    const findMembershipById = (id) =>
        membershipService.findMembershipById(id)
            .then(user => setMembership(user))
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
            <label>Membership Plan ID</label>
            <input
                onChange={(e) =>
                    setMembership(user =>
                        ({...user, id: e.target.value}))}
                value={user.id}/><br/>

            <label>Membership Type</label>
            <input
                onChange={(e) =>
                    setMembership(user =>
                        ({...user, membership_type: e.target.value}))}
                value={user.membership_type}/><br/>
            <label>Membership Description</label>
            <input
                onChange={(e) =>
                    setMembership(user =>
                        ({...user, membership_cost: e.target.value}))}
                value={user.membership_description}/><br/>
            <label>Cost</label>
            <input
                value={user.membership_cost}/><br/>
            <button className="btn btn-primary"
                onClick={() => createMembership(user)}>
                Create
            </button>
            <button className="btn btn-success"
                onClick={() => updateMembership(user.id, user)}>
                Save
            </button>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteMembership(user.id)}>
                Delete
            </button>

        </div>
    )
}

export default MembershipFormEditor

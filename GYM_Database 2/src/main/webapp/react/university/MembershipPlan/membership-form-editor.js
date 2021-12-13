import memberService from "./membership-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const MembershipFormEditor = () => {
    const history = useHistory()
    const params = useParams();
    const {id} = params.id
    const [membership, setMembership] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findMembershipById(id)
        }
    }, []);
    const findMembershipById = (id) =>
        memberService.findMembershipById(id)
            .then(membership => setMembership(membership))
    const deleteMembership = (id) =>
        memberService.deleteMembership(id)
            .then(() => history.back())
    const createMembership = (membership) =>
        memberService.createMembership(membership)
            .then(() => history.back())
    const updateMember = (id, newUser) =>
        memberService.updateMembership(id, newUser)
            .then(() => history.back())


    return (
        <div>
            <h2>Membership Plan Editor</h2>
            <label>Membership Plan ID</label>
            <input
                onChange={(e) =>
                    setUser(membership =>
                        ({...membership, id: e.target.value}))}
                value={membership.id}/><br/>

            <label>Membership Type</label>
            <input
                onChange={(e) =>
                    setUser(membership =>
                        ({...membership, membership_type: e.target.value}))}
                value={membership.membership_type}/><br/>
            <label>Membership Description</label>
            <input
                onChange={(e) =>
                    setUser(membership =>
                        ({...membership, membership_cost: e.target.value}))}
                value={membership.membership_description}/><br/>
            <label>Cost</label>
            <input
                value={membership.membership_cost}/><br/>
            <button className="btn btn-primary"
                onClick={() => createMembership(membership)}>
                Create
            </button>
            <button className="btn btn-success"
                onClick={() => updateMembership(membership.membership_id, membership)}>
                Save
            </button>
            <button className="btn btn-warning"
                onClick={() => {
                    history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                onClick={() => deleteMembership(membership.membership_id)}>
                Delete
            </button>

        </div>
    )
}

export default MembershipFormEditor

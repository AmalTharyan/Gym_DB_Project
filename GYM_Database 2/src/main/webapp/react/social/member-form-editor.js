import memberService from "./member-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const MemberFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findMemberById(id)
        }
    }, []);
    const findMemberById = (id) =>
        memberService.findMemberById(id)
            .then(user => setUser(user))
    const deleteMember = (id) =>
        memberService.deleteMember(id)
            .then(() => history.goBack())
    const createMember = (user) =>
        memberService.createMember(user)
            .then(() => history.goBack())
    const updateMember = (id, newUser) =>
        memberService.updateMember(id, newUser)
            .then(() => history.goBack())

    return (
        <div>
            <h2>Member Editor</h2>

            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                Return to last page
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteMember(user.id)}>
                Delete this Member
            </button>
            <br/>
            <label>ID(Immutable)</label>
            <input value={user.id}/><br/>
            <label>Membership_ID(Immutable)</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, membership_id: e.target.value}))}
                value={user.membership_id}/>
            <Link to={`/membership_plan/${user.membership_id}`}>
                Go to Membership Edit Page with Membership Id = {user.membership_id}
            </Link>
            <br/>

            <label>First Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, firstName: e.target.value}))}
                value={user.firstName}/><br/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, lastName: e.target.value}))}
                value={user.lastName}/><br/>
            <label>Username</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, username: e.target.value}))}
                value={user.username}/><br/>
            <label>Password</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, password: e.target.value}))}
                value={user.password}/><br/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, email: e.target.value}))}
                value={user.email}/><br/>
            <label>Date of Birth</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, dob: e.target.value}))}
                value={user.dob}/><br/>


            <button className="btn btn-success"
                    onClick={() => updateMember(user.id, user)}>
                Update Info and Save
            </button>
            <button className="btn btn-primary"
                    onClick={() => createMember(user)}>
                Update Info and Create
            </button>
            <Link to={`/workout/?id= ${user.id}`}>
                Go to Workout List Page with Member Id = {user.id}
            </Link>


        </div>
    )
}

export default MemberFormEditor

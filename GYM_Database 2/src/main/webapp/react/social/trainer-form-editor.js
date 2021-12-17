import trainerService from "./trainer-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const TrainerFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findTrainerById(id)
        }
    }, []);
    const findTrainerById = (id) =>
        trainerService.findTrainerById(id)
            .then(user => setUser(user))
    const deleteTrainer = (id) =>
        trainerService.deleteTrainer(id)
            .then(() => history.goBack())
    const createTrainer = (user) =>
        trainerService.createTrainer(user)
            .then(() => history.goBack())
    const updateTrainer = (id, newUser) =>
        trainerService.updateTrainer(id, newUser)
            .then(() => history.goBack())

    return (
        <div>
            <h2>Trainer Editor</h2>

            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()
                    }}>
                Return to last page
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteTrainer(user.id)}>
                Delete this Trainer
            </button>
            <br/>
            <label>ID(Immutable)</label>
            <input value={user.id}/><br/>
            <label>Member_ID(Immutable)</label>
            <input
                onChange={(e) =>
                    setUser(user =>
                                ({...user, member_id: e.target.value}))}
                value={user.member_id}/>
            <Link to={`/member/${user.member_id}`}>
                Go to Member Edit Page with Member Id = {user.member_id}
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
                    onClick={() => updateTrainer(user.id, user)}>
                Update Info and Save
            </button>
            <button className="btn btn-primary"
                    onClick={() => createTrainer(user)}>
                Create
            </button>
        </div>
    )
}

export default TrainerFormEditor

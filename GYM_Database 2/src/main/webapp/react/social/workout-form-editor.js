import workoutService from "./workout-service"

const {useState, useEffect} = React;
const {Link,useParams, useHistory} = window.ReactRouterDOM;
const WorkoutFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setWorkout] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findWorkoutById(id)
        }
    }, []);
    const findWorkoutById = (id) =>
        workoutService.findWorkoutById(id)
            .then(user => setWorkout(user))

    const deleteWorkout = (id) =>
        workoutService.deleteWorkout(id)
            .then(() => history.goBack())
    const createWorkout = (user) =>
        workoutService.createWorkout(user)
            .then(() => history.goBack())
    const updateWorkout = (id, newUser) =>
        workoutService.updateWorkout(id, newUser)
            .then(() => history.goBack())


    return (
        <div>
            <h2>Workout Editor</h2>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Return to last page
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteWorkout(user.id)}>
                Delete this Workout Plan
            </button> <br/>
            <label>Workout Id(Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                                   ({...user, id: e.target.value}))}
                 value={user.id}/><br/>
            <label>Workout Plan Id(Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                                   ({...user, plan_id: e.target.value}))}
                value={user.plan_id}/><br/>
            <label>Workout Member Id(Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                        ({...user, member_id: e.target.value}))}
                value={user.member_id}/>
            <Link to={`/member/${user.member_id}`}>
                Go to User Edit Page With Workout Member Id ={user.member_id}
            </Link><br/>

            <label>Workout Description</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                        ({...user, workout_description: e.target.value}))}
                value={user.workout_description}/><br/>
            <label>Workout Time</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                        ({...user, workout_time: e.target.value}))}
                value={user.workout_time}/><br/>
            <label>Workout Timetaken</label>
            <input
                onChange={(e) =>
                    setWorkout(user =>
                                   ({...user, workout_timetaken: e.target.value}))}
                value={user.workout_timetaken}/><br/>
            <button className="btn btn-success"
                    onClick={() => updateWorkout(user.id, user)}>
                Update Info and Save
            </button>
            <button className="btn btn-primary"
                    onClick={() => createWorkout(user)}>
                Create
            </button>


        </div>
    )
}

export default WorkoutFormEditor

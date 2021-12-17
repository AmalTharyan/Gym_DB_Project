import workoutPlanService from "./workout_plan-service"

const {useState, useEffect} = React;
const {Link,useParams, useHistory} = window.ReactRouterDOM;
const WorkoutPlanFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [user, setWorkoutPlan] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findWorkoutPlanById(id)
        }
    }, []);
    const findWorkoutPlanById = (id) =>
        workoutPlanService.findWorkoutPlanById(id)
            .then(user => setWorkoutPlan(user))

    const deleteWorkoutPlan = (id) =>
        workoutPlanService.deleteWorkoutPlan(id)
            .then(() => history.goBack())
    const createWorkoutPlan = (user) =>
        workoutPlanService.createWorkoutPlan(user)
            .then(() => history.goBack())
    const updateWorkoutPlan = (id, newUser) =>
        workoutPlanService.updateWorkoutPlan(id, newUser)
            .then(() => history.goBack())


    return (
        <div>
            <h2>WorkoutPlan Editor</h2>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.goBack()}}>
                Return to last page
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteWorkoutPlan(user.id)}>
                Delete this Workout Plan
            </button> <br/>
            <label>Workout Plan Id(Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkoutPlan(user =>
                        ({...user, id: e.target.value}))}
                value={user.id}/><br/>
            <label>Workout Type (Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkoutPlan(user =>
                        ({...user, workout_type: e.target.value}))}
                value={user.workout_type}/><br/>
            <label>Workout Description(Immutable)</label>
            <input
                onChange={(e) =>
                    setWorkoutPlan(user =>
                        ({...user, workout_description: e.target.value}))}
                value={user.workout_description}/>

            <button className="btn btn-success"
                    onClick={() => updateWorkoutPlan(user.id, user)}>
                Update Info and Save
            </button>
            <button className="btn btn-primary"
                    onClick={() => createWorkoutPlan(user)}>
                Create
            </button>


        </div>
    )
}

export default WorkoutPlanFormEditor
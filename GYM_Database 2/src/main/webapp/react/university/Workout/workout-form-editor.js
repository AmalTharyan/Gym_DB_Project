import workoutService from "./workout-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const WorkoutFormEditor = () => {
    const history = useHistory()
    const {id} = useParams()
    const [workout, setWorkout] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findWorkoutById(id)
        }
    }, []);
    const findWorkoutById = (id) =>
        workoutService.findWorkoutById(id)
            .then(workout => setWorkout(workout))
    const deleteWorkout = (id) =>
        workoutService.deleteWorkout(id)
            .then(() => history.goBack())
    const createWorkout = (workout) =>
        workoutService.createWorkout(workout)
            .then(() => history.goBack())
    const updateWorkout = (id, newUser) =>
        workoutService.updateWorkout(id, newUser)
            .then(() => history.back())


    return (
        <div>
            <h2>Workout Editor</h2>
            <label>Workout Id</label>
            <input
                onChange={(e) =>
                    setWorkout(workout =>
                        ({...workout, id: e.target.value}))}
                value={workout.id}/><br/>

            <label>Workout Plan Id</label>
            <input
                onChange={(e) =>
                    setWorkout(workout =>
                        ({...workout, plan_id: e.target.value}))}
                value={workout.plan_id}/><br/>
            <label>Workout Description</label>
            <input
                onChange={(e) =>
                    setWorkout(workout =>
                        ({...workout, workout_description: e.target.value}))}
                value={workout.workout_description}/><br/>
            <label>Workout Timetaken</label>
            <input
                onChange={(e) =>
                    setWorkout(workout =>
                        ({...workout, workout_timetaken: e.target.value}))}
                value={workout.workout_timetaken}/><br/>
            <label>Workout Time</label>
            <input
                onChange={(e) =>
                    setWorkout(workout =>
                        ({...workout, workout_time: e.target.value}))}
                value={workout.workout_time}/><br/>
            <button className="btn btn-primary"
                    onClick={() => createWorkout(workout)}>
                Create
            </button>
            <button className="btn btn-success"
                    onClick={() => updateWorkout(workout.workout_id, workout)}>
                Save
            </button>
            <button className="btn btn-warning"
                    onClick={() => {
                        history.back()}}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteWorkout(workout.workout_id)}>
                Delete
            </button>

        </div>
    )
}

export default WorkoutFormEditor
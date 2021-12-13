import workoutService, {findWorkoutById} from "./workout-service"
const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const WorkoutList = () => {
    const history = useHistory()
    const [workouts, setWorkout] = useState([])
    useEffect(() => {
        findAllWorkouts()
    }, [])
    const findAllWorkouts = () =>
        workoutService.findAllWorkouts()
            .then(workouts => setWorkout(workouts))

    return (
        <div>
            <h2>Workouts Done</h2>
            <button onClick={() => history.push("/workout/new")}
                    className="btn btn-primary">
                Add New Workout
            </button>
            <ul className="list-group">
                {
                    workouts.map(workout =>
                        <li className="list-group-item"
                            key={workout.workout_id}>
                            <Link to={`/workout/${workout.workout_id}`}>
                                {workout.workout_description},
                                {workout.workout_time},
                                {workout.workout_timetaken}
                            </Link>
                        </li>)
                }
            </ul>


        </div>
    )
}

export default WorkoutList;

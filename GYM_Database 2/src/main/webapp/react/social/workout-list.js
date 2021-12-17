import workoutService from "./workout-service"
const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const WorkoutList = () => {
    const history = useHistory()
    const [workout, setWorkout] = useState([])
    useEffect(() => {
        findAllWorkouts()
    }, [])
    const findAllWorkouts = () =>
        workoutService.findAllWorkouts()
            .then(workout => setWorkout(workout))

    return (
        <div>
            <h2 class="fst-italic text-info">List of Workout</h2>
            <ul className="list-group">
                {
                    workout.map(workout =>
                        <li className="list-group-item list-group-item-info"
                            key={workout.id}>
                            <Link to={`/workout/${workout.id}`}>
                                Description:{workout.workout_description},
                                Check-In time:{workout.workout_time},
                                Duration: {workout.workout_timetaken}
                            </Link>
                        </li>)
                }
            </ul>


        </div>
    )
}

export default WorkoutList;

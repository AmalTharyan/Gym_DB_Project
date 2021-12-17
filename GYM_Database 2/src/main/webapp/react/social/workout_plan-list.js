import workoutPlanService from "./workout_plan-service"
const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const WorkoutPlanList = () => {
    const history = useHistory()
    const [workoutPlan, setWorkoutPlan] = useState([])
    useEffect(() => {
        findAllWorkoutPlans()
    }, [])
    const findAllWorkoutPlans = () =>
        workoutPlanService.findAllWorkoutPlans()
            .then(workoutPlan => setWorkoutPlan(workoutPlan))

    return (
        <div>
            <h2 class="fst-italic text-info">List of Workout Plans</h2>

            <button onClick={() => history.push("/workout_plan/new")}>
                Add Workout Plan
            </button>
            <ul className="list-group">
                {
                    workoutPlan.map(workoutPlan =>
                        <li className="list-group-item list-group-item-info"
                            key={workoutPlan.id}>
                            <Link to={`/workout_plan/${workoutPlan.id}`}>
                                Description:{workoutPlan.workout_description},
                                Workout Type:{workoutPlan.workout_type},
                            </Link>
                        </li>)
                }
            </ul>


        </div>
    )
}

export default WorkoutPlanList;
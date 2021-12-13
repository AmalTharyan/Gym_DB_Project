const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineWorkoutEditor = ({workout, deleteWorkout, updateWorkout, createWorkout}) => {
    const [workoutCopy, setWorkoutCopy] = useState(workout)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={workoutCopy.id}
                            onChange={(e)=>setWorkoutCopy(workoutCopy => ({...workoutCopy, id: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={workoutCopy.workout_description}
                            onChange={(e)=>setWorkoutCopy(workoutCopy => ({...workoutCopy, workout_description: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={workoutCopy.workout_timetaken}
                            onChange={(e)=>setWorkoutCopy(workoutCopy => ({...workoutCopy, workout_timetaken: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/workout/${workoutCopy.id}/blogs`}>
                            Workouts
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateWorkout(workoutCopy.id, workoutCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteWorkout(workout.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/workout/${workoutCopy.id}`}>
                            {workoutCopy.id}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/workout/${workoutCopy.workout_description}`}>
                            {workoutCopy.workout_description}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/workout/${workoutCopy.workout_timetaken}/blogs`}>
                            Workouts
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineWorkoutEditor;

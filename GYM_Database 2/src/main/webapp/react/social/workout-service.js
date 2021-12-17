// TODO: declare URL where server listens for HTTP requests
const WORKOUT_URL = "http://localhost:8090/api/workout"

// TODO: retrieve all users from the server
export const findAllWorkouts = () =>
    fetch(`http://localhost:8090/api/workout/find`)
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findWorkoutById = (id) =>
    fetch(`http://localhost:8090/api/workout/find/id/${id}`).then(response => response.json())


// TODO: delete a user by their ID
export const deleteWorkout = (id) =>
    fetch(`http://localhost:8090/api/workout/delete/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createWorkout = (workout) =>
    fetch(`http://localhost:8090/api/workout/create/${workout.plan_id}/${workout.member_id}/${workout.workout_description}/${workout.workout_time}/${workout.workout_timetaken}`,
          {
              method: 'POST',
              body: JSON.stringify(workout),
              headers: {
                  "Access-Control-Allow-Origin": "*",
                  'content-type': 'application/json'
              },//,"mode" : "no-cors",
          }).then(response => response.json())


// TODO: update a user by their ID
export const updateWorkout = (id, workout) =>
    fetch(`http://localhost:8090/api/workout/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(workout),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



// TODO: export all functions as the API to this service
export default {
    findAllWorkouts,
    findWorkoutById,
    deleteWorkout,
    createWorkout,
    updateWorkout
}

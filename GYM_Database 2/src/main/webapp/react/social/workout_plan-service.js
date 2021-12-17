// TODO: declare URL where server listens for HTTP requests
const WORKOUT_URL = "http://localhost:8090/api/workout_plan"

// TODO: retrieve all users from the server
export const findAllWorkoutPlans = () =>
    fetch(`http://localhost:8090/api/workout_plan/find`)
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findWorkoutPlanById = (id) =>
    fetch(`http://localhost:8090/api/workout_plan/find/id/${id}`).then(response => response.json())


// TODO: delete a user by their ID
export const deleteWorkoutPlan = (id) =>
    fetch(`http://localhost:8090/api/workout_plan/delete/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createWorkoutPlan = (workoutPlan) =>
    fetch('http://localhost:8090/api/workout_plan', {
        method: 'POST',
        body: JSON.stringify(workoutPlan),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateWorkoutPlan = (id, workoutPlan) =>
    fetch(`http://localhost:8090/api/workout_plan/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(workoutPlan),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



// TODO: export all functions as the API to this service
export default {
    findAllWorkoutPlans,
    findWorkoutPlanById,
    deleteWorkoutPlan,
    createWorkoutPlan,
    updateWorkoutPlan
}

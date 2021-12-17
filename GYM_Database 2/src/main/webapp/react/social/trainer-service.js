// TODO: declare URL where server listens for HTTP requests
const MEMBER_URL = "http://localhost:8090/api/trainer"

// TODO: retrieve all users from the server
export const findAllTrainers = () =>
    fetch(`http://localhost:8090/api/trainer/find`)
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findTrainerById = (id) =>
    fetch(`http://localhost:8090/api/trainer/find/id/${id}`).then(response => response.json())




// TODO: delete a user by their ID
export const deleteTrainer = (id) =>
    fetch(`http://localhost:8090/api/trainer/delete/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createTrainer = (member) =>
    fetch('http://localhost:8090/api/trainer', {
        method: 'POST',
        body: JSON.stringify(member),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updateTrainer = (id, member) =>
    fetch(`http://localhost:8090/api/trainer/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(member),
        headers: {
            "Access-Control-Allow-Origin": "*",
            'content-type': 'application/json'
        },//"mode" : "no-cors",
    }).then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllTrainers,
    findTrainerById,
    deleteTrainer,
    createTrainer,
    updateTrainer
}

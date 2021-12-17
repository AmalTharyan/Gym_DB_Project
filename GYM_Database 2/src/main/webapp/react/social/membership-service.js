
// TODO: declare URL where server listens for HTTP requests
const Membership_URL = "http://localhost:8090/api/membership_plan"

// TODO: retrieve all users from the server
export const findAllMemberships = () =>
    fetch(`http://localhost:8090/api/membership_plan/find`)
        .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findMembershipById = (id) =>
    fetch(`http://localhost:8090/api/membership_plan/find/id/${id}`).then(response => response.json())

// TODO: retrieve a single user by their ID
export const findMembersByMembershipId = (id) =>
    fetch(`http://localhost:8090/api/member/find/id/${id}`).then(response => response.json())


// TODO: delete a user by their ID
export const deleteMembership = (id) =>
    fetch(`http://localhost:8090/api/membership_plan/delete/${id}`, {
        method: "DELETE"
    })

// TODO: create a new user
export const createMembership = (membership) =>
    fetch('http://localhost:8090/api/membership_plan', {
        method: 'POST',
        body: JSON.stringify(membership),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



// TODO: update a user by their ID
export const updateMembership = (id, membership) =>
    fetch(`http://localhost:8090/api/membership_plan/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(membership),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllMemberships,
    findMembershipById,
    deleteMembership,
    createMembership,
    updateMembership,
    findMembersByMembershipId
}

// TODO: declare URL where server listens for HTTP requests
const MEMBER_URL = "http://localhost:8090/api/member"

// TODO: retrieve all users from the server
export const findAllMembers = () =>
    fetch(`http://localhost:8090/api/member/find`)
    .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findMemberById = (id) =>
    fetch(`http://localhost:8090/api/member/find/id/${id}`).then(response => response.json())




// TODO: delete a user by their ID
export const deleteMember = (id) =>
    fetch(`http://localhost:8090/api/member/delete/${id}`, {
        method: "DELETE"
    })



// TODO: create a new user
export const createMember = (user) =>
    fetch(`http://localhost:8090/api/member/create/${user.membership_id}/${user.firstName}/${user.lastName}
    /${user.username}/${user.password}/${user.email}/${user.level}/${user.dob}`).then(response => response.json())


// TODO: update a user by their ID
export const updateMember = (id, member) =>
    fetch(`http://localhost:8090/api/member/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(member),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllMembers,
    findMemberById,
    deleteMember,
    createMember,
    updateMember
}

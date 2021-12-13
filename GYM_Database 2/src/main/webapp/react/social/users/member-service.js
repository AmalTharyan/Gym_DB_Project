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
export const createMember = (member) =>
    fetch(`http://localhost:8090/api/member/create/${member.membership_id}/${member.firstName}/${member.lastName}/
        ${member.username}/${member.password}/${member.email}/${member.dob}`, {method: "GET"
    })
        .then(response => response.json())


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

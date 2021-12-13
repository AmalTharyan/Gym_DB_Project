import memberService from "./member-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const MemberList = () => {
    const history = useHistory()
    const [member, setMember] = useState([])
    useEffect(() => {
        findAllMembers()
    }, [])
    const findAllMembers = () =>
        memberService.findAllMembers()
            .then(member => setMember(member))

    return (
        <div>
            <h2>Welcome to GYM!!!</h2>
            <button onClick={() => history.push("/member/new")}
                    className="btn btn-primary">
                Add New Member
            </button>
            <ul className="list-group">
                {
                    member.map(member =>
                                  <li className="list-group-item"
                                      key={member.id}>
                                      <Link to={`/member/${member.id}`}>
                                          {member.firstName},
                                          {member.lastName},
                                          {member.username},
                                      </Link>
                                  </li>)
                }
            </ul>


        </div>
    )
}

export default MemberList;

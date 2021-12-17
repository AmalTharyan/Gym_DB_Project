import memberService from "./member-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const MemberList = () => {
    const history = useHistory()
    const {id} = useParams()
    const [member, setMember] = useState([])

    useEffect(() => {
        findAllMembers()
    }, [])
    const findAllMembers = () =>
        memberService.findAllMembers()
            .then(member => setMember(member))

    return (
        <div>
            <h1 className="text-center text-primary"> Welcome to NEU GYM!!! </h1>
            <h2 className="fst-italic text-info">List of Member</h2>
            <ul className="list-group">
                {
                    member.map(member =>
                                  <li className="list-group-item list-group-item-primary"
                                      key={member.id}>
                                      <Link to={`/member/${member.id}`}>
                                          FirstName:{member.firstName},
                                          LastName:{member.lastName},
                                          UserName:{member.username},
                                          Email:{member.email},
                                          DOB:{member.dob}
                                      </Link>
                                  </li>)
                }
            </ul>


        </div>
    )
}

export default MemberList;

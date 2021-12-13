import membershipService, {findMembershipById} from "./membership-service"
const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const MembershipList = () => {
    const history = useHistory()
    const [memberships, setMembership] = useState([])
    useEffect(() => {
       findAllMemberships()
    }, [])
    const findAllMemberships = () =>
        membershipService.findAllMemberships()
            .then(memberships => setMembership(memberships))

    return (
        <div>
            <h2>Welcome to GYM!!!</h2>
            <button onClick={() => history.push("/membership_plan/new")}
                    className="btn btn-primary">
                Add New Membership
            </button>
            <ul className="list-group">
                {
                    memberships.map(membership_plan =>
                                  <li className="list-group-item"
                                      key={membership_plan.membership_id}>
                                      <Link to={`/membership_plan/${membership_plan.membership_id}`}>
                                          {membership_plan.membership_type},
                                          {membership_plan.membership_description},
                                          {membership_plan.membership_cost}
                                      </Link>
                                  </li>)
                }
            </ul>


        </div>
    )
}

export default MembershipList;

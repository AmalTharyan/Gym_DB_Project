import membershipService, {findMembershipById} from "./membership-service"
const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;
const MembershipList = () => {
    const history = useHistory()
    const [membership, setMembership] = useState([])
    useEffect(() => {
       findAllMemberships()
    }, [])
    const findAllMemberships = () =>
        membershipService.findAllMemberships()
            .then(membership => setMembership(membership))

    return (
        <div>
            <h2 class="fst-italic text-info" >List of Membership</h2>

            <button onClick={() => history.push("/membership_plan/new")}>
                Add Membership
            </button>
            <ul className="list-group">
                {
                    membership.map(membership_plan =>
                                  <li className="list-group-item list-group-item-secondary"
                                      key={membership_plan.id}>
                                      <Link to={`/membership_plan/${membership_plan.id}`}>
                                          Type:{membership_plan.membership_type},
                                          Description:{membership_plan.membership_description},
                                          Cost:{membership_plan.membership_cost}
                                      </Link>
                                  </li>)
                }
            </ul>


        </div>
    )
}

export default MembershipList;

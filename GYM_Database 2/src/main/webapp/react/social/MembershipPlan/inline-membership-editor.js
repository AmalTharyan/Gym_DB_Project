const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineMembershipEditor = ({membership, deleteMembership, updateMembership, createMembership}) => {
    const [membershipCopy, setMembershipCopy] = useState(membership)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={membershipCopy.membership_type}
                            onChange={(e)=>setMembershipCopy(membershipCopy => ({...membershipCopy, membership_type: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={membershipCopy.membership_description}
                            onChange={(e)=>setMembershipCopy(membershipCopy => ({...membershipCopy, membership_description: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={membershipCopy.membership_cost}
                            onChange={(e)=>setMembershipCopy(memberCopy => ({...membershipCopy, membership_cost: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/membership/${membershipCopy.id}`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateMembership(membershipCopy.id, membershipCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteMembership(membership.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/membership_plan/${membershipCopy.id}`}>
                            {membershipCopy.membership_type}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/membership_plan/${membershipCopy.id}`}>
                            {membershipCopy.membership_description}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/membership_plan/${membershipCopy.id}`}>
                            {membershipCopy.membership_cost}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/membership_plan/${membershipCopy.id}/blogs`}>
                            Memberships
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineMembershipEditor;

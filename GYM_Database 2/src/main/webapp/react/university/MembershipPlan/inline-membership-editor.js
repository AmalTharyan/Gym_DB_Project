const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineMembershipEditor = ({membership, deleteMembership, updateMembership, createMembership}) => {
    const [memberCopy, setMemberCopy] = useState(membership)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.membership_type}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, membership_type: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.membership_description}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, membership_description: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.membership_cost}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, membership_cost: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/membership/${memberCopy.membership_id}`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateMembership(memberCopy.membership_id, memberCopy)
                           }}></i>

                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               //createMembership(memberCopy)
                        }}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteMembership(member.membership_id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/member/${memberCopy.membership_id}`}>
                            {memberCopy.membership_type}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/member/${memberCopy.membership_id}`}>
                            {memberCopy.membership_description}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/member/${memberCopy.membership_id}`}>
                            {memberCopy.membership_cost}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/member/${memberCopy.membership_id}/blogs`}>
                            Blogs
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

const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineMemberEditor = ({member, deleteMember, updateMember}) => {
    const [memberCopy, setMemberCopy] = useState(member)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.firstName}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.lastName}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={memberCopy.membername}
                            onChange={(e)=>setMemberCopy(memberCopy => ({...memberCopy, membername: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/members/${memberCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateMember(memberCopy.id, memberCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteMember(member.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/member/${memberCopy.id}`}>
                            {memberCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/member/${memberCopy.id}`}>
                            {memberCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/member/${memberCopy.id}`}>
                            {memberCopy.membername}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/member/${memberCopy.id}/blogs`}>
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

export default InlineMemberEditor;

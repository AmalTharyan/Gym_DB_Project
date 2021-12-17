import trainerService from "./trainer-service"

const {useState, useEffect} = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;
const TrainerList = () => {
    const history = useHistory()
    const {id} = useParams()
    const [trainer, setTrainer] = useState([])

    useEffect(() => {
        findAllTrainers()
    }, [])
    const findAllTrainers = () =>
        trainerService.findAllTrainers()
            .then(trainer => setTrainer(trainer))

    return (
        <div>
            <h2 className="fst-italic text-info">List of Trainer</h2>
            <button onClick={() => history.push("/trainer/new")}>
                Add Trainer
            </button>
            <ul className="list-group">
                {
                    trainer.map(trainer =>
                                   <li className="list-group-item list-group-item-primary"
                                       key={trainer.id}>
                                       <Link to={`/trainer/${trainer.id}`}>
                                           FirstName:{trainer.firstName},
                                           LastName:{trainer.lastName},
                                           UserName:{trainer.username},
                                           Email:{trainer.email},
                                           DOB:{trainer.dob}
                                       </Link>
                                   </li>)
                }
            </ul>


        </div>
    )
}

export default TrainerList;

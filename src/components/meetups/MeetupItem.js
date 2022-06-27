import classes from './MeetupItem.module.css'
import Card from '../ui/Card';


const MeetupItem = (props) =>{
    return <li className={classes.item}>
        <Card>
        <div className={classes.image}> <img src={props.image} alt={props.title} /> </div>
        
        <div className={classes.contents}> 
            <h3>{props.title} </h3>
        <address>{props.address}</address>
        <p>{props.descripton}</p>
        </div>
        <div className={classes.actions}>
            <button>To Favourites</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;
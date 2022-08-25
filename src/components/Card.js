import './Card.css' 

function Card(props){
    const classes = 'card ' + props.className //must allow classes to be applied at each instance of Card, in the same way classes can be applied to standard html tags like div
    return <div className={classes}>{props.children}</div>

}

export default Card;

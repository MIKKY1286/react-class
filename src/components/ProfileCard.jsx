import './profile.css'

const ProfileCard = (props) => {
    return (
        <div className=''
            style={style.card}
        >
            <img src={props.image} style={style.image} alt="" width={100} />
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Age: {props.age}</p>
            <a href={props.link} >Website</a>
        </div>
    )
}

// const cardStyle = {
//    border: '1px solid black',
//    backgroundColor: '#f2f2f2',
//    padding: '10px',
// }

const style = {
    card: {
        border: '1px solid black',
        backgroundColor: '#f2f2f2',
        padding: '10px',
    },

    image: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    },

    button: {

    }

}

export default ProfileCard


import './profile.css'

const ProfileCard = ({ image, name, email, age, link }) => {
    return (
        <div className=''
            style={style.card}
        >
            <img src={image} style={style.image} alt="" width={100} />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <a href={link} >Website</a>
        </div>
    )
}

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


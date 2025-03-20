import useDashboard from "./hooks/useDashboard"



const Dashboard = () => {
    const {user} = useDashboard()

    return (
    <div style={styles.container}>
        <nav>
            <p>Good morning, {user?.name}</p>
        </nav>
    </div>
  )
}

export default Dashboard

const styles = {
    container: {
        padding: '5rem '
    }
}

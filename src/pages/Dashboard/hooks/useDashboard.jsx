import { useEffect, useState } from "react"

const userExample = {
    name: 'peter babs',
    email: 'babs@dev.com'
}

const useDashboard = ()=>{
    const [user, setUser] = useState({})
    const [fetchingUser, setFetchingUser] = useState(false)

    useEffect(()=>{
        fetchUser()
    },[])

    const fetchUser = ()=>{
        setFetchingUser(true)
        const userData = userExample // fetch from backend
        setTimeout(() => {
            setUser(userData)
            setFetchingUser(false)
        }, 3000);
    }

    return {
        user
    }
}

export default useDashboard
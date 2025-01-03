import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../../context/AuthContext';

type Props = {

}

const Officer = (props: Props) => {
    const { user } = useAuth()
    if (user?.role === 'user') {
        return <Navigate to={'/home'} />
    }
    return (
        <Outlet />
    )
}

export default Officer
import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import { jwtDecode } from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isAdmin = false

    if (token) {
        const decoded = jwtDecode(token)
        const { id, roles } = decoded.UserInfo

        isAdmin = roles.includes('Admin')

        return { id, roles, isAdmin }
    }

    return { id: '', roles: [], isAdmin }
}
export default useAuth
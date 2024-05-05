import { useDispatch, useSelector } from 'react-redux'
import { counterReset, sessionLogout } from '../redux/actions';

const UserInfo = () => {
    const dispatch = useDispatch();
    const sessionInfo = useSelector(state => state.session);

    const logout = () => {
        dispatch(sessionLogout());
        dispatch(counterReset());
    }
    
    return (
        <div>
            <h1>Hello, {sessionInfo.user}!</h1>
            <button onClick={logout}>Logout</button>
            <br /><br /><br />
        </div>
    );
}

export default UserInfo;
import { useSelector } from "react-redux"

import Login from "./Login";
import UserInfo from "./UserInfo";
import Counter from "./Counter";

const Session = () => {
    const session = useSelector(state => state.session);

    return (
        <div>
            {
                session.loggedIn 
                ?  
                <>
                    <UserInfo />
                    <Counter />
                </>
                : <Login />
            } 
        </div>
    );
};

export default Session;

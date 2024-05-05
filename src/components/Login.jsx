import { useDispatch } from "react-redux";
import { sessionLogin } from "../redux/actions";
import { useEffect, useRef } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        dispatch(sessionLogin(formData.name));
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    name="name" 
                    required 
                    placeholder="Enter Name"
                /> 
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;

import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <input
                    ref={nameRef}
                    type="text" name='name' /> <br /><br />
                <input
                    ref={emailRef} defaultValue={'ratul@gdf.com'}
                    type="email" name='email' /> <br /> <br />
                <input
                    ref={passwordRef}
                    type="password" name='password' /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;
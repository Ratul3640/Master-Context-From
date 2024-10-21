import React from 'react';
import useInputState from '../../../Hooks/UseInputState';

const HookForm = () => {
// const [name,handleNameChange] =useInputState('Ratul Hooked')
    const emailState = useInputState('defaultValue@.go')


    const handleSubmit = e => {
        console.log('form data',emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> <br /><br /> */}
                <input {...emailState} type="email" name='email' /> <br /> <br />
                <input type="password" name='password' />  <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;
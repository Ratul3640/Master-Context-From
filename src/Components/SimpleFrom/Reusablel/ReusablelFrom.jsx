import React from 'react';

const ReusablelFrom = ({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form onClick={handleLocalSubmit}>
                <input type="text" name='name' /> <br /><br />
                <input type="email" name='email' /> <br /> <br />
                <input type="text" name='phone' /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusablelFrom;
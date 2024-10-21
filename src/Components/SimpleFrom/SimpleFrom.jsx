import React from 'react';

const SimpleFrom = () => {
  
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted');
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <input type="text" name='name' /> <br /><br />
                <input type="email" name='email' /> <br /> <br />
                <input type="text" name='phone' />
                <br />
               <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;
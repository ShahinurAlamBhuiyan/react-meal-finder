import './Shipment.css'
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => console.log(data);

    const history = useHistory()

    const handleSubmitBtn = () =>{
        history.push('/orderComplete')
    }

    return (
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='Your name' />
            {errors.name && <span className='error'>Name is required</span>}
            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='Your email' />
            {errors.email && <span className='error'>Email is required</span>}
            <input name="address" ref={register({ required: true })} placeholder='Your address' />
            {errors.address && <span className='error'>Addres is required</span>}
            <input name="phone" ref={register({ required: true })} placeholder='Your phone number' />
            {errors.phone && <span className='error'>Phone Number is required</span>}
            <input className='inputBtn' type="submit"  onClick={handleSubmitBtn} />
        </form>
    );
};

export default Shipment;
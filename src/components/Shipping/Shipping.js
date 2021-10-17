import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { clearTheCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth();
    const history = useHistory();
    const onSubmit = data => {
        history.push('/placeorder');
        clearTheCart();
    };
  
    console.log(watch("example"));
    return (
        <div>
         <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

      <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />
      <input placeholder="Address" defaultValue="" {...register("address")} />
      <input placeholder="City" defaultValue="" {...register("city")} />
      <input placeholder="phone number" defaultValue="" {...register("phone" , {required: true})} />
      
      
      <input placeholder="Your email" defaultValue={user.email}{...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      
      <input type="submit" className="btn-regular"/>
      </form>
        </div>
    );
};

export default Shipping;
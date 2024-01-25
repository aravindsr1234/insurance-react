import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPolicy } from "../../features/policy/policySlice";
import axios from "axios";

const Form = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPolicy());
    }, [dispatch]);

    const data = useSelector((state) => state.policy.policyData);
    console.log(data);

    return (
        <div>
            <form>
                <label htmlFor="salutation"></label>
                <select name="" id="salutation">
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                </select>

                <label htmlFor="name"></label>
                <input type="text" id="name" />

                <label htmlFor="email"></label>
                <input type="text" id="email" />

                <label htmlFor="gender"></label>
                <select name="" id="gender">
                    <option value="">male</option>
                    <option value="">female</option>
                </select>

                <label htmlFor="dob"></label>
                <input type="date" id="dob" />

                <label htmlFor="age"></label>
                <input type="text" id="age" />

                <label htmlFor="address"></label>
                <input type="text" id="address" />

                <input type="checkbox" id="qualifications" />
                <label htmlFor="qualifications">diploma</label>
                <input type="checkbox" id="qualifications1" />
                <label htmlFor="qualifications1">diploma</label>
                <input type="checkbox" id="qualifications2" />
                <label htmlFor="qualifications2">diploma</label>

                <label htmlFor="profession">profession</label>
                <input type="text" id="profession" />

                <label htmlFor="nominee">nominee</label>
                <input type="text" id="nominee" />

                <label htmlFor="nomineeRel"></label>
                <select name="" id="nomineeRel">
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                </select>

                <label htmlFor="nomineeRel">nomineeRel</label>
                <select name="" id="nomineeRel">
                    <option value="">Mr</option>
                    <option value="">Mrs</option>
                </select>

                <label htmlFor="">Insurance Details</label>
                {data.map((data) => (
                    <label><input type="radio" value={data.insuranceName} id="" /> {data.insuranceName}</label>
                ))}
            </form>
        </div>
    )
};

export default Form;
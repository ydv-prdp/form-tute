'use client'

import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import toast from 'react-hot-toast'
import { data } from "@/data";
import { ChangeEvent, useEffect, useState } from "react";
import DisplayComponent from "./DisplayComponent";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
  }


//   enum HobbyEnum {
//     sport = "sport",
//     art = "art",
//     music = "music"
//   }
  console.log(data);
  interface IFormInput {
    firstName: String;
    lastName:String;
    gender: GenderEnum;
    age:number;
    phone:String;
    hobby:String;
    location:String;
    stateSel:String;
    districtSel:String;
  }
 
const FormComponent = () => {
    const [district, setDistrict] = useState<string[]>([]);
    const { register,  watch,formState: { errors }, handleSubmit, reset } = useForm<IFormInput>();
    
   
    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
        toast.success("Form submitted successfully")
        reset();
    }
    const handleSelect = (e:ChangeEvent<HTMLSelectElement>)=>{
        setDistrict(data.states[e.target.selectedIndex - 1].districts);
        console.log("this is dist",district)
    }
  

  return (
    <div>
        FormComponent
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input  {...register("firstName", { required: true, maxLength: 20 })} />
                <p className="text-red-500">{errors.firstName && errors.firstName.type === "required" && "First name is required"}</p>
                <p className="text-red-500">  {errors.firstName && errors.firstName.type === "maxLength" && <span>Max length exceeded</span> }</p>
            <br/>
            <br/>
            <label>Last Name</label>
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <br/>
            <label>Gender Selection</label>
            <select {...register("gender")} >
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <br/>
            <label>Age</label>
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <p className="text-red-500">{errors.age && "Must be a number between 18 and 99"}</p>
            <br/>
            <p>Hobby</p>
            <label>Art</label>
            <input type='checkbox' value="art"  {...register("hobby", {required:{
                    value:true,
                    message:'Hobby is requried'
                }
            })} />

            <br/>
            <label>Sport</label>
            <input type='checkbox' value="sport" {...register("hobby", {required:{
                    value:true,
                    message:'Hobby is requried'
                }
            })} />
          
            <br/>
            <label>Music</label>
            <input type='checkbox' value="music"  {...register("hobby", {required:{
                    value:true,
                    message:'Hobby is requried'
                }
            })} />
            <p className="text-red-500">{errors.hobby && "A hobby must be selected"}</p>
            <br/>
            <p>Lives in City</p>
            <label>Yes</label>
            <input type='radio' value="Yes"  {...register("location", {required:{
                    value:true,
                    message:'Location is requried'
                }
            })} />
            
            <br/>
            <label>No</label>
            <input type='radio' value="No"  {...register("location", {required:{
                    value:true,
                    message:'Location is requried'
                }
            })} />
            <p className="text-red-500">{errors.location && "A location must be selected"}</p>
            <br/>
            <label>Select State</label>
            <select defaultValue="" 
            {...register("stateSel",{ required: true } )} 
            onChange={handleSelect}>
            <option value="" disabled>
                    Choose your state
                </option>
                {data.states.map((state, index)=>(
                    <option key={index} value={state.state}>
                            {state.state}
                    </option>
                ))}
            </select>
            <p className="text-red-500">  {errors.stateSel && <span>Please select state</span> }</p>
            <br/>
            <label>Select District</label>
            <select defaultValue="" 
                
                {...register("districtSel", { required: true })}
            >
                <option value="" disabled>
                    Choose your district
                </option>
                {district?.map((dis, index)=>(
                    <option key={index} value={dis}>
                            {dis}
                    </option>
                ))}
            </select>
            <p className="text-red-500">  {errors.districtSel && <span>Please select district</span> }</p>
            
            <input type="submit" />
        </form>
        <DisplayComponent/>
    </div>
  )
}

export default FormComponent
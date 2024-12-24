import { useRef, useState } from "react"
import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>
}

const PersonalInfo = ({ errors, register, setValue }: Props) => {
  function calculateAge(value: string) {
    const dob = new Date(value);
    const now = new Date();
    const a = parseInt(((now.valueOf() - dob.valueOf()) / 31536000000).toString());
    setValue("age", a)
  }

  return (
    <div className='p-3 border border-zinc-200 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Basic information</h3>
      <fieldset>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="firstName" className="pi-label">First Name</label>
            <input type="text" id="firstName" className="pi-input" placeholder="Enter your first name"  {...register("firstName", { required: "First name cannot be null" })} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="lastName" className="pi-label">Last Name</label>
            <input type="text" id="lastName" className="pi-input" placeholder="Enter your last name"  {...register("lastName", { required: "Last name cannot be null" })} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="middleName" className="pi-label">Middle Name</label>
            <input type="text" id="middleName" className="pi-input" placeholder="Enter your middle name" {...register("middleName")} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="DOB" className="pi-label">Date of Birth</label>
            <input type="date" id="DOB" className="pi-input" placeholder="15/12/2001" {...register("DOB", {
              onChange(e) {
                calculateAge(e.target.value);
              }, required: "Date of birth cannot be null"
            })} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="age" className="pi-label">Age</label>
            <input type="text" readOnly id="age" className="pi-input" placeholder="Your age" {...register("age", { })} />
          </div>
        </div>
      </fieldset>
    </div >
  )
}

export default PersonalInfo
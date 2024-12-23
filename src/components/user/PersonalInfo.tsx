import { useRef, useState } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>

}

const PersonalInfo = ({ errors, register }: Props) => {
  const [age, setAge] = useState(0);
  function calculateAge(value: string) {
    const dob = new Date(value);
    const now = new Date();
    const a = parseInt(((now.valueOf() - dob.valueOf()) / 31536000000).toString());
    setAge(a)
  }

  return (
    <div className='p-3 border border-zinc-200 rounded-lg'>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">Basic information</h3>
      <fieldset>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="first-name" className="pi-label">First Name</label>
            <input type="text" name="first-name" id="first-name" className="pi-input" placeholder="Enter your first name" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="last-name" className="pi-label">Last Name</label>
            <input type="text" name="last-name" id="last-name" className="pi-input" placeholder="Enter your last name" required />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="middle-name" className="pi-label">Middle Name</label>
            <input type="text" name="middle-name" id="middle-name" className="pi-input" placeholder="Enter your middle name" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="DOB" className="pi-label">Date of Birth</label>
            <input type="date" name="DOB" id="DOB" className="pi-input" placeholder="15/12/2001" required onChange={(e) => { calculateAge(e.target.value) }} />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="age" className="pi-label">Age</label>
            <input type="number" name="age" id="age" className="pi-input" placeholder="Your age" value={age} disabled />
          </div>
        </div>
      </fieldset>
    </div >
  )
}

export default PersonalInfo
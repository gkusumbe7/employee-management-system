import EmpList from "../EmployeeComponents/EmpList";
import { useState } from "react";
let AddEmpData = () => {
  const [empData, setEmpData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    role: "",
    dob: "",
    joiningDate: "",
    city: "",
    education: "",
  });

  const handleChange = (e) => {
    if (e.target === "") {
      alert("add value");
    } else {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log("formData is ", formData);
    setEmpData((previousData) => [...previousData, formData]);
    setFormData({
      name: "",
      gender: "",
      role: "",
      dob: "",
      joiningDate: "",
      city: "",
      education: "",
    });
  };
  // console.log(empData);
  return (
    <>
      <section className=" flex p-10 justify-center border border-black ">
        <div className="bg-red-200 container font-semibold text-md border p-4">
          <h1 className="text-center text-xl">Employee Details</h1>
          <form onSubmit={hadleSubmit} className=" flex flex-col  gap-2 w-1/2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="border font-thin text-md p-0.5"
              placeholder="Enter Name"
            />
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              className="border font-thin text-md p-0.5"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              className="border font-thin text-md p-0.5"
              value={formData.role}
              onChange={handleChange}
            >
              <option>Select Role</option>
              <option>SDE-1</option>
              <option>Tester</option>
              <option>Frontend Developer</option>
              <option>Operation</option>
              <option>Manager</option>
            </select>
            <label htmlFor="dob">Date Of Birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              className="border font-thin text-md p-0.5"
              value={formData.dob}
              onChange={handleChange}
            />

            <label htmlFor="joiningDate">Joining Date</label>
            <input
              id="joiningDate"
              name="joiningDate"
              type="date"
              className="border font-thin text-md p-0.5"
              value={formData.joiningDate}
              onChange={handleChange}
            />
            <label htmlFor="city">City </label>
            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border font-thin text-md p-0.5"
              placeholder="Enter City"
            />
            <label htmlFor="education">Education</label>
            <input
              id="education"
              name="education"
              type="text"
              className="border font-thin text-md p-0.5"
              placeholder="Enter Education"
              value={formData.education}
              onChange={handleChange}
            />
            <button
              className="bg-blue-200 hover:bg-blue-300 text-center p-1 w-1/3 border border-black"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <EmpList empData={empData} />
    </>
  );
};
export default AddEmpData;

let EmpList = ({ empData }) => {
  console.log(empData);
  return (
    <>
      <section>
        <table>
          <thead>
            <tr className="bg-blue-300">
              <th className="text-xl border border-black p-1">Name</th>
              <th className="border border-black p-1">Gender</th>
              <th className="border border-black p-1">Role</th>
              <th className="border border-black p-1">DOB</th>
              <th className="border border-black p-1">Joining</th>
              <th className="border border-black p-1">City</th>
              <th className="border border-black p-1">Education</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.role}</td>
                <td>{data.dob}</td>
                <td>{data.joiningDate}</td>
                <td>{data.city}</td>
                <td>{data.education}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default EmpList;

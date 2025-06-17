import { NavLink } from "react-router-dom";
const Navbar = ({ logo }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white p-2 rounded-xl font-medium"
      : "text-white p-2 rounded-xl font-medium";

  return (
    <nav className='py-3 flex justify-between items-center p-3  bg-blue-500 border-b-2 border-gray-200 sticky top-0'>
      <NavLink to='/' className='flex justify-center items-center gap-5 '>
        <img className='h-10 ' src={logo} alt='Navbar react icon logo' />
        <h1 className='text-2xl font-bold text-white'>React Jobs </h1>
      </NavLink>
      <div>
        <ul className='flex justify-between items-center gap-5'>
          <li>
            <NavLink to='/' className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/jobs' className={linkClass}>
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-job' className={linkClass}>
              Add a Job
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

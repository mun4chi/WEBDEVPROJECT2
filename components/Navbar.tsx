
/*

Navbar.tsx was created by Sebastian Brown on October 29, 2026

This component displays the navbar for the student portal.
This file does not receive any props.
It displays the schools name and the three navigation links.
Each link take the user to its section on the page.
The output is just the navigation bar (which is the schools name, and the 3 links).
*/

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

        {/* School name */}
        
        <h1 className="text-xl font-bold">
          New Generation High School
          </h1>

        {/* Navigation links */}

        <div className="flex flex-wrap gap-5">
          <a href="#overview" className="hover:text-blue-200">
            Overview
          </a>

          <a href="#students" className="hover:text-blue-200">Students</a>

          <a href="#add-student" className="hover:text-blue-200">
            Add a student
          </a>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;

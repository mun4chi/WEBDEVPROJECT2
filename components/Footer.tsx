
/*
Footer.tsx was written by Sebastian Brown on October 29, 2026

This component displays the footer of the schools portal.
This file does not receieve props and does not use state.
This file is responsible for display the schools address, phone number, and email.
The output is a footer which is displayed under the pages content
*/


const Footer = () => {
  return (
    <footer className="bg-blue-900 px-6 py-6 text-white">
      <div className="mx-auto max-w-6xl text-center">

        {/* School name */}

        <h2 className="text-lg font-bold">
          New Generation High School
        </h2>

        {/* School contact info */}
        <p className="mt-2 text-sm text-blue-100">45 Street Avenue, Calgary, AB</p>

        <p className="mt-1 text-sm text-blue-100">Phone: 403-123-4567</p>

        <p className="mt-1 text-sm text-blue-100"> Email: SuperCoolHighschool@gmail.com</p>

      </div>
    </footer>
  );
};

export default Footer;

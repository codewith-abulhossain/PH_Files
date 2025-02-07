import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex items-center  p-16  text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-500">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to="/">
            <button className="btn"> Back to homepage</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

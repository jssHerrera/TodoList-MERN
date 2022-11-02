import { Link } from "react-router-dom";

const Nofount = () => {
  return (
    <section className="h-screen flex items-center  p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold font-mono md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={"/"}
            class="text-gray-500 font-mono text-xl dark:bg-gray-200 p-3 rounded-md hover:shadow-md"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Nofount;

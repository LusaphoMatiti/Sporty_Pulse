import { SubmitButton } from "../form/Buttons";
import Container from "../global/Container";

const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900 border-t border-gray-200 mt-10">
      <div className=" mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Sign up for exclusive offers and to be notified of the latest
            product drops
          </h2>

          {/* Form */}
          <div className="w-full max-w-lg p-4">
            <div className="flex flex-col gap-3 sm:flex-row ">
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-400"
              />

              <SubmitButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

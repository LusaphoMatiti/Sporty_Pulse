import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  title: string;
  description: string;
};

const EmptyState = ({ title, description }: Props) => {
  return (
    <section
      className="bg-white dark:bg-gray-900"
      aria-labelledby="empty-state-title"
    >
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div
          className="flex flex-col items-center max-w-sm mx-auto text-center"
          aria-live="polite"
        >
          <p className="p-3 text-sm font-medium rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">{title}</h1>
          <p className="mt-4 ">{description}</p>

          <div className="flex items-center w-full mt-6 gap-x-4 shrink-0 sm:w-auto">
            <Link href="/products">
              <Button className="flex items-center justify-center px-9 py-2 text-sm transition-colors duration-200 border rounded-lg gap-x-2 cursor-pointer  w-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Shop</span>
              </Button>
            </Link>

            <Link href="/">
              <Button className=" px-5 py-2 text-sm tracking-wide transition-colors duration-200  rounded-lg shrink-0 sm:w-auto cursor-pointer w-15">
                Take me home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyState;

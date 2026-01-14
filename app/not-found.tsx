import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <h1 className="text-2xl font-medium text-blue-500 dark:text-blue-400">
            404 ERROR
          </h1>
          <p className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Looks like you dropped the bar!
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            This page is out of shape.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link href="/">
              <Button className="w-1/2 px-5 py-2 text-sm tracking-wide  transition-colors duration-200  rounded-lg shrink-0 sm:w-auto cursor-pointer">
                Take me home
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-100 rounded-lg object-cover "
            src="/404.jpg"
            alt="Illustration for 404 error page"
          />
        </div>
      </div>
    </section>
  );
}

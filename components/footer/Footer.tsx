"use client";

import Logo from "../navbar/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />

            <p className="mt-3 max-w-sm text-sm text-gray-500 dark:text-gray-400">
              Join thousands of others and stay updated with new training gear,
              tips, and workouts.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <a href="#" aria-label="Reddit" className="hover:text-foreground">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-foreground"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              <a href="#" aria-label="GitHub" className="hover:text-foreground">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.5 6.9 9.9.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2.2-.3-4.6-1.1-4.6-5a4 4 0 0 1 1-2.8c-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.8c0 3.9-2.4 4.7-4.6 5 .3.3.7.8.7 1.7v2.5c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.3C22 6.6 17.5 2 12 2Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-700 dark:text-white">
              Our Story
            </h3>
            <a
              href="#"
              className="mt-3 block text-sm text-gray-500 hover:text-foreground"
            >
              Company
            </a>
            <a
              href="#"
              className="mt-2 block text-sm text-gray-500 hover:text-foreground"
            >
              Community
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-700 dark:text-white">
              Equipment
            </h3>
            <a
              href="#"
              className="mt-3 block text-sm text-gray-500 hover:text-foreground"
            >
              Upper Body
            </a>
            <a
              href="#"
              className="mt-2 block text-sm text-gray-500 hover:text-foreground"
            >
              Lower Body
            </a>
            <a
              href="#"
              className="mt-2 block text-sm text-gray-500 hover:text-foreground"
            >
              Core
            </a>
            <a
              href="#"
              className="mt-2 block text-sm text-gray-500 hover:text-foreground"
            >
              Full Body
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-700 dark:text-white">
              Contact
            </h3>
            <p className="mt-3 text-sm text-gray-500">071 444 6688</p>
            <p className="mt-2 text-sm text-gray-500">ludz@sportypulse.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © Sporty Pulse 2026 — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

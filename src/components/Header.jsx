import { useLocation } from "react-router-dom";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import { cn } from "../utils/cn";
import { Button } from "./Button";

export const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed left-0 top-0 z-50 w-full border-b border-n-6 bg-n-8/90 backdrop-blur-sm lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>

        <nav className="fixed bottom-0 left-0 right-0 top-[5rem] hidden bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent">
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={cn(
                  "relative block px-6 py-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12",
                  item.onlyMobile && "lg:hidden",
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50",
                )}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>
      </div>
    </div>
  );
};

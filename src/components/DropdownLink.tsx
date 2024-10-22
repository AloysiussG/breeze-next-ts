import Link, { LinkProps } from "next/link";
import { MenuButton } from "@headlessui/react";

interface DropdownLinkProps extends LinkProps {
  children: React.ReactNode;
}

interface DropdownButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DropdownLink = ({ children, ...props }: DropdownLinkProps) => (
  <MenuButton>
    {({ active }) => (
      <Link
        {...props}
        className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
          active ? "bg-gray-100" : ""
        } focus:outline-none transition duration-150 ease-in-out`}
      >
        {children}
      </Link>
    )}
  </MenuButton>
);

export const DropdownButton = ({ children, ...props }: DropdownButtonProps) => (
  <MenuButton>
    {({ active }) => (
      <button
        className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
          active ? "bg-gray-100" : ""
        } focus:outline-none transition duration-150 ease-in-out`}
        {...props}
      >
        {children}
      </button>
    )}
  </MenuButton>
);

export default DropdownLink;

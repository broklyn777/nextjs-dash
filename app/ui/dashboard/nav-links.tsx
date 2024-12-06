import Link from "next/link";
import {
  HomeIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

import clsx from "clsx";

// Array med länkar och ikoner
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex flex-col space-y-4">
        {links.map((link) => {
          const LinkIcon = link.icon; // Dynamisk ikonkomponent
          return (
            <li key={link.name} className="group flex items-center gap-2">
              <Link
                href={link.href}
                className="flex items-center gap-2 rounded-md p-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              >
                <LinkIcon className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

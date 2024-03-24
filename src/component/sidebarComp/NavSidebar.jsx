import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", icon: AcademicCapIcon, path: "/dashboard" },
  {
    name: "Report",
    icon: PresentationChartBarIcon,
    children: [
      { name: "Analytics", path: "/analytics" },
      { name: "Reporting", path: "/reporting" },
      { name: "Projects", path: "/projects" },
    ],
  },
  {
    name: "E-Commerce",
    icon: ShoppingBagIcon,
    children: [
      { name: "Orders", path: "/orders" },
      { name: "Products", path: "/products" },
    ],
  },
  { name: "Setting", icon: AcademicCapIcon, path: "/dashboard" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function NavSidebar() {
  const [open, setOpen] = React.useState(-1);
  const currentPath = useLocation().pathname;

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <List>
        {navigation.map((item, index) => (
          //  {!item.children ? a : null}
          <>
            {!item.children ? (
              <ListItem>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                {item.name}
              </ListItem>
            ) : (
              <Accordion
                open={open === index + 1} // Menggunakan index + 1 sebagai nilai open
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === index + 1 ? "rotate-180" : ""
                    }`}
                  />
                }
                key={index}
              >
                <ListItem
                  className="p-0"
                  selected={open === index + 1}
                  key={index}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      {React.createElement(item.icon, { className: "h-5 w-5" })}
                      {/* Membuat ikon dengan menggunakan createElement */}
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      {item.name}
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                {item.children && (
                  <>
                    {item.children.map((child, childIndex) => (
                      <AccordionBody
                        className="py-0 "
                        key={childIndex}
                      >
                        <List className="p-0">
                          <ListItem
                            key={childIndex}
                            className={classNames(
                              child.path === currentPath
                                ? "bg-blue-gray-200 text-gray-900"
                                : "text-gray-600 hover:text-gray-400",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                          >
                            <Link
                              to={child.path}
                              className="ml-10"
                            >
                              {child.name}
                            </Link>
                          </ListItem>
                        </List>
                      </AccordionBody>
                    ))}
                  </>
                )}
              </Accordion>
            )}
          </>
        ))}
        {/* navigation bawah */}
        <hr className="my-2 border-orange-400" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </>
  );
}

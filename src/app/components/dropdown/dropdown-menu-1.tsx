import React, { useState } from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { DropMenuProps } from "@/resource/home/navbarData";

export default function DropMenu({
  menuData = [],
}: {
  menuData: DropMenuProps[];
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-white">
        {menuData.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className=" hover:bg-blue-800 h-full rounded-none text-base flex ">
              {menu.menuTopic}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="mt-0 bg-gray-500">
              <ul className="w-[68rem] flex gap-5 py-1 px-2 text-white">
                {menu.menuList.map((item, index) => (
                  <ListItem
                  href={item.href}
                    key={index}
                    title={item.menuName}
                    children={item.menuIcon}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="flex gap-0 justify-center items-center"
      >
        <a
          ref={ref}
          className={cn(
            "block select-none  rounded-md px-5 py-3 leading-none no-underline outline-none transition-colors group hover:bg-gray-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="w-10 h-10 text-white">{children}</div>
          <div className="text-md font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

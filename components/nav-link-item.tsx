"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface NavLinkItemProps {
  label: string;
  href: string;
}

export default function NavLinkItem(props: NavLinkItemProps) {
  const pathName = usePathname();
  return (
    <Link href={props.href}>
      <nav
        className={twMerge(
          "text-lg text-headings animation-all hover:scale-105",
          pathName == props.href ? "text-brand-color" : null
        )}
      >
        {props.label}
      </nav>
    </Link>
  );
}

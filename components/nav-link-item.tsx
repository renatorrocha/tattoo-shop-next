import Link from "next/link";

interface NavLinkItemProps {
  label: string;
  href: string;
}

export default function NavLinkItem(props: NavLinkItemProps) {
  return (
    <Link href={props.href}>
      <nav className="text-lg">{props.label}</nav>
    </Link>
  );
}

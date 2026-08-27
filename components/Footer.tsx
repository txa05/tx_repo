import { JSX, SVGProps } from "react";
import { cacheLife } from "next/cache";

import Link from "next/link";

import { Mail } from "lucide-react";

import { Github, Linkedin, Instagram } from "@/lib/brand-icons";

const navigation = [
  {
    name: "Instagram",
    href: "https://instagram.com/your-instagram",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <Instagram {...props} />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tchiade-estevão-xavier-b701222b2",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <Linkedin {...props} />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/txa05",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <Github {...props} />
    ),
  },
  {
    name: "Mail",
    href: "mailto:tchiadeestevaox@gmail.com",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <Mail {...props} />
    ),
  },
];

export default async function Footer() {
  "use cache";
  cacheLife("max");
  return (
    <footer className="relative z-20 overflow-hidden border-t border-red-500/30 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-6 md:order-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/60 transition-[transform,color] duration-300 hover:-translate-y-1 hover:scale-110 hover:text-emerald-400 active:scale-[0.97]"
              target="_blank"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base leading-5 text-white/50">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-white/80">Tx</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

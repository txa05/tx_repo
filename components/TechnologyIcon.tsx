import {
  Atom,
  Braces,
  Boxes,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  LayoutTemplate,
  Monitor,
  Palette,
  Server,
  ShieldCheck,
  TerminalSquare,
  type LucideIcon,
  Wrench,
} from "lucide-react";
import Image from "next/image";

import { type TechnologySummary } from "@/lib/objects";

type Props = {
  technology: TechnologySummary;
  className?: string;
};

const normalizeName = (name: string) =>
  name
    .toLowerCase()
    .replace(/\+\+/g, " plus plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const technologyIcons: Record<string, LucideIcon> = {
  c: FileCode2,
  "c plus plus": Code2,
  python: TerminalSquare,
  typescript: Code2,
  javascript: Braces,
  sql: Database,
  html: Globe,
  css: Palette,
  react: Atom,
  "next js": LayoutTemplate,
  "node js": Server,
  nestjs: Server,
  "rest apis": Server,
  jwt: ShieldCheck,
  oauth: ShieldCheck,
  prisma: Database,
  postgresql: Database,
  mysql: Database,
  mariadb: Database,
  "posix linux": Cpu,
  pthreads: Cpu,
  readline: TerminalSquare,
  sfml: Monitor,
  minilibx: Monitor,
  git: GitBranch,
  github: GitBranch,
  docker: Boxes,
  "docker compose": Boxes,
  cmake: Wrench,
  make: Wrench,
  valgrind: Cpu,
  "vs code": Code2,
  linux: Cpu,
};

const technologyImageSources: Record<string, string> = {
  c: "/icons/icons8-c-programming.svg",
  "c plus plus": "/icons/c++.svg",
  python: "/icons/icons8-python-48.png",
  typescript: "/icons/icons8-typescript.svg",
  sql: "/icons/sql.png",
  nestjs: "/icons/nestjs.svg",
  postgresql: "/icons/postgresql.svg",
  mysql: "/icons/mysql.png",
  mariadb: "/icons/mariadb.png",
  git: "/icons/icons8-git.svg",
  github: "/icons/icons8-github-24.png",
  docker: "/icons/icons8-docker-logo-24.png",
  cmake: "/icons/cmake.png",
  linux: "/icons/icons8-linux-24.png",
  "vs code": "/icons/vscode.svg",
  make: "/icons/make.png",
  wordpress: "/icons/wordpress.svg",
  prisma: "/icons/prisma.png",
  jwt: "/icons/jwt.svg",
  "rest apis": "/icons/restapi.png",
  "node js": "/icons/nodejs.png",
};

export default function TechnologyIcon({ technology, className }: Props) {
  const normalizedName = normalizeName(technology.name);
  const Icon = technologyIcons[normalizedName] ?? Code2;
  const imageSource = technologyImageSources[normalizedName];

  return (
    <span
      aria-label={technology.name}
      title={technology.name}
      className={`flex items-center justify-center text-emerald-300 ${className ?? "h-8 w-8"}`}
    >
      {imageSource ? (
        <Image
          src={imageSource}
          alt=""
          width={32}
          height={32}
          className="h-full w-full object-contain p-0.5"
          unoptimized
        />
      ) : (
        <Icon className="h-4 w-4" aria-hidden="true" />
      )}
    </span>
  );
}

import "server-only";

import { TechnologyCategory, type TechnologiesResponse } from "@/lib/objects";

const technologyGroups = [
  [
    TechnologyCategory.Language,
    ["C", "C++", "Python", "TypeScript", "SQL"],
  ],
  [
    TechnologyCategory.Backend,
    ["Node.js", "NestJS", "REST APIs", "JWT", "OAuth", "Prisma"],
  ],
  [TechnologyCategory.Db, ["PostgreSQL", "MySQL", "MariaDB"]],
  [
    TechnologyCategory.Tool,
    [
      "Git",
      "GitHub",
      "Docker",
      "CMake",
      "Make",
      "VS Code",
      "Linux",
      "WordPress",
    ],
  ],
] as const;

export async function GetTechnologies(): Promise<TechnologiesResponse> {
  let id = 1;

  return {
    technologies: technologyGroups.flatMap(([category, names]) =>
      names.map((name) => ({
        id: id++,
        name,
        category,
      })),
    ),
  };
}

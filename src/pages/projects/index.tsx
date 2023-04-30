import { allProjects, Project } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { useMemo } from "react";

import BaseLayout from "@/components/layouts/BaseLayout";
import ClientSideOnly from "@/components/lib/ClientSideOnly";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dateFormat = useMemo(
    () => (isMobile ? "MM/dd/yyyy" : "LLLL d, yyyy"),
    [isMobile]
  );

  return (
    <BaseLayout title="Projects">
      <div className="font-light flex flex-col gap-4">
        {projects.map((project, idx) => (
          <Link
            key={idx}
            href={project.url}
            className="hover:opacity-80 mb-3 border-b-1 border-b-slate-700"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-normal">{project.title}</h3>
              <ClientSideOnly>
                <p className="text-moonlightStone text-sm">
                  {format(parseISO(project.date), dateFormat)}
                </p>
              </ClientSideOnly>
            </div>
          </Link>
        ))}
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { projects } };
}

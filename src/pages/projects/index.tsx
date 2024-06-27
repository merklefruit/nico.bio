import { allProjects, Project } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Boxes, ExternalLink, Github } from "lucide-react";
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
    <BaseLayout title="Projects" icon={<Boxes />}>
      <div className="font-light flex flex-col gap-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link ?? project.url}
            target={project.link ? "_blank" : "_self"}
            className={`hover:opacity-80 pb-3 border-b border-b-monochromeKashmir border-opacity-30
            ${idx === projects.length - 1 ? "border-none" : ""}
            ${project.link ? "cursor-alias" : "cursor-pointer"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-2">
                {project.link?.includes("github") ? (
                  <Github strokeWidth={1.5} size={20} className="mt-0.5" />
                ) : (
                  <ExternalLink
                    strokeWidth={1.5}
                    size={18}
                    className="mt-0.5"
                  />
                )}
                <h3 className="font-normal underline-offset-1">
                  {project.title}
                </h3>
              </div>

              <ClientSideOnly>
                <p className="text-moonlightStone text-sm">
                  {format(parseISO(project.date), dateFormat)}
                </p>
              </ClientSideOnly>
            </div>
            <p className="mt-2 text-monochromeCadet text-sm">
              {project.description}
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-opacity-90 text-moonlightBlue text-sm">
                Skills: {project.skills.join(", ")}
              </p>
            </div>
          </a>
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

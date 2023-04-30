import { allProjects, Project } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

import BaseLayout from "@/components/layouts/BaseLayout";
import ClientSideOnly from "@/components/lib/ClientSideOnly";

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  return (
    <BaseLayout title="Projects">
      <div className="pb-8">
        <p className="text-monochromeCloud font-light">
          Here&apos;s a list of my public side-projects I&apos;ve worked on in
          my spare time.
        </p>
      </div>
      <div className="font-light flex flex-col gap-4">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link ?? project.url}
            target={project.link ? "_blank" : "_self"}
            className="hover:opacity-80 pb-3 border-b border-b-monochromeKashmir border-opacity-30"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-normal underline-offset-1">
                {project.title}
              </h3>

              <ClientSideOnly>
                <p className="text-moonlightStone text-sm">
                  {format(parseISO(project.date), "MMMM yyyy")}
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

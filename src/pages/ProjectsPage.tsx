import { useState } from "react";
import { projectsInfo } from "../components/projects/utils/projectsInfo";
import { ProjectType } from "../components/projects/utils/ProjectTypes";
import Project from "../components/projects/Project";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType>(
    projectsInfo[0]
  );

  return (
    <main className="flex flex-col lg:flex-row p-12 space-x-4">
      <div className="flex-1 flex-col space-y-8 border-r-[1px] border-[#686868] p-8">
        <h1 className="text-[35px] font-semibold ">My personal projects</h1>
        <p className="text-[#b4b4b4] text-[15px]">
          Welcome to my portfolio projects page! Here, you'll find a selection
          of my favorite projects, showcasing my skills not only in web
          development. From sleek and modern designs to seamless user
          experiences, each project represents my commitment to delivering
          high-quality solutions. With expertise in various technologies and
          frameworks like React and Node.js, I strive to create innovative and
          impactful web applications.
        </p>
      </div>
      <div className="w-2/3 flex flex-col">
        <div className="flex flex-row justify-around">
          {projectsInfo?.map((project, i: number) => {
            return (
              <div key={i}>
                <button
                  className={`cursor-pointer p-2 ${
                    project.tabTitle === selectedProject.tabTitle
                      ? "border-b-[2px] bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent font-semibold border-blue-500"
                      : "hover:bg-black/50"
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.tabTitle}
                </button>
              </div>
            );
          })}
        </div>
        <Project project={selectedProject} />
      </div>
    </main>
  );
};

export default ProjectsPage;

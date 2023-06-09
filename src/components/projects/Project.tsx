import { ProjectType } from "./utils/ProjectTypes";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col p-12 space-y-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <a
            target="_blank"
            href={
              project.projectInfo.projectLink
                ? project.projectInfo.projectLink
                : project.projectInfo.projectUrl
            }
          >
            <h1
              className="cursor-pointer hover:bg-gradient-to-br from-[#5b37eb]
            to-[#37eba9] hover:bg-clip-text hover:text-transparent text-[24px] font-semibold"
            >
              {project.projectInfo.title}
            </h1>
          </a>
          <p className="text-[13px] text-[#a1a1a1]">
            {project.projectInfo.technologies}
          </p>
        </div>
        <a
          href={project.projectInfo.projectUrl}
          target="_blank"
          className="rounded-full p-4 bg-[#202020] hover:bg-[#303030] cursor-pointer"
        >
          <svg
            className="h-8 w-8"
            enableBackground="new 0 0 512 512"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path
                d="M200,513c0-20.3,0-40.7,0-61c3.1,0.6,1.9,3.1,1.9,4.8c0.1,16.3,0.2,32.6,0,48.9c-0.1,4.1,1,5.4,5.2,5.4   c36.6-0.2,73.2-0.2,109.8,0c4.4,0,5.1-1.6,5.1-5.5c-0.2-25-0.1-49.9-0.1-74.9c0-9.3,0.2-18.6,0.2-27.9c2.8,1.2,1.6,3.8,1.6,5.7   c0.1,34.8,0.1,69.6,0.1,104.4C282.7,513,241.3,513,200,513z"
                fill="#D1D1D1"
              />
              <path
                d="M322.2,402.8c-0.1,9.3-0.2,18.6-0.2,27.9c0,25-0.1,49.9,0.1,74.9c0,3.9-0.7,5.5-5.1,5.5   c-36.6-0.2-73.2-0.2-109.8,0c-4.2,0-5.3-1.3-5.2-5.4c0.2-16.3,0.1-32.6,0-48.9c0-1.7,1.2-4.2-1.9-4.8c-9.7,0.9-19.3,3.2-29.2,2.8   c-33.5-1.3-59.5-15.4-74.7-45.8c-8.2-16.4-17.8-31.7-29.1-46c-3.1-3.9-7.9-5.5-11.5-8.7c-1.1-1-2.4-1.8-3.3-3   c-2.3-3.3-1.2-5.8,2.8-6.2c18.5-1.9,33.8,4.2,46.2,18.1c6.3,7.1,10.2,15.8,16.3,23.1c12.3,14.7,28,22.7,47,24.9   c11.5,1.3,22.4-0.9,33.3-4.2c2.2-0.6,3.1-2,3.3-4.3c0.7-10.3,2.8-20.3,6.8-29.9c1.8-4.3,4.7-7.9,6.9-12.3   c-10.3-2.6-20.7-3.4-30.5-6.4c-27.1-8.2-50.9-21.6-68.2-44.7c-8.3-11-14.1-23.3-17.4-36.5c-1.8-7.2-3.9-14.4-3.8-22   c0.1-13.3-0.5-26.7,0.3-40c0.9-16.8,3.1-33.5,9.2-49.2c3.8-9.7,9.3-18.6,17.1-25.9c2.4-2.3,3.3-4.1,1.8-7.9   c-7.4-19.7-8.1-39.8-1.8-60c0.2-0.6,0.3-1.3,0.4-2c2.2-10.3,4.5-11.3,14.3-7.4c19.2,7.5,33.3,21,45.3,37.3c3.4,4.6,2.7,6.6,10,1.9   c9.7-6.2,21-8.1,32.2-9.3c20.1-2.1,40.3-1.5,60.4-1.1c14.3,0.3,28.5,2.2,42,7.2c3.1,1.1,6,2.8,8.7,4.8c2.1,1.6,3.6,1.6,5.6-1.1   c9.1-12.8,19.5-24.4,33-32.6c6.6-4,13.4-7.7,21.4-8.6c3.3-0.4,4.7,0.7,5.6,3.3c8.3,22.9,9.5,45.7-0.2,68.5   c-1.2,2.8-0.8,4.6,1.3,6.5c16,15,21.8,34.5,24.8,55.5c2.5,17.7,3.2,35.5,2.7,53.3c-0.8,31.2-11.4,58.4-34.4,80.1   c-13.5,12.7-29.7,21.1-47.1,27.5c-12.4,4.6-25.5,5.8-38.5,9c1.3,3.1,3.7,5.4,4.3,8.5c-0.3,1.3,0.4,2,1.6,2.3   c0.1,0.6,0.3,1.1,0.4,1.7c0.3,2.1,0.1,4.3,2.5,5.4c0.5,2.2,1,4.5,1.4,6.7c-0.1,1.7-0.7,3.5,1.6,4.3c0,0.6,0.1,1.2,0.1,1.9   c-1.5,2.3-0.1,4.1,1.1,6C322.1,398.9,322.2,400.9,322.2,402.8z"
                fill="#A7A7A7"
              />
              <path
                d="M322,397c-1.1-1.9-2.6-3.7-1.1-6C322.1,392.9,323,394.8,322,397z"
                fill="#D1D1D1"
              />
              <path
                d="M317.7,378.2c-2.4-1.1-2.2-3.3-2.5-5.4C317.4,374,317.7,376,317.7,378.2z"
                fill="#D1D1D1"
              />
              <path
                d="M320.8,389.1c-2.3-0.8-1.7-2.6-1.6-4.3C321.5,385.6,321,387.5,320.8,389.1z"
                fill="#D1D1D1"
              />
              <path
                d="M314.8,371.1c-1.2-0.3-1.9-1-1.6-2.3C314.5,369.1,315.1,369.8,314.8,371.1z"
                fill="#D1D1D1"
              />
            </g>
          </svg>
        </a>
      </div>
      <img
        className="max-w-[900px] max-h-[450px] self-center"
        src={project.projectInfo.image}
        alt=""
      />
      <p className="text-[#b4b4b4] text-[15px]">
        {project.projectInfo.description}
      </p>
    </div>
  );
};

export default Project;

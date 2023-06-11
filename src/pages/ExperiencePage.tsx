import Experience from "../components/experience/Experience";
import { experienceContent } from "../components/experience/utils/ExperienceContent";

const ExperiencePage: React.FC = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:p-16 lg:space-x-24">
      <div className="flex flex-col space-y-12 lg:w-1/2 p-4">
        <div className="flex flex-row space-x-12 items-center">
          <img
            className="h-12 w-12"
            src="images/EducationIconBlue.png"
            alt="Education icon"
          />
          <h1
            className="font-bold text-[40px] bg-gradient-to-br from-[#5b37eb]
          to-[#37eba9] bg-clip-text text-transparent"
          >
            Education
          </h1>
        </div>
        <Experience
          title={experienceContent.education.gs.title}
          place={experienceContent.education.gs.place}
          text={experienceContent.education.gs.text}
        />
        <Experience
          title={experienceContent.education.hs.title}
          place={experienceContent.education.hs.place}
        />
      </div>
      <div className="flex flex-col space-y-12 lg:w-1/2 p-4">
        <div className="flex flex-row space-x-12 items-center">
          <img
            className="h-12 w-12"
            src="images/ExperienceIconBlue.png"
            alt="Experience icon"
          />
          <h1
            className="font-bold text-[40px] bg-gradient-to-br from-[#5b37eb]
          to-[#37eba9] bg-clip-text text-transparent"
          >
            Experience
          </h1>
        </div>
        <Experience
          title={experienceContent.experience.vx.title}
          place={experienceContent.experience.vx.place}
          text={experienceContent.experience.vx.text}
        />
      </div>
    </div>
  );
};

export default ExperiencePage;

import React from "react";

interface ExperienceTabProps {
  title: string;
  place: string;
  text?: string;
}

const ExperienceTab: React.FC<ExperienceTabProps> = ({ title, place, text }) => {
  return (
    <div className="flex flex-col space-y-2 text-[#b4b4b4] border-t-2 p-4 w-[90%] mx-auto">
      <h2 className="font-semibold text-[25px] text-white">{title}</h2>
      <p>{place}</p>
      <p>{text}</p>
    </div>
  );
};

export default ExperienceTab;

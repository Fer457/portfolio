const ProjectsPage: React.FC = () => {
  return (
    <main className="flex flex-row p-16 space-x-12">
      <div className="flex-1 flex-col space-y-12 ">
        <h1 className="text-[35px] font-semibold ">My personal projects</h1>
        <p className="text-[#b4b4b4]">
          Welcome to my portfolio projects page! Here, you'll find a curated
          selection of my best works, showcasing my skills not only in web
          development. From sleek and modern designs to seamless user
          experiences, each project represents my commitment to delivering
          high-quality solutions. With expertise in various technologies and
          frameworks like React and Node.js, I strive to create innovative and
          impactful web applications.
        </p>
      </div>
      <div className="w-2/3 flex flex-col space-y-4">
        <div className="flex flex-row justify-around">
          <span className="border-b-2 p-2 cursor-pointer">Project 1</span>
          <span>Project 2</span>
          <span>Project 3</span>
        </div>
        <div className="flex flex-col space-y-6 p-4">
          <img
            className="w-[400px] h-auto mx-auto"
            src="images/placeholder.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

/** @format */

const ProjectsPage: React.FC = () => {
  return (
    <main className="flex flex-row p-16 space-x-12">
      <div className="flex-1 flex-col space-y-12 ">
        <h1 className="text-[35px] font-semibold ">My personal projects</h1>
        <p className="text-[#b4b4b4]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eveniet debitis aliquam quod velit, enim soluta. Sed tenetur veniam vel in
          accusantium eos nemo quaerat esse dicta natus, vitae aliquid qui impedit totam incidunt perspiciatis itaque? Quae nisi sequi, quasi
          voluptatem id expedita voluptatibus quam voluptas unde adipisci distinctio impedit, optio ut officiis aspernatur molestias nam consequatur?
        </p>
          <p className="text-[#b4b4b4]">
            Neque pariatur, minima voluptatum consequatur aspernatur, consequuntur quia vel impedit, ducimus reiciendis exercitationem itaque. Ad
            cupiditate nulla, quod eius maxime ipsum praesentium atque dicta amet provident voluptates ipsam excepturi. Laboriosam itaque quos eius
            numquam vero dolore dolor atque odio neque, nesciunt explicabo illo!
          </p>
      </div>
      <div className="w-2/3 flex flex-col space-y-4">
        <div className="flex flex-row justify-around">
          <span className="border-b-2 p-2 cursor-pointer">Project 1</span>
          <span>Project 2</span>
          <span>Project 3</span>
        </div>
        <div className="flex flex-col space-y-6 p-4">
          <img className="w-[400px] h-auto mx-auto" src="images/placeholder.png" alt="" />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;

export const projectsInfo = [
  {
    tabTitle: "Fhub: Client",
    projectInfo: {
      title: "Fhub: A simple social network - client side",
      projectLink: "https://fhub-client.vercel.app/",
      image: "/images/projects/FhubClient.png",
      technologies: "React, Typescript, Tailwind and Socket.io",
      description:
        "A simple social network application where users can create posts, follow other users, and engage in real-time chat. The client-side of the application was developed using ReactJS, TypeScript, and Tailwind CSS, resulting in a visually appealing and intuitive user interface.",
      projectUrl: "https://github.com/Fer457/FhubClient",
    },
  },
  {
    tabTitle: "Fhub: Server",
    projectInfo: {
      title: "Fhub: A simple social network - server side",
      image: "/images/projects/FhubServer.png",
      projectLink: "https://fhub-client.vercel.app/",
      technologies:
        "Node, ExpressJS, Amazon S3, Socket.io, MongoDB and Mongoose",
      description:
        "The backend of Fhub is powered by Node.js, Express.js and a MongoDB database, providing a robust and scalable foundation. I utilized Socket.io for real-time communication, allowing users to engage in instant messaging. Additionally, I leveraged Amazon S3 for secure and efficient storage of media files, ensuring seamless content sharing and management within the platform.",
      projectUrl: "https://github.com/Fer457/FhubServer",
    },
  },
  {
    tabTitle: "Spain gas stations",
    projectInfo: {
      title: "C# WPF Spain gas stations",
      image: "/images/projects/Gas.png",
      technologies: "C# WPF and Bing maps",
      description:
        "This app uses a map to showcase Spain's gas stations by type. It offers an intuitive and interactive experience, allowing users to easily find and explore their preferred gas stations. With seamless map integration and convenient filtering options, the app provides a user-friendly interface for discovering gas stations across the country.",
      projectUrl: "https://github.com/Fer457/GasFer",
    },
  },
] as const;

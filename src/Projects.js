import candy from "./media/canndy.gif";
import calci from "./media/calci.gif";
import tictactoe from "./media/tictactoe.gif";
import toDo from "./media/toDo.gif";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="projectCard">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Candy Crush App",
      description: "CandyCrush app implemented in React",
      imageUrl: candy,
      url: "https://github.com/vayunbiyani/CandyCrush",
    },
    {
      title: "Cool looking calculator app",
      description: "The title says it all!",
      imageUrl: calci,
      url: "https://github.com/vayunbiyani/cool-looking-calculator-app",
    },
    {
      title: "TicTacToe Application",
      description: "Tictactoe game implemented in React!",
      imageUrl: tictactoe,
      url: "https://github.com/vayunbiyani/TicTacToeApp",
    },
    {
      title: "To Do List",
      description: "ToDo list implemented in React!",
      imageUrl: toDo,
      url: "https://github.com/vayunbiyani/ToDoApp",
    },
    // Add more projects here...
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

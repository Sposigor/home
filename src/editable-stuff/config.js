// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Igor",
  middleName: "",
  lastName: "Esposito",
  message: " Aprendendo a codificar e descobrindo um novo universo. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Sposigor",
    },
    {
      image: "fa-kaggle",
      url: "https://www.kaggle.com/igoresposito",
    },
  ],
};

const about = {
  show: true,
  heading: "Um pouco sobre Mim",
  message:
    "Estudante de Economia e Ciencia de Dados, com a ambição de participar de uma geração que vá além do conhecimento convencional, na buscar pelas novas possibilidade que a tecnologia tem para fornecer, em meu tempo livre, busco soluções de projetos baseados em dados.",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projetos",
  gitHubUsername: "sposigor", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Habilidades",
  hardSkills: [
    { name: "Python", value: 55 },
    { name: "SQL", value: 30 },
    { name: "R", value: 25 },
    { name: "JavaScript", value: 35 },
    { name: "React", value: 20 },
    { name: "HTML/CSS", value: 45 },
  ],
  softSkills: [
    { name: "Objetivos", value: 75 },
    { name: "Colaboração", value: 80 },
    { name: "Positivo", value: 60 },
    { name: "Adaptabilidade", value: 85 },
    { name: "Resolução de Problemas", value: 75 },
    { name: "Empatia", value: 90 },
    { name: "Organização", value: 70 },
    { name: "Criatividade", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Entrar em contato",
  message:
    "Para entrar em contato comigo, por gentileza usar o email",
  email: "sposigor@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch };

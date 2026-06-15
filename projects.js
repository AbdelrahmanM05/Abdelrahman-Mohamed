const projects = [
  {
    title: "Analytics Dashboard",
    label: "Dashboard UI",
    description:
      "A responsive dashboard with data cards, filtering states, charts, and a compact admin layout.",
    tags: ["React", "Tailwind", "Charts"],
    liveUrl: "#",
    codeUrl: "#",
    theme: "project-one",
  },
  {
    title: "Shopfront Experience",
    label: "Commerce Flow",
    description:
      "A product browsing flow with category filters, detail views, cart states, and mobile checkout screens.",
    tags: ["Next.js", "CSS", "API"],
    liveUrl: "#",
    codeUrl: "#",
    theme: "project-two",
  },
  {
    title: "Component Library",
    label: "Design System",
    description:
      "A reusable UI kit with accessible controls, tokens, layout primitives, and documentation examples.",
    tags: ["TypeScript", "Storybook", "A11y"],
    liveUrl: "#",
    codeUrl: "#",
    theme: "project-three",
  },
];

const projectGrid = document.querySelector("#projectGrid");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const media = document.createElement("div");
  media.className = `project-media ${project.theme}`;

  const label = document.createElement("span");
  label.textContent = project.label;
  media.append(label);

  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tags = document.createElement("div");
  tags.className = "tags";
  project.tags.forEach((tagName) => {
    const tag = document.createElement("span");
    tag.textContent = tagName;
    tags.append(tag);
  });

  const links = document.createElement("div");
  links.className = "project-links";

  const liveLink = document.createElement("a");
  liveLink.href = project.liveUrl;
  liveLink.textContent = "Live";
  liveLink.setAttribute("aria-label", `Open ${project.title} live demo`);

  const codeLink = document.createElement("a");
  codeLink.href = project.codeUrl;
  codeLink.textContent = "Code";
  codeLink.setAttribute("aria-label", `Open ${project.title} source code`);

  links.append(liveLink, codeLink);
  content.append(title, description, tags, links);
  card.append(media, content);

  return card;
}

if (projectGrid) {
  projects.forEach((project) => {
    projectGrid.append(createProjectCard(project));
  });
}

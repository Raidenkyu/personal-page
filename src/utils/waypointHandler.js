let currentSection = "home";

const getSectionElement = (navbar, section) => (
  navbar.querySelector(`a[href="#${section}"]`).parentElement
);

export const waypoints = ["home", "about", "resume", "portfolio", "blog"];

export const onEnterHandler = (newSection) => {
  const previousSection = currentSection;
  currentSection = newSection;

  const navbar = document.querySelector("ul#nav");

  const previousSectionElement = getSectionElement(navbar, previousSection);
  const currentSectionElement = getSectionElement(navbar, currentSection);

  if (previousSectionElement) previousSectionElement.classList.remove("current");
  if (currentSectionElement) currentSectionElement.classList.add("current");
};

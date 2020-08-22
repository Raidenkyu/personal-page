const waypoints = ["home", "about", "resume", "portfolio", "blog"];
let currentWaypointIndex = 0;

const getSectionElement = (section) => (
  document.querySelector(`#nav-wrap a[href="#${section}"]`)
);

export const onEnterHandler = ({ previousPosition }) => {
  const previousSection = waypoints[currentWaypointIndex];

  if (previousPosition === "below") {
    currentWaypointIndex++;
  } else if (currentWaypointIndex > 0) {
    currentWaypointIndex--;
  }

  const currentSection = waypoints[currentWaypointIndex];

  const previousSectionElement = getSectionElement(previousSection);
  const currentSectionElement = getSectionElement(currentSection);

  console.log(currentSectionElement);

  if (previousSectionElement) previousSectionElement.classList.remove("current");
  if (currentSectionElement) currentSectionElement.classList.add("current");
};

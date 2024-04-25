document.body.addEventListener("click", (event) => {
  const circles = document.querySelectorAll(".circle");

  if (circles.length === 2)
    circles.forEach((circle) => document.body.removeChild(circle));

  const circle = document.createElement("div");
  circle.classList.add("circle");
  const radius = randomRadius(10, 60);
  const x = event.x;
  const y = event.y;
  circle.style.width = `${2 * radius}px`;
  circle.style.height = `${2 * radius}px`;
  circle.style.left = `${x - radius}px`;
  circle.style.top = `${y - radius}px`;
  document.body.appendChild(circle);

  if (circles.length === 1) {
    const prevStyles = circles[0].style;
    const prevRadius = +prevStyles.width.slice(0, -2) / 2;
    const prevX = +prevStyles.left.slice(0, -2) + prevRadius;
    const prevY = +prevStyles.top.slice(0, -2) + prevRadius;
    const radiiSum = radius + prevRadius;

    // Distance formula
    const distanceBetweenCenters = Math.sqrt(
      (x - prevX) ** 2 + (y - prevY) ** 2
    );

    if (distanceBetweenCenters < radiiSum) {
      console.log("intersecting");
    } else if (distanceBetweenCenters > radiiSum) {
      console.log("no_intersecting");
    } else {
      console.log("touching");
    }
  }
});

const randomRadius = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

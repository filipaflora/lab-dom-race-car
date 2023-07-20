class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // random position for the apperance of obstacles
    this.left = Math.floor(Math.random() * 300 + 100); //max width 300 and min width value is 70, so that I don't have obstacles in the borders
    this.top = 0;
    this.width = 100;
    this.height = 150;

    // create the html element and default styling

    this.element = document.createElement("img");
    this.element.src = "/images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    //Drop the obstacle 3px to the bottom
    this.top += 3;
    this.updatePosition();
  }
}
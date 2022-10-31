
function makeGrids(container, number) {
	for (let i = 0; i < number; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < number; j++) {
			const grid = document.createElement("div");
			grid.classList.add("grid");
			row.appendChild(grid);
			grid.addEventListener("mouseover", hoverEffects);
		}
		container.appendChild(row);
	}
}	

function hoverEffects(e) {
	e.target.classList.add("selected");
  	setTimeout(() => {
	e.target.classList.remove("selected");
	}, 5000);	

}

function modGridNumber(e) {
	const container = document.querySelector("body");
	let grid_number = Number(prompt("Enter Integer Value 1 - 100:", 16));
	if (isNaN(grid_number)) {
		grid_number = 16;
	} else if (grid_number > 100) {
		grid_number = 100;
	}
	while (container.lastChild.className === "row") {
		container.removeChild(container.lastChild);
	}
	makeGrids(container, grid_number);
}
	
	
function main() {
	const container = document.querySelector("body");
	let grid_number = 16;
	makeGrids(container, grid_number);
	const button = document.querySelector("button");
	button.addEventListener("click", modGridNumber);
}

main();

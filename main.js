
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
function main() {
	const container = document.querySelector("body");
	let grid_number = 120;
	makeGrids(container, grid_number);
}

main();

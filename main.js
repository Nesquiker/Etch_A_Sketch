
function makeGrids(container, number) {
	for (let i = 0; i < number; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < number; j++) {
			const grid = document.createElement("div");
			grid.classList.add("grid");
			row.appendChild(grid);
		}
		container.appendChild(row);
	}
}	

function main() {
	const container = document.querySelector("body");
	let grid_number = 16;
	makeGrids(container, grid_number);
}

main();

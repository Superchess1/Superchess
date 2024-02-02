document.addEventListener('DOMContentLoaded', function () {
    // Chessboard interaction
    const chessboardCells = document.querySelectorAll('#game-board1 td, #game-board td');
    let selectedPiece = null;

    chessboardCells.forEach(cell => {
        cell.addEventListener('click', function () {
            if (!selectedPiece) {
                // If no piece is selected, store the selected piece
                if (this.textContent.trim() !== '') {
                    selectedPiece = this;
                    this.classList.add('selected');
                }
            } else {
                // If a piece is already selected, move it to the new position
                this.innerHTML = selectedPiece.innerHTML;
                selectedPiece.innerHTML = '';
                selectedPiece.classList.remove('selected');
                selectedPiece = null;
            }
            
        });
    });

    

    // Navigation functionality
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var moves = []; // Array para almacenar las jugadas

    function movePiece() {
        // Ejemplo: Cambiar el fondo de la celda al hacer clic
        this.style.backgroundColor = 'yellow';

        // Registrar la jugada
        var moveDetails = this.textContent + ' ' + this.parentNode.rowIndex;
        moves.push(moveDetails);

        // Actualizar la lista de jugadas en la seccion2
        updateMovesList();
    }

    function updateMovesList() {
        var movesList = document.getElementById('moves-list');
        movesList.innerHTML = ''; // Limpiar la lista antes de actualizar

        // Agregar cada jugada como un elemento de lista
        moves.forEach(function (move, index) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Jugada ' + (index + 1) + ': ' + move;
            movesList.appendChild(listItem);
        });
    }

    // Obtener todas las celdas de la tabla con clase 'piece'
    var pieceCells = document.querySelectorAll('.piece');

    // Agregar evento de clic a cada celda de la pieza
    pieceCells.forEach(function (cell) {
        cell.addEventListener('click', movePiece);
    });
});

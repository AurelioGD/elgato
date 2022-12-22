import someoneWin from "./someoneWin.js"

const $body = document.querySelector("body")
const $modalWinner = document.querySelector(".modalWinner")
const $textModal = document.querySelector(".textModal")
const $container = document.querySelector(".container")
const $buttonPlayAgainModal = document.querySelector(".buttonPlayAgainModal")
const $buttonPlayAgain = document.querySelector(".buttonPlayAgain")

const CELLS = {
    a1: {element: document.getElementById("a1"), coordinates: [0, 0]},
    a2: {element: document.getElementById("a2"), coordinates: [0, 1]},
    a3: {element: document.getElementById("a3"), coordinates: [0, 2]},
    b1: {element: document.getElementById("b1"), coordinates: [1, 0]},
    b2: {element: document.getElementById("b2"), coordinates: [1, 1]},
    b3: {element: document.getElementById("b3"), coordinates: [1, 2]},
    c1: {element: document.getElementById("c1"), coordinates: [2, 0]},
    c2: {element: document.getElementById("c2"), coordinates: [2, 1]},
    c3: {element: document.getElementById("c3"), coordinates: [2, 2]}
}

const BLEMISH_SYMBOL = "x"
const CIRCLE_SYMBOL = "o"

const BLEMISH = { icon: "x.svg", symbol: BLEMISH_SYMBOL };
const CIRCLE = { icon: "circle.svg", symbol: CIRCLE_SYMBOL };

let TURN = "o"

let SOMEONE_WIN = false

const TURNS = {
    o: CIRCLE,
    x: BLEMISH
}

let BOARD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const getImageElement = (type) => `<img src="${type}"/>`

const getNewTurn = (currentTurn) => currentTurn === BLEMISH_SYMBOL ? CIRCLE_SYMBOL : BLEMISH_SYMBOL

const setBoard = (symbol, coordinates) => {
    const [coordinate1, coordinate2] = coordinates
    const newBOARD = [[...BOARD[0]], [...BOARD[1]], [...BOARD[2]]]
    newBOARD[coordinate1][coordinate2] = symbol
    BOARD = [[...newBOARD[0]], [...newBOARD[1]], [...newBOARD[2]]]
}

const processCell = (cell) => {
    const thereIsImage = document.querySelector(`#${cell} > img`)
    if(thereIsImage) return
    const cellElement = CELLS[cell].element 
    const cellCoordinates = CELLS[cell].coordinates
    const $image = getImageElement(TURNS[TURN].icon)
    setBoard(TURN, cellCoordinates)
    cellElement.innerHTML = $image
    TURN = getNewTurn(TURN)
}
$container.addEventListener("click",(e) => {
    const cell = e.target.id
    if(!cell) return
    if(SOMEONE_WIN) return
    processCell(cell)
    const result = someoneWin(BOARD)
    if(result.won){
        SOMEONE_WIN = true
        $textModal.textContent = `Ganador ${result.who.toUpperCase()}`
        $body.classList.add("showModalWinnerBodyStyles")
        $modalWinner.classList.add("showModalWinner")
    }
})

$buttonPlayAgain.addEventListener("click", (e) => {
    window.location.reload()
})

$buttonPlayAgainModal.addEventListener("click", (e) => {
    window.location.reload()
})
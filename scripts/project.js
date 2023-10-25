export const checkWinner = () => {
    const w = document.querySelector("#winner");
    
    if (value > 45) {
    w.textContent = `Congratulations you are a winner!`;
    }
    else {
    w.textContent = "";
    }
}
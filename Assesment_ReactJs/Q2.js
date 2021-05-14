import react from "react";
function App() {
    const arr = [1, 1, 1, 0, 1, 1, 1, 1];
    let largest = 0;
    let current = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? (current = 0) : current++;
        if (current > largest) {
            largest = current;
        }
    }

    return (
        <div>
            <h1> Repeted 1's are : {largest} </h1>
        </div>
    );
}

export default App;

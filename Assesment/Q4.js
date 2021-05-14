function App() {
    const arr = [1, 1, 1, 0, 1, 1, 1, 1];
    let arr3;
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
            <h1>even number is : {arr3}</h1>
            <h1> largest: {largest} </h1>
        </div>
    );
}

export default App;

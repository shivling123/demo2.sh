import react from "react";
function App() {
    const arr = [3, 5, 6, , 3, 8, 10, 5, 7];

    const arr2 = [];
    let arr3;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i]);
            arr3 = arr2.join();
        } else {
        }
    }
    return (
        <div>
            <h1>even numbers are : {arr3}</h1>
        </div>
    );
}

export default App;

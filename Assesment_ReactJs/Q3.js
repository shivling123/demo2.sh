import react from "react";

function App() {
    const arr = [0,1,2,3,4,5,6,7,7,8,9,10,11];

    const arr2 = [];
    let arr3;
    let a= arr.length;

    for (let i = 0; i < a; i++) {
        for (let j = i + 1; j < a; j++) {
            if (arr[i] === arr[j]) {
                arr2.push(arr[i]);
                arr3 = arr2.join();
            }
        }
    }

    return (
        <div>
            <h1>even number is : {arr3}</h1>
        </div>
    );
}

export default App;

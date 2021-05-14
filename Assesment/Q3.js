function App() {
    const arr = [3, 5, 6, , 3, 8, 10, 5, 7];
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

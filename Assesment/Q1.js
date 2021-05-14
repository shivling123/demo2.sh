function App() {
    const arr = [0,1,2,3,4,5,6,7,7,8,9,10,11];
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
            <h1>even number is : {arr3}</h1>
        </div>
    );
}

export default App;

// use local storage to store data 
const addToData = (id) => {
    let person;

    // get the key "employee" from local storage
    const store = localStorage.getItem('Employee');
    if (store) {
        person = JSON.parse(store);
    } else {
        person = {};
    }

    // add to quantity
    const quantity = person[id];
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        person[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    } else {
        person[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('Employee', JSON.stringify(person));

}
export { addToData }
export default function createIteratorObject(report) {
    let new_array = [];
    let allEmployees = Object.values(report['allEmployees']);
    for (let employee of allEmployees){
        new_array.push(...employee);
    }
    return new_array;
}
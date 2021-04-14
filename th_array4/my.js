let array = [0,3,5,9];
let ismax = array[0];
let index = 0;
for (let i = 1; i<array.length; i++){
    if (ismax <array[i]){
        ismax = array[i];
        index = i;
    }
}
document.write("số lớn nhất là " + ismax + " vị trí " + index)
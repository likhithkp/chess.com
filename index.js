class CustomArray{
    constructor(){
        this.length = 0;
        this.data = {};
    };

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    };
} 

const newArr = new CustomArray();
newArr.push("Shiba");
newArr.push("Shiba1");
newArr.push("Shiba2");
console.log(newArr);
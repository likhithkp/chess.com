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

    pop(){
        if(this.length === 0) return undefined;
        delete this.data[this.length - 1];
        this.length--;
    }

    unshift(item){
        this.data[0] = item;
        this.length++;
    }

    get(index){
        return this.data[index];
    }
} 

const newArr = new CustomArray();
newArr.push("Shiba");
newArr.push("Shiba1");
newArr.push("Shiba2");
console.log('Array', newArr);
newArr.unshift('ShibaFirst');
console.log('Array1', newArr);
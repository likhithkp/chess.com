let names = ["Likhith", "God", "Nishanth", "Shiba", "Lauda"];

const findName = (allNames, studentName) => {
    for(let i = 0; i < allNames.length; i++){
        if(allNames[i] === studentName){
            return allNames[i];
        }
    }
};

console.log(findName(names, "God"));
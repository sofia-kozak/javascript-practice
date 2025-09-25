function cloner(obj) {
    if (obj){
        let functions = [];
        for (const key in obj) {
           if (typeof obj[key] === 'function') {
               const functionClone = obj[key].bind({});
               functions.push({functionClone, key});
           }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            cloneObj[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj
    }

    throw new Error('!!!');
}

const clone = cloner({name: 'coder123', id: 23, email: 'coder123@example.com',
    greeting() {console.log(`Hello`);},
    toUpper(str) {console.log(`Uppercase: ${str.toUpperCase()}`);},
    countChars(str) { console.log(`Кількість символів: ${str.length}`); },
});

clone.greeting();
clone.toUpper("hello");
clone.countChars("I love JavaScript");

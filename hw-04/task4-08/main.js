function foobar(arrayOfPrimitives) {
   document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
foobar([34, `gffghkf`, true]);
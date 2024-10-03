const HelloWorld = require('./app');

test('Debe retornar "Hola Mundo o Hello world"', ()=>{
    expect(HelloWorld()).toBe("Hola Mundo o Hello world");
})
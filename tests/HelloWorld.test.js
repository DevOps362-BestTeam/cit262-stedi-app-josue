import HelloWorld from '../utils/HelloWorld'

it ("Should return Hello World", ()=>{

result = HelloWorld();

expect(result).toBe("Hello World");

});
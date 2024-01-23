import metodoAsincronico from "../../../src/metodos/MetodoAsync";
//toBe verifica igualdad de referencias
//toEqual verifica igualdad de valores
describe("Test General", () => {

    test('Devuelve 1', () => { 

        metodoAsincronico(3).then((res)=>{
            expect(res).toBe(1);
        })
    })

    test.todo("Debe testear algo");
    it.todo("Debe testear otro algo");


})
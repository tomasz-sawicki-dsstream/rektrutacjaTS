
class Base {}

class Ext extends Base {}

type TypeToCheck = 'test' // How to check in runtime if object has this type/interface

function main() {
    const testObj = new Ext()
    const testBase = new Base()

    testFn(testObj);
    testFn(testBase);

}

function testFn(objToTest: Base) {
    console.log('---------')
    if (objToTest instanceof Ext) {
        console.log('Object is Ext')
    } else {
        console.log('Object is not Ext')
    }
    console.log('---------')
}

main()
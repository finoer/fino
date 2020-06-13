/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 */
import Finoer from 'Packs/finoer-core'

export default class Main {
    public static main(): void {
      console.log("main.ts-copy")
    }
}

Main.main();
let fino:Finoer = new Finoer()
console.log('fino', fino)
fino.setName('yueqi')


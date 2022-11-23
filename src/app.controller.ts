import { Get, Controller, Render } from '@nestjs/common';
import { User } from './user';

let lista: Array<User> = [];

lista.push(new User("Gipsz Jakab", true, "1990.04.30", 20000, true));
lista.push(new User("Gipsz Elek", true, "1991.04.30", 0, true));
lista.push(new User("Gipsz Emese", false, "1992.04.30", -3000, true));
lista.push(new User("Gipsz Sándor", true, "1993.04.30", 40000, true));
lista.push(new User("Gipsz Erzsi", false, "2003.04.30", -50000, true));
lista.push(new User("Nagy(Gipsz) Elemér", true, "2004.04.30", 60000, false));

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {elemek: lista.filter(x => x.getActive)};
  }
}

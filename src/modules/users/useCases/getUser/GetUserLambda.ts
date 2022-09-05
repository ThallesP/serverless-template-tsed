import { Controller } from "@tsed/di";
import { Get, Returns, Summary } from "@tsed/schema";

@Controller("/")
export class GetUserLambda {
  @Get("/")
  @Summary("Return an user")
  @Returns(200, String)
  get() {
    return { id: 1, name: "Hello World", password: "asecurepassword" };
  }
}

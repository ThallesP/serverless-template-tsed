import { PlatformServerless } from "@tsed/platform-serverless";
import { GetUserLambda } from "../useCases/getUser/GetUserLambda";

const platform = PlatformServerless.bootstrap({
  lambda: [GetUserLambda]
});

export = platform.callbacks();

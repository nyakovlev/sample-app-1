import serveWeb from "web-rfunc";
import createEndpoint from "rfunc";
import { createServerMedia } from "rfunc-ws";

serveWeb({
  port: 3000,
  // rfuncAddress,
  rfuncPort: 3350,
  onCreate({ httpServer }) {
    createServerMedia({
      port: 3350,
      server: httpServer,
      onCreate(media) {
        let endpoint = createEndpoint();
        // endpoint.registerLocal("greet", (name, poke) => {
        //   console.log(`${name} says hi`);
        //   poke();
        // });
        endpoint.setMedia(media);
      }
    });
  }
});

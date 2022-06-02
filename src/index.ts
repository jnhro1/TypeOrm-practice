import { app } from './app';
import "dotenv/config";

const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.PORT : 3030);

app.listen(app.get('port'), () => {
  console.log(`server is running on ${process.env.PORT} 🚀`);
});
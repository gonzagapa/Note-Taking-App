import { Redis } from '@upstash/redis'
import { Ratelimit } from "@upstash/ratelimit"
import dotenv from "dotenv"

dotenv.config();

//creamos un rate limiter que permite 10 peticiones cada 10 segundos
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "60 s")
})


export default rateLimit;
import { fastify } from 'fastify'
import {sql}  from './db/connection.ts'
import { env } from './env.ts'

import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { getRoomsRoute } from './htttp/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    return 'OK'
})


app.register(getRoomsRoute)


app.listen({ port: env.PORT }).then(() => {
    console.log('HTTP server running!')
})
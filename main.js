import express from "express"
// import podil
import { podil } from "podil"

import pg from 'pg'

async function main() {
    const app = express()
    app.use(express.json())

    // applying migrations here
    const connectionUrl = 'postgres://podil:podil@localhost:5432/podil'
    await podil.migrate(connectionUrl)

    // an endpoint to fetch data that is coming from the migrations
    app.get('/languages', async (req, res, next) => {
            const client = new pg.Client(connectionUrl)
            client.connect()
            const { rows } = await client.query('SELECT id, name, symbol FROM language')
            res.json(rows)
            await client.end()
        },
    )

    app.listen(8080, () => console.log('The app is listing on 8080'))
}

main()

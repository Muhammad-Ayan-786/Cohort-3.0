import app from './app/app.js'
import config from './config/config.js'
import { connectDB } from './config/db.js'

await connectDB()

const port = config.PORT || 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
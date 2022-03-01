if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Dependencies

const express = require('express')
const passport = require('passport')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const LocalStrategy = require('passport-local')
const session = require('express-session')
const AdminMd = require('./models/admin')
const mongoSanitize = require('express-mongo-sanitize')
const dbUrl = process.env.DB_URL
const secret = process.env.SECRET
const MongoStore = require('connect-mongo')
const helmet = require('helmet')

// Routes Dependencies

const frontRoutes = require('./routes/frontpages')
const adminRoutes = require('./routes/users')
const productsRoutes = require('./routes/products')
const ctgRoutes = require('./routes/categories')
const subCtgRoutes = require('./routes/subcategories')
const dashRoutes = require('./routes/dashboard')
const announcementsRoutes = require('./routes/announcements')
const publicfileRoutes = require('./routes/publicfile')

// Middleware

// Database Config

mongoose.connect(dbUrl)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Database connected')
})

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 3600, // hours * seconds = 24 hours
  crypto: {
    secret,
  },
})

store.on('error', function (e) {
  console.log('SESSION STORE ERROR', e)
})

// Express Session

const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httponly: true,
    //secure: true,
    expires: Date.now() + 1200000,
    maxAge: 1200000 /* 1200000ms -> 20 minutes before session timeout */,
  },
}

// Application Set & Use

app.use(express.json())
// it was true the urlencoded and turned to false in order to check if the body parser from client works
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())
app.use(mongoSanitize({ replaceWith: '_' }))
// app.use(helmet())

// Helmet Config
//TODO - Do this via Client maybe or make it work in the backend -> Better in backend for safety

// const scriptSrcUrls = [
//   'https://stackpath.bootstrapcdn.com/',
//   'https://api.tiles.mapbox.com/',
//   'https://api.mapbox.com/',
//   'https://kit-pro.fontawesome.com/',
//   'https://cdnjs.cloudflare.com/',
//   'https://code.jquery.com/',
//   'https://cdn.jsdelivr.net',
//   'https://fonts.gstatic.com/',
//   'https://maxcdn.bootstrapcdn.com/bootstrap/',
// ]
// const styleSrcUrls = [
//   'https://kit-free.fontawesome.com/',
//   'https://kit-pro.fontawesome.com/',
//   'https://stackpath.bootstrapcdn.com/',
//   'https://api.mapbox.com/',
//   'https://api.tiles.mapbox.com/',
//   'https://fonts.googleapis.com/',
//   'https://use.fontawesome.com/',
// ]

// const fontSrcUrls = ['https://fonts.gstatic.com/']

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: [],
//       connectSrc: ["'self'"],
//       scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
//       styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
//       workerSrc: ["'self'", "blob:"],
//       objectSrc: [],
//       imgSrc: [
//         "'self'",
//         "blob:",
//         "data:",
//         "https://res.cloudinary.com/theodosisk/",
//         "https://res.cloudinary.com/kaay/",
//       ],
//       fontSrc: ["'self'", ...fontSrcUrls],
//     },
//   })
// )

// Passport

passport.use(new LocalStrategy(AdminMd.authenticate()))
passport.serializeUser(AdminMd.serializeUser())
passport.deserializeUser(AdminMd.deserializeUser())

// Routes
app.use('/api/', adminRoutes)
app.use('/api/front/', frontRoutes)
app.use('/api/dash', dashRoutes)
app.use('/api/products', productsRoutes)
app.use('/api/categories', ctgRoutes)
app.use('/api/subcategories', subCtgRoutes)
app.use('/api/announcements', announcementsRoutes)
app.use('/api/publicfile', publicfileRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
  var date = new Date()
  console.log('Port : ' + port)
  console.log(
    'TimeStamp : ' +
      date.getHours() +
      ':' +
      (date.getMinutes() < 10 ? '0' : '') +
      date.getMinutes()
  )
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Server running in developement mode on port ${port}`)
  } else {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${port}`
    )
  }
})

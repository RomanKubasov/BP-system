const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

const loginRouter = require('./routes/loginRouter');
const logoutRouter = require('./routes/logoutRouter');
const tasksRouter = require('./routes/tasksRouter');
const usersRouter = require('./routes/usersRouter');

const PORT = process.env.PORT ?? 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionParser = session({
  secret: 'racer',
  resave: false,
  store: new FileStore(),
  saveUninitialized: false,
  name: 'autorization',
  cookie: { secure: false },
});

app.use(cors(corsOptions));
app.use(sessionParser);

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/tasks', tasksRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port: ${PORT}`);
});

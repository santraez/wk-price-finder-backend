import app from './config/server';

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('SERVER LISTENING ON PORT', PORT));

const express = require('express');
const morgan = require('morgan');
const massRoutes = require('./routes/mass-routes');
const massRegistryRoutes = require('./routes/massRegistry-routes');
const baptismRoutes = require('./routes/baptism-routes');
const departureRoutes = require('./routes/departure-routes');
const confirmationRoutes = require('./routes/confirmation-routes');
const deathRoutes = require('./routes/death-routes');
const marriageRoutes = require('./routes/marriage-routes');
const accountingRoutes = require('./routes/accounting-routes');
const tithesRoutes = require('./routes/tithes-routes');
const donationsRoutes = require('./routes/donation-routes');


const app = express();
require('./drivers/connect-db')



app.set('PORT', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.json());




// Usar las rutas
app.use('/mass', massRoutes);
app.use('/massregistry', massRegistryRoutes);
app.use('/bautismo', baptismRoutes);
app.use('/partida', departureRoutes);
app.use('/confirmacion', confirmationRoutes);
app.use('/defuncion', deathRoutes);
app.use('/matrimonio', marriageRoutes);

app.use('/contabilidad', accountingRoutes);
app.use('/diezmos', tithesRoutes);
app.use('/donaciones', donationsRoutes);


app.use(require('./routes/user-routes'))
app.use(require('./routes/documentType-routes'))
app.use(require('./routes/roles-routes'))

app.listen(app.get('PORT'), () => console.log(`Server Ready al port ${app.get('PORT')}`))
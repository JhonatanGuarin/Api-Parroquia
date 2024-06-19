const express= require('express');
const morgan = require('morgan');
const massRoutes = require('./routes/mass-routes');
const massRegistryRoutes = require('./routes/massRegistry-routes');
const bautismoRoutes = require('./routes/baptism-routes');
const partidasRoutes = require('./routes/departure-routes');
const confimacionRoutes = require('./routes/confirmation-routes');
const defuncionRoutes = require('./routes/death-routes');
const matrimonioRoutes = require('./routes/marriage-routes');


const app = express();
require('./drivers/connect-db')



app.set('PORT',process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.json());




// Usar las rutas
app.use('/mass', massRoutes);
app.use('/massregistry',massRegistryRoutes); 
app.use('/bautismo', bautismoRoutes);
app.use('/partida',partidasRoutes);
app.use('/confirmacion',confimacionRoutes);
app.use('/defuncion',defuncionRoutes);
app.use('/matrimonio',matrimonioRoutes);

app.use(require('./routes/user-routes'))
app.use(require('./routes/documentType-routes'))


app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))
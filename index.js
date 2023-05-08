const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const app = express();

//motor de generar vistas
app.set('view engine', 'hbs');
//ubicacion de las vistas parciales
hbs.registerPartials(__dirname+'/views/partials', () => {});

hbs.registerHelper('isSame', function(value1, value2) {
    return value1 == value2;
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true})) ;
app.use(bodyParser.json())

//rutas
app.get('/', (req, res) => {
    res.render('productos', {
        activo: "active",
        nombre: "Aurelio",
        productos: [
            {id: 1, descripcion: "Chocolate", precio: "$15.00", proveedor: "Hershey Company", categoria: "Tecnologia y Electronica"},
            {id: 2, descripcion: "Pan", precio: "$10.00", proveedor: "Grupo Bimbo", categoria: "Alimentos y Bebidas"},
            {id: 3, descripcion: "Queso", precio: "$60.00", proveedor: "Grupo Lala", categoria: "Alimentos y Bebidas"}
        ],
        categorias: [
            {descripcion: "Alimentos y Bebidas"},
            {descripcion: "Tecnologia y Electronica"},
            {descripcion: "Ropa y Accesorios"}
        ],
        proveedores: [
            {nombre: "Hershey Company"},
            {nombre: "Grupo Bimbo"},
            {nombre: "Grupo Lala"}
        ],
        derechos: "Aurelio Flores Nava. Todos los derechos reservados"
    })
})

app.get('/productos', (req, res) => {
    res.render('productos', {
        activo: "active",
        nombre: "Aurelio",
        productos: [
            {id: 1, descripcion: "Chocolate", precio: "$15.00", proveedor: "Hershey Company", categoria: "Tecnologia y Electronica"},
            {id: 2, descripcion: "Pan", precio: "$10.00", proveedor: "Grupo Bimbo", categoria: "Alimentos y Bebidas"},
            {id: 3, descripcion: "Queso", precio: "$60.00", proveedor: "Grupo Lala", categoria: "Alimentos y Bebidas"}
        ],
        categorias: [
            {descripcion: "Alimentos y Bebidas"},
            {descripcion: "Tecnologia y Electronica"},
            {descripcion: "Ropa y Accesorios"}
        ],
        proveedores: [
            {nombre: "Hershey Company"},
            {nombre: "Grupo Bimbo"},
            {nombre: "Grupo Lala"}
        ],
        derechos: "Aurelio Flores Nava. Todos los derechos reservados"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        nombre: "Aurelio"
    })
})

app.listen(port, () => {
    console.log('servidor express corriendo en el puerto ', port)
})
import { Router } from 'express';
import { connection } from '../db.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

router.get('/ultimacarga', async (req, res) => {
    try {
        const result = await connection.query("SELECT fechahoracarga FROM examen WHERE cantidadAprobados >= 0 AND fechahoracarga > '2020-07-01' ORDER BY fechahoracarga DESC LIMIT 1");
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/examenes', async (req, res) => {
    try {
        const result = await connection.query('SELECT * FROM examen');
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/examenes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await connection.query('SELECT cantidadPermitida FROM examen WHERE idexamen = ?', [id]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/fechayaula', async (req, res) => {
    const fechas = req.body.fechas ? req.body.fechas : [];
    const aulas = req.body.aulas ? req.body.aulas : [];
    const turnos = req.body.grupos ? req.body.grupos : [];

    try {
        let query = 'SELECT * FROM examen WHERE cantidadAprobados >= 0';
        let params = [];

        if (fechas.length > 0) {
            query += ' AND fecha IN (?)';
            params.push(fechas);
        }
        if (aulas.length > 0) {
            query += ' AND aula IN (?)';
            params.push(aulas);
        }
        if(turnos.length > 0) {
            query += ' AND turno IN (?)';
            params.push(turnos);
        }

        const result = await connection.query(query, params);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.put('/actualizar', async (req, res) => {
    const idexamen = req.body.idexamen;
    //console.log(idexamen)

    const cantidadAprobados = req.body.cantidadAprobados;
    const cantidadDesaprobados = req.body.cantidadDesaprobados;
    const cantidadAusentes = req.body.cantidadAusentes;
    const fechahoracarga = req.body.fechahoracarga;
    const cant8 = req.body.cant8;
    const cant9 = req.body.cant9;
    const cant10 = req.body.cant10;
    const cant11 = req.body.cant11;
    const cant12 = req.body.cant12;
    const cant13 = req.body.cant13;
    const cant14 = req.body.cant14;
    const cant15 = req.body.cant15;
    const cant16 = req.body.cant16;
    const cant17 = req.body.cant17;
    const cant18 = req.body.cant18;
    const cant19 = req.body.cant19;
    const cant20 = req.body.cant20;
    const femeninas = req.body.femeninas;
    const masculinos = req.body.masculinos;

    try {
        const result = await connection.query('UPDATE examen SET cantidadAprobados = ?, cantidadDesaprobados = ?, cantidadAusentes = ?, cant8 = ?, cant9 = ?, cant10 = ?, cant11 = ?, cant12 = ?, cant13 = ?, cant14 = ?, cant15 = ?, cant16 = ?, cant17 = ?, cant18 = ?, cant19 = ?, cant20 = ?, femeninas = ?, masculinos = ?, fechahoracarga = ? WHERE idexamen = ?', [cantidadAprobados, cantidadDesaprobados, cantidadAusentes, cant8, cant9, cant10, cant11, cant12, cant13, cant14, cant15, cant16, cant17, cant18, cant19, cant20, femeninas, masculinos, fechahoracarga, idexamen]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;


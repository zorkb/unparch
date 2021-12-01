const express = require('express');
const router = express.Router();

const Well = require('../../models/WellData.model');

router.get('/test', (req, res) => res.send('well route testing!'));

router.get('/', (req, res) => {
    Well.find()
        .then(well => res.json(well))
        .catch(err => res.status(404).json({ nowellsfound: 'No wells found' }));
});

router.get('/:id', (req, res) => {
    Well.findById(req.params.id)
        .then(well => res.json(well))
        .catch(err => res.status(404).json({ nowellfound: 'No well found' }));
});

router.post('/', (req, res) => {
    console.log(req.body)
    Well.create(req.body)
        .then(well => res.json({ msg: 'Well added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this well' }));
});

router.put('/:id', (req, res) => {
    Well.findByIdAndUpdate(req.params.id, req.body)
        .then(well => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/:id', (req, res) => {
    Well.findByIdAndRemove(req.params.id, req.body)
        .then(well => res.json({ mgs: 'Well entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Well could not be deleted' }));
});

module.exports = router;
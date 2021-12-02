const express = require('express');
const router = express.Router();

const WellTest = require('../../models/TestData.model');

router.get('/test', (req, res) => res.send('test route testing!'));

router.get('/', (req, res) => {
    WellTest.find({})
        .then(welltest => res.json(test))
        .catch(err => res.status(404).json({ notestsfound: 'No wells found' }));
});

router.get('/:id', (req, res) => {
    WellTest.findById(req.params.id)
        .then(welltest => res.json(well))
        .catch(err => res.status(404).json({ notestfound: 'No test found' }));
});

router.post('/', (req, res) => {
    console.log(req.body)
    WellTest.create(req.body)
        .then(welltest => res.json({ msg: 'Test added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this test' }));
});

router.put('/:id', (req, res) => {
    WellTest.findByIdAndUpdate(req.params.id, req.body)
        .then(welltest => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
        );
});

router.delete('/:id', (req, res) => {
    WellTest.findByIdAndRemove(req.params.id, req.body)
        .then(welltest => res.json({ mgs: 'Test deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'Test could not be deleted' }));
});

module.exports = router;
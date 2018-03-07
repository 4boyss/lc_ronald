const express = require('express');
const router = express.Router();

const AV = require('leancloud-storage');

AV.init({
    appId: process.env.LC_APPID,
    appKey: process.env.LC_APPKEY
});


router.get('/:username', (req, res)=>{

    res.send('Get done!');
});

router.post('/', (req, res) => {

    const params = req.body;
    const Users = AV.Object.extend('Users');
    const User = new Users();
    
    User.set('name', req.body.name);
    User.set('license', req.body.license);
    User.set('gender', req.body.gender);

    User.save().then((user)=>{
        console.log(user.id + ' ' + user.attributes.name);
    }, (err) => {
        console.log('Error in saving')
    });

    res.send('Post done!')
});

router.put('/', (req, res) => {
    res.send('Put done!');
});

router.delete('/', (req, res) => {
    res.send('Delete done!');
})
module.exports = router;
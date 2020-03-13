const express = require('express');

const router = express.Router();

// GET
router.get('/all/users', (req, res) => {
	res.status(200).json({
		data: [{
			userFristName: 'Abullha',
		}, {
			userLastName: 'Emran',
		}, {
			userEmail: 'mdemrannazir9999@gmail.com',
		}, {
			userSubEmail: 'emrannazir@gmail.com',
		}],
	});
});

module.exports = router;

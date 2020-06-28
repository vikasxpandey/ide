require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
app
	.use(cors())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))

app.post('/execute', (req, res) => {
	const code = req.body.code
	const lang = req.body.lang
	const stdin = req.body.stdin

	const data = {
		clientId: process.env.ID,
		clientSecret: process.env.SECRET,
		script: code,
		stdin: stdin,
		language: lang,
		versionIndex: 0
	}

	axios({
		url: 'https://api.jdoodle.com/v1/execute',
		method: 'post',
		data: JSON.stringify(data),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then((response) => res.send(response.data))
		.catch((error) => console.log(error))
})

app.listen(8888, () => console.log('Server running on port 8888'))

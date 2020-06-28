import React, { useState } from 'react'

import Editor from './components/Editor'
import Options from './components/Options'
import Input from './components/Input'
import Output from './components/Output'

const App = () => {
	const [lang, setLang] = useState(1)
	const [code, setCode] = useState('Type your code here...')
	const [input, setInput] = useState('Enter standard inputs here...')
	const [output, setOutput] = useState('Output will appear here!')

	const runCode = () => {
		let api_lang = ''

		if (lang === 1) {
			api_lang = 'python3'
		} else if (lang === 2) {
			api_lang = 'java'
		} else {
			api_lang = 'cpp'
		}

		const data = {
			code,
			lang: api_lang,
			stdin: input
		}

		fetch('http://localhost:8888/execute', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((res) => setOutput(res.output))
			.catch((err) => console.log(err))
	}

	return (
		<div className='parent-row row'>
			<div className='col-md-9'>
				<Editor lang={lang} code={code} setCode={setCode} />
			</div>
			<div className='col-md-3 '>
				<Options
					lang={lang}
					setLang={setLang}
					setCode={setCode}
					runCode={runCode}
				/>
			</div>

			<div className='col-md-6'>
				<div className='input-wrap mt-3 blue-bg'>
					<Input input={input} setInput={setInput} />
				</div>
			</div>
			<div className='col-md-6'>
				<div className='output-wrap mt-3 blue-bg'>
					<Output output={output} />
				</div>
			</div>
		</div>
	)
}

export default App

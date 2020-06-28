import React from 'react'

const Options = ({ lang, setLang, setCode, runCode }) => {
	const handleLangChange = (e) => {
		setLang(e.target.value)
	}

	return (
		<div className='options-wrap mt-3 p-3 blue-bg'>
			<h5 className='text-center'>Options</h5>
			<div className='form-group'>
				<label>Select Language:</label>
				<select
					value={lang}
					onChange={handleLangChange}
					className='form-control'
				>
					<option value={1}>Python</option>
					<option value={2}>Java</option>
					<option value={3}>C++</option>
				</select>
				<div className='options-button-parent'>
					<button
						onClick={() => runCode()}
						className='btn shadow btn-success mt-5'
					>
						Run Code
					</button>
					<button
						onClick={() => setCode('Type your code here...')}
						className='btn shadow btn-danger mt-5'
					>
						Clear Code
					</button>
				</div>
			</div>
		</div>
	)
}

export default Options

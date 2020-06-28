import React from 'react'

const Input = ({ input, setInput }) => {
	const handleInputChange = (e) => {
		setInput(e.target.value)
	}

	return (
		<div className='input-wrap mt-3 p-3 blue-bg'>
			<h5 className='text-center'>Input</h5>
			<div className='form-group'>
				<textarea
					style={{ background: 'transparent', border: '0px' }}
					cols='30'
					rows='5'
					className='form-control'
					value={input}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	)
}

export default Input

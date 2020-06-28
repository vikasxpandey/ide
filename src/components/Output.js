import React from 'react'

const Output = ({ output }) => {
	return (
		<div className='input-wrap mt-3 p-3 blue-bg'>
			<h5 className='text-center'>Output</h5>
			<textarea
				style={{ background: 'transparent', border: '0px' }}
				cols='30'
				rows='5'
				className='form-control'
				value={output}
				readOnly
			></textarea>
		</div>
	)
}

export default Output

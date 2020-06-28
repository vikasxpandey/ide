import React from 'react'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'fontsource-fira-code'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c'
import 'prismjs/themes/prism-twilight.css'

const PyEditor = ({ lang, code, setCode }) => {
	if (lang === 1) {
		return (
			<div className='editor-wrap'>
				<Editor
					value={code}
					onValueChange={(edcode) => setCode(edcode)}
					highlight={(edcode) => highlight(edcode, languages.py)}
					padding={20}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 14,
						background: '#1c67da',
						color: '#fff',
						borderTopRightRadius: '50px',
						borderBottomRightRadius: '50px',
						borderBottomLeftRadius: '50px',
						minHeight: '60vh',
						boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.1)'
					}}
				/>
			</div>
		)
	} else if (lang === 2) {
		return (
			<div className='editor-wrap'>
				<Editor
					value={code}
					onValueChange={(edcode) => setCode(edcode)}
					highlight={(edcode) => highlight(edcode, languages.java)}
					padding={20}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 14,
						background: '#1c67da',
						color: '#fff',
						borderTopRightRadius: '50px',
						borderBottomRightRadius: '50px',
						borderBottomLeftRadius: '50px',
						minHeight: '60vh',
						boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.1)'
					}}
				/>
			</div>
		)
	} else {
		return (
			<div className='editor-wrap'>
				<Editor
					value={code}
					onValueChange={(edcode) => setCode(edcode)}
					highlight={(edcode) => highlight(edcode, languages.c)}
					padding={20}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 14,
						background: '#1c67da',
						color: '#fff',
						borderTopRightRadius: '50px',
						borderBottomRightRadius: '50px',
						borderBottomLeftRadius: '50px',
						minHeight: '60vh',
						boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.1)'
					}}
				/>
			</div>
		)
	}
}

export default PyEditor

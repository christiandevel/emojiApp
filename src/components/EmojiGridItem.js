import React from 'react'

export const EmojiGridItem = ({ nombre, caracter, resume}) => {
	return (
		<div className="card">
			<span>{caracter}</span>
			{/* <span>{nombre}</span>
			<span>{resume}</span> */}
		</div>
	)
}

import React from 'react';
import timelapseFrameImg from '../../../assets/images/built-for-speed-image/timelapse-frame.svg';

function RowLabel(props) {
	return (
		<div className={"speed-text label"} >{ props.children }</div>
	)
}

function RowDesc(props) {
	return (
		<div className={"speed-text description"} >{ props.children }</div>
	)
}

export function TimeLapseImg() {
	return (
		<div className={"speed-image-container scale"}>
			<img src={timelapseFrameImg} />
			<i className={"material-icons timelapse-icon"}>timelapse</i>
		</div>
	)
}

export function Row(props) {
	return (
		<div className={`row-container ${props.class}`}>
			{props.children}
		</div>
	)
}

export function RowText(props) {
	return (
		<div>
			<RowLabel>{ props.label }</RowLabel>
			<RowDesc>{ props.desc }</RowDesc>
		</div>
	)
}
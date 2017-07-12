import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";

const Footer = ({visibilityFilter,setVisibilityFilterCallback}) => {
	let get_className = (filter)=>{
		if(visibilityFilter === filter)
			return "glyphicon glyphicon-ok-circle";
		else
			return "glyphicon glyphicon-remove-circle";
	}

	let visibilityFilterCallback = (filter) => {
		setVisibilityFilterCallback(filter)	;
	};
	return(
		<div className="footer">
			<ul className="filters">
				<li>
					<Link to="/">
						<span className={get_className('ALL')}></span>
						<span onClick={()=>{visibilityFilterCallback('ALL')}}>All</span>
					</Link>
				</li>
				<li>
					<Link to="/INCOMPLETE">
						<span className={get_className('INCOMPLETE')}></span>
						<span onClick={()=>{visibilityFilterCallback('INCOMPLETE')}}>Incomplete</span>
					</Link>
				</li>
				<li>
					<Link to="/COMPLETED">
						<span className={get_className('COMPLETED')}></span>
						<span onClick={()=>{visibilityFilterCallback('COMPLETED')}}>Completed</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
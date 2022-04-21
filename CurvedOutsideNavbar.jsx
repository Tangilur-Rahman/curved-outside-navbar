/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
	HouseHeart,
	PersonCircle,
	ChatHeart,
	Gear,
	InfoCircle,
	Key,
	BoxArrowRight
} from "react-bootstrap-icons";
import "./CurvedOutsideNavbar.css";

const CurvedOutsideNavbar = () => {
	const [home, setHome] = useState(true);
	const [profile, setProfile] = useState(false);
	const [message, setMessage] = useState(false);
	const [setting, setSetting] = useState(false);
	const [help, setHelp] = useState(false);
	const [password, setPassword] = useState(false);
	const [signout, setSignout] = useState(false);

	const homeClick = () => {
		setHome(true);
		setProfile(false);
		setMessage(false);
		setSetting(false);
		setHelp(false);
		setPassword(false);
		setSignout(false);
	};

	const profileClick = () => {
		setHome(false);
		setProfile(true);
		setMessage(false);
		setSetting(false);
		setHelp(false);
		setPassword(false);
		setSignout(false);
	};

	const messageClick = () => {
		setHome(false);
		setProfile(false);
		setMessage(true);
		setSetting(false);
		setHelp(false);
		setPassword(false);
		setSignout(false);
	};
	const settingClick = () => {
		setHome(false);
		setProfile(false);
		setMessage(false);
		setSetting(true);
		setHelp(false);
		setPassword(false);
		setSignout(false);
	};
	const helpClick = () => {
		setHome(false);
		setProfile(false);
		setMessage(false);
		setSetting(false);
		setHelp(true);
		setPassword(false);
		setSignout(false);
	};
	const passwordClick = () => {
		setHome(false);
		setProfile(false);
		setMessage(false);
		setSetting(false);
		setHelp(false);
		setPassword(true);
		setSignout(false);
	};

	const signoutClick = () => {
		setHome(false);
		setProfile(false);
		setMessage(false);
		setSetting(false);
		setHelp(false);
		setPassword(false);
		setSignout(true);
	};

	return (
		<>
			<div className="navigation">
				<ul>
					<li
						className={`list ${home ? "active" : ""}`}
						onClick={homeClick}
					>
						<a href="#">
							<span className="icon">
								<HouseHeart className="icon-style" />
							</span>
							<span className="title">Home</span>
						</a>
					</li>
					<li
						className={`list ${profile ? "active" : ""}`}
						onClick={profileClick}
					>
						<a href="#">
							<span className="icon">
								<PersonCircle className="icon-style" />
							</span>
							<span className="title">Profile</span>
						</a>
					</li>
					<li
						className={`list ${message ? "active" : ""}`}
						onClick={messageClick}
					>
						<a href="#">
							<span className="icon">
								<ChatHeart className="icon-style" />
							</span>
							<span className="title">Messages</span>
						</a>
					</li>
					<li
						className={`list ${setting ? "active" : ""}`}
						onClick={settingClick}
					>
						<a href="#">
							<span className="icon">
								<Gear className="icon-style" />
							</span>
							<span className="title">Setting</span>
						</a>
					</li>
					<li className={`list ${help ? "active" : ""}`} onClick={helpClick}>
						<a href="#">
							<span className="icon">
								<InfoCircle className="icon-style" />
							</span>
							<span className="title">Help</span>
						</a>
					</li>
					<li
						className={`list ${password ? "active" : ""}`}
						onClick={passwordClick}
					>
						<a href="#">
							<span className="icon">
								<Key className="icon-style" />
							</span>
							<span className="title">Password</span>
						</a>
					</li>
					<li
						className={`list ${signout ? "active" : ""}`}
						onClick={signoutClick}
					>
						<a href="#">
							<span className="icon">
								<BoxArrowRight className="icon-style" />
							</span>
							<span className="title">Sign Out</span>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default CurvedOutsideNavbar;

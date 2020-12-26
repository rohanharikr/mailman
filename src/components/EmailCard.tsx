import React from 'react';

const EmailCard = () => {
	return(
		<li className="leading-6 py-2">
			<button className="h-24 px-3 text-left rounded-md hover:bg-gray-800">
			<div className="flex items-center justify-between">
				<h2 className="font-semibold">Google</h2>
				<span className="text-xs">June 25</span>
			</div>
			<h3 className="font-base">Manual Account Verification</h3>
			<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
		</button>
		</li>
	);
}

export default EmailCard;
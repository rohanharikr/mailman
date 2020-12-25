import React from 'react';

const ActionView = () => {
	return(
		<div className="w-96 py-6 px-4 bg-gray-1000">
			<span className="inline-flex h-10 items-center">
				<h1 className="text-gray-200 font-semibold text-lg">Inbox</h1>
			</span>
			<div className="mt-4 relative text-gray-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 absolute top-3 left-2">
	  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input type="search" placeholder="Search from 1,026 mails" className="block py-2 px-2 pl-8 bg-gray-800 rounded-md w-full outline-none" />
			</div>
			<ul className="mt-4 text-gray-200 text-sm overflow-auto">
				<li className="leading-6 h-24 mb-2 border-b border-gray-700">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
				<li className="leading-6 h-24 mb-2 border-b border-gray-700">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
				<li className="leading-6 h-24 mb-2 border-b border-gray-700 opacity-50">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
				<li className="leading-6 h-24 mb-2 border-b border-gray-700 opacity-50">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
				<li className="leading-6 h-24 mb-2 border-b border-gray-700 opacity-50">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
				<li className="leading-6 h-24 mb-2 border-b border-gray-700">
					<div className="flex items-center justify-between">
						<h2 className="font-semibold">Google</h2>
						<span className="text-xs">June 25</span>
					</div>
					<h3 className="font-base">Manual Account Verification</h3>
					<p className="text-xs text-gray-400 font-light">Hello Rohan Harikumar, Your account has been sucessfully verified. Please login to cont...</p>
				</li>
			</ul>
		</div>
	);
}

export default ActionView;
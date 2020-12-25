import React from 'react';

const EmailView = () => {
	return(
		<main className="bg-gray-1000 flex-1 text-gray-100 py-6 px-4">
			<span className="flex h-10 items-center justify-between">
				<h1 className="text-gray-100 font-medium text-lg">Manual Account Verification</h1>
				<div className="text-sm inline-flex items-center">
					<button className="inline-flex items-center px-2 h-8 font-medium border border-blue-700 mr-2 rounded-md text-blue-700 hover:bg-blue-700 hover:text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 mr-1">
	  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
						</svg>
						<span>Reply</span>
					</button>
					<button className="inline-flex items-center px-2 h-8 font-medium border border-blue-700 rounded-md text-blue-700 hover:bg-blue-700 hover:text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 mr-1">
  							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
						</svg>
						<span>Forward</span>
					</button>
				</div>
			</span>
	  	</main>
	);
}

export default EmailView;
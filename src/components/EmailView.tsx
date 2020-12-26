import React from 'react';

const EmailView = () => {

	return(
		<main className="bg-gray-1000 flex-1 text-gray-100 py-6 px-12">
			<span className="flex h-10 items-center justify-between">
				<h1 className="text-gray-100 font-medium text-lg">Manual Account Verification</h1>
				<div className="text-sm inline-flex items-center space-x-2">
					<button className="inline-flex items-center px-2 h-8 font-medium border border-blue-700 rounded-md text-blue-700 hover:bg-blue-700 hover:text-gray-300">
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
			<div className="inline-flex items-center mt-4 flex space-x-1">
				<div className="h-10 w-10 flex items-center -space-x-1 overflow-hidden">
					<img className="inline-block h-8 w-8 rounded-full bg-blue-700" src="https://img-authors.flaticon.com/google.jpg" alt="avatar" />
				</div>
				<div>
					<span className="text-sm block">Google</span>
					<span className="text-xs block text-gray-300">noreply@google.com</span>
				</div>
			</div>
			<section className="mt-12 text-base">
				<p className="leading-8">
					<span className="block mb-6">Hello Rohan Harikumar,</span>
					<span className="block">Your account has been sucessfully verified. Please login to continue.</span>
					<span className="block">With Mailtrap, you will be able to preview and debug your messages, test Bcc, collaborate with your team, forward emails, and much more. Send your first message and enjoy safe and easy email testing.</span>
					<span className="mt-4 block">To learn more about Maitrap, check our Getting Started Guide. If you have any questions at any stage of your journey, we are here to help.</span>
					<span className="block mt-8">Cheers,<br/> Google</span>
				</p>
			</section>
			{/*<section className="mt-8 relative">
				<textarea placeholder="Type your reply here" className="w-full bg-gray-800 rounded-md p-6" />
				<button className="absolute px-4 py-1 rounded-md bottom-6 left-6 bg-blue-500">Send reply</button>
			</section>*/}
	  	</main>
	);
}

export default EmailView;
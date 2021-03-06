import React from 'react';

const Sidebar = () => {
	return(
		<aside className="flex flex-col py-6 px-4 h-screen w-64 bg-gray-900 text-gray-300">
			<button className="w-full h-10 px-2 flex items-center text-left rounded-md text-sm bg-blue-600">
				<div className="flex -space-x-1 overflow-hidden">
  					<img className="inline-block h-6 w-6 rounded-full bg-blue-700" src="https://nordicapis.com/wp-content/uploads/Profile-shot-recent.jpg" alt="avatar" />
				</div>
				<span className="ml-2 font-medium">Rohan's Mailbox</span>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 ml-auto">
  					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			<ul className="flex-1 mt-4 text-sm space-y-2">
				<li>
					<button className="py-2 px-2 w-full flex items-center rounded-md text-left bg-gray-800">
						<span className="h-6 w-6 inline-flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
		  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
							</svg>
						</span>
						<span className="ml-2">Inbox</span>
						<span className="ml-auto text-xs font-medium text-gray-100">1,026</span>
					</button>
				</li>
				<li>
					<button className="py-2 px-2 w-full flex items-center rounded-md text-left hover:bg-gray-800">
						<span className="h-6 w-6 inline-flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
		  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
							</svg>
						</span>
						<span className="ml-2">Sent</span>
						<span className="ml-auto text-xs font-medium text-gray-100">1,026</span>
					</button>
				</li>
				<li>
					<button className="py-2 px-2 w-full flex items-center rounded-md text-left hover:bg-gray-800">
						<span className="h-6 w-6 inline-flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
		  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
							</svg>
						</span>
						<span className="ml-2">Drafts</span>
						<span className="ml-auto text-xs font-medium text-gray-100">1,026</span>
					</button>
				</li>
				<li>
					<button className="py-2 px-2 w-full flex items-center rounded-md text-left hover:bg-gray-800">
						<span className="h-6 w-6 inline-flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
		  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
							</svg>
						</span>
						<span className="ml-2">Deleted</span>
						<span className="ml-auto text-xs font-medium text-gray-100">1,026</span>
					</button>
				</li>
				<li>
					<button className="py-2 px-2 w-full flex items-center rounded-md text-left hover:bg-gray-800">
						<span className="h-6 w-6 inline-flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
		  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
							</svg>
						</span>
						<span className="ml-2">Archive</span>
						<span className="ml-auto text-xs font-medium text-gray-100">1,026</span>
					</button>
				</li>
			</ul>
			<button className="py-2 px-2 w-full flex items-center rounded-md text-left bg-blue-600">
				<span className="h-6 w-6 inline-flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
					</svg>
				</span>
				<span className="ml-2">Compose</span>
			</button>
		</aside>
	);
}

export default Sidebar;
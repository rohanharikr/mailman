import React from 'react';
import { EmailCard } from './';

const ActionView = () => {
	return(
		<div className="w-96 pt-6 px-4 flex flex-col bg-gray-1000 border-r border-gray-700">
			<div>
			<span className="inline-flex h-10 items-center">
				<h1 className="text-gray-200 font-semibold text-lg">Inbox</h1>
			</span>
			<div className="mt-4 relative text-gray-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 absolute top-3 left-2">
	  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input type="search" placeholder="Search from 1,026 mails" className="block py-2 px-2 pl-8 bg-gray-800 rounded-md w-full outline-none" />
			</div>
			</div>
			<ul className="flex-1 mt-4 text-gray-200 text-sm overflow-auto divide-y divide-solid divide-gray-700">
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
				<EmailCard/>
			</ul>
		</div>
	);
}

export default ActionView;
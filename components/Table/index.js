import { format } from 'date-fns';

import { dateFormatStr } from 'constants/index';

import ExportButton from './ExportButton';

const thClassNames =
	'pl-8 pt-4 pb-3 text-zinc-600 bg-gray-100 tracking-wide leading-tight border-b border-gray-200 text-left text-xs font-bold';

export default function Table({ title, isLoading = false, thList = [], children, isPremiumPlan }) {
	if (isLoading) {
		return <div className="flex flex-col items-center justify-center" />;
	}

	return (
		<>
			<div className="mb-4 flex w-full items-center justify-between">
				<h3 className="text-black">Data</h3>
				<div className="flex justify-end">
					{isPremiumPlan ? (
						<ExportButton
							className="rounded-md px-[9px]"
							filename={`${title}-${format(new Date(), dateFormatStr)}.csv`}
						/>
					) : null}
				</div>
			</div>
			<div className="block w-full overflow-x-auto rounded-lg border">
				<table className="relative w-full table-auto border-collapse overflow-hidden rounded-lg bg-slate-50 shadow-md shadow-gray-200">
					<thead className="p-10">
						<tr>
							{thList.map((thItem) => (
								<th key={thItem} className={`${thClassNames} uppercase tracking-wide`}>
									{thItem}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="rounded-lg bg-white">{children}</tbody>
				</table>
			</div>
		</>
	);
}
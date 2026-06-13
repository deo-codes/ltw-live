export type RosterFilterValue = "all" | "LTW" | "RBW" | "ALUMNI";

type FilterOption = {
	label: string;
	value: RosterFilterValue;
};

const FILTER_OPTIONS: FilterOption[] = [
	{ label: "All", value: "all" },
	{ label: "LTW", value: "LTW" },
	{ label: "RBW", value: "RBW" },
	{ label: "Alumni", value: "ALUMNI" },
];

type RosterFilterProps = {
	value: RosterFilterValue;
	onChange: (value: RosterFilterValue) => void;
};

export default function RosterFilter({
	value,
	onChange,
}: RosterFilterProps) {
	return (
		<div className="mb-6 flex flex-wrap gap-2 md:mb-8">
			{FILTER_OPTIONS.map((option) => {
				const isActive = option.value === value;

				return (
					<button
						key={option.value}
						type="button"
						onClick={() => onChange(option.value)}
						className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition ${
							isActive
								? "border-yellow-400 bg-yellow-400 text-black"
								: "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-500 hover:text-white"
						}`}
						aria-pressed={isActive}
					>
						{option.label}
					</button>
				);
			})}
		</div>
	);
}

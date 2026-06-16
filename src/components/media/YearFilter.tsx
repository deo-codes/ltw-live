type YearFilterProps = {
  years: string[];
  selectedYear: string;
  onSelectYear: (year: string) => void;
};

export default function YearFilter({
  years,
  selectedYear,
  onSelectYear,
}: YearFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {years.map((year) => {
        const isActive = selectedYear === year;

        return (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isActive
                ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_0_25px_rgba(234,179,8,0.35)]"
                : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-yellow-400 hover:text-yellow-400"
            }`}
          >
            {year}
          </button>
        );
      })}
    </div>
  );
}
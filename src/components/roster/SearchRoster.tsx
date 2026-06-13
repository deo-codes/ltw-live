type SearchRosterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchRoster({
  value,
  onChange,
}: SearchRosterProps) {
  return (
    <div className="mb-6 md:mb-8">
      <label
        htmlFor="roster-search"
        className="mb-2 block text-sm font-bold uppercase tracking-[0.16em] text-zinc-300"
      >
        Search Wrestler
      </label>

      <div className="relative">
        <input
          id="roster-search"
          type="search"
          placeholder="Type a wrestler name..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 pr-11 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
        />

        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-zinc-400 transition hover:text-white"
            aria-label="Clear search"
          >
            x
          </button>
        ) : null}
      </div>
    </div>
  );
}

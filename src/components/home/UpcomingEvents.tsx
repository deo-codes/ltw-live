import Image from "next/image";

export default function UpcomingEvents() {
	return (
		<section className="relative overflow-hidden border-t border-cyan-400/20 bg-black py-20">
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<Image
					src="/images/events/Backgroundv2.png"
					alt=""
					fill
					sizes="100vw"
					className="object-cover object-center opacity-35 blur-[2px] scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-cyan-950/85 via-black/75 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.16),transparent_38%)]" />
			</div>

			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
				<p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
					Coming This August
				</p>

				<div className="mt-6 flex w-full max-w-4xl items-center justify-center rounded-[2rem] border border-cyan-300/20 bg-black/35 px-6 py-10 shadow-[0_0_60px_rgba(34,211,238,0.14)] backdrop-blur-sm sm:px-10">
					<div className="w-full max-w-3xl">
						<Image
							src="/images/events/2026-danimania.png"
							alt="Locked Target Wrestling logo"
							width={920}
							height={340}
							priority={false}
							className="mx-auto h-auto w-full max-w-2xl drop-shadow-[0_0_28px_rgba(34,211,238,0.45)]"
						/>

						<h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
							Upcoming Events
						</h2>

						<p className="mx-auto mt-4 max-w-3xl text-base text-cyan-50/80 sm:text-lg">
							Locked Target Wrestling is gearing up for the next round of live action.
							Stay tuned for dates, venue details, and ticket information.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

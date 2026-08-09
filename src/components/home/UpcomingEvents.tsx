import Image from "next/image";

export default function UpcomingEvents() {
	return (
		<section className="relative overflow-hidden border-t border-cyan-400/20 bg-black py-20">
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<Image
					src="/images/events/wsn-plus-coming-september.jpg"
					alt=""
					fill
					sizes="100vw"
					className="object-cover object-center opacity-40 blur-xl scale-125"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-cyan-950/90 via-black/80 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_45%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.16),transparent_38%)]" />
			</div>

			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
				<p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
					Coming This September
				</p>

				<div className="mt-6 flex w-full max-w-4xl items-center justify-center rounded-[2rem] border border-cyan-300/20 bg-black/35 px-6 py-10 shadow-[0_0_60px_rgba(34,211,238,0.14)] backdrop-blur-sm sm:px-10">
					<div className="w-full max-w-3xl">
						<Image
							src="/images/events/wsn-plus-coming-september.jpg"
							alt="WSN Plus coming this September ad"
							width={768}
							height={768}
							priority={false}
							className="mx-auto h-auto w-full max-w-2xl rounded-xl border border-cyan-300/30 drop-shadow-[0_0_28px_rgba(34,211,238,0.45)]"
						/>

						<h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
							Watch LTW on WSN+
						</h2>

						<p className="mx-auto mt-4 max-w-3xl text-base text-cyan-50/80 sm:text-lg">
							Catch LTW content on WSN+ across Roku, Fire TV, Google TV, Apple TV, Android, and iOS.
						</p>

						<a
							href="https://www.wsnplus.tv"
							target="_blank"
							rel="noreferrer"
							className="mt-6 inline-block rounded-lg border border-cyan-300/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
						>
							Visit WSN+
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

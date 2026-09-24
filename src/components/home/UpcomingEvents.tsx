import Image from "next/image";

export default function UpcomingEvents() {
	return (
		<section className="relative overflow-hidden border-t border-white/10 bg-black py-20">
			<div className="pointer-events-none absolute inset-0" aria-hidden="true">
				<Image
					src="/images/events/LTWWSNLOGO.png"
					alt=""
					fill
					quality={60}
					sizes="100vw"
					className="object-cover object-center opacity-40 blur-sm scale-105"
				/>
			</div>

			<div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
				<p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
					Join The Society
				</p>

				<div className="mt-6 flex w-full max-w-4xl items-center justify-center px-6 py-10 sm:px-10">
					<div className="w-full max-w-3xl">
						<Image
							src="/images/events/WSN-Logo.png"
							alt="WSN logo"
							width={768}
							height={432}
							sizes="(max-width: 768px) 100vw, 768px"
							className="mx-auto h-auto w-full max-w-2xl"
						/>

						<h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
							Streaming Now
						</h2>

						<p className="mx-auto mt-4 max-w-3xl text-base text-cyan-50/80 sm:text-lg">
							Catch LTW content on WSN+ across Roku, Fire TV, Google TV, Apple TV, Android, and iOS.
						</p>

						<div className="mt-8">
							<a
								href="https://wsnplus.tv"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block rounded-lg bg-cyan-500 px-8 py-3 font-bold uppercase tracking-wide text-black transition-all duration-200 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
							>
								Download WSN Plus App
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

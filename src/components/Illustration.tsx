import Image from "next/image";

export function Illustration() {
	return (
		<div className="max-w-[720px] h-full hidden md:flex grow justify-center items-center bg-dark20">
			<Image src="/illustration.svg" alt="illustration"  width={400} height={330} />
		</div>
	)
}

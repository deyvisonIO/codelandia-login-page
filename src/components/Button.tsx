import Image from "next/image";

export function Button({ content, icon=false, ...props }) {
	return (
		<button className={`flex justify-center items-center w-full text-white font-bold text-base py-4 bg-brand-color-green rounded ${props.className}`}>
			{icon ? 
<Image src="/google.svg" height={32} width={32} alt="google icon" /> : null }
			{content}
		</button>
	)
}

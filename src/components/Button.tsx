import Image from "next/image";

interface buttonProps {
	content: string;
	icon?: boolean;
	className?: string;	
}



export function Button({ content, icon=false, className }: buttonProps) {
	return (
		<button className={`flex justify-center items-center w-full text-white font-bold text-base py-4 bg-brand-color-green rounded ${className}`}>
			{icon ? 
<Image src="/google.svg" height={32} width={32} alt="google icon" /> : null }
			{content}
		</button>
	)
}

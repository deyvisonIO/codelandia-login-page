interface InputProps {
	title: string;
	type: string;
}

export function Input({ title, type }: InputProps) {
	return (
		<div className="flex flex-col gap-3 w-full">
			<label className="text-base font-normal">{title}</label>
			<input type={type} className="p-4 text-sm font-normal border-dark10/20 border rounded-md" />
		</div>
	)
}

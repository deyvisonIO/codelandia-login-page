import { Button } from "./Button";
import { Input } from "./form/Input";
import { Merriweather } from "next/font/google"; 

const merri = Merriweather({ weight: ['400', '700'], subsets: ['latin'], })


export function Login() {
	return (
		<div className="grow shrink flex flex-col justify-around items-center px-8">
			<form className="flex flex-col w-full gap-2 sm:w-[350px]">
				<div className={`my-3 ${merri.className}`}>
					<h1 className="font-normal text-base">Bem vindo de volta</h1>
					<h2 className="font-bold text-2xl">Faça login na sua conta</h2>
				</div>
				<Input title="Email" type="email" />
				<Input title="Senha" type="password" />
				<div className="flex justify-between mb-5 mt-2">
					<div className="flex items-center gap-2 text-dark10">
						<input type="radio" />
						<label className="font-normal text-sm">Lembre de mim</label>
					</div>
					<span className="font-normal text-sm text-brand-color-blue">Esqueceu sua senha?</span>
				</div>
				<div className="flex flex-col gap-4">
					<Button content="Entrar" />
					<Button icon content="Ou faça login com o Google" className="bg-dark10" />
					
				</div>
			</form>
			<div className="flex justify-center items-center gap-1">
				<span>
					Não tem uma conta?
				</span>
				<span className="text-brand-color-blue">Cadastre-se</span>
			</div>
		</div>
	)
}

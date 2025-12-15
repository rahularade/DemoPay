interface InputBoxProps{
    type?: "text" | "password" | "number"
    label: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export function InputBox({type="text", label, placeholder, onChange}: InputBoxProps){
    return <div>
        <div className="font-medium text-left py-2">
            {label}
        </div>
        <input type={type} placeholder={placeholder} onChange={onChange} className="w-full px-4 py-1.5 border border-slate-200 rounded outline-0"/>
    </div>
}
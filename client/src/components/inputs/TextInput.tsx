import clsx from "clsx";

type TextInputType = {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    placeholder: string;
    classname?: string;

}
export const TextInput = ({label, id, type, required, placeholder, classname} : TextInputType) => {
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>{label}</label>
            <input type={type == null ? "text" : type} id={id} placeholder={placeholder} required={required == null ? false : required} size={50} className={clsx("bg-[#f3f3f4] text-[#0d0c22] placeholder:text-[#9e9ea7] py-3 px-6 border-0 shadow-2xl rounded-lg" , classname == null ? "" : ` ${classname}`)}/>
        </div>
    )
}
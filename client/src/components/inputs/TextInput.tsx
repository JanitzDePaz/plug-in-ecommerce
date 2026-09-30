import clsx from "clsx";

type TextInputType = {
    id: string;
    type?: string;
    required?: boolean;
    placeholder: string;
    classname?: string;

}
export const TextInput = ({id, type, required, placeholder, classname} : TextInputType) => {
    return(
        <div className="flex flex-col gap-2 w-full">
            <input type={type == null ? "text" : type} id={id} placeholder={placeholder} required={required == null ? false : required} size={50} className={clsx("bg-[#f3f3f4] text-[#0d0c22] placeholder:text-[#9e9ea7] py-5 px-8 border-0 shadow-2xl rounded-lg text-xl" , classname == null ? "" : ` ${classname}`)}/>
        </div>
    )
}
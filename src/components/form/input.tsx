import React, {DetailedHTMLProps} from "react";

interface Props {
    label: string;
}

export default function InputWithLabel(props: Props & DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
                {props.label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id={props.id}
                   type="text"
                   placeholder={props.placeholder}
                   onChange={props.onChange}
                    value={props.value} />
        </div>
    )
}
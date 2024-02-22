import React from "react";

export enum ButtonTheme {
    Primary,
    Secondary,
    Delete,
    Success,
    Info,
    Invisible
}

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    theme: ButtonTheme
}

const getButtonThemeValues = (theme: ButtonTheme) => {
    const baseDarkBackground = {
        hoverText: "hover:text-white",
        text: "text-white",
    };

    if (theme == ButtonTheme.Primary) {
        return {
            ...baseDarkBackground,
            bg: "bg-primary",
            hover: "hover:bg-primary-light",
            border: "border-primary",
        }
    }
    else if (theme == ButtonTheme.Secondary) {
        return {
            hoverText: "hover:text-gray-900",
            text: "text-gray-900",
            bg: "bg-white",
            hover: "hover:bg-gray-50",
            border: "border-gray-300",
        }
    }
    else if (theme == ButtonTheme.Delete) {
        return {
            ...baseDarkBackground,
            bg: "bg-error",
            hover: "hover:bg-error-light",
            border: "border-error",
        }
    }
    else if (theme == ButtonTheme.Success) {
        return {
            ...baseDarkBackground,
            bg: "bg-success",
            hover: "hover:bg-success-light",
            border: "border-success",
        }
    }
    else if (theme == ButtonTheme.Info) {
        return {
            ...baseDarkBackground,
            bg: "bg-info",
            hover: "hover:bg-info-light",
            border: "border-info",
        }
    }
    else if (theme == ButtonTheme.Invisible) {
        return {
            hoverText: "hover:text-gray-900",
            text: "text-gray-900",
            bg: "bg-none",
            hover: "hover:bg-gray-50",
            border: "border-none",
        }
    }
    throw new Error("Could not get colours of theme " + theme);
}

export default function Button(props: ButtonProps) {
    const { theme, className, ...otherProps } = props;
    const { bg, hover, text, hoverText, border } = getButtonThemeValues(theme);

    return (
        <button
            className={`${bg} ${hover} ${text} font-semibold ${hoverText} py-1.5 px-4 border ${border} hover:border-transparent rounded ${className ?? ""}`}
            {...otherProps}
        >
            {props.children}
        </button>
    )
}
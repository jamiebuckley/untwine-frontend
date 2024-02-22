import React, {HTMLProps, PropsWithChildren, useRef} from "react";

export const DialogBottomBar = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2" {...props}>
            {props.children}
        </div>
    )
}

export const DialogHeader = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <h3 className={"text-xl font-semibold leading-6 text-gray-900 mb-4"} {...props}>
            {props.children}
        </h3>
    )
}

interface DialogProps {
    show: boolean;
    close: () => void;
    closeOnBackgroundClick?: boolean;
}

export const Dialog = (props: DialogProps & PropsWithChildren<DialogProps>) => {
    const backgroundClass = (props.show) ? "bg-opacity-75" : "bg-opacity-0";
    const modalClass = (props.show) ? "opacity-100 translate-y-0 duration-300" : "opacity-0 translate-y-4 duration-200";
    const backgroundRef = useRef(null);

    const onBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (props.closeOnBackgroundClick === false) {
            return;
        }

        if (event.target === backgroundRef.current) {
            console.log(event);
            props.close();
        }
    }

    return (
        <div className={`relative z-10  ${props.show ? "" : "invisible duration-200"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={onBackgroundClick}>
            <div className={`fixed inset-0 bg-gray-500 ${backgroundClass} transition-all duration-200`}></div>

            <div className={`fixed inset-0 z-10 w-screen overflow-y-auto`} ref={backgroundRef} >
                <div className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-none`}>
                    <div className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${modalClass} pointer-events-auto`}>
                            {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}
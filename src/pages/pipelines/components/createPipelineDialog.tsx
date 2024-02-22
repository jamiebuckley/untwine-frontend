import {Dialog, DialogBottomBar, DialogHeader} from "../../../components/dialog/dialog.tsx";
import Button, {ButtonTheme} from "../../../components/button/button.tsx";
import InputWithLabel from "../../../components/form/input.tsx";
import {useEffect, useState} from "react";

interface Props {
    show: boolean;
    close: () => void;
    revalidate: () => void;
}
export default function CreatePipelineDialog(props: Props) {

    const [newPipelineName, setNewPipelineName] = useState("");
    const [validationErrors, setValidationErrors] = useState({});
    const [serverError, setServerError ] = useState("");

    useEffect(() => {
        if (props.show) {
            setNewPipelineName("");
        }
    }, [ props.show ]);

    const onCreateNewPipelineClick = async () => {
        if (newPipelineName.length === 0) {
            setValidationErrors({ ...validationErrors, newPipelineName: "New pipeline name must not be empty" });
        }

        if (Object.keys(validationErrors).length !== 0) {
            return;
        }

        const response = await fetch('/api/pipelines', {
            method: "POST",
            body: JSON.stringify({
                name: newPipelineName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.status !== 200) {
            const bodyText = await response.json();
            setServerError(bodyText ?? "An unknown server error occurred");
            return;
        }

        props.revalidate();
        props.close();
    }

    function onPipelineNameChanged(name: string) {
        let capitalizedName = name;
        if (capitalizedName.length > 0) {
            capitalizedName = capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);
        }
        return setNewPipelineName(capitalizedName);
    }

    return (
        <Dialog show={props.show} close={props.close} closeOnBackgroundClick={false}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <DialogHeader>Create New Pipeline</DialogHeader>
                <div>{serverError}</div>
                <InputWithLabel label={"New pipeline name:"} placeholder={"Name"} value={newPipelineName} onChange={(e) => onPipelineNameChanged(e.target.value)} />
            </div>
            <DialogBottomBar>
                <Button theme={ButtonTheme.Success} onClick={onCreateNewPipelineClick}>Create</Button>
                <Button theme={ButtonTheme.Secondary} onClick={() => props.close()}>Cancel</Button>
            </DialogBottomBar>
        </Dialog>
    )
}
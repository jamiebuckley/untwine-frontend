import {Dialog, DialogBottomBar, DialogHeader} from "../../../components/dialog/dialog.tsx";
import Button, {ButtonTheme} from "../../../components/button/button.tsx";
import InputWithLabel from "../../../components/form/input.tsx";
import {useState} from "react";
import {RadioGroup} from "@headlessui/react";
import Card from "../../../components/card/card.tsx";
import {CheckCircleIcon} from "@heroicons/react/24/outline";

interface Props {
    show: boolean;
    close: () => void;
    revalidate: () => void;
}

function RadioGroupOption(props: { title: string, checked: boolean }) {
    return (
        <Card className={`p-4 mb-4 ${props.checked ? "border-solid border-info border-2": "border-2"}`}>
            <div className={"flex items-center"}>
                <span className={"flex-grow"}>{props.title}</span>
                <CheckCircleIcon className={`h-6 w-6 text-info ${props.checked ? "" : "invisible"}`} />
            </div>
        </Card>
    )
}

function MyRadioGroup() {
    const [plan, setPlan] = useState('startup')

    return (
        <RadioGroup value={plan} onChange={setPlan}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Data format:
            </label>
            <RadioGroup.Option value="csv">
                {({checked}) => (
                    <RadioGroupOption title={"CSV"} checked={checked}/>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="parquet">
                {({checked}) => (
                    <RadioGroupOption title={"Parquet"} checked={checked}/>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="excel">
                {({checked}) => (
                    <RadioGroupOption title={"Excel"} checked={checked}/>
                )}
            </RadioGroup.Option>
            <RadioGroup.Option value="json">
                {({checked}) => (
                    <RadioGroupOption title={"JSON"} checked={checked}/>
                )}
            </RadioGroup.Option>
        </RadioGroup>
    )
}

export default function CreateDataSourceDialog(props: Props) {
    const [serverError, _] = useState("");
    const [newDatasourceName, setNewDatasourceName] = useState("");

    return (
        <Dialog show={props.show} close={props.close} closeOnBackgroundClick={false}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <DialogHeader>Create New Datasource</DialogHeader>
                <div>{serverError}</div>
                <InputWithLabel label={"New datasource name:"} placeholder={"Name"} value={newDatasourceName} onChange={(e) => setNewDatasourceName(e.target.value)} />
                <MyRadioGroup />
            </div>
            <DialogBottomBar>
                <Button theme={ButtonTheme.Success} onClick={() => {}}>Create</Button>
                <Button theme={ButtonTheme.Secondary} onClick={() => props.close()}>Cancel</Button>
            </DialogBottomBar>
        </Dialog>
    )
}
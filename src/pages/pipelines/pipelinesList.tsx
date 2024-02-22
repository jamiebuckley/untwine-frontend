import Button, {ButtonTheme} from "../../components/button/button.tsx";
import {PipelineCard} from "./components/pipelineCard.tsx";
import {useLoaderData, useRevalidator} from "react-router-dom";
import Pipeline from "../../models/Pipeline.ts";
import CreatePipelineDialog from "./components/createPipelineDialog.tsx";
import {useState} from "react";

export default function PipelinesList() {
    const pipelines = useLoaderData() as Pipeline[];
    const revalidator = useRevalidator();
    const [showCreatePipelineDialog, setShowCreatePipelineDialog] = useState(false);

    return (
        <>
            <CreatePipelineDialog show={showCreatePipelineDialog} close={() => setShowCreatePipelineDialog(false)}  revalidate={() => revalidator.revalidate()} />
            <div className={"p-4 flex justify-end bg-slate-100"}>
                <Button theme={ButtonTheme.Primary} onClick={() => setShowCreatePipelineDialog(true)}>
                    Create Pipeline
                </Button>
            </div>
            <div className={"m-4 grid grid-cols-3 gap-4"}>
                {
                    pipelines.map(p => (
                        <PipelineCard key={p.id} title={p.name} />
                    ))
                }
            </div>
        </>
    )
}
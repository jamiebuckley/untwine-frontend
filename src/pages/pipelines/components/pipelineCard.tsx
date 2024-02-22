import Button, {ButtonTheme} from "../../../components/button/button.tsx";
import {EllipsisVerticalIcon, PencilIcon, PlayIcon} from "@heroicons/react/16/solid";
import Card from "../../../components/card/card.tsx";

export const PipelineCard = (props: { title: string }) => {
    return (
        <Card>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-8">{props.title}</div>
                <div className={"flex flex-row gap-2 justify-end"}>
                    <div className={"flex-grow"}>
                        <Button theme={ButtonTheme.Invisible} onClick={() => alert("todo")} className={"flex gap-2 items-center"}>
                            <EllipsisVerticalIcon className="h-4 w-4 text-gray-900" />
                        </Button>
                    </div>
                    <Button theme={ButtonTheme.Info} onClick={() => alert("todo")} className={"flex gap-2 items-center"}>
                        <PencilIcon className="h-4 w-4 text-white" />
                    </Button>
                    <Button theme={ButtonTheme.Success} onClick={() => alert("todo")} className={"flex gap-2 items-center"}>
                        <PlayIcon className="h-4 w-4 text-white" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
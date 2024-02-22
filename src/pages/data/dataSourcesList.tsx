import Button, {ButtonTheme} from "../../components/button/button.tsx";
import {useState} from "react";
import CreateDataSourceDialog from "./components/createDataSourceDialog.tsx";

export default function DataSourcesList() {

    const [showCreateDataSourceDialog, setShowCreateDataSourceDialog] = useState(false);

    return (
        <>
            <CreateDataSourceDialog show={showCreateDataSourceDialog} close={() => setShowCreateDataSourceDialog(false)} revalidate={() => {}} />
            <div className={"p-4 flex justify-end bg-slate-100"}>
                <Button theme={ButtonTheme.Primary} onClick={() => setShowCreateDataSourceDialog(true)}>
                    Add Data Source
                </Button>
            </div>
            <div className={"m-4"}>Datasource list</div>
        </>
    )
}
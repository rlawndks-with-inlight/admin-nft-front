import { useParams } from "react-router-dom"
import MItemEditComponent from "../../components/MItemEditComponent"

const MProductEdit = () => {
    const params = useParams();
    return (
        <>
            <MItemEditComponent schema={'item'} params_pk={params.pk} />
        </>
    )
}
export default MProductEdit;
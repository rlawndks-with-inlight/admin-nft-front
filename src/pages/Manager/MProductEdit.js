import { useParams } from "react-router-dom"
import MItemEditComponent from "../../components/MItemEditComponent"
import { useEffect } from "react";
import { Col, Explain, Row, Title } from "../../components/elements/ManagerTemplete";
import theme from "../../styles/theme";

const MProductEdit = () => {
    const params = useParams();
    useEffect(() => {
    }, [])
    return (
        <>
            <MItemEditComponent schema={'item'} params_pk={params.pk} />
        </>
    )
}
export default MProductEdit;
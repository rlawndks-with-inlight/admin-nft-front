import { BiEditAlt } from "react-icons/bi";
import { commarNumber, dateFormat, getUserLevelByNumber } from "../../functions/utils";
import { RiDeleteBinLine } from "react-icons/ri";
import { backUrl } from "../../data/Data";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import theme from "../../styles/theme";
import { GrLinkTop } from "react-icons/gr";

export const returnColumn = (data_, type_, column_, is_list, schema, func) => {
    const {
        navigate,
        deleteItem,
        changeStatus,
        opTheTopItem
    } = func;
    let data = { ...data_ };
    let type = type_;
    let column = column_;
    let result = "---";
    if (type == 'text') {
        result = data[`${column}`] ?? "---";
    } else if (type == 'number') {
        result = commarNumber(data[`${column}`] ?? 0);
    } else if (type == 'level') {
        result = getUserLevelByNumber(data[`${column}`] ?? 0);
    } else if (type == 'minus_number') {
        result = commarNumber((data[`${column}`] ?? 0) * (-1));
    } else if (type == 'date') {
        result = dateFormat(data[`${column}`]);
    } else if (type == 'abs') {
        result = commarNumber(Math.abs(data[`${column}`]));
    } else if (type == 'link') {
        result = data[`${column}`];
    } else if (type == 'login_type') {
        if (data[`${column}`] == 0) {
            result = "일반";
        } else if (data[`${column}`] == 1) {
            result = "카카오";
        } else if (data[`${column}`] == 2) {
            result = "네이버";
        } else if (data[`${column}`] == 3) {
            result = "애플";
        }
    } else if (type == 'img') {
        result = data[`${column}`];
        if (is_list) {
            result = <img alt={`${column}`} src={backUrl + data[`${column}`]} style={{ height: '5rem' }} />
        }
    } else if (type == 'top') {
        result = "---";
        if (is_list) {
            result = <GrLinkTop style={{ color: '#aaaaaa', cursor: 'pointer' }} onClick={() => opTheTopItem(data.pk, data.sort, schema)} />
        }
    } else if (type == 'target') {
        if (data[`${column}`] == 0) {
            result = "현재창";
        } else if (data[`${column}`] == 1) {
            result = "새창";
        }
    } else if (type == 'status') {
        if (data[`${column}`] > 0) {
            result = "on";
        } else {
            result = "off";
        }
        if (is_list) {
            result = <>
                {data[`${column}`] > 0 ?
                    <CgToggleOn style={{ color: `${theme.color.background1}`, cursor: 'pointer', fontSize: '28px' }} onClick={() => { changeStatus(0, data.pk, column) }} /> :
                    <CgToggleOff style={{ color: '#aaaaaa', cursor: 'pointer', fontSize: '28px' }} onClick={() => { changeStatus(1, data.pk, column) }} />}
            </>
        }
    } else if (type == 'alarm_type') {
        if (data[`${column}`] == 1) {
            result = "스케줄링";
        } if (data[`${column}`] == 2) {
            result = "예약발송";
        } else {
            result = "즉시실행";
        }
    } else if (type == 'request_status') {
        if (data[`status`] == 0) {
            result = "확인대기";
        } if (data[`status`] == 1) {
            result = "답변완료";
        } else {
            result = "---";
        }
    } else if (type == '---') {
        result = "---";
    } else if (type == 'increase') {
        result = data[`${column}`] > 0 ? "+" : "-";
    } else if (type == 'minus_increase') {
        result = data[`${column}`] < 0 ? "+" : "-";
    } else if (type == 'edit') {
        result = "---";
        if (is_list) {
            result = <BiEditAlt style={{ cursor: 'pointer', color: '#546de5', fontSize: '20px' }} onClick={() => navigate(`/manager/edit/${schema}/${data.pk}`)} />
        }
    } else if (type == 'delete') {
        result = "---";
        if (is_list) {
            result = <RiDeleteBinLine style={{ cursor: 'pointer', color: '#e15f41', fontSize: '20px' }} onClick={() => {
                if (window.confirm("정말로 삭제하시겠습니까?")) {
                    deleteItem(data.pk, schema)
                }
            }} />
        }
    }
    return result;
}
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import styled from 'styled-components'
import { backUrl, objManagerListContent } from '../../data/Data'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { CgToggleOn, CgToggleOff } from 'react-icons/cg'
import { AiFillPlusCircle, AiOutlineUnorderedList } from 'react-icons/ai'
import theme from '../../styles/theme'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { GrLinkTop } from 'react-icons/gr'
import { commarNumber, numberToCategory } from '../../functions/utils'
import { useEffect } from 'react'
import { GiCancel } from 'react-icons/gi'
import $ from 'jquery'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { returnColumn } from './ColumnType'
const Tr = styled.tr`
box-shadow:1px 1px 1px #00000029;
font-size:${props => props.theme.size.font5};
background:#fff;
color:${props => props.theme.color.manager.font2};

`
const Td = styled.td`
text-align:center;
padding:14px 0;
margin-bottom:6px;
max-width:200px;
`
const ItemTypes = { CARD: 'card' }

const DataTr = ({ id, data, index, moveCard, column, schema, list, sort, obj, opTheTopItem, changeItemSequence, deleteItem, changeStatus }) => {
    const notUseCard = ['all', 'user_statistics'];
    const navigate = useNavigate();
    const ref = useRef(null)
    const [status, setStatus] = useState(data?.status);
    useEffect(() => {
        $('.manager-data-tr > td').css('word-break', 'break-all');
    }, [])
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop(item) {
            changeItemSequence(item.id, item.sort, schema, item.index);
        },
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (notUseCard.includes(schema)) return;
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            const itemPk = data.pk
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex, itemPk)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index, sort }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))

    return (
        <>
            <Tr ref={obj.is_move ? ref : null} data-handler-id={handlerId} className='manager-data-tr'>
                {column.map((col, index) => (
                    <>
                        <Td style={{ width: `${col.width}%` }}>
                            {returnColumn(data, col.type, col.column, true, schema, {
                                navigate,
                                deleteItem,
                                changeStatus,
                                opTheTopItem,
                            })}
                        </Td>
                        {/* {col.type == 'text' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>{data[`${col.column}`] ?? "---"}</Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'number' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>{commarNumber(data[`${col.column}`])}</Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'link' ?
                            <>
                                <Td style={{ width: `${col.width}%`, cursor: 'pointer', textDecoration: 'underline' }} onClick={() => { window.open(data[`${col.column}`]) }}>{data[`${col.column}`]}</Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'login_type' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>{getLoginTypeByNumber(data[col.column])}</Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'level' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>{getUserLevelByNumber(data[col.column])}</Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'img' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {data[`${col.column}`] ?
                                        <>
                                            <img alt={`${col.column}`} src={backUrl + data[`${col.column}`]} style={{ height: '5rem' }} />
                                        </>
                                        :
                                        <>
                                            ---
                                        </>}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'top' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '22px' }}>
                                    <GrLinkTop style={{ color: '#aaaaaa', cursor: 'pointer' }} onClick={() => opTheTopItem(data.pk, data.sort, schema)} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'status' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '28px' }}>
                                    {data[`${col.column}`] > 0 ?
                                        <CgToggleOn style={{ color: `${theme.color.background1}`, cursor: 'pointer' }} onClick={() => { changeStatus(0, data.pk, col.column) }} /> :
                                        <CgToggleOff style={{ color: '#aaaaaa', cursor: 'pointer' }} onClick={() => { changeStatus(1, data.pk, col.column) }} />}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'period' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {data?.start_date} ~ {data?.end_date}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'alarm_type' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {data[`${col.column}`] == 0 ?
                                        '즉시실행' :
                                        ''}
                                    {data[`${col.column}`] == 1 ?
                                        '스케줄링' :
                                        ''}
                                    {data[`${col.column}`] == 2 ?
                                        '예약발송' :
                                        ''}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'category_type' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {numberToCategory(data[`${col.column}`]).name}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'post_category' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {getPostCategoryNameByEng(data[`${col.column}`])}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'add_academy' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <AiFillPlusCircle style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/edit/academy/0`, { state: { category_pk: data.pk, category_title: data.title, master_pk: data.master_pk } })} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'academy_list' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <AiOutlineUnorderedList style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/list/academy/${data.pk}`, { state: { breadcrumb: data.title + ' 강의 컨텐츠' } })} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'edit' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <BiEditAlt style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/edit/${schema}/${data.pk}`)} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'pay_edit' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <BiEditAlt style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/edit/pay_edit/${data.pk}`)} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'user_pay_list' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <RiMoneyDollarCircleLine style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/list/subscribe/${data.pk}`, { state: { breadcrumb: `${data?.id} 회원 결제 내역` } })} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'pay_cancel' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    {data?.transaction_status >= 0 ?
                                        <>
                                            <GiCancel style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/edit/pay_cancel/${data.pk}`)} />
                                        </>
                                        :
                                        <>
                                            ---
                                        </>}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'master_edit' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <BiEditAlt style={{ cursor: 'pointer', color: '#546de5' }} onClick={() => navigate(`/manager/edit/master/${data.pk}`)} />
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'request_status' ?
                            <>
                                <Td style={{ width: `${col.width}%` }}>
                                    {data[`status`] == 0 ?
                                        '확인대기' :
                                        ''}
                                    {data[`status`] == 1 ?
                                        '답변완료' :
                                        ''}
                                </Td>
                            </>
                            :
                            <>
                            </>}
                        {col.type == 'delete' ?
                            <>
                                <Td style={{ width: `${col.width}%`, fontSize: '20px' }}>
                                    <RiDeleteBinLine style={{ cursor: 'pointer', color: '#e15f41' }} onClick={() => {
                                        if (window.confirm("정말로 삭제하시겠습니까?")) {
                                            deleteItem(data.pk, schema)
                                        }
                                    }} />
                                </Td>
                            </>
                            :
                            <>
                            </>} */}

                    </>
                ))}

            </Tr>
        </>
    )
}
export default DataTr
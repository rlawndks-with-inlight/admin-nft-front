// 회원 조직도
import Breadcrumb from '../../common/manager/Breadcrumb';
import { Select } from '../../components/elements/ManagerTemplete';
import ButtonContainer from "../../components/elements/button/ButtonContainer";
import AddButton from "../../components/elements/button/AddButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from "styled-components";
import { commarNumber, getUserLevelByNumber, range } from "../../functions/utils";
import theme from "../../styles/theme";
import $ from 'jquery';
export const OneCard = styled.div`
background:#fff;
background:${props => props.background};
color:${props => props.theme.font1};
color:${(props => props.color)};
box-shadow:${props => props.theme.boxShadow};
padding:2%;
border-radius:8px;
display:flex;
flex-direction:column;
${(props => props.is_hover ? ('cursor:pointer') : '')};
height:48px;
width:${(props => props.width) ?? "100"}%;
transition-duration: 0.3s;
&:hover{  
    background : ${(props => props.is_hover ? (props => props.theme.color.background1 + '29') : '')};
}
@media screen and (max-width:400px) { 
    height:56px;
}
`
const max_child_depth = 1000;
const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid ${theme.color.background1};
  animation: fadein 0.5s;
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`;
const MUserOrganizationChart = () => {
    const params = useParams();
    const [treeList, setTreeList] = useState([]);
    const [allTreeList, setAllTreeList] = useState([]);
    const [rangeList, setRangeList] = useState([]);
    const [tree, setTree] = useState(undefined);
    const [userCount, setUserCount] = useState(0);
    const [topUser, setTopUser] = useState({});
    const [downLevel, setDownLevel] = useState(1);

    useEffect(() => {
        async function fetchPosts() {
            setRangeList(range(0, max_child_depth));
            const { data: response } = await axios.post('/api/getgenealogy');
            let tree_list = [];
            for (var i = 0; i < max_child_depth; i++) {
                tree_list[i] = {};
            }
            setTreeList([...tree_list]);
            console.log(response?.data?.data[0][0][0])
            setTopUser(response?.data?.data[0][0][0])
            setAllTreeList(response?.data?.data ?? []);
        }
        fetchPosts();
        setTeeAll();
    }, []);
    const getChildByUserPk = (pk_, depth) => {
        let pk = pk_;
        if (treeList[`${depth + 1}`][pk]) {
            return treeList[`${depth + 1}`][pk];
        } else {
            return [];
        }
    }
    const returnChildTree = (pk, depth) => {
        if (depth > max_child_depth - 1) {
            return;
        } else {
            return (getChildByUserPk(pk, depth) && getChildByUserPk(pk, depth).map((item, idx) => (
                <>
                    <TreeNode label={<StyledNode style={{ cursor: 'pointer', border: `2px solid ${(allTreeList[item?.depth + 1][item?.pk] && allTreeList[item?.depth + 1][item?.pk].length > 0) ? `${theme.color.background1}` : `${theme.color.red}`}`, minWidth: '54px' }} onClick={() => { onClickUser(item?.pk, item?.depth) }}>
                        <div style={{ fontSize: theme.size.font5 }}>{`${item?.id}`}</div>
                        <div style={{ fontSize: theme.size.font5 }}>{`${item?.name}`}</div>
                        <div style={{ fontSize: theme.size.font5 }}>{`${getUserLevelByNumber(item?.user_level)}`}</div>
                    </StyledNode>}>
                        {returnChildTree(item?.pk, item?.depth)}
                    </TreeNode>
                </>
            )))
        }
    }
    useEffect(() => {
        if (treeList && treeList.length > 0) {
            setTree(
                returnChildTree(topUser?.pk, topUser?.depth)
            )
        }
    }, [treeList])
    const onClickUser = (pk, depth) => {
        let tree_list = [...treeList];
        if (tree_list[depth + 1][pk] && tree_list[depth + 1][pk].length > 0) {
            let parent_list = [pk];
            for (var i = depth + 1; i < max_child_depth; i++) {
                let last_parent_list = [...parent_list];
                for (var j = 0; j < last_parent_list.length; j++) {
                    if (tree_list[i][last_parent_list[j]] && tree_list[i][last_parent_list[j]].length > 0) {
                        parent_list = [...parent_list, ...tree_list[i][last_parent_list[j]].map((item) => { return item?.pk })];
                    }
                    delete tree_list[i][last_parent_list[j]];
                }
            }
        } else {
            tree_list[depth + 1][pk] = allTreeList[depth + 1][pk] ?? [];
            if (downLevel > 1) {
                let last_parent_list = tree_list[depth + 1][pk].map((item) => { return item?.pk });
                for (var i = 2; i <= downLevel; i++) {
                    let parent_list = [...last_parent_list];
                    last_parent_list = [];
                    for (var j = 0; j < parent_list.length; j++) {
                        tree_list[depth + i][parent_list[j]] = allTreeList[depth + i][parent_list[j]] ?? [];
                        last_parent_list = [...last_parent_list, ...allTreeList[depth + i][parent_list[j]].map((item) => { return item?.pk })];
                    }
                }
            }
        }
        setTreeList([...tree_list]);
    }
    const onChangeDownLevel = async (e) => {
        if (e.target.value == 'all') {
            const { data: response } = await axios.post('/api/getgenealogy');
            setTreeList(response?.data?.data ?? []);
            $('.down-level').val(downLevel);
        } else {
            setDownLevel(parseInt(e.target.value));
        }
    }
    const setTeeAll = async () => {
        const { data: response } = await axios.post('/api/getgenealogy');
        setTreeList(response?.data?.data ?? []);
    }
    return (
        <>
            <Breadcrumb title={`회원 조직도`} nickname={``} />
            <div style={{ width: '100%', overflowX: 'scroll', minHeight: '90vh', marginTop: '3.5rem' }} className='scroll-table-green'>
                <OneCard style={{ position: 'fixed', background: '#fff', zIndex: '10', right: '2rem', top: `${window.innerWidth >= 700 ? '8rem' : '4rem'}`, height: '30px', opacity: '0.8', flexDirection: 'row', alignItems: 'center', width: '180px', justifyContent: 'space-between', padding: '8px' }}>
                    <div style={{ fontSize: theme.size.font5, width: '50px' }}>조직도</div>
                    <Select style={{ margin: '0', width: '100px' }} className='down-level' onChange={onChangeDownLevel}>
                        {range(1, 10) && range(1, 10).map((item, idx) => (
                            <>
                                <option value={item}>{item}</option>
                            </>
                        ))}
                        <option value={'all'}>전체보기</option>
                    </Select>
                </OneCard>
                <Tree
                    lineWidth={'1px'}
                    lineColor={theme.color.background1}
                    lineBorderRadius={'10px'}
                    label={<StyledNode style={{ cursor: 'pointer', border: `2px solid ${(allTreeList[topUser?.depth + 1][topUser?.pk] && allTreeList[topUser?.depth + 1][topUser?.pk].length > 0) ? `${theme.color.background1}` : `${theme.color.red}`}`, minWidth: '54px' }} onClick={() => { onClickUser(topUser?.pk, topUser?.depth) }}>
                        <div style={{ fontSize: theme.size.font5 }}>{`${topUser?.id}`}</div>
                        <div style={{ fontSize: theme.size.font5 }}>{`${topUser?.name}`}</div>
                        <div style={{ fontSize: theme.size.font5 }}>{`${getUserLevelByNumber(topUser?.user_level)}`}</div>
                    </StyledNode>}
                >
                    {tree}
                </Tree>
            </div>
        </>
    )
}
export default MUserOrganizationChart;
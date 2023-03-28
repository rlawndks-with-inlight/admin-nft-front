
import MLogin from '../pages/Manager/MLogin';
import MUserEdit from '../pages/Manager/MUserEdit';
import MIssueCategoryEdit from '../pages/Manager/MIssueCategoryEdit';
import MFeatureCategoryEdit from '../pages/Manager/MFeatureCategoryEdit';
import MVideoEdit from '../pages/Manager/MVideoEdit';
import MSettingEdit from '../pages/Manager/MSettingEdit';

import MItemEdit from '../pages/Manager/MItemEdit';
import MItemList from '../pages/Manager/MItemList';
import MAlarmEdit from '../pages/Manager/MAlarmEdit';
import MAcademyEdit from '../pages/Manager/MAcademyEdit';

import MSubscribeEdit from '../pages/Manager/MSubscribeEdit';
import MPayEdit from '../pages/Manager/MPayEdit';
import MPayCancelEdit from '../pages/Manager/MPayCancelEdit';
import MPayExcelEdit from '../pages/Manager/MPayExcelEdit';

const zManagerRoute = [
    { link: '/', element: <MLogin />, title: "관리자로그인" },
    { link: '/manager', element: <MLogin />, title: "관리자로그인" },
    { link: '/manager/login', element: <MLogin />, title: "관리자로그인" },
    { link: '/manager/edit/user/:pk', element: <MUserEdit />, title: "회원관리" },
    { link: '/manager/edit/video/:pk', element: <MVideoEdit />, title: "핵심비디오관리" },
    { link: '/manager/edit/alarm/:pk', element: <MAlarmEdit />, title: "알람관리" },
    { link: '/manager/edit/academy/:pk', element: <MAcademyEdit />, title: "강의관리" },
    { link: '/manager/edit/subscribe/:pk', element: <MSubscribeEdit />, title: "결제 내역 관리" },
    { link: '/manager/edit/pay_edit/:pk', element: <MPayEdit />, title: "결제 내역 관리" },
    { link: '/manager/edit/pay_cancel/:pk', element: <MPayCancelEdit />, title: "결제 내역 취소 관리" },
    { link: '/manager/edit/issue_category/:pk', element: <MIssueCategoryEdit />, title: "핵심이슈카테고리관리" },
    { link: '/manager/edit/feature_category/:pk', element: <MFeatureCategoryEdit />, title: "특징주카테고리관리" },
    { link: '/manager/edit/setting', element: <MSettingEdit />, title: "환경설정" },
    { link: '/manager/edit/pay_excel', element: <MPayExcelEdit />, title: "" },
    
    { link: '/manager/edit/:table/:pk', element: <MItemEdit />, title: "" },
    { link: '/manager/list/:table/:pk', element: <MItemList />, title: "" },
    { link: '/manager/list/:table', element: <MItemList />, title: "" },
];


export { zManagerRoute }
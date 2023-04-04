import { logoSrc, backUrl } from "../Data";
import { EditorState } from "draft-js"
import { columnObjFormat, editColumnObjFormat, editContentFormat, sidebarContentFormat, sidebarObjFormat, sidebarObjListFormat } from "./ManagerContentFormat";
import { BsPerson, BsCameraVideo, BsAlarm } from 'react-icons/bs'
import { AiTwotoneSetting, AiOutlineUnorderedList } from 'react-icons/ai'
export const editorState = {
    editorState: EditorState.createEmpty()
}

export const cardDefaultColor = {
    font: "#000",
    background: "#f4f4f4"
}
export const needTwoImage = ['issue', 'theme', 'feature'];

export const zSidebar = [
    sidebarContentFormat('회원관리', [
        sidebarObjListFormat('회원관리', '/manager/list/user', 40, ['/manager/list/user']),//edit
        sidebarObjListFormat('회원조직도(레벨별)', '/manager/user_organization_chart', 40, ['/manager/user_organization_chart']),
        //sidebarObjListFormat('회원통계', '/manager/list/user_statistics', 40, ['/manager/list/user_statistics']),//edit
    ], <BsPerson />),
    sidebarContentFormat('기본설정', [
        // sidebarObjListFormat('상단띠배너', '/manager/edit/common_setting/1', 40, ['/manager/edit/common_setting/1']),//list
        sidebarObjListFormat('메인배너', '/manager/edit/home_setting/1', 40, ['/manager/edit/home_setting/1']),//list
        sidebarObjListFormat('하단배너', '/manager/edit/home_bottom/1', 40, ['/manager/edit/home_bottom/1']),//list
        sidebarObjListFormat('문의배너', '/manager/edit/request_banner/1', 40, ['/manager/edit/request_banner/1']),//list
        sidebarObjListFormat('팝업관리', '/manager/list/popup', 40, ['/manager/list/popup']),//list
    ], <AiTwotoneSetting />),
    sidebarContentFormat('NFT관리', [
        sidebarObjListFormat('지갑관리', '/manager/list/wallet', 40, ['/manager/list/wallet']),//list
        sidebarObjListFormat('NFT카테고리관리', '/manager/list/item_category', 40, ['/manager/list/item_category']),//list
        sidebarObjListFormat('NFT속성관리', '/manager/list/item_property', 40, ['/manager/list/item_property']),//list
        sidebarObjListFormat('NFT관리', '/manager/list/item', 40, ['/manager/list/item']),//list
    ], <AiTwotoneSetting />),
    sidebarContentFormat('게시판관리', [
        sidebarObjListFormat('문의관리', '/manager/list/request', 40, ['/manager/list/request']),//list
        // sidebarObjListFormat('FAQ관리', '/manager/list/faq', 40, ['/manager/list/faq']),//list
        // sidebarObjListFormat('이벤트관리', '/manager/list/event', 40, ['/manager/list/event']),//list
        // sidebarObjListFormat('공지사항', '/manager/list/notice', 40, ['/manager/list/notice']),//list
        // sidebarObjListFormat('후기관리', '/manager/list/review', 40, ['/manager/list/review']),//list
    ], <AiOutlineUnorderedList />),
    // sidebarContentFormat('푸시알림', [
    //     sidebarObjListFormat('푸시알림', '/manager/list/alarm', 40, ['/manager/list/alarm']),//list
    // ], <BsAlarm />),
];

export const objManagerListContent = {
    user: sidebarObjFormat(
        '회원 리스트',
        'user',
        [
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('이름', '', 'text', 'name'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('접근권한', '', 'level', 'user_level'),
            columnObjFormat('추천인아이디', '', 'text', 'parent_id'),
            columnObjFormat('가입일', '', 'text', 'date'),
            columnObjFormat('로그인시간', '', 'text', 'last_login'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['level='],
        true,
        false),
    item_category: sidebarObjFormat(
        'NFT 카테고리 리스트',
        'item_category',
        [
            columnObjFormat('메인이미지', '', 'img', 'img_src'),
            columnObjFormat('카테고리명', '', 'text', 'name'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true,
    ),
    item_property: sidebarObjFormat(
        'NFT 속성 리스트',
        'item_property',
        [
            columnObjFormat('속성명', '', 'text', 'name'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true,
    ),
    item: sidebarObjFormat(
        'NFT 리스트',
        'item',
        [
            columnObjFormat('메인이미지', '', 'img', 'img_src'),
            columnObjFormat('NFT명', '', 'text', 'name'),
            columnObjFormat('카테고리명', '', 'text', 'category_name'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        false,
        '100%'),
    wallet: sidebarObjFormat(
        '지갑 리스트',
        'wallet',
        [
            columnObjFormat('메인이미지', '', 'img', 'img_src'),
            columnObjFormat('지갑명', '', 'text', 'name'),
            columnObjFormat('단위명', '', 'text', 'unit'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        false,
        '100%'),
    user_statistics: sidebarObjFormat(
        '회원 통계',
        'user_statistics',
        [
            columnObjFormat('일자', '', 'text', 'date'),
            columnObjFormat('가입', '', 'number', 'user_count'),
            columnObjFormat('방문', '', 'number', 'visit_count'),
            columnObjFormat('새글', '', 'number', 'post_count'),
            columnObjFormat('댓글', '', 'number', 'comment_count'),
            columnObjFormat('페이지뷰', '', 'number', 'views_count'),
        ],
        ['statistics_type=', 'statistics_year=', 'statistics_month='],
        false,
        false),
    master: sidebarObjFormat(
        '전문가 리스트',
        'user',
        [
            columnObjFormat('프로필이미지', '', 'img', 'profile_img'),
            columnObjFormat('로그인타입', '', 'login_type', 'type'),
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('이름', '', 'text', 'name'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('접근권한', '', 'level', 'user_level'),
            columnObjFormat('가입일', '', 'text', 'date'),
            columnObjFormat('로그인시간', '', 'text', 'last_login'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'master_edit', 'master_edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['level=30'],
        true,
        true),


    comment: sidebarObjFormat(
        '댓글 관리',
        'comment',
        [
            columnObjFormat('카테고리', '', 'category_type', 'category_pk'),
            columnObjFormat('제목', '', 'text', 'item_title'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('댓글', '', 'text', 'note'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        false,
        false),
    subscribe: sidebarObjFormat(
        '결제 내역 관리',
        'subscribe',
        [
            columnObjFormat('신청번호', '', 'number', 'pk'),
            columnObjFormat('아이디', '', 'text', 'id'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('유저명', '', 'text', 'user_name'),
            columnObjFormat('폰번호', '', 'text', 'phone'),
            columnObjFormat('수강강의', '', 'text', 'title'),
            columnObjFormat('강사', '', 'text', 'master_nickname'),
            columnObjFormat('승인금액', '', 'text', 'approve_price'),
            columnObjFormat('취소금액', '', 'text', 'cancel_price'),
            columnObjFormat('등록일', '', 'text', 'trade_date'),
            columnObjFormat('이용기간', '', 'text', 'period'),
            columnObjFormat('예금주', '', 'text', 'account_holder'),
            columnObjFormat('은행명', '', 'text', 'bank_name'),
            columnObjFormat('계좌번호', '', 'text', 'account_number'),
            columnObjFormat('결제타입', '', 'text', 'type'),
            columnObjFormat('이용가능여부', '', 'status', 'use_status'),
            columnObjFormat('취소', '', 'pay_cancel', 'pay_cancel'),
            columnObjFormat('수정', '', 'pay_edit', 'pay_edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['status=1', 'master_pk=', 'academy_category_pk=', 'price_is_minus=', 'start_date=', 'end_date=', 'type='],
        true,
        false,
        '150%'),
    request: sidebarObjFormat(
        '문의 관리',
        'request',
        [
            columnObjFormat('문의자아이디', '', 'text', 'id'),
            columnObjFormat('문의자닉네임', '', 'text', 'nickname'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('확인여부', '', 'request_status', 'request_status'),
            columnObjFormat('문의날짜', '', 'text', 'date'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        false,
        false),
    faq: sidebarObjFormat(
        'FAQ 관리',
        'faq',
        [
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    event: sidebarObjFormat(
        '이벤트 관리',
        'event',
        [
            columnObjFormat('배너이미지', '', 'img', 'main_img'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('시작일', '', 'text', 'start_date'),
            columnObjFormat('종료일', '', 'text', 'end_date'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    notice: sidebarObjFormat(
        '공지 관리',
        'notice',
        [
            columnObjFormat('메인이미지', '', 'img', 'main_img'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('등록일', '', 'text', 'date'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
    review: sidebarObjFormat(
        '후기 관리',
        'review',
        [
            columnObjFormat('강의제목', '', 'text', 'item_title'),
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('닉네임', '', 'text', 'nickname'),
            columnObjFormat('생성일', '', 'text', 'date'),
            columnObjFormat('BEST', '', 'status', 'is_best'),
            columnObjFormat('자세히보기', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        ['master_pk=', 'academy_category_pk='],
        false,
        false),
    alarm: sidebarObjFormat(
        '푸시알림 관리',
        'alarm',
        [
            columnObjFormat('제목', '', 'text', 'title'),
            columnObjFormat('타입', '', 'alarm_type', 'type'),
            columnObjFormat('생성시간', '', 'text', 'date'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        false),
    popup: sidebarObjFormat(
        '팝업 관리',
        'popup',
        [
            columnObjFormat('이미지', '', 'img', 'img_src'),
            columnObjFormat('링크', '', 'text', 'link'),
            columnObjFormat('맨위로', '', 'top', 'top'),
            columnObjFormat('노출여부', '', 'status', 'status'),
            columnObjFormat('수정', '', 'edit', 'edit'),
            columnObjFormat('삭제', '', 'delete', 'delete'),
        ],
        [],
        true,
        true),
}
export const objManagerOptionCardContent = {

}
export const objManagerEditContent = {
    item_category: {
        schema: 'item_category',
        breadcrumb: 'NFT카테고리',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지', 'img', { field_name: 'content' }, 'img_src'),
            ],
            [
                editColumnObjFormat('카테고리명', 'input', { placeholder: '카테고리명을 입력해 주세요.' }, 'name'),
            ],
        ],
    },
    wallet: {
        schema: 'wallet',
        breadcrumb: '지갑',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지', 'img', { field_name: 'content' }, 'img_src'),
            ],
            [
                editColumnObjFormat('지갑명', 'input', { placeholder: '지갑명을 입력해 주세요.' }, 'name'),
            ],
            [
                editColumnObjFormat('금액단위', 'input', { placeholder: '단위명을 입력해 주세요.' }, 'unit'),
            ],
        ],
    },
    item_property: {
        schema: 'item_property',
        breadcrumb: 'NFT속성',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('속성명', 'input', { placeholder: '속성명을 입력해 주세요.' }, 'name'),
            ],
        ],
    },
    item: {
        schema: 'item',
        breadcrumb: 'NFT',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지', 'img', { field_name: 'content' }, 'img_src'),
            ],
            [
                editColumnObjFormat('NFT명', 'input', { placeholder: '카테고리명을 입력해 주세요.' }, 'name'),
                editColumnObjFormat('지갑명', 'select', {
                    api_url: '/api/items?table=wallet', option_list: [], use_name_column: 'name', use_val_column: 'pk'
                }, 'wallet_pk'),
                editColumnObjFormat('NFT카테고리', 'select', {
                    api_url: '/api/items?table=item_category', option_list: [], use_name_column: 'name', use_val_column: 'pk'
                }, 'category_pk'),
            ],
            [
                editColumnObjFormat('속성선택', 'multi_check', {
                    api_url: '/api/items?table=item_property', option_list: [], use_name_column: 'name', use_val_column: 'pk'
                }, 'property_list'),

            ],
            [
                editColumnObjFormat('가격', 'input', { placeholder: '숫자만 입력해 주세요.', type: 'number' }, 'price'),

            ],
            [
                editColumnObjFormat('설명', 'textarea', {}, 'note'),
            ],
        ],
    },
    academy: {
        schema: 'academy',
        breadcrumb: '강의 컨텐츠',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (240x150)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
                editColumnObjFormat('해시태그', 'input', { placeholder: '' }, 'hash'),
            ],
            [
                editColumnObjFormat('pdf 다운로드이동 이미지', 'img', { field_name: 'pdfimg' }, 'pdf_img'),
            ],
            [
                editColumnObjFormat('pdf업로드', 'pdf', { field_name: 'pdf' }, 'pdf'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    request: {
        schema: 'request',
        breadcrumb: '문의',
        add_list: [],
        update_list: [{ key: 'status', value: '1' }],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { disabled: true }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'textarea', { disabled: true }, 'note'),
            ],
            [
                editColumnObjFormat('답변', 'textarea', {}, 'reply_note'),
            ],
        ],
    },

    common_setting: {
        schema: 'setting',
        breadcrumb: '상단띠배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('탑 띠배너 전문가명', 'input', {}, 'top_banner_manager_name'),
                editColumnObjFormat('탑 띠배너 글', 'input', {}, 'top_banner_note'),
                editColumnObjFormat('탑 띠배너 링크', 'input', { placeholder: '/home' }, 'top_banner_link'),
            ],
        ],
    },
    subscribe: {
        schema: 'subscribe',
        breadcrumb: '결제 내역',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('유저아이디', 'input', {}, 'user_id'),
            ],
            [
                editColumnObjFormat('강의명', 'select', {
                    api_url: '/api/items?table=academy_category', option_list: [], use_name_column: 'title', use_val_column: 'pk'
                }, 'academy_category_pk'),
            ],
            [
                editColumnObjFormat('승인금액', 'input', {}, 'price'),

            ],
            [
                editColumnObjFormat('결제타입', 'select', {
                    api_url: false, option_list: [
                        { name: '카드결제', val: 0 },
                        { name: '무통장입금', val: 1 },
                        { name: '기타', val: 2 },
                    ]
                }, 'type'),
            ],
        ],
    },
    pay_edit: {
        schema: 'subscribe',
        breadcrumb: '결제 내역',
        add_list: [],
        columns: [//img, select, input, 
        ],
    },
    pay_cancel: {
        schema: 'subscribe',
        breadcrumb: '결제 내역 취소',
        add_list: [],
        columns: [//img, select, input, 
        ],
    },
    home_setting: {
        schema: 'setting',
        breadcrumb: '메인배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('슬라이드 이미지 1 (500x150)', 'img', { field_name: 'content1' }, 'home_banner_img_1'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 2 (500x150)', 'img', { field_name: 'content2' }, 'home_banner_img_2'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 3 (500x150)', 'img', { field_name: 'content3' }, 'home_banner_img_3'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 4 (500x150)', 'img', { field_name: 'content4' }, 'home_banner_img_4'),
            ],
            [
                editColumnObjFormat('슬라이드 이미지 5 (500x150)', 'img', { field_name: 'content5' }, 'home_banner_img_5'),
            ],
        ],
    },
    home_bottom: {
        schema: 'setting',
        breadcrumb: '홈 하단 배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('홈 아래 이미지 1 (500x500)', 'img', { field_name: 'content1' }, 'home_bottom_img_1')
            ],
            [
                editColumnObjFormat('홈 아래 이미지 2 (500x500)', 'img', { field_name: 'content2' }, 'home_bottom_img_2')
            ],
            [
                editColumnObjFormat('홈 아래 이미지 3 (500x500)', 'img', { field_name: 'content3' }, 'home_bottom_img_3')
            ],
        ],
    },
    request_banner: {
        schema: 'setting',
        breadcrumb: '문의 배너',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('문의배너 (500x500)', 'img', { field_name: 'content1' }, 'request_banner_img')
            ],
        ],
    },
    event: {
        schema: 'event',
        breadcrumb: '이벤트',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (300x200)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('시작일', 'input', { type: 'date' }, 'start_date'),
                editColumnObjFormat('종료일', 'input', { type: 'date' }, 'end_date'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    faq: {
        schema: 'faq',
        breadcrumb: 'FAQ',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    notice: {
        schema: 'notice',
        breadcrumb: '공지사항',
        columns: [//img, select, input, 
            [
                editColumnObjFormat('메인이미지 (150x100)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    review: {
        schema: 'review',
        breadcrumb: '후기',
        columns: [//img, select, input, 
            [
                editColumnObjFormat('제목', 'input', { placeholder: '제목을 입력해 주세요.' }, 'title'),
            ],
            [
                editColumnObjFormat('내용', 'editor', {}, 'note'),
            ],
        ],
    },
    app: {
        schema: 'app',
        breadcrumb: '퍼스트앱',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('앱이미지 (150x150)', 'img', { field_name: 'content' }, 'main_img'),
            ],
            [
                editColumnObjFormat('앱이름', 'input', { placeholder: '' }, 'name'),
                editColumnObjFormat('링크', 'input', { placeholder: '' }, 'link'),
            ],
        ],
    },
    popup: {
        schema: 'popup',
        breadcrumb: '팝업',
        add_list: [],
        columns: [//img, select, input, 
            [
                editColumnObjFormat('이미지 (자율)', 'img', { field_name: 'content' }, 'img_src'),
            ],
            [
                editColumnObjFormat('링크', 'input', { placeholder: '/home' }, 'link'),
            ],
        ],
    },
}
export const getManagerListApi = (table, num) => {
    let str = "";
    return str;
}
export const slideSetting = {
    infinite: false,
    dots: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 1.15,
    slidesToScroll: 1,
    breakpoint: 480,
    beforeChange: (current, next) => { console.log(current) },
    afterChange: current => { console.log(current) },
}

export { backUrl };
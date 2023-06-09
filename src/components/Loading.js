import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';
import theme from '../styles/theme';
import loadingGif from '../assets/images/test/loading.gif'
import useNetwork from './useNetwork';
import { useEffect } from 'react';
import { logoSrc } from '../data/Data';
const LoadingContainer = styled.div`
margin: 12vw auto;
display:flex;
flex-direction:column;
align-items:center;
@media (max-width: 1000px) {
    margin: 25vw auto;
}
@media (max-width: 650px) {
    margin: 40vh auto;
}
@media (max-width: 375px) {
    margin: 30vh auto;
}
`
const Loading = (props) => {
    const { text } = props;
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return (
        <>
            <LoadingContainer>
                {onLine ?
                    <>
                         <img src={loadingGif} style={{ width: '100px' }} /> 
                        {/* <img src={logoSrc} style={{ width: '100px', marginBottom:'16px' }} />
                        <Circles
                        color={theme.color.background1}
                        height={'40'}
                        width={'40'}
                        /> */}
                        <div style={{ marginTop: '16px' }}>{text}</div>
                    </>
                    :
                    <>
                        <div>인터넷 연결을 확인해 주세요.</div>
                    </>}
            </LoadingContainer>
        </>
    )
}
export default Loading;
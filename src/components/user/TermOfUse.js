import React, { Component } from 'react'
import './TermOfUse.css';

export class TermOfUse extends Component { 
    render () {
        const msg = '이용약관'
        const current_url = window.location.href;
        let clostButtonForSimpleMode
        let topMargin = <div className='top-margin'>{'　'}</div>
        
        if("simple"== current_url.split('://')[1].split("/")[1]){
            clostButtonForSimpleMode = <div><div>{'　'}</div>
                <div>{'　'}</div><button onClick={()=>window.close()} className='tou-btn'>닫기</button></div>;

            topMargin = '';
        }
 

        

        return (
            <div className = 'tou-container'>
                {topMargin}
               <div className='new-line text-left center-block pp-inner-container'>
                     <h1 className='text-center'>{msg}</h1>
                    {`
                    
                    
                    `}

                    <p className='tou-p'>제 1조 [목적]</p>
                    {`이 약관은 주식회사 어큐진(이하 '회사')가 운영하는 Gut Morning 및 Gut Morning 관련 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.


                    `}

                    <p className='tou-p'>제 2조 [정의]</p>
                    {`1. "Gut Morning 서비스"(이하 "서비스")란 장내 미생물 유전자 분석 검사 및 그 결과와 그 결과를 바탕으로 하여 회사에서 제공하는 일체의 정보 및 행위를 말합니다.
                    2. "키트"란 서비스를 위하여 이용자에게 시료 채취를 위해 제공하는 일회용 도구를 말합니다.
                    3. "이용자"란 Gut Morning 홈페이지에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다. 
                    4. "회원"이란 회사의 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
                    5. "비회원"이란 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.


                    `}

                    <p className='tou-p'>제 3조 [약관의 효력과 변경]</p>
                    {`1. 본 약관은 서비스에 대해 이용자가 사용자 인터페이스를 통해 구현된 "동의" 버튼을 클릭하거나, 이와 유사하게 구현된 기능을 활용하여 동의함으로써 그 효력이 발생합니다.
                    2. 회사는 중대한 변경 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 종전과 동일한 효력이 발생합니다.
                    

                    `}

                    <p className='tou-p'>제 4조 [약관 외 준칙]</p>
                    {`이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
                    

                    `}

                    <p className='tou-p'>제 5조 [검사의 목적 및 한계]</p>
                    {`1. 서비스는 개인의 장내 미생물 군집의 경향성을 제시하는 것을 목적으로 합니다.
                    2. 서비스는 질병의 진단과 같은 의료행위가 아닙니다. 따라서 서비스가 제공하는 정보는 의사의 진단을 대체할 수 없으며, 진단 및 치료 결정을 위해서는 반드시 의사와의 상담이 필요합니다.


                    `}

                    <p className='tou-p'>제 6조 [서비스 이용 계약]</p>
                    {`1. 서비스 이용계약은 회원이 되고자 하는 자가 약관의 내용에 대하여 동의를 한 다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다.
                    2. 서비스를 이용하려는 자는 회사에서 요청하는 개인정보를 제공하여야 합니다.
                    3. 계약이 성립된 후 회사는 동조 제 4항의 각 호를 발견한 경우 즉시 계약을 취소할 수 있습니다.
                    4. 회사는 다음 각 호의 경우 서비스를 제공하지 않습니다.
                    ${'　'}1) 질병의 예방·진단·치료 및 그 밖의 의료행위를 목적으로 서비스를 신청 한 경우
                    ${'　'}2) 장내 미생물 검사를 위해 필요한 동의 등을 하지 않은 경우
                    ${'　'}3) 본인의 실명으로 신청하지 않은 경우
                    ${'　'}4) 사회의 안녕과 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 경우


                    `}

                    <p className='tou-p'>제 7조 [서비스의 제공 방법 등]</p>
                    {`1. 서비스는 대변시료에서 추출한 미생물의 DNA를 분석하여 서비스를 제공합니다.
                    2. 시료의 손상으로 인하여 검사 결과에 오류가 발생하는 경우 시료의 재 채취를 요청할 수 있습니다.
                    3. 시료 및 추출된 DNA는 반환되지 않습니다. 단, 이용자가 중도에 검사 덩의를 철회한 경우 시료는 안전하고 적절한 방법으로 폐기됩니다.
                    4. 검사 결과는 회사가 시료를 수령한 날로부터 프로그램별로 회원에게 안내된 영업일 후에 제공되는 것을 원칙으로 합니다. 단, 시료의 상태, 회사의 상황, 천재지변 등에 따라 달라질 수 있습니다.
                    5. 이용자 개인의 검사 결과 데이터는 보고서 수령일로부터 1년간 보관 후 삭제되고, 개인 검사 리포트는 5년 후 삭제됩니다.
                    6. 시료는 개인 검사 리포트 발송 시 폐기됩니다.


                    `}
                    
                    <p className='tou-p'>제 8조 [서비스의 중단]</p>
                    {`1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체, 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
                    2. 사업 종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 회사는 제8조에 정한 방법으로 이용자에게 통지하고 회사에서 제시한 조건에 따라 소비자에게 보상합니다.


                    `}

                    <p className='tou-p'>제 9조 [회원가입]</p>
                    {`1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후, 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. 회원가입을 하지 않을 경우 서비스 이용에 제한이 있을 수 있습니다. 
                    2. 네이버 계정을 통해 사이트의 회원으로 가입하고자 하는 자는 네이버 서비스 제공자가 회사에 개인정보를 제공하는 것에 동의한다는 의사 표시를 해야합니다. 
                    
                    
                    `}
                    
                    <p className='tou-p'>제 10조 [회원탈퇴]</p>
                    {`1. 회원은 언제든지 탈퇴를 요청할 수 있으며, 요청을 받은 회사는 즉시 회원탈퇴를 처리합니다. 다만, 분석이 진행되는 도중 등과 같이 서비스의 제공이 완료되지 않은 상태에서는 본 약관이 계속 적용됩니다.
                    2. 회원탈퇴 후 이용자 정보에 관한 기록은 개인정보취급방침에 따라 또는 폐기됩니다.
                    
                    
                    `}

                    <p className='tou-p'>제 11조 [회원에 대한 통지]</p>
                    {`1. 회사가 회원에 대한 통지를 하는 경우 이 약관에 별도 규정이 없는 한 서비스 내 이메일주소로 통지 할 수 있습니다.
                    2. 회사는 회원 전체에 대한 통지의 경우 7일 이상 회사의 게시판에 게시 함으로서 제1항의 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다. 
                    3. 회사는 회원가입, 신청안내, 배송안내 등 비광고성 정보를 이메일으로 보내드립니다.
                    

                    `}

                    <p className='tou-p'>제 12조 [이용자의 주의사항]</p>
                    {`1. 회원등록 시 개인 정보의 허위로 인한 서비스의 제한은 전적으로 회원에게 있으며, 회원의 정보(예, 주소, 전화번호 등)가 변경되면 즉시 회사에 알려야 합니다. 
                    2. 서비스의 정보, 서비스에 참여하는 전문 의사 혹은 서비스를 사용하는 다른 회원이나 방문객의 의견을 받아들이는 것은 전적으로 사용자의 판단에 따르는 것입니다. 따라서 회사에서는 회원에게 제공된 어떠한 제품의 활용, 정보, 아이디어 혹은 지시 로부터 비롯하는 어떠한 손해, 상해 혹은 그 밖의 불이익에 대한 책임을 지지 않습니다. 
                    3. 서비스의 구체적인 검사 항목은 회사의 정책변경이나 관련 연구의 진전에 따라 추가·삭제·변경될 수 있습니다. 
                    4. 연구의 진전에 따라 유상 또는 무상으로 검사 결과의 갱신이 이루어질 수도 있습니다. 
                    5. 인터넷상에서 제공되는 서비스의 내용은 개략적이며 일반적인 내용으로서 도움이 되는 정보의 제공에 한정됩니다. 회원의 건강상태에 관한 의문점이나 걱정이 있다면 전문 의사를 찾아 진단을 받아야 합니다. 어떠한 경우에도 서비스에서 제공하는 정보 때문에 의학적 진단을 무시하거나 진료 받는 것을 미루어서는 안됩니다. 
                    6. 수령한 키트에 부착된 제품 번호 및 QR코드는 검사 진행 및 결과 확인을 위하여 반드시 필요한 필수 정보입니다. 따라서 훼손하거나 분실하여 외부에 노출되는 일이 없도록 주의하시기 바랍니다. 회사는 제품번호를 부주의하게 관리하여 발생한 손해에 대해 책임지지 않습니다. 
                    

                    `}

                    <p className='tou-p'>제 13조 [개인정보보호 의무]</p>
                    {`1. 회사는 개인정보취급방침에 따라 이용자의 개인정보를 엄격히 관리하며, 이용자의 개인정보 수집 시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. 
                    2. 회사는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 
                    3. 회사는 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다. 
                    4. 제4항의 범위 내에서 회사는 업무와 관련하여 이용자 전체 또는 일부의 개인정보에 관한 집합적인 통계자료를 작성하여 이를 사용할 수 있습니다. 단, 이 경우에는 익명 처리되어 개인을 식별할 수 없는 가공된 정보를 이용합니다. 
                    5. 이용자는 언제든지 회사가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 회사는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 회사는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다. 
                    6. 회사는 서비스를 통하여 얻은 이용자의 장내 미생물 관련 정보를 의학적 연구 및 그 외 연구목적으로 이용하고자 하는 연구기관에 제공할 수 있습니다. 단, 개인식별고유정보는 절대 제공하지 않습니다. 
                    7. 회사는 이용자의 동의를 받았거나 관계 법령에 의거하여 필요한 문서 및 정보를 별도 보관할 수 있습니다. 
                    
                    
                    `}

                    <p className='tou-p'>제 14조 [정보의 제공]</p>
                    {`회사는 서비스에 관하여 필요하다고 인정되는 다양한 정보에 대해서 이용자가 회사에 제출한 이메일 주소를 통해 이용자에게 제공할 수 있습니다. 
                    

                    
                    `}

                    <p className='tou-p'>제 15조 [회사의 의무]</p>
                    {`1. 회사는 이용자에게 서비스에 대해 상세하게 설명하여야 합니다. 
                    2. 회사는 관련법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다. 
                    3. 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을 갖추어야 하며 개인정보처리방침을 공시하고 준수합니다. 
                    4. 회사는 스마일바이오미 서비스로 인하여 제공받은 이용자의 개인정보를 외부로 유출할 수 없습니다. 이용자의 개인정보의 유출로 인하여 이용자에게 손해가 발생할 경우 이를 배상할 책임을 집니다. 다만, 이미 제3자에게 알려진 개인정보 및 유전자 분석 결과의 경우는 그러하지 않습니다. 
                    5. 회사는 서비스이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여 회원에게 처리과정 및 결과를 전달합니다. 
                    

                    `}

                    <p className='tou-p'>제 16조 [이용자의 의무]</p>
                    {`1. 이용자는 서비스를 이용하기 전에 반드시 서비스에 대한 상세 정보를 확인하여야 합니다. 동 정보를 확인하지 않고 이용하여 발생한 모든 손실은 이용자에게 귀속됩니다. 
                    2. 이용자는 다음 행위를 하여서는 안 됩니다. 
                    ${'　'}1) 신청 또는 변경 시 허위 내용의 등록 
                    ${'　'}2) 타인의 정보 도용 
                    ${'　'}3) 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시 
                    ${'　'}4) 회사와 기타 제 3자의 저작권 등 지식재산권에 대한 침해 
                    ${'　'}5) 회사 및 기타 제 3자의 명예를 손상시키거나 업무를 방해하는 행위 
                    ${'　'}6) 서비스의 이용과정에서 회사의 직원에게 폭언, 협박 또는 음란한 언행 등 부적절한 방법으로 회사의 업무를 방해하는 행위 
                    ${'　'}7) 서비스에서 얻은 정보를 회사의 사전승낙 없이 이용자의 이용 이외의 목적으로 복제, 유포, 유통하거나 출판 및 방송 등에 사용하거나, 영리적으로 이용하는 행위 
                    ${'　'}8) 기타 관계 법령 및 기타 사회질서에 위배되는 행위 
                    3. 이용자는 본 약관에서 규정하는 사항 및 관계 법령을 준수하여야 하며, 기타 회사의 명예를 손상 시키거나 회사의 서비스 운영이나 업무수행에 현저한 지장을 초래하는 행위를 하여서는 안됩니다. 
                    4. 이용자는 회사의 귀책사유로 인하여 과학적인 검사가 이루어지지 않은 경우를 제외하고 검사 결과에 대하여 일체의 시비나 문제제기를 하지 않습니다. 
                    5. 이용자는 반드시 본인의 시료를 제공하여야 할 의무가 있으며, 타인이나 다른 동물의 시료로 위장하여 제공할 경우 회사는 민·형사상의 책임이 없습니다. 
                    6. 이용자는 서비스 이용을 위하여 등록한 자신의 이메일 계정·비밀번호·제품번호에 관한 관리 책임이 있으며, 이를 제 3자에게 이용하게 해서는 안됩니다. 
                    7. 이용자는 자신의 이메일 계정 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 이에 따라야 합니다. 
                    8. 이용자는 본 약관에서 규정하는 사항과 회사가 제시하는 주의사항을 준수해야 하고, 동 의무를 소홀히 하여 손해가 발생하는 경우 그 책임은 이용자가 부담하여야 합니다. 
                    
                    
                    `}

                    <p className='tou-p'>제 17조 [지식재산권 귀속 및 이용제한]</p>
                    {`1. 회사가 작성한 저작물에 대한 저작권 및 기타 지식재산권은 회사에 귀속합니다. 
                    2. 이용자는 회사가 제공하는 서비스를 이용함으로써 얻은 정보 중 회사에게 지식재산권이 귀속된 정보를 회사의 사전 승낙 없이 출판, 복제, 방송, 전송 및 기타 방법에 의하여 영리목적으로 이용하거나 제3자가 이용하게 할 수 없습니다. 
                    

                    `}

                    <p className='tou-p'>제 18조 [손해배상]</p>
                    {`회사는 서비스 이용과 관련하여 회사의 직접적인 귀책사유로 인해 회원에게 발생한 손해에 대한 배상의 의무를 지닙니다. 단, 회원의 귀책사유로 인해 발생한 손해에 관하여는 일체의 책임을 지지 않습니다. 
                    

                    `}

                    <p className='tou-p'>제 19조 [면책조항]</p>
                    {`1. 회사는 이용자 및 회원이 제공한 정보에 대한 정확성, 유효성, 진위 여부 확인의 책임이 없으며 이용자 및 회원이 제공한 정보의 오류로 인한 피해에 대해서 책임을 지지 않습니다. 
                    2. 회사가 제공한 검사 결과는 개인의 장내 미생물과 관련된 정보의 한 형태로 사용할 목적으로 제공됩니다. 동 목적 외에 검사결과를 재사용하여 발생한 손해에 대하여 회사는 어떠한 책임도 지지 않습니다. 
                    3. 회사는 천재지변, 파업, 관련 법규의 변경, 관계기관의 명령 및 지침, 또는 외부로부터 발생한 사건 등 회사가 통제할 수 없는 사유로 인하여 서비스 제공이 불가능하거나 현저하게 어려운 경우 그로 인한 피해에 대해서는 책임지지 않습니다. 
                    4. 회사는 회사가 안내한 방법을 따르지 않아 야기된 잘못된 결과 또는 사고에 대해서 어떠한 책임도 지지 않습니다. 


                    `}

                    <p className='tou-p'>제 20조 [분쟁해결]</p>
                    {`1. 회사는 이용자 및 회원이 제공한 정보에 대한 정확성, 유효성, 진위 여부 확인의 책임이 없으며 이용자 및 회원이 제공한 정보의 오류로 인한 피해에 대해서 책임을 지지 않습니다. 
                    2. 회사가 제공한 검사 결과는 개인의 장내 미생물과 관련된 정보의 한 형태로 사용할 목적으로 제공됩니다. 동 목적 외에 검사결과를 재사용하여 발생한 손해에 대하여 회사는 어떠한 책임도 지지 않습니다. 
                    3. 회사는 천재지변, 파업, 관련 법규의 변경, 관계기관의 명령 및 지침, 또는 외부로부터 발생한 사건 등 회사가 통제할 수 없는 사유로 인하여 서비스 제공이 불가능하거나 현저하게 어려운 경우 그로 인한 피해에 대해서는 책임지지 않습니다. 
                    4. 회사는 회사가 안내한 방법을 따르지 않아 야기된 잘못된 결과 또는 사고에 대해서 어떠한 책임도 지지 않습니다. 


                    `}

                    <p className='tou-p'>부칙</p>
                    {`본 이용약관은 2020년 3월 6일부터 적용됩니다.
                    `}

                    {clostButtonForSimpleMode}
                       {/* <button className = 'pp-btn' onClick={()=>this.props.history.push('/auth/login')}>로그인 하기</button> */}
                </div>
            </div>
        )
    }
}

export default TermOfUse;
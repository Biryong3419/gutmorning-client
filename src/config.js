const arr = window.location.href.split("/");
const current_ip = arr[0] + "//" + arr[2]

//production 반영할때 basename 체크
//const Basename = '/GutMorning';
const Basename = '';
//  "homepage": "http://lims.accugenelab.co.kr/GutMorning"
//  "proxy": "http://112.220.73.98:8088",
const ApiUrl = 'http://115.91.68.204:8900'
//const NaverCallbackUrl = 'http://112.220.73.98:8900/api/auth/naver/create'

const NaverCallbackUrl = current_ip+'/auth/naver/callback';
const NaverTokenUrl = 'https://nid.naver.com/oauth2.0/token';
const NaverClientSecret = 'uZ4eyazqsJ';
const NaverClientId = 'WjfwfaKdlTu60tbS6tTL';
const NaverState='0f6dc7bf-da72-4d47-8892-aa08946cdf18'

export { Basename, ApiUrl };
export const NaverConfigs = {
    NaverCallbackUrl,
    NaverTokenUrl ,
    NaverClientSecret,
    NaverClientId,
    NaverState
};
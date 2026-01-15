type OpenState = 'E' | 'H' | 'N' | 'O' | 'W'

type RentState = '不開放對外場地租借' | '付費對外場地租借' | '免費對外場地租借'

export interface PlaceInfo {
  GymID: number
  Name: string
  OperationTel: string
  Address: string
  Rate: number
  RateCount: number
  Distance: number
  GymFuncList: string
  Photo1: string
  LatLng: string
  RentState: RentState
  OpenState: OpenState
  Declaration: null | string
  LandAttrName: string
  distance?: number
}

export const placeInfoList: PlaceInfo[] = [
  {
    GymID: 2914,
    Name: '台南應用科技大學排球場',
    OperationTel: '(06)2539639',
    Address: '臺南市永康區中正路529號',
    Rate: 0.5,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606115630_G:\\DSC06947.JPG',
    LatLng: '23.038014242804,120.234696865082',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2249,
    Name: '新民高中田徑場',
    OperationTel: '04-22334105#6414',
    Address: '臺中市北區三民路三段289號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603105815_WWS4X.jpg',
    LatLng: '24.1585631035552,120.686696171724',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5766,
    Name: '新明國中活動中心',
    OperationTel: '03-4936194#333',
    Address: '桃園市中壢區中正路487巷18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '田徑場,靶場/射擊場,籃球場,排球場(館),棒、壘球打擊練習場,桌球場(館),羽球場(館),健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611104322_OOK70HXKHHKQ3S07BCZL.jpg',
    LatLng: '24.9566912234882,121.212828929723',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5808,
    Name: '明新科技大學排球場',
    OperationTel: '03-5593142#2343',
    Address: '新竹縣新豐鄉新興路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611115930_DSCN0183.JPG',
    LatLng: '24.8622972957739,120.988402962684',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5805,
    Name: '大林國中排球場(館)',
    OperationTel: '05-2652014',
    Address: '嘉義縣大林鎮大糖里中學路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611115159_DSCN6851.JPG',
    LatLng: '23.6097966879408,120.453500747681',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6497,
    Name: '海山高中排球場(館)',
    OperationTel: '02-29517475#223',
    Address: '新北市板橋區漢生東路215號',
    Rate: 10.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),半場籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613100426_D6UAT.jpg',
    LatLng: '25.0110042858685,121.47173166275',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7687,
    Name: '中山國中排球場',
    OperationTel: '07-8021765#531',
    Address: '高雄市小港區漢民路352號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617161450_DCUH6.jpg',
    LatLng: '22.5665131805163,120.356415510178',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10167,
    Name: '交通大學博愛校區排球場',
    OperationTel: '03-5712121#51003',
    Address: '新竹市東區博愛街75號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '博愛校區排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624223212_博愛排球場全景.JPG',
    LatLng: '24.7980670232736,120.983741283417',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10194,
    Name: '北港高中風雨球場',
    OperationTel: '05-7821411#307',
    Address: '雲林縣北港鎮成功路26號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625101323_IMAG0188.jpg',
    LatLng: '23.5792095929971,120.303978323936',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5110,
    Name: '竹仁國小網球場(館)',
    OperationTel: '03-5552472#12',
    Address: '新竹縣竹北市竹仁里豆子埔62之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609104451_IMG_1017.jpg',
    LatLng: '24.8363636297104,121.013309955597',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10205,
    Name: '二崙國中排球場(館)',
    OperationTel: '05-5982020#130',
    Address: '雲林縣二崙鄉崙西村中正路88號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625112925_IMAG0070po.jpg',
    LatLng: '23.7725764430568,120.407634973526',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10244,
    Name: '二崙國中排球場(館)',
    OperationTel: '05-5982020#132',
    Address: '雲林縣二崙鄉崙西村中正路88號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625151353_IMAG0060po.jpg',
    LatLng: '23.7737202960059,120.407339930534',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10286,
    Name: '員林高中排球場(館)',
    OperationTel: '04-8320364#320',
    Address: '彰化縣員林市靜修路79號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140626091838_IMG_8175.JPG',
    LatLng: '23.9604600977316,120.563482046127',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7375,
    Name: '頭份國中活動中心',
    OperationTel: '03-7663207#501',
    Address: '苗栗縣頭份鎮中央路275號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617084954_DSC09342.JPG',
    LatLng: '24.6910758560679,120.901418924332',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9614,
    Name: '大溪國中田徑場',
    OperationTel: '03-3882024#315',
    Address: '桃園市大溪區民權東路210號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620104551_DSC05397.JPG',
    LatLng: '24.8798570809333,121.296701431274',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14589,
    Name: '東峰國中排球場(館)',
    OperationTel: '04-22825133#731',
    Address: '臺中市東區仁和路330號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718150659_DSCN7987.JPG',
    LatLng: '24.1251059170281,120.687164068222',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13526,
    Name: '景文高中排球場',
    OperationTel: '02-29390310',
    Address: '臺北市文山區木新里保儀路127號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709133437_DSC_0039.JPG',
    LatLng: '24.9854372413508,121.568259000778',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14943,
    Name: '向上國中排球場',
    OperationTel: '04-23726085',
    Address: '臺中市西區美村路一段389號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140723113802_K5JC4072.JPG',
    LatLng: '24.1429109344117,120.662316083908',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5439,
    Name: '達人女中籃球場',
    OperationTel: '02-27956899#401',
    Address: '臺北市內湖區內湖路二段314號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610105853_操場.JPG',
    LatLng: '25.0812481033775,121.587710380554',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11882,
    Name: '馬偕醫學院多功能活動中心',
    OperationTel: '02-26360303#5013',
    Address: '新北市三芝區中正路三段46號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場(館),排球場(館),羽球場(館),桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703144529__IGP1049.JPG',
    LatLng: '25.254865500668,121.494272947311',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2364,
    Name: '曾文家商籃排球場',
    OperationTel: '06-5722079#304',
    Address: '臺南市麻豆區和平路9號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603163918_IMG_34591.JPG',
    LatLng: '23.1779724181747,120.246026515961',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11927,
    Name: '慈明高中排球場(館)',
    OperationTel: '04-22713911#204',
    Address: '臺中市太平區光德路388號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703155938_DSC_0981.jpg',
    LatLng: '24.1052075795413,120.727252364159',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11942,
    Name: '六信高中籃球場',
    OperationTel: '(06)2619885',
    Address: '臺南市南區新都路20號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,半場籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703180506_IMG_20140703_181103.jpg',
    LatLng: '22.9738431714739,120.20194709301',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11944,
    Name: '聖功女中云和館',
    OperationTel: '(06)2740126',
    Address: '臺南市北區北園街87巷64號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館),桌球場(館),舞蹈教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703193956_IMG_5389.JPG',
    LatLng: '23.0161137899391,120.222685933113',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11803,
    Name: '排球場館',
    OperationTel: '07-8152271',
    Address: '高雄市前鎮區班超路63號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703102914_綜合田徑場.jpg',
    LatLng: '22.6017916040337,120.324590929958',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11742,
    Name: '雲林國中排球場',
    OperationTel: '05-5326071#036',
    Address: '雲林縣斗六市明德路599號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140702144100_IMG_3830.JPG',
    LatLng: '23.6998696211834,120.532717108726',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14104,
    Name: '中央大學排球場',
    OperationTel: '03-4227151#57251',
    Address: '桃園市中壢區中大路300號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714145928_球場全景.JPG',
    LatLng: '24.9676282756607,121.190947294235',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12956,
    Name: '大美國小排球場(館)',
    OperationTel: '05-5842504#213',
    Address: '雲林縣莿桐鄉大美村23號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707143749_排球場1.JPG',
    LatLng: '23.7378191386374,120.514365434647',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 14124,
    Name: '新東國小排球場',
    OperationTel: '06-6320902#13',
    Address: '臺南市後壁區長短樹里下長81號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714162804_P1000320.JPG',
    LatLng: '23.3450140103758,120.316686630249',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13633,
    Name: '中央大學依仁堂',
    OperationTel: '03-4267128',
    Address: '桃園市中壢區中大路300號',
    Rate: 5.3,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '籃球館,排球館,韻律教室,技擊教室,體適能健身教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710103425_依仁堂全景.JPG',
    LatLng: '24.9682993807963,121.190807819366',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9695,
    Name: '輔仁大學排球場(館)',
    OperationTel: '02-29056436',
    Address: '新北市新莊區中正路510號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620125314_DSC_0062.JPG',
    LatLng: '25.0398920579293,121.431798934937',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14132,
    Name: '東南科技大學龍鳳館',
    OperationTel: '02-86625850',
    Address: '新北市深坑區北深路三段152號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714175648_IMG_1853-1.JPG',
    LatLng: '25.004805872103,121.603642702103',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14133,
    Name: '依仁國小籃球場',
    OperationTel: '06-2662108#020',
    Address: '臺南市仁德區中洲里港墘3號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714185731_SAM_3712.JPG',
    LatLng: '22.9128039941628,120.261760354042',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14147,
    Name: '和美實驗學校體育館',
    OperationTel: '04-7552009#304',
    Address: '[508]彰化縣和美鎮鹿和路六段115號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714221149_體育館1.jpg',
    LatLng: '24.1053153052463,120.491974353791',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7327,
    Name: '東隆國小田徑場',
    OperationTel: '08-8322064',
    Address: '屏東縣東港鎮共和里共和路45號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '足球場,籃球場,躲避球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616171449_IMAG0696.jpg',
    LatLng: '22.4638643164977,120.450839996338',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14190,
    Name: '太子國中籃球場',
    OperationTel: '06-6524762',
    Address: '臺南市新營區太北里140-21號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,風雨球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140715101120_DSCN1658.jpg',
    LatLng: '23.2919534221385,120.271314382553',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13988,
    Name: '旗山農工田徑場附設5座籃球場,2座排球場',
    OperationTel: '07-6612501#238',
    Address: '高雄市旗山區旗甲路一段195號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714091850_DSC05459.JPG',
    LatLng: '22.9014668590705,120.481960773441',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14049,
    Name: '羽球場館',
    OperationTel: '06-2996735#821',
    Address: '臺南市安平區怡平路392號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714114330_全景.JPG',
    LatLng: '22.9947332269444,120.175768733025',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14224,
    Name: '河東國小籃球場',
    OperationTel: '06-6852527',
    Address: '臺南市白河區河東里83之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140715120400_DSC02603.jpg',
    LatLng: '23.344621671692,120.437080264091',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14312,
    Name: '崇林國中排球場(館)',
    OperationTel: '02-26095829#134',
    Address: '新北市林口區文化一路一段20號',
    Rate: 10.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716092641_IMG_5446 (2).JPG',
    LatLng: '25.0675485309778,121.369501948357',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14357,
    Name: '新嘉國小籃球場',
    OperationTel: '06-6621981',
    Address: '臺南市後壁區新嘉里210之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716152239_DSC05003.JPG',
    LatLng: '23.3615318177245,120.323643207812',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14385,
    Name: '高雄醫學大學排球場(館)',
    OperationTel: '07-3121101#2124',
    Address: '高雄市三民區十全一路100號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716224619_操場22.jpg',
    LatLng: '22.6476635890951,120.309597873347',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14343,
    Name: '桃園農工風雨操場(館)',
    OperationTel: '03-3333921#350',
    Address: '桃園市桃園區成功路二段144號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716134433_IMG_20140716_134500.jpg',
    LatLng: '24.9916885113061,121.319929361343',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14400,
    Name: '啟文國小活動中心',
    OperationTel: '037-260466',
    Address: '苗栗縣苗栗市福星里啟賢街61號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '總合場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717094109_IMAG0010.jpg',
    LatLng: '24.5687267387559,120.826341104403',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14303,
    Name: '光華高中大禮堂',
    OperationTel: '06-2386501#221',
    Address: '臺南市東區勝利路41號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716085215_調整大小DSC02883.JPG',
    LatLng: '22.9886838387178,120.217332243919',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14424,
    Name: '四張犁國中排球場(館)',
    OperationTel: '04-24210380#723',
    Address: '臺中市北屯區同榮里后庄路699號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717103736_DSC04091.JPG',
    LatLng: '24.1946963582324,120.677915811539',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14449,
    Name: '新興國中排球場(館)',
    OperationTel: '06-2633171',
    Address: '臺南市南區新孝路87號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717114952_DSCN0456.JPG',
    LatLng: '22.9772439107793,120.186138153076',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14455,
    Name: '苓和國小體育館',
    OperationTel: '06-7942031#13',
    Address: '臺南市將軍區苓和里132號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717120324_DSCN0025.JPG',
    LatLng: '23.2205658640004,120.161477923393',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14254,
    Name: '耕莘健康管理專科學校排球場',
    OperationTel: '02-22191131#5323',
    Address: '新北市新店區民族路112號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '室外籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140715141800_排球場1.JPG',
    LatLng: '24.9775534500773,121.536297798157',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14529,
    Name: '豐原國小活動中心',
    OperationTel: '04-25222066',
    Address: '臺中市豐原區新生北路155號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718104731_禮堂1.jpg',
    LatLng: '24.254643489961,120.720262527466',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15553,
    Name: '崇光國小籃球場',
    OperationTel: '04-24818836#5031',
    Address: '臺中市大里區大明路181號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140806143547_綜合球場.JPG',
    LatLng: '24.1141044380702,120.684433579445',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10096,
    Name: '鹿草國中田徑場',
    OperationTel: '05-3752037',
    Address: '嘉義縣鹿草鄉鹿草路132號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624103933_IMGP7526.JPG',
    LatLng: '23.4105505854094,120.312982499599',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15683,
    Name: '西屯國小籃球場',
    OperationTel: '04-27013534#720',
    Address: '臺中市西屯區西屯路二段300號',
    Rate: 10.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140815202143_IMG_1914.JPG',
    LatLng: '24.1798642153926,120.641287565231',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16400,
    Name: '九如國中籃球場',
    OperationTel: '08-7392404#14',
    Address: '屏東縣九如鄉玉水路26號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140825095451_籃球場.jpg',
    LatLng: '22.7180868291947,120.484845042229',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: 'www.jrjh.ptc.edu.tw',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16426,
    Name: '三光國中活動中心',
    OperationTel: '04-22313699#730',
    Address: '臺中市北屯區三光一街77號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140828095215_P1090789.JPG',
    LatLng: '24.1673093342547,120.697825849056',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16432,
    Name: '三光國中綜合球場',
    OperationTel: '04-22313699#731',
    Address: '臺中市北屯區三光一街77號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140828101725_P1090793.JPG',
    LatLng: '24.1680623528113,120.697807073593',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22061,
    Name: '名間國中網球場',
    OperationTel: '04-92732046',
    Address: '南投縣名間鄉中山村彰南路237號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160720123717_IMAG4491.jpg',
    LatLng: '23.8535000496166,120.678033828735',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2776,
    Name: '基隆商工維新館',
    OperationTel: '02-24567126#231',
    Address: '基隆市七堵區東新街22號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605153655_P1020272.JPG',
    LatLng: '25.0937899214171,121.718258857727',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14100,
    Name: '後港國小網球場',
    OperationTel: '06-7941305#14',
    Address: '臺南市七股區大潭里台潭1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714144626_DSCN3740.JPG',
    LatLng: '23.1834856525884,120.137279033661',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10135,
    Name: '永安國中排球場(館)',
    OperationTel: '07-6912064#33',
    Address: '高雄市永安區保興一路3號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624145219P_20140624_143722.jpg',
    LatLng: '22.8221924704871,120.240490436554',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8079,
    Name: '臺灣師範大學體育館',
    OperationTel: '02-77343174',
    Address: '臺北市大安區和平東路一段162號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618152733_IMG_4028.jpg',
    LatLng: '25.025941177504,121.526683419943',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22450,
    Name: '新社高中排球場',
    OperationTel: '04-25812116#322',
    Address: '臺中市新社區復盛里中和街三段國中巷10號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170323153428_ZCRJF8SK5EJJI2SVLK0S.JPG',
    LatLng: '24.237250281179,120.806704759598',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5768,
    Name: '臺中二中田徑場',
    OperationTel: '04-22021521',
    Address: '臺中市北區英士路109號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611104534_田徑場2.JPG',
    LatLng: '24.1531659297625,120.676070451736',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6692,
    Name: '春日鄉士文社區集會所',
    OperationTel: '08-8781407',
    Address: '屏東縣春日鄉士文村士文路35號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '半場籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613145636_1403686334018.jpg',
    LatLng: '22.3682929886798,120.663957595825',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 13372,
    Name: '體育館',
    OperationTel: '03-5722150',
    Address: '新竹市東區學府路128號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708164747_05-03-04.jpg',
    LatLng: '24.7961434477116,120.98544716835',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6101,
    Name: '家齊女中排、羽球場(館)',
    OperationTel: '06-2133265#2230',
    Address: '臺南市中西區健康路一段342號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612102530_IMG_4353.JPG',
    LatLng: '22.9817684140807,120.200415551662',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2420,
    Name: '安和國小操場',
    OperationTel: '05-3772940#11',
    Address: '嘉義縣新港鄉安和村46號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '綜合球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604104906_IMG_3227.JPG',
    LatLng: '23.5140592334082,120.313210487366',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2282,
    Name: '東光國小籃球場',
    OperationTel: '04-92880584',
    Address: '南投縣魚池鄉東光村慶隆巷36號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603133639_照片 035.jpg',
    LatLng: '23.890693536414,120.966864824295',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5449,
    Name: '中興大學附屬高級中學田徑場',
    OperationTel: '04-24875199#521',
    Address: '臺中市大里區東榮路369號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610111356_IMG_20140610_122010[1].jpg',
    LatLng: '24.1088951746169,120.68350907517',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1145,
    Name: '排球場館',
    OperationTel: '07-6891023',
    Address: '高雄市六龜區義寶里光復路212號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: 'A排球場,B籃球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530113636_DSCF0364.JPG',
    LatLng: '22.9929554756662,120.634678602219',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2571,
    Name: '白河商工籃球場',
    OperationTel: '06-6852054',
    Address: '臺南市白河區永安里新興路528號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604162043_IMG_1587.jpg',
    LatLng: '23.3549134173722,120.417618155479',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22988,
    Name: '蘆洲國中排球場',
    OperationTel: '02-22811571#215',
    Address: '新北市蘆洲區中正路265號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170704150449_TPNRSZK9BHKL1YMCFPH2.jpg',
    LatLng: '25.0861770478458,121.465600132942',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5350,
    Name: '臺北藝術大學排球場(館)',
    OperationTel: '02-28961000#3663',
    Address: '臺北市北投區學園路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609193005_排球場全景.jpg',
    LatLng: '25.1365094137984,121.474429965019',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5779,
    Name: '金山高中環形/直線慢跑道(非田徑場型)',
    OperationTel: '02-24982028#410',
    Address: '新北市金山區美田里文化二路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611105856_PU17.jpg',
    LatLng: '25.2247716479488,121.637470722198',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22588,
    Name: '水里國中排球場',
    OperationTel: '04-92770134#132',
    Address: '南投縣水里鄉民生路68號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170418145250_F24ACJQXUTV189L2JSBI.JPG',
    LatLng: '23.8101779129564,120.858110368256',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22368,
    Name: '八德國中活動中心',
    OperationTel: '03-3685322#510',
    Address: '桃園市八德區興豐路321號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160930120408_NHPBZEFOYY7VI1UNZ6ZG.JPG',
    LatLng: '24.9294665270797,121.286702156067',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration:
      '本校活動中心為本校排球隊固定練習場地，不便對外開放，欲從事相關運動民眾，請轉往其他場地，謝謝您。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9761,
    Name: '桃源國中排球場(館)',
    OperationTel: '089-561255#213',
    Address: '臺東縣延平鄉桃源村昇平路178號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620144822_CIMG5286.JPG',
    LatLng: '22.9023810463929,121.080712079947',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5540,
    Name: '五結國中體育館',
    OperationTel: '03-9501105#13',
    Address: '宜蘭縣五結鄉大吉村大吉5路58號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610142127_DSC04795.JPG',
    LatLng: '24.7027435861119,121.801772117615',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23470,
    Name: '高雄高商排球場',
    OperationTel: '07-2269975',
    Address: '高雄市新興區五福二路3號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170922171235_P5EAZFE2U122T2SPA5WF.JPG',
    LatLng: '22.6255158264063,120.310308337212',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14204,
    Name: '玉井國中排球場(館)',
    OperationTel: '06-5742214#12',
    Address: '臺南市玉井區大成路152號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140715104038_P1250571 (800x600).jpg',
    LatLng: '23.1239696810537,120.471305251122',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23542,
    Name: '寶山國中莒光分部籃球場',
    OperationTel: '03-5761278',
    Address: '新竹縣寶山國中莒光分部',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),網球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170928105723_CCU0MA0KUN4WWS1HJ6R8.JPG',
    LatLng: '24.7365270486306,121.025803685188',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: '學校場地於非上課時間開放。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23606,
    Name: '大樹國小綜合球場',
    OperationTel: '07-6513752',
    Address: '高雄市大樹區中正一路249號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170930154855_U396WNGCXARTK8L48VVH.jpg',
    LatLng: '22.6876320582415,120.434693098068',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9605,
    Name: '豫章工商排球場',
    OperationTel: '02-29519810#351',
    Address: '新北市板橋區四川路一段391號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620103055_P1030757.JPG',
    LatLng: '24.9973479150568,121.458937525749',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22315,
    Name: '崇光女中操場',
    OperationTel: '02-29112543#215',
    Address: '新北市新店區三民路18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '環形/直線慢跑道(非田徑場型),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160910113937_操場圖.jpg',
    LatLng: '24.9715454354883,121.538612544537',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration:
      '因學校腹地過大，管理人力不足，且常有設施施工與修繕，故不對外開放。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6632,
    Name: '柯林國小籃球場',
    OperationTel: '03-9511355#103',
    Address: '宜蘭縣冬山鄉柯林村光華路158號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613131641_IMGP3349.JPG',
    LatLng: '24.6768712516129,121.73202931881',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23500,
    Name: '廣福國小排球場兼樂樂足球場兼躲避球場',
    OperationTel: '02-22626782#303',
    Address: '新北市土城區學府路一段127號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '樂樂足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170926144458_79S8V.jpg',
    LatLng: '24.9868352678047,121.454814219396',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無對外開放',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23654,
    Name: '培英國中排球場',
    OperationTel: '03-5721301#205',
    Address: '新竹市東區學府路4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20171013163649_MVHMY45KV3YA5JJBYX3U.jpg',
    LatLng: '24.7933140329856,120.978221297264',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23023,
    Name: '朝陽科大排球場',
    OperationTel: '04-23323000#3059',
    Address: '臺中市霧峰區吉峰東路168號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170710105501_YSI7DYGNMVV1FMQ06SQV.JPG',
    LatLng: '24.0685462002623,120.715531110764',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2623,
    Name: '臺灣師範大學田徑場(含足球場)',
    OperationTel: '02-77148466',
    Address: '新北市林口區仁愛路一段2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場及排球場各2面,足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605090924_P8200128.JPG',
    LatLng: '25.0690694316263,121.404483318329',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9422,
    Name: '田徑場附設籃球場、田徑場附設足球場、田徑場附設排球場',
    OperationTel: '03-4575200#313',
    Address: '桃園市中壢區龍勇路100號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,足球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619152904_DSC04403-1.jpg',
    LatLng: '24.9387867502699,121.239731311798',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6042,
    Name: '三仙國小籃、排球場',
    OperationTel: '089-851960#23',
    Address: '臺東縣成功鎮三仙里基翬路八鄰16號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612091020_1XAIM8QKU3DNFKLNO8YS.jpg',
    LatLng: '23.1197899356943,121.39388859272',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8156,
    Name: '楊明國中排球場',
    OperationTel: '03-4781525#501',
    Address: '桃園市楊梅區新農街337號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618215419_WUBWRI86SWVH2ZZK9UW4.jpg',
    LatLng: '24.9112481745997,121.154836714268',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2902,
    Name: '北港農工排球場',
    OperationTel: '05-7832246#533',
    Address: '雲林縣北港鎮太平路80號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606112343_排球場.jpg',
    LatLng: '23.5800552337292,120.308473706245',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 4034,
    Name: '高雄女中排球場',
    OperationTel: '07-2115418',
    Address: '高雄市前金區五福三路122號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140607223617_494AB8HXEHZ52L6KL5XL.jpg',
    LatLng: '22.6221219805037,120.294107794762',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9714,
    Name: '排球場館',
    OperationTel: '03-2203012#350',
    Address: '桃園市桃園區國際路一段1070號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620133548_DSCF5009.JPG',
    LatLng: '24.9863789368619,121.290103197098',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26149,
    Name: '半戶外籃、排球場',
    OperationTel: '03-9951661#320',
    Address: '宜蘭縣蘇澳鎮蘇港路213號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200522084322_V7Y9MNAXA15IN4XUPKAO.jpg',
    LatLng: '24.5925247923525,121.843497300549',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6986,
    Name: '排球場館',
    OperationTel: '02-29212058#6204',
    Address: '新北市永和區文化路133號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場,排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616104120_FUVCI.jpg',
    LatLng: '25.0156857039587,121.511181592941',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 32924,
    Name: '排球場館',
    OperationTel: '04-24210380#723',
    Address: '臺中市北屯區同榮里后庄路699號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20240628125341_TI8PD.jfif',
    LatLng: '0.00145108702885573,-0.000547573670246493',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7884,
    Name: '燕巢國中排球場(館)',
    OperationTel: '07-6161267#25',
    Address: '高雄市燕巢區中興路267號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618104651_P1150154.JPG',
    LatLng: '22.7854106585713,120.36452382803',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22847,
    Name: '中和高中排球場',
    OperationTel: '02-22227146#340',
    Address: '新北市中和區連城路460號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170627115042_61H79.jpg',
    LatLng: '24.9950297488576,121.477778555722',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 33351,
    Name: '林邊國中沙灘排球場',
    OperationTel: '08-8752051#21',
    Address: '屏東縣林邊鄉光林村和平路43號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20251111121018_JL9CY.jpg',
    LatLng: '22.4325450745289,120.511286258698',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1057,
    Name: '新興高中排球場',
    OperationTel: '07-2727127#2050',
    Address: '高雄市新興區五福二路218號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529122351_DSC03855.JPG',
    LatLng: '22.6236371890524,120.299370288849',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5365,
    Name: '華僑高級中學體育館',
    OperationTel: '02-29684131#341',
    Address: '新北市板橋區大觀路一段32號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610082703_體育館全景照片.jpg',
    LatLng: '25.0061284697134,121.44608438015',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5375,
    Name: '大埤國中排球場',
    OperationTel: '05-5912051#105',
    Address: '雲林縣大埤鄉南和村民權路80號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610090343_P1050314.JPG',
    LatLng: '23.6408877271165,120.430326461792',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5377,
    Name: '民雄國中排球場(館)',
    OperationTel: '05-2262527',
    Address: '嘉義縣民雄鄉西安村西安路147號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610090513_9SV6MXWCVXIY2XLXNANJ.JPG',
    LatLng: '23.556429325825,120.421158671379',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5964,
    Name: '林森國小田徑場',
    OperationTel: '05-2762063#113',
    Address: '嘉義市東區林森東路346號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611164353_操場2.jpg',
    LatLng: '23.4891001378693,120.466012716097',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6021,
    Name: '雲林科技大學室外排球場',
    OperationTel: '05-5342601#2705',
    Address: '雲林縣斗六市大學路三段123號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611213417_IMG_3756.JPG',
    LatLng: '23.6920936906933,120.536429286003',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6027,
    Name: '橋頭國小活動中心',
    OperationTel: '05-6912358#230',
    Address: '雲林縣麥寮鄉橋頭村仁德路248號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612074214_DSC05690.JPG',
    LatLng: '23.797709433818,120.273674726486',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6032,
    Name: '新營高工籃球場',
    OperationTel: '06-6322377',
    Address: '臺南市新營區中正路68號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612085011_QI1D0.jpg',
    LatLng: '23.3140157209768,120.317544937134',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6060,
    Name: '鳳新高中排球場(館)',
    OperationTel: '07-7658288',
    Address: '高雄市鳳山區新富路257號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612093705_10356725_10152473353088158_359325966679296879_n.jpg',
    LatLng: '22.6136939472039,120.3421407938',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5509,
    Name: '鹿野國中體育館',
    OperationTel: '089-551006',
    Address: '臺東縣鹿野鄉龍田村光榮路38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610131656_鹿野國中運動場館鳥瞰圖.jpg',
    LatLng: '22.9070671895105,121.133987903595',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6110,
    Name: '家齊女中田徑場附設籃、排球場',
    OperationTel: '06-2133265#2230',
    Address: '臺南市中西區健康路一段342號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612103338_ZJL29MLYSX30UCLKSD6Z.jpg',
    LatLng: '22.9820652011912,120.200906395912',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5252,
    Name: '仁和國小排球場',
    OperationTel: '08-8752201#12',
    Address: '屏東縣林邊鄉仁和村中山路417號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609144803_IMG_20140610_131316.jpg',
    LatLng: '22.4375629751374,120.511565208435',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6151,
    Name: '瑞峰國中籃球場',
    OperationTel: '049-2671712#13',
    Address: '南投縣鹿谷鄉仁愛路154之1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612110825_DSC07349.JPG',
    LatLng: '23.782968934861,120.775043964386',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6215,
    Name: '正德高中籃球場',
    OperationTel: '(04)7524109#112',
    Address: '彰化縣彰化市莿桐里彰水路145號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612130507_籃球場全.jpg',
    LatLng: '24.0581056332908,120.518813431208',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6222,
    Name: '福山國中籃球場',
    OperationTel: '07-3501581#29',
    Address: '高雄市左營區重信路215號',
    Rate: 2.8,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612132542_9MDGP.JPG',
    LatLng: '22.6798316973964,120.314251184464',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6224,
    Name: '真理大學排球場(館)',
    OperationTel: '02-26212121#1714',
    Address: '新北市淡水區真理街32號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612133748_DSC03366.JPG',
    LatLng: '25.1784736225052,121.435377001762',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6377,
    Name: '國姓國中排球場(館)',
    OperationTel: '049-2721144#400',
    Address: '南投縣國姓鄉石門村國姓路237號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '國姓國中排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612164024_排球場2IMG_9612.jpg',
    LatLng: '24.0424076723218,120.858771800995',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5888,
    Name: '排路國小排球場(館)',
    OperationTel: '05-2694974',
    Address: '嘉義縣大林鎮排路里231號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,網球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611145812_排路國小籃球場(全景).JPG',
    LatLng: '23.610514332254,120.422666072845',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2886,
    Name: '玉山國中排球場',
    OperationTel: '05-2357980#210',
    Address: '嘉義市西區友忠路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606104937_20140606_IMG_0001.JPG',
    LatLng: '23.4682422146372,120.425123463382',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7630,
    Name: '西螺農工排球場(館)',
    OperationTel: '05-5862024#331',
    Address: '雲林縣西螺鎮大同路4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617151704_2014西螺農工排球場外觀.jpg',
    LatLng: '23.7941999428559,120.469164848328',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9345,
    Name: '鶯歌國小活動中心',
    OperationTel: '02-26792038#223',
    Address: '新北市鶯歌區同慶里尖山埔路106號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619134030_活動中心.JPG',
    LatLng: '24.9512166710225,121.34662270546',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 9357,
    Name: '排球場館',
    OperationTel: '07-7032838#742',
    Address: '高雄市大寮區中庄里中庄路59號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '綜合球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619135626_IMGP3387.JPG',
    LatLng: '22.6359884867232,120.397742986679',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10091,
    Name: '建國國中體育館',
    OperationTel: '05-7832724',
    Address: '雲林縣北港鎮大同路468號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624102149_IMAG1120[1].jpg',
    LatLng: '23.5738504640439,120.296151638031',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2238,
    Name: '黎明技術學院綜合運動場',
    OperationTel: '02-29097811#1251',
    Address: '新北市泰山區黎專路2之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603101616_DSC06096.JPG',
    LatLng: '25.0663191629786,121.420984268188',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13212,
    Name: '臺東大學學生活動中心暨綜合體育館',
    OperationTel: '08-9518232',
    Address: '臺東縣臺東市大學路二段369號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '游泳池(館),籃球場,羽球場(館),排球場(館),體操室/館,舞蹈教室,健身房(含重量訓練室),攀岩場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708114546_學生活動中心暨綜合體育館.jpg',
    LatLng: '22.7328317487442,121.067436933517',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13669,
    Name: '大成商工環形/直線慢跑道(非田徑場型)',
    OperationTel: '05-6322534',
    Address: '雲林縣虎尾鎮成平街21號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710115720_tcvhs10.jpg',
    LatLng: '23.7111276404375,120.446104716757',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15012,
    Name: '育達高職體育館',
    OperationTel: '02-25706767#306',
    Address: '臺北市松山區美仁里寧安街12號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724112836_IMAG0358.jpg',
    LatLng: '25.049937750524,121.554359793663',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14691,
    Name: '誠正國中活動中心',
    OperationTel: '02-27828094#1510',
    Address: '臺北市南港區新富里富康街1巷24號',
    Rate: 4.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721115932_P1020405.JPG',
    LatLng: '25.0541530998638,121.619589507563',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15033,
    Name: '大勇國小排球場',
    OperationTel: '04-23755959',
    Address: '臺中市西區忠明南路515號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724124048_IMAG5633.jpg',
    LatLng: '24.1342135314525,120.659009814269',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14795,
    Name: '沙鹿國中風雨操場',
    OperationTel: '04-26622163#723',
    Address: '臺中市沙鹿區中正街1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722102049_IMG_0456.JPG',
    LatLng: '24.2344963014676,120.562210679054',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12955,
    Name: '鹿港國小活動中心前球場',
    OperationTel: '04-7772038',
    Address: '彰化縣鹿港鎮菜園里三民路192號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '半場籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707143703_BUDA6THZGJDX8H9V0JXT.JPG',
    LatLng: '24.0524502776615,120.433507561684',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12987,
    Name: '竹塘國中躲避球場(與排球場共用)',
    OperationTel: '04-8972034#14',
    Address: '彰化縣竹塘鄉竹塘村竹林路一段550號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707152104_DSC06079.JPG',
    LatLng: '23.8648037416932,120.425745248795',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2799,
    Name: '室內體育館',
    OperationTel: '02-26632102#2710',
    Address: '新北市石碇區華梵路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605164214_DSC_6058(2.jpg',
    LatLng: '24.9813317112119,121.691340208054',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9628,
    Name: '華梵大學籃球場',
    OperationTel: '02-26632102#2710',
    Address: '新北市石碇區華梵路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620111204_圖片2.jpg',
    LatLng: '24.9816793832063,121.693067550659',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13654,
    Name: '崇右影藝科技大學室外綜合球場',
    OperationTel: '02-24237785#616',
    Address: '基隆市信義區義七路40號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710113109_IMAG7050[1].jpg',
    LatLng: '25.1315412169886,121.753588914871',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13570,
    Name: '崇右影藝科技大學體育館',
    OperationTel: '02-24237785#616',
    Address: '基隆市信義區義七路40號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709161122_IMAG7101[1].jpg',
    LatLng: '25.1330127567579,121.754511594772',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15339,
    Name: '新北市蘆洲區微風運河右側排球場',
    OperationTel: '02-89699596',
    Address: '新北市蘆洲區二重疏洪道微風運河排球場',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140730120359_41.jpg',
    LatLng: '25.0893009581789,121.455139517784',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 17863,
    Name: '新北市永和區綠寶石公園排球場(新店溪左岸自行車道5.5KM)',
    OperationTel: '02-89699596#521',
    Address: '新北市永和區綠寶石公園排球場(新店溪左岸自行車道5.5KM)',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20141226111755_19.jpg',
    LatLng: '25.0179898878163,121.509025096893',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName: '運動公園（名稱具有公園）'
  },
  {
    GymID: 2496,
    Name: '斗南高中綜合球場',
    OperationTel: '05-5972059',
    Address: '雲林縣斗南鎮中山路212號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604140948_籃球場002.jpg',
    LatLng: '23.6824750640092,120.475999116898',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23908,
    Name: '排球場',
    OperationTel: '06-6223208#27',
    Address: '臺南市柳營區中山東路二段1330號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180403121046_O0BUU9OQ62SD78S9HNJE.JPG',
    LatLng: '23.279363758583,120.325403809547',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7503,
    Name: '田徑場',
    OperationTel: '03-4789618',
    Address: '桃園市楊梅區高獅路5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,足球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617111807_YRLBCM3Z7XDK581VW0HW.jpg',
    LatLng: '24.9215467021952,121.148943901062',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 3000,
    Name: '經國國中田徑場',
    OperationTel: '03-3572699#314',
    Address: '桃園市桃園區經國路276號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場,田徑場,籃球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606155730_NUH8Z.jpg',
    LatLng: '25.0224425762788,121.304125785828',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23873,
    Name: '活動中心',
    OperationTel: '07-5213258#5302',
    Address: '高雄市鼓山區明德路2號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180312144534_GADQBQMED7QBA4DBV1U6.JPG',
    LatLng: '22.6527065075627,120.275617376583',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 22479,
    Name: '田徑場',
    OperationTel: '06-5903994#2025',
    Address: '臺南市新化區東榮里信義路54號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170411120525_ORVRPH9TIJKFO5DTBRCZ.jpg',
    LatLng: '23.0382117059023,120.318663418293',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23559,
    Name: '安平國中排球場',
    OperationTel: '06-2990461#802',
    Address: '臺南市安平區慶平路687號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170928155756_WVT1JX4HZ4KJ05UODNOH.jpg',
    LatLng: '22.9974146241753,120.168113708496',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22579,
    Name: '集集國中綜合球場',
    OperationTel: '049-2762013',
    Address: '南投縣集集鎮集集里成功路200號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170418104115_HH2ZVFN1GKHXZWBRKHMF.jpg',
    LatLng: '23.8318876519534,120.784298926592',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15768,
    Name: '籃排球場',
    OperationTel: '03-8751264',
    Address: '花蓮縣鳳林鎮長橋路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140821091759_4WUEEP6L35PL5LD81ZEY.jpg',
    LatLng: '23.7076057947738,121.418119668961',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration:
      '平日上課期間(例假日除外)不提供民眾球類活動，欲從事相關運動民眾，請轉往其他場地，謝謝您。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24094,
    Name: '大仁國中排球場',
    OperationTel: '07-7114302#71',
    Address: '高雄市苓雅區建國一路148號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180607122238_WMJ7ONIOMIWHT5YKYTD5.jpg',
    LatLng: '22.634478855777,120.329760517826',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8093,
    Name: '勝利國小排球場(館)',
    OperationTel: '08-7652038',
    Address: '屏東縣屏東市勝利里蘭州街2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618154802_IMG_6760.JPG',
    LatLng: '22.6801732199477,120.485880374908',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2230,
    Name: '中興高中排球場(館)',
    OperationTel: '049-2331014',
    Address: '南投縣南投市中興新村中學路2號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603094411_10409446_10202373800726141_7629426621647111052_n.jpg',
    LatLng: '23.9504789456679,120.696122646332',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 25550,
    Name: '復興國中排球場',
    OperationTel: '03-9322942#5033',
    Address: '宜蘭縣宜蘭市復興路二段77號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20190508152908_K28876OQ5XMO13QNS1T0.JPG',
    LatLng: '24.749013838399,121.747178435326',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 25582,
    Name: '旗美高中排球場',
    OperationTel: '07-6612502#350',
    Address: '高雄市旗山區東平里樹人路21號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20190515210440_H5VJJ4P5I6LIR5L9596U.jpg',
    LatLng: '22.8860262011501,120.493310396772',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 25955,
    Name: '同德家商籃排球場',
    OperationTel: '04-92553109',
    Address: '南投縣草屯鎮中正路培英巷8號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200331110411_PYIA8QHMPTEM2IGDE3BR.jpg',
    LatLng: '23.9980446298524,120.695839438874',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16579,
    Name: '新竹高中排球場',
    OperationTel: '03-5736666#206',
    Address: '新竹市東區學府路36號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140911144824_排球場場地照片1.jpg',
    LatLng: '24.7936744095324,120.980792999276',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7577,
    Name: '大寮國中排球場',
    OperationTel: '07-7837091#218',
    Address: '高雄市大寮區永芳里進學路150號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617140056_IMAG0263.jpg',
    LatLng: '22.6026357031372,120.392898917198',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15791,
    Name: '景美女中排球場',
    OperationTel: '02-29368847#339',
    Address: '臺北市文山區樟新里木新路3段312號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140822094303_照片 4-1.jpg',
    LatLng: '24.9825003392475,121.555423736463',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15771,
    Name: '東方工商排球場',
    OperationTel: '02-27554616',
    Address: '臺北市大安區信義路四段186巷8號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140821094353_VAMCL12YUYSOT74JXQX0.JPG',
    LatLng: '25.0320761634447,121.551203691488',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 25980,
    Name: '漢口國中田徑場附設籃球場、排球場',
    OperationTel: '04-23130511#722',
    Address: '臺中市西屯區漢口路一段54之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場附設籃球場、排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200420101906_CH3JR.png',
    LatLng: '24.1617559964262,120.657117962837',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10369,
    Name: '排球場館',
    OperationTel: '05-2262022',
    Address: '嘉義縣民雄鄉中樂村民族路43號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '半戶外球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140627102432_IMG_6838.JPG',
    LatLng: '23.5549707655984,120.429191473891',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5312,
    Name: '東華大學體育館',
    OperationTel: '(03)8632619',
    Address: '花蓮縣壽豐鄉志學村大學路二段1-32號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609162207_IMAG1448.jpg',
    LatLng: '23.9000075998303,121.538086079818',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7725,
    Name: '嘉義國中活動中心',
    OperationTel: '05-2762625#230',
    Address: '嘉義市東區王田里圓福街86號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617171030體育館.jpg',
    LatLng: '23.4881140384412,120.464503169059',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 7751,
    Name: '重慶國中田徑場',
    OperationTel: '02-29543001#504',
    Address: '新北市板橋區國慶路221號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617180002_9OFCVZ2VDIY7ZIBV2P0Z.JPG',
    LatLng: '24.9978000726702,121.462413668633',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7682,
    Name: '彰化師範大學體育館',
    OperationTel: '04-7232105#1943',
    Address: '彰化縣彰化市進德路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '綜合球場-籃球場,羽球場,桌球教室,體操教室,韻律教室,技擊室,重量訓練室,綜合球場-排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617161133_IMGP0373.JPG',
    LatLng: '24.0806780365462,120.559378266335',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7778,
    Name: '臺北科技大學東校區運動園區（排球場）',
    OperationTel: '02-27712171#3327',
    Address: '臺北市大安區忠孝東路三段1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617213306_volleyball - 1.jpg',
    LatLng: '25.0430730399542,121.538184732199',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12833,
    Name: '花壇國中排球場',
    OperationTel: '04-7862043#45',
    Address: '彰化縣花壇鄉長沙村彰員路二段580號',
    Rate: 6.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707101823_DSC00038.GIF',
    LatLng: '24.0303996046411,120.550722777843',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: '本校為非開放校園  場地原則不對外開放',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12831,
    Name: '員林國中田徑場',
    OperationTel: '04-8320873',
    Address: '彰化縣員林市南興里南潭路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707101725_操場全景.JPG',
    LatLng: '23.9635631177254,120.559077858925',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14672,
    Name: '員林家商排球場',
    OperationTel: '04-8320260#229',
    Address: '彰化縣員林市中正路56號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721105802_排球場2.jpg',
    LatLng: '23.9502730395071,120.577965974808',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14693,
    Name: '修德國小排球場',
    OperationTel: '02-27880500#135',
    Address: '臺北市南港區東新街118巷86號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721120335_IMG_3703.JPG',
    LatLng: '25.0448153763406,121.589400172234',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14715,
    Name: '大雅國中體育館',
    OperationTel: '04-25672171#304',
    Address: '臺中市大雅區學府路280號',
    Rate: 10.0,
    RateCount: 20,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721150852_mobile52101861-184a-4891-bdd1-870edcfabb07.jpg',
    LatLng: '24.2237048228294,120.651013255119',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14727,
    Name: '大雅國中田徑場',
    OperationTel: '04-25672171#304',
    Address: '臺中市大雅區學府路280號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721154753_mobilef86b133c-64f2-4e8e-92fc-603db7691cf2.jpg',
    LatLng: '24.2244826617132,120.651431679726',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14825,
    Name: '惠文國小籃球場',
    OperationTel: '04-22596907',
    Address: '臺中市南屯區公益路二段300號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722111417_22243.jpg',
    LatLng: '24.1534166662355,120.637513039326',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13492,
    Name: '北門國中活動中心',
    OperationTel: '06-7862014#14',
    Address: '臺南市北門區永華里1之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '活動中心',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709111215_IMG_4679.JPG',
    LatLng: '23.2531975966167,120.128304362297',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14838,
    Name: '惠文國小活動中心',
    OperationTel: '04-22596907#724',
    Address: '臺中市南屯區公益路二段300號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722114958_22242.jpg',
    LatLng: '24.1525785536793,120.63816010952',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14840,
    Name: '日南國中排球場(館)',
    OperationTel: '04-26813721#532',
    Address: '臺中市大甲區中山路二段69-11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140722115936_33.jpg',
    LatLng: '24.3776757446222,120.650932788849',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14690,
    Name: '城光國中籃球場',
    OperationTel: '(06)2703301*14',
    Address: '臺南市仁德區文華路593號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721115920_DSC08507.JPG',
    LatLng: '22.9766286988416,120.244224071503',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12807,
    Name: '鹿鳴國中籃球場',
    OperationTel: '04-7713846#251',
    Address: '彰化縣鹿港鎮頭南里頂草路三段167號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707100047_ASACREJUHD7R3TPALPTC.jpg',
    LatLng: '24.0982248019189,120.468596220016',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '106年4月14日至106年6月5日進行冷氣設置工程，不予開放。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15764,
    Name: '聖約翰科技大學自強排球場',
    OperationTel: '02-28013131#6217',
    Address: '新北市淡水區淡金路四段499號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140821075618_自強排球場-1.JPG',
    LatLng: '25.2263002963594,121.450622677803',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15765,
    Name: '聖約翰科技大學自強排球場',
    OperationTel: '02-28013131#6217',
    Address: '新北市淡水區淡金路四段499號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140821075621_自強排球場-1.JPG',
    LatLng: '25.2263002963594,121.450622677803',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15054,
    Name: '東海大學排球場',
    OperationTel: '(04)23590121',
    Address: '臺中市西屯區臺灣大道四段1727號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724150055__MG_5455-3.jpg',
    LatLng: '24.1811404542718,120.604348182678',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16536,
    Name: '豐南國中體育館',
    OperationTel: '04-25280185',
    Address: '臺中市豐原區豐南街151號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),游泳池(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140905182043_場館外 (3).JPG',
    LatLng: '24.2390552550912,120.717199444771',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13338,
    Name: '國防醫學院田徑場',
    OperationTel: '(02)87923144',
    Address: '臺北市內湖區民權東路六段161號 ',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,足球場,籃球場,網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708152207_DSCN4424_compressed.jpg',
    LatLng: '25.0717324682919,121.59875035286',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14432,
    Name: '南強工商籃球場',
    OperationTel: '02-29155144',
    Address: '新北市新店區文化路42號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717110558_20130107801.JPG',
    LatLng: '24.9807433409823,121.545202732086',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2355,
    Name: '清水高中田徑場',
    OperationTel: '04-26222116#341',
    Address: '臺中市清水區中山路90號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603161911_R0015217.JPG',
    LatLng: '24.2645618364658,120.574210882187',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10095,
    Name: '壽山國中攀岩場',
    OperationTel: '07-5519150#32',
    Address: '高雄市鼓山區鼓山二路37巷108號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '攀岩場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624103801_DSCN4252.JPG',
    LatLng: '22.6344821142118,120.278715236182',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14141,
    Name: '玉里高中排球場(館)',
    OperationTel: '03-8886171#331',
    Address: '花蓮縣玉里鎮中華路424號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714205824_室外排球場.JPG',
    LatLng: '23.3443968244002,121.32010102272',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22501,
    Name: '泰山高中田徑場',
    OperationTel: '02-22963625',
    Address: '新北市泰山區辭修路7號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '泰山高中田徑場,室外籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170413091421_EZJOCKJLKOAYUBJ1EX19.JPG',
    LatLng: '25.0577569772986,121.429889202118',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13554,
    Name: '成功國中風雨球場',
    OperationTel: '06-2517906#130',
    Address: '臺南市北區和緯路1段2號',
    Rate: 3.3,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '風雨球場,半場籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709153647_DSC05953.JPG',
    LatLng: '23.0092605280378,120.21665096283',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2664,
    Name: '僑平國小彩翼館',
    OperationTel: '05-2333746#705',
    Address: '嘉義市西區德安路10號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605104559_排球場.jpg',
    LatLng: '23.4843453126581,120.431699752808',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6221,
    Name: '龍山國小排球場',
    OperationTel: '0912994784',
    Address: '龍山街62號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612132353_DSC08699.JPG',
    LatLng: '22.864291688818,120.556608885527',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: '歡迎民眾多加使用',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9255,
    Name: '鷺江國中田徑場',
    OperationTel: '02-82862517',
    Address: '新北市蘆洲區長樂路235號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619104245_IMAG0170[1].jpg',
    LatLng: '25.090612685246,121.461796760559',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22539,
    Name: '五樓籃球場',
    OperationTel: '07-3813210',
    Address: '高雄市三民區大昌一路200號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170414153337_PXU3B5T162O5K2GDC7PA.jpg',
    LatLng: '22.6560269652005,120.324304103851',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11534,
    Name: '古坑國中排球場',
    OperationTel: '05-5821004#204',
    Address: '雲林縣古坑鄉朝陽村朝陽路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140630155527_C4NA4GDXX8TX6SJW61XC.jpg',
    LatLng: '23.6466618069358,120.567263960838',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2997,
    Name: '文昌國中操場',
    OperationTel: '03-3552776#315',
    Address: '桃園市桃園區民生路729號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606155405_未命名.JPG',
    LatLng: '25.0096965681375,121.307644844055',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: '詳見FB社團「文昌動起來」',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14636,
    Name: '光復商工排球場',
    OperationTel: '03-8700245#207',
    Address: '花蓮縣光復鄉林森路100號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140719213410_排球場1.JPG',
    LatLng: '23.6678947642483,121.429030895233',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20310,
    Name: '佳興國中籃球場',
    OperationTel: '06-7260291#13',
    Address: '臺南市佳里區民安里新宅34之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20150922143445_1XG7GR31BNI6CXSWDIKV.JPG',
    LatLng: '23.1823976533397,120.195643901825',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2845,
    Name: '內湖高中排球場',
    OperationTel: '02-27977035',
    Address: '臺北市內湖區紫陽里文德路218號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606094902_84ZZJC693TMUINB0MA23.jpg',
    LatLng: '25.0778494696366,121.587088108063',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration:
      '本校室外排球場因場地整修，預定106年6月開始動工，工程期間不提供民眾健身活動，欲從事相關運動民眾，請轉往其他場地，謝謝您。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22314,
    Name: '苑裡國小新活動中心',
    OperationTel: '03-7861013#25',
    Address: '苗栗縣苑裡鎮中山路307號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160909174637_1JWTMG9MOA6UAUTY4JG7.jpg',
    LatLng: '24.4491005911715,120.654835402966',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7116,
    Name: '茄萣國中體育館',
    OperationTel: '07-6900054#23',
    Address: '高雄市茄萣區白雲里濱海路四段29號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616140802_P1040421.JPG',
    LatLng: '22.9059850260194,120.181288719177',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14787,
    Name: '建國國中田徑場',
    OperationTel: '037-691491',
    Address: '苗栗縣頭份鎮建國路119號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場,籃球場(慈輝分校)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722100508_場館-1.jpg',
    LatLng: '24.6944875860768,120.910388231277',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9245,
    Name: '新發國小籃球場',
    OperationTel: '07-6791387',
    Address: '高雄市六龜區新發里和平路130號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場(館),羽球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619103055_新發國小-籃球場照片.jpg',
    LatLng: '23.0324456642865,120.662396550179',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20843,
    Name: '瑞竹國中籃球與排球場',
    OperationTel: '049-2711014',
    Address: '南投縣竹山鎮瑞竹里瑞東巷20號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160628102531_樂群管.jpg',
    LatLng: '23.6675200826979,120.671580433846',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22561,
    Name: '竹東高中排球場',
    OperationTel: '03-5962024#304',
    Address: '新竹縣竹東鎮大林路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170417144810_Y4ZT3SG91M1FG5SNGPUP.jpg',
    LatLng: '24.7330044071151,121.088218688965',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22560,
    Name: '竹東高中排球場',
    OperationTel: '03-5962024#303',
    Address: '新竹縣竹東鎮大林路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170417144417_8JH3NJ4HW4NM3JA3TZ3E.jpg',
    LatLng: '24.7330044071151,121.088218688965',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22622,
    Name: '三民高中操場',
    OperationTel: '02-22894675#231',
    Address: '新北市蘆洲區三民路96號',
    Rate: 10.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170420103337_IB0JTBBDKJ8WYN5VNXYA.jpg',
    LatLng: '25.086648311588,121.473716497421',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6392,
    Name: '化仁國小活動中心',
    OperationTel: '03-8528720#313',
    Address: '花蓮縣吉安鄉東里十一街83號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '風雨教室,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612165655_YI8JPLMKBOVUSUN8HITF.JPG',
    LatLng: '23.9627689870185,121.596534848213',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23047,
    Name: '臺中高工排球場',
    OperationTel: '04-22613158',
    Address: '臺中市南區高工路191號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170714184131_JRPVG.jpg',
    LatLng: '24.1155292490018,120.662959814072',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23040,
    Name: '溪崑國民中學室外排球場',
    OperationTel: '02-26869727',
    Address: '新北市板橋區大觀路三段50巷30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170712170859_1Q605T9SKRPRTB6H4GSC.JPG',
    LatLng: '24.9968714460939,121.431487798691',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6129,
    Name: '礁溪國中五育館',
    OperationTel: '03-9882412',
    Address: '宜蘭縣礁溪鄉礁溪路4段23號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612105119_IMG_8707-1.JPG',
    LatLng: '24.8166507324157,121.766678094864',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23660,
    Name: '南港高中田徑場',
    OperationTel: '02-27837863#245',
    Address: '臺北市南港區西新里向陽路21號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20171016133441_0SRI7EWVKLIQQVMLXPCY.jpg',
    LatLng: '25.0521951234281,121.594162800557',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13550,
    Name: '羽球場館',
    OperationTel: '06-6852177',
    Address: '臺南市白河區永安里三民路448號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709152722_DSC_1732.JPG',
    LatLng: '23.3520126228519,120.414399504662',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5839,
    Name: '祥和國小籃球場',
    OperationTel: '05-3621839',
    Address: '嘉義縣朴子市祥和二路西段9號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場館,躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611133540_tn_2.JPG',
    LatLng: '23.4568419988903,120.287847518921',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5864,
    Name: '排路國小田徑場',
    OperationTel: '05-2694974',
    Address: '嘉義縣大林鎮排路里231號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611141041_排路國小田徑場地.JPG',
    LatLng: '23.6105929779673,120.422172546387',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5324,
    Name: '文賢國小網球場(館)',
    OperationTel: '05-6341157#046',
    Address: '雲林縣西螺鎮鹿場里文賢路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609165135_P6090905.jpg',
    LatLng: '23.7473551216026,120.465120077133',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10176,
    Name: '東勢國小活動中心',
    OperationTel: '05-6991036',
    Address: '雲林縣東勢鄉東南村東榮路29巷9號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140625080559_01.jpg',
    LatLng: '23.6741232815093,120.256690979004',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9704,
    Name: '師大附中排球場(館)',
    OperationTel: '02-27075215#271',
    Address: '臺北市大安區和安里信義路3段143號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620131653_mobiled563b1d3-6c79-4cf0-a3f3-84e8fed2dad1.jpg',
    LatLng: '25.0356348536557,121.541074307456',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22163,
    Name: '興大附農排球場',
    OperationTel: '04-22810010#303',
    Address: '臺中市東區台中路283號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160815143953_2GQ6T.jpg',
    LatLng: '24.1285084971416,120.685255676508',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12878,
    Name: '新莊高中田徑場、新莊高中排球場',
    OperationTel: '07-3420103',
    Address: '高雄市左營區文慈路99號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707105348_IMG_20140705_090715.jpg',
    LatLng: '22.6804701953878,120.316257476807',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20528,
    Name: '興雅國中排球場',
    OperationTel: '02-27232771#330',
    Address: '臺北市信義區松德路168巷15號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160505092515_MMDA045S5UOFCCYAQJWL.JPEG',
    LatLng: '25.0354400026133,121.572191119194',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26156,
    Name: '寶桑國中排球場',
    OperationTel: '089-220011',
    Address: '臺東縣臺東市仁七街1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200527130014_2G8U89PYY0M5J07RBI8K.JPG',
    LatLng: '22.7695584856032,121.144899129868',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 30640,
    Name: '至善國中排球場',
    OperationTel: '04-27057587#725',
    Address: '臺中市西屯區青海路二段308號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20230702115816_AM1L0.jpg',
    LatLng: '24.17508509108,120.641130248971',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 29870,
    Name: '沙灘排球場',
    OperationTel: '03-3861124',
    Address: '桃園市大園區海口里建國路70號旁',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '大園區沙灘排球場,沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20211101144157_5F9H4F9GL0M87AQVZEJQ.jpg',
    LatLng: '25.113167493443,121.250913582899',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9214,
    Name: '彰化縣立體育場排球場',
    OperationTel: '04-7112175',
    Address: '彰化市健興路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場,籃球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619095924_MCKQH17CEHM5YNDDZA0L.JPG',
    LatLng: '24.0685070160493,120.553262829781',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName: '體育及運動園區（名稱具有園區）'
  },
  {
    GymID: 4213,
    Name: '瑞峰國小籃球場',
    OperationTel: '03-5949052#120',
    Address: '新竹縣竹東鎮上坪里43號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140608160407_IMG_8156.jpg',
    LatLng: '24.6613191754416,121.122068166733',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2825,
    Name: '慈濟高中活動中心',
    OperationTel: '06-2932323#321',
    Address: '臺南市安平區建平五街111號',
    Rate: 2.4,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606085253_D1020048.JPG',
    LatLng: '22.9873575630692,120.178766165446',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5694,
    Name: '大潭國小風雨球場',
    OperationTel: '08-8324226',
    Address: '屏東縣東港鎮大潭里大潭路93號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610211034_未命名 - 1.jpg',
    LatLng: '22.4578413943811,120.495710134473',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5691,
    Name: '大潭國小綜合球場',
    OperationTel: '08-8324226',
    Address: '屏東縣東港鎮大潭里大潭路93號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610203413_DSC_8581.jpg',
    LatLng: '22.4572849870835,120.495585679992',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2998,
    Name: '宜蘭高商籃球場',
    OperationTel: '03-9384147#330',
    Address: '宜蘭縣宜蘭市延平路50號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606155619_室外籃球場1.jpg',
    LatLng: '24.754879224704,121.766125559807',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9267,
    Name: '斗六國中網球場(館)',
    OperationTel: '05-5323296#204',
    Address: '雲林縣斗六市育英北街69號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619105603_IMG_0474.jpg',
    LatLng: '23.7136617934493,120.550999045372',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7149,
    Name: '卓蘭國小活動中心',
    OperationTel: '04-25892008#723',
    Address: '苗栗縣卓蘭鎮新厝里中山路125號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616143153_2014-06-16 08.41.03.jpg',
    LatLng: '24.3123931438486,120.824739933014',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7765,
    Name: '實踐大學體育館(臺北校區)',
    OperationTel: '02-25381111#3811',
    Address: '臺北市中山區大直街70號',
    Rate: 5.7,
    RateCount: 6,
    Distance: 0.0,
    GymFuncList:
      '籃球場,桌球場(館),排球場(館),羽球場(館),健身房(含重量訓練室),體適能中心,舞蹈教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617182508_體育館日.JPG',
    LatLng: '25.0845711907292,121.545625770013',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7675,
    Name: '實踐大學體育館(高雄校區)',
    OperationTel: '07-6678888#3261',
    Address: '高雄市內門區大學路200號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),籃球場,排球場(館),健身房,韻律教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617160150_體育館外觀.JPG',
    LatLng: '22.9051746330921,120.46672873199',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8122,
    Name: '精誠高中操場',
    OperationTel: '(04)7622790',
    Address: '彰化縣彰化市林森路200號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618164841_P1020043.JPG',
    LatLng: '24.0724645611159,120.527765750885',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8139,
    Name: '樹人醫護管理專科學校排球場',
    OperationTel: '07-6979333',
    Address: '高雄市路竹區環球路452號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618172019_排球場全景.JPG',
    LatLng: '22.8832921938082,120.263573527336',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9384,
    Name: '田徑場',
    OperationTel: '03-3322605#1351',
    Address: '桃園市桃園區復興路439號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,半場籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619144210_53872.jpg',
    LatLng: '24.990332041992,121.302461894229',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9466,
    Name: '海星高中田徑場',
    OperationTel: '03-8242588',
    Address: '花蓮縣新城鄉嘉新村嘉新路36號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619162246_海星鳥瞰圖.jpg',
    LatLng: '24.0074630862454,121.61328792572',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9740,
    Name: '陽明大學活動中心',
    OperationTel: '02-28267000#2169',
    Address: '臺北市北投區立農街二段155號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '排球場(館),桌球場(館),韻律教室,籃球場,羽球場(館),健身房(含重量訓練室),心肺功能室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620141950_CIMG0740.JPG',
    LatLng: '25.1216217021507,121.51424869895',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9820,
    Name: '陽明大學山下球場',
    OperationTel: '02-28267000#2169',
    Address: '臺北市北投區立農街二段155號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620161711_CIMG0744.JPG',
    LatLng: '25.11978394893,121.513720303774',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9828,
    Name: '陽明大學山頂運動場',
    OperationTel: '02-28267000#2169',
    Address: '臺北市北投區立農街二段155號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620163000_CIMG0734.JPG',
    LatLng: '25.1251865839461,121.514883041382',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11561,
    Name: '高雄科技大學建工校區排球場(館)',
    OperationTel: '07-3814526#51408',
    Address: '高雄市三民區建工路415號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140701091014_照片.JPG',
    LatLng: '22.6478039927559,120.329201817513',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11756,
    Name: '鎮南國小室外綜合球場',
    OperationTel: '05-6341109#036',
    Address: '雲林縣斗六市社口里南揚街60號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '網球場(館),排球場(館),籃球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140702152104_SAM_6204.JPG',
    LatLng: '23.6989977379463,120.540187060833',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12867,
    Name: '排球場館',
    OperationTel: '04-8828588#313',
    Address: '彰化縣溪湖鎮福德路310號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707104522_DSC07023.JPG',
    LatLng: '23.9532929635897,120.470924377441',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14523,
    Name: '富春國小體操館',
    OperationTel: '04-25222542#724',
    Address: '臺中市豐原區豐西里中山路455號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '體操館,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718101433_DSC00512.JPG',
    LatLng: '24.2519143417312,120.712902545929',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14563,
    Name: '金門大學排球場(館)',
    OperationTel: '082-313802',
    Address: '金門縣金寧鄉大學路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718134722_IMG_3740.JPG',
    LatLng: '24.4469584507897,118.322337841673',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13800,
    Name: '東石高中排球場',
    OperationTel: '05-3794180',
    Address: '嘉義縣朴子市大鄉里253號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711100238_排球全2-1.jpg',
    LatLng: '23.4643682839409,120.251927375793',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13744,
    Name: '後壁國中戶外運動場',
    OperationTel: '06-6871974#222',
    Address: '臺南市後壁區嘉苳里124之20號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710172327_P_20140710_153518.jpg',
    LatLng: '23.3539210474355,120.359529554844',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9317,
    Name: '水里商工排球場',
    OperationTel: '049-2870666#235',
    Address: '南投縣水里鄉南湖路2號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619121546_GIPFD.jpg',
    LatLng: '23.804212785331,120.853428840637',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13602,
    Name: '新港藝術高中體育館',
    OperationTel: '05-3747060#254',
    Address: '嘉義縣新港鄉宮後村藝高路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '舞蹈教室,籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710091613_DSC06603.JPG',
    LatLng: '23.5601025607101,120.350729227066',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 13827,
    Name: '苑裡高中綜合球場',
    OperationTel: '037-861042#623',
    Address: '苗栗縣苑裡鎮客庄里24鄰新興路19號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711105827_IMG_1026.JPG',
    LatLng: '24.4392772022492,120.654961466789',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13857,
    Name: '德光高中體育館',
    OperationTel: '06-2894560',
    Address: '臺南市東區德光街106號',
    Rate: 3.7,
    RateCount: 7,
    Distance: 0.0,
    GymFuncList: '游泳池(館),籃球場,排球場(館),羽球場(館),桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711121431_PIC_5064.JPG',
    LatLng: '22.9794938549282,120.220153900791',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13872,
    Name: '德光高中田徑場',
    OperationTel: '(06)2894560',
    Address: '臺南市東區德光街106號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711131015_PIC_5065.JPG',
    LatLng: '22.9791180423718,120.221020925019',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13899,
    Name: '環球科技大學排球場(館)',
    OperationTel: '05-5370988#2312',
    Address: '雲林縣斗六市嘉東里鎮南路1221號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711143444_IMG_20140715_111504.jpg',
    LatLng: '23.6771299847085,120.548601150513',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13906,
    Name: '屏東大學排球場(館)',
    OperationTel: '08-7663800#10522',
    Address: '屏東縣屏東市民生路4號之18',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)(民生校區)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711150039_CC8JK.jpg',
    LatLng: '22.666129655312,120.505283474922',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13927,
    Name: '仁德國中籃球場附設排球場',
    OperationTel: '06-2682724#44',
    Address: '臺南市仁德區民安路一段363號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140711155055_5.jpg',
    LatLng: '22.9571863062514,120.248743593693',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13507,
    Name: '羅東高中躍虎球場(排球場、籃球場)',
    OperationTel: '03-9567645#300',
    Address: '宜蘭縣羅東鎮公正路324號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '半場籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709113730_IMG_20140709_132532.jpg',
    LatLng: '24.6835591927074,121.763517165236',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13956,
    Name: '高雄大學排球場(館)',
    OperationTel: '07-5919490',
    Address: '高雄市楠梓區高雄大學路700號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711175802_排小檔.JPG',
    LatLng: '22.7322132857332,120.277526378632',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12784,
    Name: '聯興國小田徑場',
    OperationTel: '04-7384340',
    Address: '彰化縣彰化市牛埔里一心南街208號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,田徑場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707095027_11 (3).JPG',
    LatLng: '24.0765493248553,120.598404407501',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8040,
    Name: '羅東高中中正堂(室內籃球場)',
    OperationTel: '03-9567645#309',
    Address: '宜蘭縣羅東鎮公正路324號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618145146_IMG_20140710_141924.jpg',
    LatLng: '24.6809278442249,121.762741416496',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13968,
    Name: '黎明高中排球場(館)',
    OperationTel: '(06)5717123轉234或235',
    Address: '臺南市麻豆區磚井里141號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140713100854_DSC01920_2.jpg',
    LatLng: '23.1730051347916,120.248033076541',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13976,
    Name: '衛道高中排球場(館)',
    OperationTel: '04-22911187',
    Address: '臺中市北屯區四平路161號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140713211056_排球場全景.JPG',
    LatLng: '24.1827455508138,120.674316287041',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13978,
    Name: '聖心女中籃排球場',
    OperationTel: '02-26182287',
    Address: '新北市八里區龍米路一段263號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃排球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714000138_P1270686.jpg',
    LatLng: '25.1343909978437,121.448619376097',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration:
      '學校為女校，且全天有學生上課，不提供民眾健身活動，欲從事相關運動民眾，請轉往其他場地，謝謝您。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13993,
    Name: '宜蘭高中籃、排球場',
    OperationTel: '03-9324153#221',
    Address: '宜蘭縣宜蘭市復興路三段8號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714095026_IMG_5262.JPG',
    LatLng: '24.7524580813505,121.742447018623',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14000,
    Name: '屏東大學體育館',
    OperationTel: '08-7663800#10521',
    Address: '屏東縣屏東市民生路4之18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714101306_IMG_6595.JPG',
    LatLng: '22.6662146487695,120.50373852253',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 13996,
    Name: '治平高中體育場',
    OperationTel: '03-4823636#302',
    Address: '桃園市楊梅區埔心中興路137號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714095328_DSCF1598.JPG',
    LatLng: '24.9154897360921,121.188042461872',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14036,
    Name: '和春技術學院排球場(館)',
    OperationTel: '(07)7889888',
    Address: '高雄市大寮區琉球里至學路288號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714112735_排球場.jpg',
    LatLng: '22.6086305388262,120.426503562194',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14040,
    Name: '紀安國小籃球場',
    OperationTel: '06-5722306#183',
    Address: '臺南市麻豆區謝厝寮里231號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714113011_P1170974.JPG',
    LatLng: '23.1513358409819,120.237694680582',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14067,
    Name: '玄奘大學排球場',
    OperationTel: '03-5302255#6141',
    Address: '新竹市香山區東香里玄奘路48號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714121112_DSC00061.JPG',
    LatLng: '24.7738862399661,120.940734744072',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14061,
    Name: '福康國小學生活動中心',
    OperationTel: '07-7227134#722',
    Address: '高雄市苓雅區漢陽街17號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714120117_014Q4KOLDB20JQGNPTAI.jpg',
    LatLng: '22.6188896905308,120.330363314527',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 14033,
    Name: '屏榮高中體育館',
    OperationTel: '(08)7223409',
    Address: '屏東縣屏東市豐田里民學路100號',
    Rate: 10.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714111951_照片 029.jpg',
    LatLng: '22.6749017988487,120.504564642906',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14071,
    Name: '臺北護理健康大學體育館',
    OperationTel: '02-28227101#2901',
    Address: '臺北市北投區明德路365號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場,排球場,健身教室,韻律教室,攀岩場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140714122228_S__4046900.jpg',
    LatLng: '25.118417989333,121.518627405167',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13006,
    Name: '臺南市立學甲國中排球館',
    OperationTel: '06-7832128#207',
    Address: '臺南市學甲區華宗路540號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707164447_HGM4V.jpg',
    LatLng: '23.2369930983132,120.183799267143',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15382,
    Name: '大成國中排球場',
    OperationTel: '06-2630011#310',
    Address: '臺南市南區西門路一段306號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140730182907_DSC01761.JPG',
    LatLng: '22.978227799417,120.200155377388',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15392,
    Name: '仁德文賢國中室外排球場',
    OperationTel: '06-2662392#12',
    Address: '臺南市仁德區保安里中正路一段185號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140731092357_CIMG7287.JPG',
    LatLng: '22.9192054083376,120.228720903397',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14949,
    Name: '大雅國小榮寬體育館',
    OperationTel: '04-25667766',
    Address: '臺中市大雅區三和里學府路230號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140723144404_IMG_1610.JPG',
    LatLng: '24.2218825087278,120.651927888393',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 20321,
    Name: '下營國中排球場(新)',
    OperationTel: '06-6891105#131',
    Address: '臺南市下營區中山路一段412號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20151002153949_全景1.jpg',
    LatLng: '23.2378882939909,120.272218286991',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20758,
    Name: '下營國中排球場(舊)',
    OperationTel: '06-6891105#131',
    Address: '臺南市下營區中山路一段412號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160606163514_141782.jpg',
    LatLng: '23.2381027152216,120.271915197372',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20295,
    Name: '北門國中排球場',
    OperationTel: '06-7862014#14',
    Address: '臺南市北門區永華里1之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20150812165947_排球場1.jpg',
    LatLng: '23.2526234062636,120.127987861633',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20803,
    Name: '花蓮縣萬榮鄉立綜合運動公園',
    OperationTel: '038-751321#137',
    Address: '花蓮縣立西林國民小學後方',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),壘球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160623174238105.1.30西林綜合運動公園清潔巡視_5054.jpg',
    LatLng: '23.8118348875335,121.441738716817',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: '本場館因場內設施年久失修，暫設為不開放之場館',
    LandAttrName: '體育及運動園區（名稱具有園區）'
  },
  {
    GymID: 1093,
    Name: '臺南高商田徑場',
    OperationTel: '06-2617123',
    Address: '臺南市南區健康路一段327號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '足球場,田徑場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529162155_IMAG4288.jpg',
    LatLng: '22.9807518305607,120.201690004934',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20945,
    Name: '籃、排球場',
    OperationTel: '08-7799821#8214',
    Address: '屏東縣內埔鄉美和村屏光路23號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '半場籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160705101745_P1060632.JPG',
    LatLng: '22.6039943352761,120.561118483347',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 21965,
    Name: '排球場',
    OperationTel: '05-2374673#120',
    Address: '嘉義市西區北湖里雙園街280號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '北園國中排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160707155318_IMG_7524.JPG',
    LatLng: '23.4949456861541,120.42736530304',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14867,
    Name: '外埔國中籃球場',
    OperationTel: '04-26833721#214',
    Address: '臺中市外埔區外埔路999號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722132514_DSCN8418.JPG',
    LatLng: '24.3322480489498,120.650798678398',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13749,
    Name: '高雄大學洪四川運動廣場(半室內球場)',
    OperationTel: '07-5919490',
    Address: '高雄市楠梓區高雄大學路700號',
    Rate: 4.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710203557_洪四川運動廣場.jpg',
    LatLng: '22.7314018580208,120.279747247696',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7096,
    Name: '嘉南藥理大學體育館',
    OperationTel: '06-2664911#1220',
    Address: '臺南市仁德區二仁路一段60號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排(羽)球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616134313_d_20080722144010.jpg',
    LatLng: '22.9225825771142,120.225387755782',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22269,
    Name: '露天綜合球場',
    OperationTel: '07-6678888#3261',
    Address: '高雄市內門區內南里大學路200號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160830112915_籃排球場.jpg',
    LatLng: '22.9054118217673,120.466536283493',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22245,
    Name: '永安國小排球場',
    OperationTel: '08-9551172',
    Address: '臺東縣鹿野鄉永安村鹿寮路31號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160826151706_Image80.JPG',
    LatLng: '22.933999899859,121.128902435303',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20524,
    Name: '花蓮女中籃球場',
    OperationTel: '03-8321202#133',
    Address: '花蓮縣花蓮市菁華街２號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160504163142_IQLV2.JPG',
    LatLng: '23.9786996860269,121.616329550743',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 20484,
    Name: '斗六家商排球場',
    OperationTel: '05-5322147',
    Address: '雲林縣斗六市成功路120號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160308135434_DSCN3906.JPG',
    LatLng: '23.7063038411371,120.547613024646',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22815,
    Name: '鳥松國中排球場',
    OperationTel: '07-7323977#22',
    Address: '高雄市鳥松區松埔北巷5之1號',
    Rate: 3.1,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170626100146_RUKFD2AF8AD6ROI6JMRJ.JPG',
    LatLng: '22.6672195153494,120.371806025505',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22823,
    Name: '楠陽國小排球場',
    OperationTel: '07-3520675#131',
    Address: '高雄市楠梓區楠陽路100號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170626111040_YCEHHESFOAOZPZ9P58WS.jpg',
    LatLng: '22.7259485430636,120.332007408142',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20554,
    Name: '太平國中排球場',
    OperationTel: '04-23922540#124',
    Address: '臺中市太平區中山路二段116號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160506150601_排球場1--s.jpg',
    LatLng: '24.1482037406147,120.734568089247',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7814,
    Name: '鶯歌國中活動中心',
    OperationTel: '02-26701461#105',
    Address: '新北市鶯歌區尖山埔路108號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,羽球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618090838_DSC04236.JPG',
    LatLng: '24.9508300028988,121.344702243805',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22851,
    Name: '雙溪高中田徑場',
    OperationTel: '02-24931028#221',
    Address: '新北市雙溪區梅竹蹊3號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170627141057_TPZAO4UEVKKA48ORV5MV.jpg',
    LatLng: '25.0364461034816,121.862030625343',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23429,
    Name: '高英工商綜合球場',
    OperationTel: '07-7832991',
    Address: '高雄市大寮區鳳林三路19巷44號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170919150856_HMHBRJKYSQ84L20YNFNW.jpg',
    LatLng: '22.5933248937342,120.400527119637',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12695,
    Name: '懷恩館',
    OperationTel: '03-9871000#11252',
    Address: '宜蘭縣礁溪鄉林美村林尾路160號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '懷恩館,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140704105433_DSC_2457.jpg',
    LatLng: '24.816249425188,121.72375202179',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23450,
    Name: '瑞中田徑場',
    OperationTel: '02-24972145#0223',
    Address: '新北市瑞芳區三爪子坑路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170922092601_OBUTI9J1IJ9E8TWGUIYA.jpg',
    LatLng: '25.1076978601641,121.815140247345',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16719,
    Name: '宜蘭縣成功國小體育館',
    OperationTel: '03-9542156#112',
    Address: '宜蘭縣羅東鎮興東南路100號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),武術場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140923220853_D77TQ.jpg',
    LatLng: '24.6714946193269,121.76815867424',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23483,
    Name: '排球場',
    OperationTel: '03-5711125#108',
    Address: '新竹市東區仰德路11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170925133721_FZF6OQTI52GQ0XYNI4LO.jpg',
    LatLng: '24.8121544784617,121.002747416496',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23485,
    Name: '三星國中運動場',
    OperationTel: '03-9892012#235',
    Address: '宜蘭縣三星鄉月眉村月眉街54號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170925140343_M5H66C9BBRP271ZN9CWZ.JPG',
    LatLng: '24.6678614282139,121.653767824173',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7402,
    Name: '三星國小學生活動中心',
    OperationTel: '03-9892026#12',
    Address: '宜蘭縣三星鄉三星路五段86號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617092741_20140617_091016.jpg',
    LatLng: '24.6661127986531,121.650390386549',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24026,
    Name: '水上國中室外多功能排羽球場',
    OperationTel: '05-2682024#12',
    Address: '嘉義縣水上鄉水上村進學街45號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '水上國中室外多功能排球、羽球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180507104859_GU0S6OK1Q4D6ML7ZBYI6.JPG',
    LatLng: '23.4252924331977,120.39529440304',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1068,
    Name: '百齡高中活動中心',
    OperationTel: '02-28831568',
    Address: '臺北市士林區義信里承德路4段177號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529142146_百齡高中活動中心.jpg',
    LatLng: '25.0864539762441,121.523551940918',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5970,
    Name: '臺南二中排球場(館)',
    OperationTel: '06-2514526#416',
    Address: '臺南市北區北門路二段125號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611165315_mobile831d0fb2-8109-4f3b-96f4-8f77c8ec06d2.jpg',
    LatLng: '23.0055868783381,120.212477445602',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22409,
    Name: '勤益科大戶外操場(手球場、籃球場、排球場、網球場)',
    OperationTel: '04-23924505#5621',
    Address: '臺中市太平區坪林里中山路二段57號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,手球場(館),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20161121141407_VEU1L0WBDLIJFE85LL4D.JPG',
    LatLng: '24.1454945854975,120.730926990509',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7901,
    Name: '中華大學活動中心',
    OperationTel: '03-5186812',
    Address: '新竹市香山區東香里五福路二段707號',
    Rate: 10.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),舞蹈教室,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618110929_IMG_8656.JPG',
    LatLng: '24.7589224776409,120.954231619835',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1101,
    Name: '政治大學體育館',
    OperationTel: '02-29393091#62964',
    Address: '臺北市文山區指南路二段64號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場,羽球場,桌球室,舞蹈教室,綜合教室,重訓室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529165724_7XE01.jpg',
    LatLng: '24.985002883359,121.573655605316',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5345,
    Name: '華僑高級中學排球場(館)',
    OperationTel: '02-29684131#341',
    Address: '新北市板橋區大觀路一段32號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館) ,健身房(含重量訓練室),飛輪教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609183344_排球館全景照片.jpg',
    LatLng: '25.0054635264808,121.445800065994',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2374,
    Name: '光啟高中田徑場',
    OperationTel: '02-82098313#501',
    Address: '桃園市龜山區自由街40號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,羽球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604082800_IMG_0863.jpg',
    LatLng: '25.0201627810747,121.402986645699',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7058,
    Name: '方曙商工排球場(館)',
    OperationTel: '03-4796345#312',
    Address: '桃園市龍潭區上林村中原路一段50號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616121448_13392.jpg',
    LatLng: '24.857756069574,121.200903654099',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22603,
    Name: '大安國小網球場',
    OperationTel: '02-27322332',
    Address: '臺北市大安區芳和里臥龍街129號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170419085627_IBF9EO59UV2FH0GPRA3O.JPG',
    LatLng: '25.020007228473,121.549075841904',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13034,
    Name: '龍崎國中排球場',
    OperationTel: '06-5941475#10',
    Address: '臺南市龍崎區新市子258號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708090023_CIMG2738.JPG',
    LatLng: '22.9690622034433,120.360159873962',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26103,
    Name: '土城國中操場旁排球場',
    OperationTel: '02-22675135#401',
    Address: '新北市土城區永寧路18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200504111900_86UXT9CJ1U3J8NE2XBSZ.jpg',
    LatLng: '24.9611378727124,121.430143098229',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20536,
    Name: '排球場館',
    OperationTel: '06-2577631',
    Address: '臺南市安南區青砂街二段105巷32號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160505141013_3XPCCJWNW5L2PCST34RM.jpg',
    LatLng: '23.0768397913281,120.116465091705',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26121,
    Name: '池上國中排球場',
    OperationTel: '08-9862040',
    Address: '臺東縣池上鄉新興村力學路88號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200507151716_D5S13K82G4E9AWXKD4MJ.jpg',
    LatLng: '23.1148400654858,121.204932332039',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13925,
    Name: '北園國小排球場(館)',
    OperationTel: '05-2371330#212',
    Address: '嘉義市西區北湖里北社尾路168號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '風雨球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140711154615_DSCN0995.JPG',
    LatLng: '23.4954455901455,120.426434572139',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 25747,
    Name: '石牌國中室外排球場',
    OperationTel: '02-28224682#255',
    Address: '臺北市北投區吉利里石牌路1段139號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20190819091909_U5G45HHQ55RAMSQW11A9.jpg',
    LatLng: '25.1159022059951,121.512969976736',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26138,
    Name: '士商排球場',
    OperationTel: '02-28313114#306',
    Address: '臺北市士林區後港里士商路150號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200512162319_TZWEWABXMYOJ1PEMEJXX.jpg',
    LatLng: '25.0944048172018,121.515142530208',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2877,
    Name: '排球場館',
    OperationTel: '06-9261101#322',
    Address: '澎湖縣馬公市中興里民族路63號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,桌球場(館),舉重室,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606104123_IMG_20140606_092401.jpg',
    LatLng: '23.5704283736974,119.564080238342',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 30593,
    Name: '臺中市立四箴國中籃球場',
    OperationTel: '04-26314606#731',
    Address: '臺中市龍井區中沙路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '四箴國中籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20230428125821_FGZ2S.JPG',
    LatLng: '24.1792524931638,120.575981140137',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 1079,
    Name: '百齡高中排球場(館)',
    OperationTel: '02-28831568',
    Address: '臺北市士林區義信里承德路4段177號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529153313_IMAG2644.jpg',
    LatLng: '25.0865171352647,121.523825526237',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5111,
    Name: '銘傳大學體育館',
    OperationTel: '02-28824564#2325',
    Address: '臺北市士林區中山北路五段250號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '籃球場,排球場(館),田徑場,排球場(館),網球場(館),桌球場(館),羽球場(館),籃球場,健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609104547_逸仙堂.jpg',
    LatLng: '25.0855988970648,121.533508300781',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2981,
    Name: '大同國小綜合球場',
    OperationTel: '05-2222114#123',
    Address: '嘉義市成功街15號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '躲避球場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606152309_DSCF2473.JPG',
    LatLng: '23.4709029749842,120.445722341537',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5421,
    Name: '銘傳大學室外籃球場',
    OperationTel: '02-28824564#2325',
    Address: '臺北市士林區中山北路五段250號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610103319_室外籃球場地設~1.JPG',
    LatLng: '25.0870078311609,121.527628898621',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5431,
    Name: '大埤國小籃球場',
    OperationTel: '05-6341132',
    Address: '雲林縣大埤鄉南和村中正路23號',
    Rate: 9.4,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610105245_mobileac1e37cf-aab6-4fba-b40b-76fc31183fbc.jpg',
    LatLng: '23.6430634794442,120.431001037359',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5430,
    Name: '銘傳大學田徑場',
    OperationTel: '02-28824564#2325',
    Address: '臺北市士林區中山北路五段250號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,足球場,排球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610105204_操場1.JPG',
    LatLng: '25.0870175478915,121.527650356293',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5464,
    Name: '潮州高中排球場(館)',
    OperationTel: '08-7882017#304',
    Address: '屏東縣潮洲鎮中山路11號',
    Rate: 1.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610113226_DSC01358.JPG',
    LatLng: '22.5488546732504,120.546308398116',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5489,
    Name: '六合國小風雨教室',
    OperationTel: '05-6341123',
    Address: '雲林縣莿桐鄉六合村東興路63號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610121332_SDC11988-s.jpg',
    LatLng: '23.7684035036719,120.562827587128',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5492,
    Name: '平和國小綜合球場',
    OperationTel: '03-8661223#203',
    Address: '花蓮縣壽豐鄉平和路34號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610122415_ISCSBA9HIKCWTSD51MQR.JPG',
    LatLng: '23.8837187322493,121.519582271576',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5498,
    Name: '南崗國中活動中心',
    OperationTel: '049-2222460#252',
    Address: '南投縣南投市大庄路94號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '羽球場(館),桌球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610123037_活動中心-外部.JPG',
    LatLng: '23.8958995632323,120.684240628034',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5513,
    Name: '鹿野國中籃球場',
    OperationTel: '08-9551006',
    Address: '臺東縣鹿野鄉龍田村光榮路38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610132314_鹿野國中運動場館鳥瞰圖.jpg',
    LatLng: '22.90729449216,121.13492667675',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5518,
    Name: '中央大學附屬中壢高中田徑場',
    OperationTel: '03-4932181#34',
    Address: '桃園市中壢區三光路115號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,足球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610133420_DSC03028.JPG',
    LatLng: '24.9637841830203,121.210422277254',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5533,
    Name: '三江國小環形/直線慢跑道(非田徑場型)',
    OperationTel: '05-3732634#221',
    Address: '嘉義縣東石鄉三家村16號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,足球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610141300_DSC_0034_1.jpg',
    LatLng: '23.4712055902616,120.174344480038',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5564,
    Name: '中臺科技大學排球場',
    OperationTel: '(04)22391647',
    Address: '臺中市北屯區廍子路666號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140610144817_33.JPG',
    LatLng: '24.1734483267647,120.735398232937',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2967,
    Name: '褒忠國小室外綜合球場',
    OperationTel: '05-6341219#046',
    Address: '雲林縣褒忠鄉埔姜村中勝路72號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606150002_DSCN4781.JPG',
    LatLng: '23.7011479633999,120.310045480728',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2257,
    Name: '暨南國際大學體育館',
    OperationTel: '049-2910960#3752',
    Address: '南投縣埔里鎮大學路1號',
    Rate: 1.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場(館),排球場(館),桌球場(館),舞蹈教室,游泳池(館),健身房(含重量訓練室)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140603111527_02.jpg',
    LatLng: '23.9504691406201,120.927157402039',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5587,
    Name: '臺灣科技大學排球場(館)',
    OperationTel: '02-27333141#7168',
    Address: '臺北市大安區基隆路四段43號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610151524_DSC04701.JPG',
    LatLng: '25.0146356817825,121.543271541595',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6156,
    Name: '新興國小田徑場',
    OperationTel: '02-26203646#823',
    Address: '新北市淡水區新興街123號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612111717_操場01.jpg',
    LatLng: '25.1800441170064,121.439464688301',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6323,
    Name: '土城高中排球場(館)',
    OperationTel: '06-2577014#305',
    Address: '臺南市安南區安中路五段265號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612153351DSC03208.JPG',
    LatLng: '23.056401752161,120.150647163391',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6744,
    Name: '東華大學排球場(館)(壽豐校區)',
    OperationTel: '03-8906619',
    Address: '花蓮縣壽豐鄉志學村大學路二段1-30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613154504_IMG_2075.JPG',
    LatLng: '23.8997278502217,121.534667015076',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9363,
    Name: '萬丹國小排球場(館)',
    OperationTel: '08-7772014#13',
    Address: '屏東縣萬丹鄉寶厝村萬新路1497號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140619140252_1.jpg',
    LatLng: '22.5832125197703,120.487841174922',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6663,
    Name: '大崙國中排球場(館)',
    OperationTel: '03-4982840#310',
    Address: '桃園市中壢區月眉路一段50號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613142856_STB_2964.JPG',
    LatLng: '24.9923351745781,121.180052161217',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8026,
    Name: '旗山國中活動中心',
    OperationTel: '07-6612650#214',
    Address: '高雄市旗山區大德里中學路42號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618144244_IMG_1789.jpg',
    LatLng: '22.8811101808027,120.481642484665',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9324,
    Name: '新化高中籃球場',
    OperationTel: '06-5982065#4002',
    Address: '臺南市新化區忠孝街2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619130211_籃球場1.JPG',
    LatLng: '23.0404504728385,120.310493248544',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10106,
    Name: '飛沙國中綜合球場',
    OperationTel: '05-7723218',
    Address: '雲林縣四湖鄉飛沙村大同路81號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624111528_2YPEJ.jpg',
    LatLng: '23.6425683791853,120.173730254173',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10142,
    Name: '山內國小綜合球場',
    OperationTel: '05-7882152',
    Address: '雲林縣元長鄉山內村南山路3號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624152056_P1400880.JPG',
    LatLng: '23.6781025302964,120.311799645424',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11862,
    Name: '太平國小綜合球場',
    OperationTel: '03-8841359',
    Address: '花蓮縣卓溪鄉太平村1鄰2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140703141550_籃球場1.jpg',
    LatLng: '23.4054061311395,121.320060789585',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12926,
    Name: '鹿港國小田徑場',
    OperationTel: '04-7772038#131',
    Address: '彰化縣鹿港鎮菜園里三民路192號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707141724_26K4UXCC644SQ2C5HHPD.JPG',
    LatLng: '24.0525286558822,120.43316423893',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12937,
    Name: '鹿港國小活動中心',
    OperationTel: '04-7772038',
    Address: '彰化縣鹿港鎮菜園里三民路192號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707142525_DSC01818.JPG',
    LatLng: '24.0528519655368,120.43354511261',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12971,
    Name: '明台高中田徑場',
    OperationTel: '04-23393071#313',
    Address: '臺中市霧峰區萊園路91號',
    Rate: 8.6,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707145830_IMG_1352.jpg',
    LatLng: '24.0603828497773,120.704239010811',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12951,
    Name: '文開國小活動中心',
    OperationTel: '04-7772042#713',
    Address: '彰化縣鹿港鎮新宮里文開路60號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707143459_clip_image0021.jpg',
    LatLng: '24.0566042574125,120.42894244194',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10215,
    Name: '東勢國小綜合球場',
    OperationTel: '05-6991036',
    Address: '雲林縣東勢鄉東南村東榮路29巷9號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140625121753_5.jpg',
    LatLng: '23.6739021976613,120.256334245205',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12841,
    Name: '籃球場館',
    OperationTel: '04-8791557#30',
    Address: '彰化縣二水鄉源泉村月眉巷13號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140707102431_04.JPG',
    LatLng: '23.804041002874,120.644554495811',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13162,
    Name: '員林國小籃球場',
    OperationTel: '04-8320145#772',
    Address: '彰化縣員林市三和里三民東街221號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708103030_B02.jpg',
    LatLng: '23.9605238255917,120.578030347824',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13201,
    Name: '清華大學室外排球場',
    OperationTel: '03-5715131#34677',
    Address: '新竹市東區光復路二段101號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708112348_室外排球場22.jpg',
    LatLng: '24.796462690237,120.996718963961',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13071,
    Name: '嶺東科技大學環形/直線慢跑道(非田徑場型)',
    OperationTel: '04-23892088',
    Address: '臺中市南屯區嶺東路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '環形/直線慢跑道(非田徑場型),春安校區排球場,春安校區籃球場,寶文校區籃球場,寶文校區排球場,寶文校區網球場,春安校區網球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708095209_C:\\Users\\LTU\\Desktop\\DSCN1184_調整大小.JPG',
    LatLng: '24.1378981695284,120.608827471733',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13281,
    Name: '潭墘國小排球場(館)',
    OperationTel: '04-8941009',
    Address: '彰化縣大城鄉潭墘村潭城路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708142126_拍球場3.JPG',
    LatLng: '23.8356451485343,120.34818649292',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13293,
    Name: '香田國小籃球場',
    OperationTel: '04-8960654',
    Address: '彰化縣二林鎮香田里儒林路10之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708142928_P_20140707_104438.jpg',
    LatLng: '23.874398786868,120.377154350281',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15245,
    Name: '五常國小體育館',
    OperationTel: '02-25023416#825',
    Address: '臺北市中山區下埤里五常街16號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140729102443_P3170022.JPG',
    LatLng: '25.0639830868263,121.54154419899',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 15253,
    Name: '至善國中籃球場',
    OperationTel: '02-28411350#40',
    Address: '臺北市士林區臨溪里至善路2段360號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140729105830_P1310665.JPG',
    LatLng: '25.1038166210572,121.556903868914',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12694,
    Name: '排球場館',
    OperationTel: '02-28411487#154',
    Address: '臺北市士林區翠山里至善路2段321號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140704105111_OSQNY.jpg',
    LatLng: '25.1028110734373,121.552922129631',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: '本校為住宿型學校，不對外開放。',
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 14565,
    Name: '金門大學體育館',
    OperationTel: '082-313802',
    Address: '金門縣金寧鄉大學路1號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場(館),排球場(館),舞蹈教室,桌球場(館),健身房(含重量訓練室),壁球場,壁球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718135721_IMG_3751.JPG',
    LatLng: '24.4472880839853,118.322153091431',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14802,
    Name: '大園國小籃球場',
    OperationTel: '04-8853760',
    Address: '彰化縣埔鹽鄉豐澤村埔打路45之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722102650_CIMG3791.JPG',
    LatLng: '23.9795629511092,120.488073080778',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14879,
    Name: '大元國小新元館',
    OperationTel: '04-24834568',
    Address: '臺中市大里區內元路220號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722145302_outlook.jpg',
    LatLng: '24.0991160331594,120.690457820892',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14904,
    Name: '大元國小操場',
    OperationTel: '04-24834568',
    Address: '臺中市大里區現岱路60號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,躲避球場,排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722161044_S4502.jpg',
    LatLng: '24.0999680836023,120.690897703171',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14928,
    Name: '亞洲餐旅籃球場',
    OperationTel: '06-2640175#304',
    Address: '臺南市南區大成路一段5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722170229_DSC_3127.JPG',
    LatLng: '22.9746383367375,120.202370882034',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 16811,
    Name: '排球場',
    OperationTel: '02-28927154#2501',
    Address: '臺北市北投區學園路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20141022120149_排球場.jpg',
    LatLng: '25.1351756694424,121.469312310219',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2691,
    Name: '高雄高工排球場(館)',
    OperationTel: '07-3815366#2252',
    Address: '高雄市三民區建工路419號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605115851_Y405F.jpg',
    LatLng: '22.648772001156,120.325669422727',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8015,
    Name: '泰源國中風雨集合場',
    OperationTel: '089-891252#207',
    Address: '臺東縣東河鄉北源村三鄰30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618142647IMG_1471.jpg',
    LatLng: '23.0020039208127,121.289513795114',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6250,
    Name: '新泰國中羽球場',
    OperationTel: '02-29960745#502',
    Address: '新北市新莊區新泰路359號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,風雨操場,棒、壘球打擊練習場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612141137_LRQD1.jpg',
    LatLng: '25.0425214164409,121.444174647331',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13184,
    Name: '籃球場館',
    OperationTel: '05-6322121#1351',
    Address: '雲林縣虎尾鎮光復路222號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '體育館,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708104930_P_20140708_102435.jpg',
    LatLng: '23.7110420719871,120.441703721317',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24028,
    Name: '排球場館',
    OperationTel: '05-7882012',
    Address: '雲林縣元長鄉元南路16號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180508093227_9FKVRXGYSFK5EZ5O4KH8.jpg',
    LatLng: '23.6450991449453,120.316922664642',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23545,
    Name: '溜冰場',
    OperationTel: '06-2223014#19',
    Address: '臺南市北區西門路三段223號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170928111641_O3ZQ08BFRTQ934VJVWRC.JPG',
    LatLng: '23.0054264007689,120.205369591713',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23003,
    Name: '排球場',
    OperationTel: '08-7772020',
    Address: '屏東縣萬丹鄉四維村萬丹路2段5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170706113745_F831J8V6AG6VTBYKLZD7.JPG',
    LatLng: '22.5968908100401,120.488451942801',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '本校設有租借辦法可供校外人士租用',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24076,
    Name: '學甲國中風雨操場',
    OperationTel: '06-7832128',
    Address: '臺南市學甲區華宗路540號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180514084746_OZJOVAMHUR7T26Z7NRNK.jpg',
    LatLng: '23.236819693774,120.185140413128',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '本校風雨操場僅供師生使用不開放民眾使用',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11733,
    Name: '豐濱國中體育館',
    OperationTel: '03-8791159#102',
    Address: '花蓮縣豐濱鄉豐濱村光豐路26號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140702142749_1030627綜合體育館5 .jpg',
    LatLng: '23.6007569824306,121.52076780796',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22807,
    Name: '高雄市立英明國中排球場',
    OperationTel: '07-7150949#526',
    Address: '高雄市苓雅區英明路147號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170623164709_TEV38BC3Y0B5N2JQBQ2Q.JPG',
    LatLng: '22.6151290273176,120.323944687843',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23347,
    Name: '臺北市協和祐德高中籃球場、排球場',
    OperationTel: '02-27265775#124',
    Address: '臺北市信義區忠孝東路五段790巷27號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170905175711_F2GM6RJCFDOB7N8A00ZU.jpg',
    LatLng: '25.0419892310521,121.583523452282',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 27553,
    Name: '世興籃球、排球場',
    OperationTel: '03-5515919#433',
    Address: '新竹縣竹北市光明六路東二段與嘉祥六街',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場館,排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210331152656_S8C1U.jpg',
    LatLng: '24.81089300107,121.040167991979',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 2907,
    Name: '室外排球場',
    OperationTel: '03-8312233',
    Address: '花蓮市中山路418號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606114243_IMG_20140606_095536_1_調整大小.jpg',
    LatLng: '23.9867887451062,121.604179143906',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 31900,
    Name: '排球場館',
    OperationTel: '03-5258748#501',
    Address: '新竹市北區崧嶺路128巷38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20240604171711_FRG08.jpg',
    LatLng: '24.7904131328531,120.952834980382',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14547,
    Name: '大德國中田徑場(含籃球場2座、排球場1座)',
    OperationTel: '04-22916984',
    Address: '臺中市北屯區雷中街2之23號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718115835_IMG_3300[1].JPG',
    LatLng: '24.1804221035086,120.669429302216',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6272,
    Name: '排球場館',
    OperationTel: '049-2333221#116',
    Address: '南投縣草屯鎮中興路101號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館,羽球場館,桌球場館,柔道場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612143013_DSCN1382.JPG',
    LatLng: '23.97498923454,120.684621334076',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 2439,
    Name: '臺北商業大學排球場',
    OperationTel: '02-23226177',
    Address: '臺北市中正區濟南路一段321號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '臺北商業大學排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604111522_P7168480.JPG',
    LatLng: '25.0422541090001,121.52564406395',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 33168,
    Name: '光電風雨球場(籃排球場)',
    OperationTel: '07-6212033#320',
    Address: '高雄市岡山區公園路52號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場館,籃球場館,排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20250626163240_R2P02.jpg',
    LatLng: '22.7963020319959,120.289746630994',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 33130,
    Name: '泰山國中排球場',
    OperationTel: '02-22962519#135',
    Address: '新北市泰山區泰林路二段498號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20250613102505_ZUQRI.jpg',
    LatLng: '25.0653491080905,121.426358074543',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 30251,
    Name: '新莊高中排球場',
    OperationTel: '07-3420103#826',
    Address: '高雄市左營區文慈路99號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20220425120141_K86IDKRAS5T2L1ST5DY9.jpg',
    LatLng: '22.6809997999927,120.316563248634',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2962,
    Name: '忠孝國中活動中心',
    OperationTel: '03-5572555#13',
    Address: '新竹縣新豐鄉員山村孝六街1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606144612_DSC03561.JPG',
    LatLng: '24.8793752908507,120.999652147293',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 3027,
    Name: '竹北高中排球場(館)',
    OperationTel: '03-5517330#232',
    Address: '新竹縣竹北市中央路3號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606165222_戶外排球場兩面.jpg',
    LatLng: '24.8347650747105,121.002817153931',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5057,
    Name: '慈濟大學附中網球場(主要設施)、排球場(次要設施)',
    OperationTel: '03-8572823#126',
    Address: '花蓮縣花蓮市介仁街176號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場(館),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609085900_IMG_8183.JPG',
    LatLng: '23.9997006890091,121.574996709824',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5065,
    Name: '屏東高工排球場(館)',
    OperationTel: '08-7523781#243',
    Address: '屏東縣屏東市建國路25號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609091214_Z3I2K.jpg',
    LatLng: '22.6607496297535,120.486025214195',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5058,
    Name: '彰師附工籃球場',
    OperationTel: '04-7252541#224',
    Address: '彰化縣彰化市和調里工校街1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609085921_P1050958.JPG',
    LatLng: '24.0811433041424,120.55604159832',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5055,
    Name: '竹圍國小田徑場',
    OperationTel: '03-3835079#330',
    Address: '桃園市大園區竹圍村二鄰竹圍街3號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609085759_DSC02752.JPG',
    LatLng: '25.1037801883168,121.244368851185',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '田徑場目前進行PU跑道更新工程，暫不對外開放。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2638,
    Name: '南寧高中排球場(館)',
    OperationTel: '06-2622458',
    Address: '臺南市南區萬年路167號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605094158_圖片1.jpg',
    LatLng: '22.9367319046668,120.186484158039',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5188,
    Name: '田徑場',
    OperationTel: '05-2259640#1340',
    Address: '嘉義市東區體育路7號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609130926_10387215_833448400017414_6405329244608261108_n.jpg',
    LatLng: '23.4714973796349,120.459019660884',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2643,
    Name: '南開科技大學田徑場',
    OperationTel: '049-2563489#1555',
    Address: '南投縣草屯鎮中正路568號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館),半場籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605094723_田11.jpg',
    LatLng: '23.9828511477266,120.696637630463',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5213,
    Name: '僑勇國小籃球場',
    OperationTel: '08-8892141#14',
    Address: '屏東縣恆春鎮城北里西門路146號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609135612_球場(1).jpg',
    LatLng: '22.0088899197632,120.744874477386',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5253,
    Name: '東方設計大學排球場(館)',
    OperationTel: '07-6939525#12',
    Address: '高雄市湖內區東方路110號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609144822_DSC00899.JPG',
    LatLng: '22.8816909011656,120.24414896965',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5237,
    Name: '電光國小田徑場',
    OperationTel: '08-9951142#03',
    Address: '臺東縣關山鎮電光里中興93號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609143110_DSC_0242.jpg',
    LatLng: '23.0061831125582,121.173103228211',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2487,
    Name: '臺南海事籃球場',
    OperationTel: '06-3910772#331',
    Address: '臺南市安平區世平路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604133241_77DSC01255.jpg',
    LatLng: '22.9934631238433,120.150572061539',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2778,
    Name: '竹中國小綜合球場',
    OperationTel: '03-5823822#805',
    Address: '新竹縣竹東鎮頭重里竹中路104巷14號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605154101_DSC00552.JPG',
    LatLng: '24.779842991158,121.03048145771',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5268,
    Name: '臺北醫學大學排球場(館)',
    OperationTel: '(02)27361661',
    Address: '臺北市信義區吳興街250號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609150333_排球場.jpg',
    LatLng: '25.0260153044816,121.561354994774',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2293,
    Name: '竹中國小竹中樓',
    OperationTel: '03-5823822#805',
    Address: '新竹縣竹東鎮頭重里竹中路104巷14號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603141430_DSC00547.JPG',
    LatLng: '24.7802375001543,121.030170321465',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5232,
    Name: '清華大學(南大校區)體育館',
    OperationTel: '03-5213132#1602',
    Address: '新竹市東區南大路521號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館),籃球場,舞蹈教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609142552_體育館1.JPG',
    LatLng: '24.7944306610748,120.965223312378',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5283,
    Name: '興中國小田徑場',
    OperationTel: '05-2214725#75',
    Address: '嘉義縣民雄鄉興中村30號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場,躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609153319_P1210264.JPG',
    LatLng: '23.5275168435746,120.420123338699',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: 'http://www.sces.cyc.edu.tw',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5303,
    Name: '清華大學(南大校區)體育健康教學大樓籃球場',
    OperationTel: '03-5213132#1602',
    Address: '新竹市東區南大路521號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609155906_體健1.JPG',
    LatLng: '24.7944157592898,120.965204000604',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5362,
    Name: '興中國小籃球場',
    OperationTel: '05-2214725',
    Address: '嘉義縣民雄鄉興中村30號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610081221_P1210271.JPG',
    LatLng: '23.5275168435746,120.420112609863',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: 'http://www.sces.cyc.edu.tw',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5363,
    Name: '興中國小排球場',
    OperationTel: '05-2214725',
    Address: '嘉義縣民雄鄉興中村30號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場,綜合球場-籃球場、排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610082249_P1210267.JPG',
    LatLng: '23.5275168435746,120.420123338699',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: 'http://www.sces.cyc.edu.tw',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5858,
    Name: '暨大附中室外排球場',
    OperationTel: '049-2913483#317',
    Address: '南投縣埔里鎮鐵山路1-6號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611135916_DSC07036.JPG',
    LatLng: '23.9732454049035,120.94476534985',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5955,
    Name: '中興大學排球場(館)',
    OperationTel: '04-22840230#208',
    Address: '臺中市南區興大路145號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611163018_NFOZ8SHG2KQI05J79TW9.jpg',
    LatLng: '24.1178843140824,120.674723982811',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5883,
    Name: '銘傳大學體育二館',
    OperationTel: '03-3507001#3523',
    Address: '桃園市龜山區大同村德明路5號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),手球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611144641_IMG_2102.JPG',
    LatLng: '24.9880329278217,121.34169280529',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5969,
    Name: '銘傳大學室外籃球場',
    OperationTel: '03-3507001#3523',
    Address: '桃園市龜山區大同村德明路5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140611164947_10.jpg',
    LatLng: '24.9836995082188,121.342923939228',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6842,
    Name: '弘光科技大學體育館(排球場)',
    OperationTel: '04-26318652#7009',
    Address: '臺中市沙鹿區臺灣大道六段1018號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140614132806_排球場.JPG',
    LatLng: '24.2175308639452,120.580970048904',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6871,
    Name: '草屯商工排球場(館)',
    OperationTel: '049-2362082',
    Address: '南投縣草屯鎮墩煌路3段188號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140615135151_IMG_20140613_114909.jpg',
    LatLng: '23.9967112571047,120.665363073349',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6886,
    Name: '石碇高中田徑場',
    OperationTel: '02-26631224#203',
    Address: '新北市石碇區隆盛里八分寮45號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616083819_P6160015.JPG',
    LatLng: '25.0132259156661,121.6428565979',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6903,
    Name: '真理大學體育館',
    OperationTel: '06-5703100#7761',
    Address: '臺南市麻豆區北勢里北勢寮70-11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '有氧中心,體適能中心,排球場(館),籃球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616091617_張利聰-體育館之夜.JPG',
    LatLng: '23.2181576020982,120.226714611053',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6932,
    Name: '東吳大學體育館',
    OperationTel: '(02)28819471#5606',
    Address: '臺北市士林區臨溪路70號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616095059_雙溪體育館-2.jpg',
    LatLng: '25.0941567071309,121.546365469694',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7000,
    Name: '東吳大學排球場(館)',
    OperationTel: '(02)28819471#5606',
    Address: '臺北市士林區臨溪路70號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616105753_雙溪排球場-2.jpg',
    LatLng: '25.0954368049466,121.545277833939',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6887,
    Name: '三芝國中活動中心',
    OperationTel: '0933490310',
    Address: '新北市三芝區淡金路一段38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616085423_IMGP0370.jpg',
    LatLng: '25.2593483713173,121.501809954643',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7005,
    Name: '成州國民小學風雨操場',
    OperationTel: '02-22933613',
    Address: '新北市五股區成泰路三段493號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616110551_DSC08502.JPG',
    LatLng: '25.0995539167765,121.45024985075',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7067,
    Name: '北門高中排球場(館)',
    OperationTel: '06-7222150',
    Address: '臺南市佳里區六安里269號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616124046_DSC03392.JPG',
    LatLng: '23.167545389978,120.177605509725',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7079,
    Name: '臺東高商中興堂',
    OperationTel: '089-350575#2302',
    Address: '臺東縣臺東市長安街，傳廣路交叉口',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616131258_中興堂1.jpg',
    LatLng: '22.7593933310436,121.144362688065',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 6961,
    Name: '三芝國中籃球場',
    OperationTel: '0933490310',
    Address: '新北市三芝區淡金路一段38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '風雨操場,風雨操場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616101617_IMAG2193.jpg',
    LatLng: '25.2591252020171,121.501761674881',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7094,
    Name: '臺東高商田徑場',
    OperationTel: '089-350575#2209',
    Address: '臺東縣臺東市正氣路440號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場(跑道部分),籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616134029_室外排球場1.jpg',
    LatLng: '22.759066846384,121.144995689392',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7003,
    Name: '中山高中膜構球場',
    OperationTel: '07-3641116#131',
    Address: '高雄市楠梓區藍昌路416號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616110415_膜構球場內觀.JPG',
    LatLng: '22.7285370838752,120.294134616852',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7127,
    Name: '健行科技大學操場',
    OperationTel: '03-4581196#3531',
    Address: '桃園市中壢區健行路229號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場,籃球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616141342_8GJDEZ4K54C1VCSLHBPU.JPG',
    LatLng: '24.9475615144058,121.229828596115',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7133,
    Name: '臺灣觀光學院排球場',
    OperationTel: '(038)653906#835',
    Address: '花蓮縣壽豐鄉豐山村中興街268號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616141912_DSC08284.JPG',
    LatLng: '23.8592499915073,121.488125324249',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7142,
    Name: '豐裡國小綜合運動場',
    OperationTel: '03-8652183',
    Address: '花蓮縣壽豐鄉豐裡村中山路299號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616142519_DSC00506.JPG',
    LatLng: '23.8437640062069,121.507933512312',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7181,
    Name: '蘇澳海事籃球場',
    OperationTel: '03-9951661#324',
    Address: '宜蘭縣蘇澳鎮蘇港路213號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616150242_H1640010-1.jpg',
    LatLng: '24.5943221691511,121.843449622393',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7213,
    Name: '南華大學排球場(館)',
    OperationTel: '05-2721001#2992',
    Address: '嘉義縣大林鎮南華路一段55號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616153251_10485306_814966178521484_516303687_o.jpg',
    LatLng: '23.5688254673803,120.493835806847',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7218,
    Name: '東吳大學體育館',
    OperationTel: '(02)28819471#5606',
    Address: '臺北市中正區貴陽街一段56號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616153647_城中體育館-1.jpg',
    LatLng: '25.0378750441552,121.510017514229',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7109,
    Name: '協同高中排球場(館)',
    OperationTel: '05-2213045#235',
    Address: '嘉義縣民雄鄉建國路二段31號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616135654_DSC00018.JPG',
    LatLng: '23.5321498585638,120.433870518063',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7234,
    Name: '江翠國中排球場(館)',
    OperationTel: '02-22518007#260',
    Address: '新北市板橋區松江街63號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616154655_DSCF6530.JPG',
    LatLng: '25.0286157963414,121.467692255974',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7229,
    Name: '嘉南藥理大學戶外排球場',
    OperationTel: '06-2664911#1219',
    Address: '臺南市仁德區二仁路一段60號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616154405_排球場1.JPG',
    LatLng: '22.9245885272579,120.229303780944',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7241,
    Name: '華南高商室外排球場',
    OperationTel: '05-2787140#137',
    Address: '嘉義市東區光彩街69號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616155346_IMG_6751.jpg',
    LatLng: '23.477934295386,120.459294319153',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2356,
    Name: '義峰高級中學活動中心',
    OperationTel: '05-5800099#533',
    Address: '雲林縣林內鄉烏麻村長源201號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館),棒球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603162633_IMG_3247.JPG',
    LatLng: '23.7594042270995,120.5952501297',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2512,
    Name: '鶯歌工商排球場(館)',
    OperationTel: '02-26775040#823',
    Address: '新北市鶯歌區中正三路154號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604144024_V1MC2.jpg',
    LatLng: '24.9399395681374,121.335319876671',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7249,
    Name: '馬光國中排球場(館)',
    OperationTel: '05-6653587#047',
    Address: '雲林縣土庫鎮馬光里和平街101號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616160311_DSC01048.JPG',
    LatLng: '23.6927715855631,120.356104373932',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration:
      '因去年2016年9月28日梅姬颱風遮光設施倒塌損毀,尚未修復,尚未開放.',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6247,
    Name: '清水高中綜合體育館',
    OperationTel: '02-22707801',
    Address: '新北市土城區明德路一段72號',
    Rate: 4.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612140224_DSC05863.JPG',
    LatLng: '24.9825181682373,121.465165615082',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6579,
    Name: '清水高中田徑場',
    OperationTel: '02-22707801#330',
    Address: '新北市土城區明德路一段72號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '足球場,田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613113609_足球場.jpg',
    LatLng: '24.9827765612442,121.465397710341',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7105,
    Name: '臺中一中田徑場',
    OperationTel: '04-22226081#305',
    Address: '臺中市北區育才街2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),網球場(館),足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616135308_DSC_0337.jpg',
    LatLng: '24.1510464683555,120.686863660812',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7354,
    Name: '宜梧國中綜合球場',
    OperationTel: '05-7907254#13',
    Address: '雲林縣口湖鄉梧南村光明路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617005512_10471386_863791096983915_883301798_o.jpg',
    LatLng: '23.5462794523265,120.195311307907',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2440,
    Name: '經國管理暨健康學院綜合運動場',
    OperationTel: '02-24372093#331',
    Address: '基隆市中山區復興路336號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604111602_C360_2014-06-04-11-07-12-821.jpg',
    LatLng: '25.1500483023134,121.727818250656',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7411,
    Name: '大成國小活動中心',
    OperationTel: '03-3661155#313',
    Address: '桃園市八德區廣福路31號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617093345_IMG_1379.JPG',
    LatLng: '24.9576585292522,121.297999620438',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6711,
    Name: '大灣國中籃球場',
    OperationTel: '07-3711715',
    Address: '高雄市仁武區大灣里仁雄路99號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場,網球場(館),籃球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613151631_DSC_2983.JPG',
    LatLng: '22.6756987121295,120.343337059021',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6751,
    Name: '東華大學排球場(館)(美崙校區)',
    OperationTel: '(03)8632619',
    Address: '花蓮市華西路123號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613155146_室外排球場image001.jpg',
    LatLng: '24.0092664044213,121.618137359619',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7136,
    Name: '苑裡國民小學學生活動中心',
    OperationTel: '03-7861013#25',
    Address: '苗栗縣苑裡鎮中山路307號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '桌球場(館),排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616142113_DSC03658.JPG',
    LatLng: '24.4480446438837,120.654612779617',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7523,
    Name: '明志國中排球場(館)',
    OperationTel: '02-29844132#318',
    Address: '新北市三重區中正北路107號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617114612_室外排球場全景.jpg',
    LatLng: '25.0641908208316,121.488715410233',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7513,
    Name: '西螺農工活動中心',
    OperationTel: '05-5862024#331',
    Address: '雲林縣西螺鎮大同路4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617113347_2014西螺農工綜合活動中心外觀.jpg',
    LatLng: '23.7948380391723,120.468338727951',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 7540,
    Name: '褒忠國中活動中心',
    OperationTel: '05-6972056#2046',
    Address: '雲林縣褒忠鄉中勝路62號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場(館)風雨球場,排球場(館)風雨球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617123701_20140623_IMG_0951.JPG',
    LatLng: '23.6994029801753,120.311365127563',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2331,
    Name: '豐原高商活動中心',
    OperationTel: '04-25283556',
    Address: '臺中市豐原區圓環南路50號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603155109_IMG_2362.JPG',
    LatLng: '24.2454825152603,120.713637471199',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7569,
    Name: '景文科技大學排球場(館)',
    OperationTel: '02-82122000#2213',
    Address: '新北市新店區安忠路99號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617135418_排球場地照片 052.jpg',
    LatLng: '24.9513163777003,121.509776115417',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2891,
    Name: '莿桐國中排球場',
    OperationTel: '05-5842014#107',
    Address: '雲林縣莿桐鄉農校路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606105949_0OZWD.jpg',
    LatLng: '23.7508020456,120.507718920708',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6985,
    Name: '中山高中排球場(館)',
    OperationTel: '07-3641116#131',
    Address: '高雄市楠梓區藍昌路416號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616104020_排球場1.jpg',
    LatLng: '22.7286583061041,120.292294621468',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7596,
    Name: '嘉興國中籃球場兼排球場',
    OperationTel: '07-6221039#35',
    Address: '高雄市岡山區嘉興里信中街486號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617142609_DSCF3164.JPG',
    LatLng: '22.8157249713836,120.311660170556',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7560,
    Name: '新城國中排球場(館)',
    OperationTel: '03-8263911#243',
    Address: '花蓮縣新城鄉北埔村北埔路143號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617134105_DSCN6313.jpg',
    LatLng: '24.030441250226,121.604967713356',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7383,
    Name: '吳鳳科技大學旭光中心(體育館)',
    OperationTel: '05-2267125#21642',
    Address: '62153嘉義縣民雄鄉建國路二段117號',
    Rate: 3.7,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場,排球場,柔道教室,桌球教室,韻律教室,攀岩場,健身中心,足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617090652_旭光中心(體育館 ).jpg',
    LatLng: '23.5346931320217,120.431957244873',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9242,
    Name: '新和國小田徑場',
    OperationTel: '02-29400170#823',
    Address: '新北市新店區安和路三段100號',
    Rate: 5.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場,躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619102620_田徑場.jpg',
    LatLng: '24.9852216914828,121.518005132675',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9263,
    Name: '萬巒國中排球場(館)',
    OperationTel: '08-7812537#14',
    Address: '屏東縣萬巒鄉萬和村褒忠路5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619105323_UMJQT.jpg',
    LatLng: '22.5703027009427,120.574988722801',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5878,
    Name: '育成高中活動中心',
    OperationTel: '02-26530475#541',
    Address: '臺北市南港區重陽路366號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館),游泳池(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611143603_4JFQ4Q9UICKQQIFDRSTO.jpg',
    LatLng: '25.058043688998,121.60923242569',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7826,
    Name: '中山大學體育館',
    OperationTel: '07-5252000#2801',
    Address: '高雄市鼓山區蓮海路70號',
    Rate: 5.5,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場(館),排球場(館),韻律教室,桌球場(館),健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618092210_20140619_170126.jpg',
    LatLng: '22.6246374156109,120.266341567039',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9233,
    Name: '中山大學田徑場',
    OperationTel: '07-5252000#2801',
    Address: '高雄市鼓山區蓮海路70號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場,室內射箭場,田徑場,足球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619101706_DSC09691.JPG',
    LatLng: '22.6228845385272,120.264844894409',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9973,
    Name: '靜宜大學室外排球場',
    OperationTel: '04-26328001#16320',
    Address: '臺中市沙鹿區臺灣大道7段200號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623133550_室外排球場.JPG',
    LatLng: '24.2264419140717,120.577888190746',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10006,
    Name: '麥寮高中活動中心',
    OperationTel: '05-6932050#043',
    Address: '雲林縣麥寮鄉中興路310號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623151141_IMG_2086.JPG',
    LatLng: '23.7577643573561,120.251916646957',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9974,
    Name: '北港高中排球場(館)',
    OperationTel: '05-7821411#307',
    Address: '雲林縣北港鎮成功路26號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623134008_S8V55.JPG',
    LatLng: '23.5786491071846,120.304530858994',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10057,
    Name: '交通大學西區排球場',
    OperationTel: '03-5712121#51003',
    Address: '新竹市東區大學路1001號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '西區排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623215440_西區排球場全景.JPG',
    LatLng: '24.7879228696616,120.994620323181',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11478,
    Name: '西螺國中籃球場',
    OperationTel: '05-5863522',
    Address: '雲林縣西螺鎮興農西路217號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140630104248_籃球1.JPG',
    LatLng: '23.7932329755429,120.460082888603',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10269,
    Name: '大倫國中光電球場(籃球.排球場)',
    OperationTel: '037-266311#15',
    Address: '苗栗縣苗栗市玉清里育英街82號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625173920_PAE1M.jpg',
    LatLng: '24.569830695488,120.830962657928',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11779,
    Name: '玉里國中排球場(館)',
    OperationTel: '03-8882054#13',
    Address: '花蓮縣玉里鎮民族街30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140702161539_IMG_0634.jpg',
    LatLng: '23.3356359807682,121.311501860619',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13469,
    Name: '新竹高商排球場',
    OperationTel: '03-5722150',
    Address: '新竹市東區學府路128號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709104519_X3VBLCJRLB1JW0IWW19V.jpg',
    LatLng: '24.7957149002314,120.984116792679',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13384,
    Name: '安順國中田徑場',
    OperationTel: '06-3559652#134',
    Address: '臺南市安南區安和路三段227號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709085731_L77E0.jpg',
    LatLng: '23.0494715602212,120.218067169189',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13499,
    Name: '民生國小活動中心',
    OperationTel: '04-7224122#14',
    Address: '彰化縣彰化市民生路338號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709112758_P1220668.JPG',
    LatLng: '24.0847527438135,120.542306005955',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13291,
    Name: '原斗國小躲避球場',
    OperationTel: '04-8902322#103',
    Address: '彰化縣二林鎮原斗里斗苑路一段865號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '躲避球場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708142827_DSCN6228.JPG',
    LatLng: '23.8959023220674,120.426995158196',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13493,
    Name: '羅東高工排球場(館)',
    OperationTel: '03-9514196#306',
    Address: '宜蘭縣冬山鄉廣興路117號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709111258_排球場1.JPG',
    LatLng: '24.669812256469,121.751722097397',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13525,
    Name: '田徑場',
    OperationTel: '06-2015247#8023',
    Address: '臺南市永康區中山路43號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709132539_P1000641.JPG',
    LatLng: '23.0273103695569,120.254427705368',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13531,
    Name: '新營高中排球場(館)',
    OperationTel: '06-6562274#204',
    Address: '臺南市新營區民權路101號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709140628_IMG_20140709_133741.jpg',
    LatLng: '23.3081433831314,120.31112909317',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7922,
    Name: '輔仁大學中美堂',
    OperationTel: '02-29056436',
    Address: '新北市新莊區中正路510號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618113628_中美堂外.jpg',
    LatLng: '25.0379406583782,121.432029604912',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13562,
    Name: '成功國中排球場(館)',
    OperationTel: '06-2517906#130',
    Address: '臺南市北區和緯路1段2號',
    Rate: 3.3,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709154922_DSC05965.JPG',
    LatLng: '23.009300029104,120.216640233994',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13486,
    Name: '民生國小籃球場',
    OperationTel: '04-7224122#13',
    Address: '彰化縣彰化市民生路338號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709110306_8ECXU.jpeg',
    LatLng: '24.0840230281146,120.542335510254',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13577,
    Name: '高師大附中籃球場',
    OperationTel: '07-7613875#526',
    Address: '高雄市苓雅區凱旋二路89號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709163915_93G5E.jpg',
    LatLng: '22.7503485516511,120.498046875',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6845,
    Name: '樹德科技大學北校區-綜合運動場',
    OperationTel: '07-6158000#2855',
    Address: '高雄市燕巢區橫山路59號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList:
      '籃球場,排球場(館),棒、壘球打擊練習場,壘球場,網球場(館),沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140614134405_圖片8.gif',
    LatLng: '22.7643180431591,120.372465848923',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6843,
    Name: '樹德科技大學南校區-上操運動場',
    OperationTel: '(07)6158000*2855',
    Address: '高雄市燕巢區橫山路59號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140614133020_12.gif',
    LatLng: '22.7601996458739,120.376671552658',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13615,
    Name: '臺東高中排球場(館)',
    OperationTel: '089-322070#6412',
    Address: '臺東縣臺東市中華路一段721號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710095855_DSC_0003.JPG',
    LatLng: '22.7462541806875,121.14639043808',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13478,
    Name: '花蓮高農田徑場',
    OperationTel: '03-8312358',
    Address: '花蓮縣花蓮市建國路161號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,足球場,排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709105016_IMAG0177.jpg',
    LatLng: '23.9827335166515,121.598525047302',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15086,
    Name: '清泉國中排球場',
    OperationTel: '04-26113134#725',
    Address: '臺中市清水區菁埔里臨海路27之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724175358_排球場2面.jpg',
    LatLng: '24.3057821689993,120.592567920685',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: '學生上課時間不對外開放',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15209,
    Name: '景美國小籃球場',
    OperationTel: '02-29322151#123',
    Address: '臺北市文山區景行里景文街108號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140728152613_K9DHC.jpg',
    LatLng: '24.9893179102734,121.540456227979',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15218,
    Name: '信義國中田徑場',
    OperationTel: '02-27236771',
    Address: '臺北市信義區松仁路158巷1號',
    Rate: 10.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140728155005_SANY0272.JPG',
    LatLng: '25.0296122318898,121.567888855934',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14886,
    Name: '民權國中排球場(館)',
    OperationTel: '02-25931951#123',
    Address: '臺北市大同區重慶北路三段1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),環形/直線慢跑道(非田徑場型)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140722150932_I0JH2.jpg',
    LatLng: '25.06376320425,121.51420712471',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20584,
    Name: '義竹國小綜合球場',
    OperationTel: '05-3412203',
    Address: '嘉義縣義竹鄉六桂村208號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20160509114824_1.jpg',
    LatLng: '23.3364634806105,120.246176719666',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5741,
    Name: '大林國小風雨球場',
    OperationTel: '05-2652061',
    Address: '嘉義縣大林鎮西林里中正路423號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611095504_P1030138.JPG',
    LatLng: '23.6021604142294,120.452075153589',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9958,
    Name: '羅娜國小操場',
    OperationTel: '049-2831327',
    Address: '南投縣信義鄉羅娜村信筆巷一鄰73號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '環形/直線慢跑道(非田徑場型),排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623122604_DSC01612.JPG',
    LatLng: '23.6278742287391,120.870659351349',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 14382,
    Name: '排球場館',
    OperationTel: '02-26812625#833',
    Address: '新北市樹林區潭底里千歲街59號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140716195840_活動中心.jpg',
    LatLng: '24.9977247131835,121.425593644381',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14498,
    Name: '羽球場館',
    OperationTel: '04-25262891#730',
    Address: '臺中市豐原區田心路二段290號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排(羽)球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717152940_弘文樓全景.jpg',
    LatLng: '24.2369470039175,120.72212934494',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7917,
    Name: '興華高中室外籃、排球場',
    OperationTel: '037-663403#313',
    Address: '苗栗縣頭份鎮中正一路401號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618112904_20111222307.jpg',
    LatLng: '24.6868159363407,120.93597650528',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 21963,
    Name: '日新國小綜合球場',
    OperationTel: '06-2912931#521',
    Address: '臺南市南區金華路一段473號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160707092922_E3DSK419TFOIRT3JFBIX.jpg',
    LatLng: '22.9723407882109,120.189958594092',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22726,
    Name: '天母國中田徑場',
    OperationTel: '02-28754864',
    Address: '臺北市士林區天和里天母東路120號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170619103731_1AGPNV0GQN4949ZYU4OK.jpg',
    LatLng: '25.116951130941,121.537848114967',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23026,
    Name: '新北高中排球場',
    OperationTel: '02-28577326#127',
    Address: '新北市三重區三信路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170710115916_PT7L2B4SFHBCI5HBJNN2.JPG',
    LatLng: '25.0881932665944,121.491687297821',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5138,
    Name: '建德國中籃球場',
    OperationTel: '02-24321234#35',
    Address: '基隆市安樂區安和一街29號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609111326_PFSI0.jpg',
    LatLng: '25.1278307211704,121.722072958946',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23004,
    Name: '光復校區籃球場',
    OperationTel: '06-2757575#81819',
    Address: '臺南市東區大學路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170706123342_05K4JST604ZSSIOKI787.jpg',
    LatLng: '22.9973041594356,120.215454697609',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23340,
    Name: '室外多功能球場',
    OperationTel: '05-2855331#250',
    Address: '嘉義市西區新民路601號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '棒、壘球室外打擊場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170905120506_OUFB0QYB7MX8EDQ1X8SM.jpg',
    LatLng: '23.4640731818555,120.438876271182',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23348,
    Name: '淡江大學五虎崗球場',
    OperationTel: '02-26230985',
    Address: '新北市淡水區英專路151號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場,網球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170906110829_XVFP07CO70DPOPJZA30Z.JPG',
    LatLng: '25.1756226013449,121.453970074654',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7161,
    Name: '排球場館',
    OperationTel: '04-25892164#12',
    Address: '苗栗縣卓蘭鎮豐田里36號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616144229_AGGHPM91SICQ8WP6UT8C.JPG',
    LatLng: '24.3248337845438,120.823152306584',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23980,
    Name: '壽山國中排球場',
    OperationTel: '07-5519150',
    Address: '高雄市鼓山區鼓山二路37巷108號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180425194752_WS0L90J7RKBIIU81F9HV.JPG',
    LatLng: '22.6332925374953,120.278475880623',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11491,
    Name: '鳳林國中活動中心',
    OperationTel: '07-8711130',
    Address: '高雄市小港區龍鳳路559號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館),足球場,游泳池(館),滾球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140630131814_IMG_1129.JPG',
    LatLng: '22.5216750051213,120.348529815674',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7343,
    Name: '中正高中排球場(館)',
    OperationTel: '02-28234811#330',
    Address: '臺北市北投區文林北路77號',
    Rate: 6.8,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616182820_CIMG9202.JPG',
    LatLng: '25.1039769249861,121.514944732189',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26027,
    Name: '板橋國中沙灘排球場',
    OperationTel: '02-29666498#650',
    Address: '新北市板橋區中正路437號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200422150833_96O50A94CSODY6O7Q6QN.JPG',
    LatLng: '25.0261454683338,121.45278981538',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26040,
    Name: '南榮國中排球場',
    OperationTel: '08-8631112#662',
    Address: '屏東縣崁頂鄉園寮村田寮路1之15號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200423122223_ZIO6PUTB8EIPB92DIVD2.jpg',
    LatLng: '22.5133746299222,120.518292188644',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 26457,
    Name: '排球場館',
    OperationTel: '049-2701317#25',
    Address: '南投縣信義鄉同富村同和巷7號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210312151527_S24A4UBE2V1QVIXG9CQZ.jpg',
    LatLng: '23.5951308152107,120.887399017811',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 3047,
    Name: '成功國中排球場(館)',
    OperationTel: '03-5505924#8304',
    Address: '新竹縣竹北市成功八路99號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606173729_4DSC04377.JPG',
    LatLng: '24.8187472275499,121.016464233398',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24032,
    Name: '室外排球場',
    OperationTel: '03-5961207#501',
    Address: '新竹縣竹東鎮公園路8號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180508115023_46CX31GCA84Z6JX215G3.jpg',
    LatLng: '24.7345313060771,121.08454394752',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 27523,
    Name: '正德國中賢孝校區排球場館',
    OperationTel: '02-28011146#14',
    Address: '新北市淡水區後洲子11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館,籃球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210326100821_FAQR0CLUXMOWSQCL8YGR.jpg',
    LatLng: '25.2255111567893,121.447201264112',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 5930,
    Name: '嘉義女中排球場(館)',
    OperationTel: '05-2254603#1361',
    Address: '嘉義市西區垂楊路243號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611155350_RV3OO3E63RX268MPELSW.jpg',
    LatLng: '23.4729299920442,120.450931191444',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 10268,
    Name: '綜合運動場',
    OperationTel: '049-2701503#16',
    Address: '南投縣信義鄉同富村同和巷4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '同富國小綜合運動場(含操場、籃球場、排球場)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625173537_AGR7S.jpg',
    LatLng: '23.5939252323605,120.888347407399',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 30290,
    Name: '臺南市平實排球場',
    OperationTel: '0925708711',
    Address: '臺南市東區平實路21號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20220504210403_3DDHS.jpg',
    LatLng: '22.9926493050278,120.238462686539',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22398,
    Name: '六甲區公園沙灘排球場(六甲區和平街479號旁)',
    OperationTel: '06-6989442',
    Address: '臺南市六甲區二甲里和平街479號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20161014142115_DSCF8495.JPG',
    LatLng: '23.2319730897107,120.343323647976',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName: '運動公園（名稱具有公園）'
  },
  {
    GymID: 30766,
    Name: '廣興公園排球場',
    OperationTel: '08-7516932',
    Address: '屏東市廣勝路58號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館,籃球場館,匹克球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20231127101317_CH4YI.jpg',
    LatLng: '3.54436736492359E-05,-0.000361715137842111',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName: '運動公園（名稱具有公園）'
  },
  {
    GymID: 1076,
    Name: '輔英科技大學體育館',
    OperationTel: '07-7811151#2281',
    Address: '高雄市大寮區進學路151號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList:
      '籃球場,撞球場,足球場,羽球場(館),桌球場(館),排球場(館),游泳池(館),田徑場,舞蹈教室,健身房(含重量訓練室),網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529152243_DSC08967.JPG',
    LatLng: '22.6038028,120.3889489',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1107,
    Name: '高雄師範大學體育館',
    OperationTel: '07-7172930#1553',
    Address: '高雄市苓雅區和平一路116號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList:
      '籃球場,排球場(館),羽球場(館),排球場(館),桌球場(館),健身房(含重量訓練室),舞蹈教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529173952_室內籃排球場.JPG',
    LatLng: '22.6252217030058,120.322201251984',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1119,
    Name: '峨眉國小籃球場',
    OperationTel: '03-5800674#17',
    Address: '新竹縣峨眉鄉峨眉街4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530091452_2YMOPH83YTY9A2TF6AUJ.jpg',
    LatLng: '24.6891262541253,121.020551919937',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1111,
    Name: '高雄師範大學籃球場',
    OperationTel: '07-7172930#1553',
    Address: '高雄市苓雅區和平一路116號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529185945_室外籃球場.JPG',
    LatLng: '22.6252811219238,120.322748422623',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1126,
    Name: '彰化高商活動中心',
    OperationTel: '04-7262965',
    Address: '彰化市華陽里南郭路一段326號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530103052_100_7515.JPG',
    LatLng: '24.0712890654288,120.554373264313',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1142,
    Name: '斗六高級中學體育館',
    OperationTel: '05-5322039',
    Address: '雲林縣斗六市民生路224號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),游泳池(館),桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530111707_圖片1.jpg',
    LatLng: '23.7125935415986,120.546165704727',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 1141,
    Name: '遠東科技大學體育館',
    OperationTel: '(06)5979566#7132',
    Address: '臺南市新市區中華路49號',
    Rate: 10.0,
    RateCount: 5,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場(館),排球場(館),健身房(含重量訓練室),桌球場(館),撞球場,舞蹈教室,環形/直線慢跑道(非田徑場型),柔道場/館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530110854_8-1體育館.jpg',
    LatLng: '23.0674131870684,120.297777056694',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1123,
    Name: '高美醫護管理專科學校籃球場',
    OperationTel: '07-6812148#227',
    Address: '高雄市美濃區成功路309號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530101842_DSC09734.jpg',
    LatLng: '22.8882115531407,120.550823789599',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1169,
    Name: '中山工商體育館',
    OperationTel: '(07)7815311',
    Address: '高雄市大寮區會社里正氣路79號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530140346_DSC_8812.JPG',
    LatLng: '22.599910174602,120.391882116495',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1158,
    Name: '政治大學環山運動園區',
    OperationTel: '02-29393091#62964',
    Address: '臺北市文山區指南路二段64號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '戶外籃排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530120036_4EJH7.jpg',
    LatLng: '24.9812101473456,121.577941775322',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1125,
    Name: '政治大學綜合球類練習區',
    OperationTel: '02-29393091#62964',
    Address: '臺北市文山區指南路二段64號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '半場籃球場,小型足球場,戶外排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530102849_A88PC.JPG',
    LatLng: '24.9845895780627,121.574111580849',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1194,
    Name: '遠東科技大學排球場(館)',
    OperationTel: '(06)5979566#7132',
    Address: '臺南市新市區中華路49號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530163812_IMG_1836.JPG',
    LatLng: '23.0672826922872,120.297860741484',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2213,
    Name: '臺東專科學校排球場',
    OperationTel: '08-9226389#2250',
    Address: '臺東縣臺東市正氣北路911號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603083829_排球場.jpg',
    LatLng: '22.7591707279513,121.121580004692',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1180,
    Name: '二重國中田徑場',
    OperationTel: '03-5823083#851',
    Address: '新竹縣竹東鎮二重里學府路132號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '跑道,排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530152225_DSC_3451.JPG',
    LatLng: '24.7642808028711,121.054519414902',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2215,
    Name: '麻園國小籃球場',
    OperationTel: '03-5563540#104',
    Address: '新竹縣竹北市麻園里長園一街236號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603084005_校園 (1).jpg',
    LatLng: '24.846716252022,120.977132320404',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2262,
    Name: '南投高商田徑場',
    OperationTel: '049-2222269#6131',
    Address: '南投縣南投市三興里彰南路一段993號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603112809_IMG_8050.JPG',
    LatLng: '23.9035532651929,120.684063434601',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2278,
    Name: '湖西國中體育館',
    OperationTel: '06-9921929#303',
    Address: '澎湖縣湖西鄉湖西村43之1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603130154_IMG_2944.JPG',
    LatLng: '23.5847159930265,119.653859138489',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2304,
    Name: '中國科技大學環形/直線慢跑道(非田徑場型)',
    OperationTel: '02-29313416#2149',
    Address: '臺北市文山區興隆路三段56號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '環形/直線慢跑道(非田徑場型),籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603144005_IMG_0034.JPG',
    LatLng: '24.9972992958595,121.554826498032',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2376,
    Name: '南港高工排球場(館)',
    OperationTel: '02-27825432#1209',
    Address: '臺北市南港區南港里興中路29號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場A.B',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604084723_WL9V0.jpg',
    LatLng: '25.0554972768695,121.608390212059',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: '2017年6月後將進行排球場地 整建',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2416,
    Name: '湖口高中排球場(館)',
    OperationTel: '03-5690772#501',
    Address: '新竹縣湖口鄉中正路二段263巷21號',
    Rate: 1.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604103633_IMG_2076 (2).JPG',
    LatLng: '24.8904900503354,121.053977608681',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2456,
    Name: '澎湖縣',
    OperationTel: '06-9931311#21',
    Address: '澎湖縣白沙鄉鎮海村60號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604114907_DSC02493.JPG',
    LatLng: '23.6439286718643,119.596612215009',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2458,
    Name: '富興國小環形/直線慢跑道(非田徑場型)',
    OperationTel: '03-5806353',
    Address: '新竹縣峨眉鄉富興村太平街8號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '環形/直線慢跑道(非田徑場型),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604115531_IMG_0471.JPG',
    LatLng: '24.6865193101544,120.988488026887',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2498,
    Name: '嘉義高工排球場(館)',
    OperationTel: '05-2754092',
    Address: '嘉義市東區彌陀路174號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604141404_排球空照.JPG',
    LatLng: '23.4709472601901,120.465983748436',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2494,
    Name: '修平科技大學田徑場',
    OperationTel: '04-24961100#6812',
    Address: '臺中市大里區工業路11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場,半場籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604140500_田徑場.JPG',
    LatLng: '24.0957634779403,120.711828321218',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2535,
    Name: '豐年國小籃球場',
    OperationTel: '08-9226733',
    Address: '臺東縣臺東市中興路三段320號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604152412_籃球場.jpg',
    LatLng: '22.771823901098,121.111645102501',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2538,
    Name: '新興高級中學田徑場',
    OperationTel: '(03)3796996',
    Address: '桃園市八德區永豐路563號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604152704_IMG_2290-1.jpg',
    LatLng: '24.973986606714,121.271652281284',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2527,
    Name: '臺南藝術大學籃球場',
    OperationTel: '06-6932851',
    Address: '臺南市官田區大崎里66號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃、排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604150349_北校區多功能球場.jpg',
    LatLng: '23.1932787269877,120.371253490448',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2552,
    Name: '修平科技大學體育館',
    OperationTel: '04-24961100#6811',
    Address: '臺中市大里區工業路11號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList:
      '羽球場(館),籃球場,排球場(館),桌球場(館),舞蹈教室,健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604154734_體育館全景.jpg',
    LatLng: '24.0956502350874,120.710736662149',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2575,
    Name: '臺北教育大學排球場',
    OperationTel: '02-27321104#83511',
    Address: '臺北市大安區和平東路二段134號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604162417_排球01.JPG',
    LatLng: '25.0231814347225,121.544516086578',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2540,
    Name: '臺南藝術大學網球場',
    OperationTel: '06-6930100#2851',
    Address: '臺南市官田區大崎里66號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604152925_網球場.jpg',
    LatLng: '23.1883921415231,120.374965667725',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2395,
    Name: '秀水高工風雨球場',
    OperationTel: '04-7697021',
    Address: '彰化縣秀水鄉福安村中山路364號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604095630_DSCN0276.JPG',
    LatLng: '24.0357526663647,120.497928857803',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2479,
    Name: '羽球場館',
    OperationTel: '03-5822098#723',
    Address: '新竹縣竹東鎮二重里光明路32號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604130340_DSC_0417.jpg',
    LatLng: '24.7673995340474,121.058070659637',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2594,
    Name: '修平科技大學排球場(館)',
    OperationTel: '04-24961100#6811',
    Address: '臺中市大里區工業路11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604170155_排球場.jpg',
    LatLng: '24.0956196288937,120.712366104126',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2587,
    Name: '曉明女中籃球場',
    OperationTel: '04-22921175#241',
    Address: '臺中市北區中清路一段606號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604164752_IMG_3649.JPG',
    LatLng: '24.1680524175531,120.674367249012',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2619,
    Name: '新豐國小田徑場',
    OperationTel: '03-5592081#122',
    Address: '新竹縣新豐鄉重興村明德巷13號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605090254_DSC00714.JPG',
    LatLng: '24.9006257999141,120.988526344299',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1183,
    Name: '自強國中田徑場',
    OperationTel: '03-5103291#130',
    Address: '新竹縣竹東鎮自強路169號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140530153107_DSC04466.JPG',
    LatLng: '24.7463586369526,121.084206104279',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2637,
    Name: '建國中學排球場(館)',
    OperationTel: '02-23034381#308',
    Address: '臺北市中正區龍光里南海路56號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605094027_室外排球場.jpg',
    LatLng: '25.0300934344523,121.513375639915',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2681,
    Name: '成功大學中正堂',
    OperationTel: '06-2757575#50385',
    Address: '臺南市東區大學路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),桌球場(館),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605114018_中正堂 001.jpg',
    LatLng: '22.9967183548753,120.21735906601',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2679,
    Name: '路竹高中籃球場及排球場',
    OperationTel: '07-6963008#133',
    Address: '高雄市路竹區中華路292號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605113547_0610.1.jpg',
    LatLng: '22.8539442523786,120.251207202673',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2675,
    Name: '雲林科技大學體育館',
    OperationTel: '05-5342601#2705',
    Address: '雲林縣斗六市大學路三段123號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃排球場,排球場,羽球場,桌球教室,舞蹈教室,柔道教室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605111351_IMG_3740.JPG',
    LatLng: '23.691347019807,120.536869168282',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2296,
    Name: '北港農工風雨球場',
    OperationTel: '05-7832246#533',
    Address: '雲林縣北港鎮太平路80號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603141804_100_5301.JPG',
    LatLng: '23.5800454007287,120.307843387127',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2726,
    Name: '大同高中排球場',
    OperationTel: '02-25054269#122',
    Address: '臺北市中山區中央里長春路167號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605142046_P1050256.JPG',
    LatLng: '25.0562116382831,121.534650921822',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2505,
    Name: '內湖高工綜合球場',
    OperationTel: '02-26574874#205',
    Address: '臺北市內湖區港墘里內湖路1段520號',
    Rate: 4.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(室外)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604142835_mobile6db763e6-7966-4e68-a8e7-33e690b40aae.jpg',
    LatLng: '25.0799824330742,121.574310064316',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2775,
    Name: '竹中國小竹中樓',
    OperationTel: '03-5823822#805',
    Address: '新竹縣竹東鎮頭重里竹中路104巷14號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605153539_DSC00548.JPG',
    LatLng: '24.7800475515348,121.029714345932',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2378,
    Name: '內湖高工排球場(館)',
    OperationTel: '02-26574874#205',
    Address: '臺北市內湖區港墘里內湖路1段520號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604090314_mobile487003c8-a73c-4c31-a1b9-0acc2dffdee4.jpg',
    LatLng: '25.079661762129,121.574900150299',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2824,
    Name: '善化高中籃球場',
    OperationTel: '06-5837312#309',
    Address: '臺南市善化區大成路195號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606084450_DSC03765.JPG',
    LatLng: '23.1285996215659,120.302052497864',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2844,
    Name: '三民家商田徑場',
    OperationTel: '07-5525887#187',
    Address: '高雄市左營區裕誠路1102號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,手球場,排球場,籃球場,足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606094900_DSC_0082.JPG',
    LatLng: '22.6667814340261,120.302626490593',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5632,
    Name: '暨南國際大學戶外球場',
    OperationTel: '049-2910960#3751',
    Address: '南投縣埔里鎮大學路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),網球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610160012_IMG_1516.JPG',
    LatLng: '23.9482727911254,120.926642417908',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5597,
    Name: '彰化女中田徑場',
    OperationTel: '04-7240042#1306',
    Address: '彰化縣彰化市光復路62號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610152848_MMY3R.jpg',
    LatLng: '24.0819758840475,120.543553233147',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5654,
    Name: '長庚大學薄膜球場',
    OperationTel: '(03)2118800*2107',
    Address: '桃園市龜山區文化一路259號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610161950_P6130628 (800x600).jpg',
    LatLng: '25.0324506516992,121.390046596462',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5661,
    Name: '南崗國中排球場',
    OperationTel: '049-2222460#252',
    Address: '南投縣南投市大庄路94號',
    Rate: 6.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610162920_QIB5N.jpg',
    LatLng: '23.8957306610997,120.684680342674',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5863,
    Name: '松山工農學生活動中心',
    OperationTel: '02-27226616',
    Address: '臺北市信義區忠孝東路5段236巷15號',
    Rate: 5.0,
    RateCount: 6,
    Distance: 0.0,
    GymFuncList:
      '籃球場,羽球場(館),排球場(館),桌球場(館),健身房(含重量訓練室),舞蹈教室,游泳池(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611140822_DSC_0847.jpg',
    LatLng: '25.0391217083908,121.572199165821',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5881,
    Name: '慈濟高中網球場',
    OperationTel: '06-2932323#410',
    Address: '臺南市安平區建平五街111號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611144453SNV31022.JPG',
    LatLng: '22.9875585238733,120.178681612015',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName: '運動公園（名稱具有公園）'
  },
  {
    GymID: 5850,
    Name: '銘傳大學體育一館',
    OperationTel: '03-3507001#3523',
    Address: '桃園市龜山區大同村德明路5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),桌球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611134540_IMG_2098.JPG',
    LatLng: '24.9841308075272,121.342315077782',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6739,
    Name: '高雄海洋科技大學排球場',
    OperationTel: '07-3617141#2901',
    Address: '高雄市楠梓區海專路142號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613153941_IMG_20140613_132203.jpg',
    LatLng: '22.7260186059211,120.317480564117',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6699,
    Name: '基隆商工田徑場',
    OperationTel: '02-24567126#231',
    Address: '基隆市七堵區東新街22號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613150111_P1020260.JPG',
    LatLng: '25.094180490575,121.717768843153',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6234,
    Name: '福山國中活動中心',
    OperationTel: '07-3501581#33',
    Address: '高雄市左營區重信路215號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612135509_DSC00585.JPG',
    LatLng: '22.6805988845453,120.314648151398',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2765,
    Name: '基隆商工體育館',
    OperationTel: '02-24567126#231',
    Address: '基隆市七堵區東新街22號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605152322_P1020274.JPG',
    LatLng: '25.094233929451,121.718493039587',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6329,
    Name: '高雄海洋科技大學體育館',
    OperationTel: '07-3617141#2901',
    Address: '高雄市楠梓區海專路142號',
    Rate: 7.0,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList:
      '健身房(含重量訓練室),游泳池(館),羽球場,撞球場,桌球場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612153807_IMG_20140613_133453.jpg',
    LatLng: '22.7272921269255,120.316802045209',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6794,
    Name: '新竹高工室外排球場',
    OperationTel: '03-5318646',
    Address: '新竹市東區中華路二段2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613170219_DSC_1797.JPG',
    LatLng: '24.8101387991754,120.983610713338',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2815,
    Name: '丹鳳高中籃球場',
    OperationTel: '02-29089627',
    Address: '新北市新莊區龍安路72號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605173132_IMGP3800.JPG',
    LatLng: '25.0210523437291,121.416633725166',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7900,
    Name: '中國科技大學籃球場',
    OperationTel: '03-6991111#1616',
    Address: '新竹縣湖口鄉中山路三段530號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618110636_IMG_0260.JPG',
    LatLng: '24.9185498790382,121.056525707245',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5156,
    Name: '丹鳳高中半場籃球場',
    OperationTel: '02-29089627#115',
    Address: '新北市新莊區龍安路72號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609114724_IMGP3835.JPG',
    LatLng: '25.0210523437291,121.416660547256',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7736,
    Name: '中庄國中體育館',
    OperationTel: '07-7033166#213',
    Address: '高雄市大寮區中庄里光明路三段1437號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617172812_P_20131126_143649.jpg',
    LatLng: '22.637609991775,120.400639772415',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7866,
    Name: '淡水國中田徑場',
    OperationTel: '02-26218821',
    Address: '新北市淡水區文化里真理街10號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618102338_田徑場外觀.JPG',
    LatLng: '25.1748543687886,121.438118219376',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7481,
    Name: '淡水國中中正堂-活動中心',
    OperationTel: '02-26218821',
    Address: '新北市淡水區文化里真理街10號',
    Rate: 6.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617105113_中正堂外觀.JPG',
    LatLng: '25.1748616510971,121.437514722347',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7932,
    Name: '竹南高級中學排球場',
    OperationTel: '03-7476855#210',
    Address: '苗栗縣竹南鎮中正路98號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618114924_DSCF8954.jpg',
    LatLng: '24.6857923641397,120.87378680706',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7941,
    Name: '中山醫學大學排球場(館)',
    OperationTel: '04-22651657',
    Address: '臺中市南區建國北路一段110號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618120016_DSC_0054.JPG',
    LatLng: '24.1200165653548,120.650460720062',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7985,
    Name: '鹿港高中排球場(館)',
    OperationTel: '04-7772403#308',
    Address: '彰化縣鹿港鎮東石里中山路661號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618133809_122-31風雨球場.JPG',
    LatLng: '24.0602878628333,120.423830151558',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8001,
    Name: '三重商工排球場(館)',
    OperationTel: '02-29715606#303',
    Address: '新北市三重區中正北路163號',
    Rate: 6.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618135729_IMG_5787.JPG',
    LatLng: '25.0693366805882,121.479440331459',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7312,
    Name: '土庫國小排球場(館)',
    OperationTel: '08-7731553',
    Address: '屏東縣里港鄉中和村中和路33號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '東側綜合籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616165755_20140616_155545.jpg',
    LatLng: '22.8070269864496,120.492419600487',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7984,
    Name: '矽谷國(中)小田徑場',
    OperationTel: '(03)5296380#381',
    Address: '新竹市東區藝術路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618133744_2014-06-19_155059.jpg',
    LatLng: '24.7687475209604,120.965958237648',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7986,
    Name: '復興高中田徑場',
    OperationTel: '02-28914131#330',
    Address: '臺北市北投區復興四路70號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618133957_DSC000651.jpg',
    LatLng: '25.1427400142077,121.50200843811',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8013,
    Name: '開南商工田徑場',
    OperationTel: '02-23212666#212',
    Address: '臺北市中正區東門里濟南路1段6號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,環形/直線慢跑道(非田徑場型),籃球場,排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140618142306_11.jpg',
    LatLng: '25.0417292126936,121.521674394608',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8050,
    Name: '德明財經科技大學排球場',
    OperationTel: '02-26585801#5196',
    Address: '臺北市內湖區環山路一段56號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618145913_mobile9e074ac5-48d4-4203-9450-5ccb0db647d5.jpg',
    LatLng: '25.0874623789783,121.566923260689',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8070,
    Name: '彰化師範大學寶山校區排球場',
    OperationTel: '04-7232105#1943',
    Address: '彰化縣彰化市師大路二號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '寶山校區排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618151908_圖片12.jpg',
    LatLng: '24.0692515140499,120.557489991188',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8065,
    Name: '屏東科技大學排球場(館)',
    OperationTel: '08-7703202#6481',
    Address: '屏東縣內埔鄉學府路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140618151233_11.jpg',
    LatLng: '22.6454226547178,120.613446235657',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8083,
    Name: '中山醫學大學多功能運動場',
    OperationTel: '04-22651657',
    Address: '臺中市南區建國北路一段110號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618153404_DSC06571.JPG',
    LatLng: '24.1230398458085,120.650525093079',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5560,
    Name: '屏東科技大學孟祥體育館',
    OperationTel: '08-7703202#6481',
    Address: '屏東縣內埔鄉學府路1號',
    Rate: 1.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList:
      '健身房(含重量訓練室),舞蹈教室,桌球場(館),田徑場,拳擊場/館,羽球場(館),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610144306_G8-1.jpg',
    LatLng: '22.6440364098181,120.614047050476',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6645,
    Name: '志航國小綜合球場',
    OperationTel: '05-2857924',
    Address: '嘉義市西區世賢路四段141號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613141441_109_1212.JPG',
    LatLng: '23.4624393072675,120.445239543915',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7733,
    Name: '靜宜大學若望保祿二世體育館',
    OperationTel: '04-26328001#16321',
    Address: '臺中市沙鹿區臺灣大道7段200號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList:
      '室內籃球場,室內排球場,攀岩場,舞蹈教室,多功能教室,飛輪教室,羽球場,桌球教室,健身中心',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617172140_靜宜體育館.JPG',
    LatLng: '24.229232757072,120.581071972847',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8148,
    Name: '東勢國中籃球場',
    OperationTel: '05-6991035#23',
    Address: '雲林縣東勢鄉東榮路65號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618182613_2T2C1.jpg',
    LatLng: '23.6725511215747,120.257576107979',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7875,
    Name: '坪林國中體育館',
    OperationTel: '02-26656210',
    Address: '新北市坪林區國中路4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618103626_體育館.JPG',
    LatLng: '24.9376254091283,121.711820214987',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9158,
    Name: '坪林國中田徑場',
    OperationTel: '02-26656210',
    Address: '新北市坪林區國中路4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619080200_田徑場.JPG',
    LatLng: '24.9374685360303,121.712320446968',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9190,
    Name: '穀保家商排球場(館)',
    OperationTel: '02-29712343#304',
    Address: '新北市三重區中正北路560巷38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619091901_P1040820.JPG',
    LatLng: '25.0695893517978,121.47129714489',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7421,
    Name: '大觀國小田徑場',
    OperationTel: '02-29603373#831',
    Address: '新北市板橋區大觀路一段30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617094659_DSC09948.JPG',
    LatLng: '25.0088603993163,121.449866294861',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7655,
    Name: '三重國小田徑場',
    OperationTel: '02-29722095#182',
    Address: '新北市三重區三和路三段1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617154401_20140617_150621.jpg',
    LatLng: '25.0702951277515,121.49762570858',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9739,
    Name: '大同大學排球場',
    OperationTel: '02-21822928#7519',
    Address: '臺北市中山區中山北路三段40號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620141503_DSC_7397.JPG',
    LatLng: '25.0677113119816,121.520429849625',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9595,
    Name: '內埔國小體育館',
    OperationTel: '08-7792055#13',
    Address: '屏東縣內埔鄉內埔村廣濟路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620101257_DSC01758.JPG',
    LatLng: '22.6104008326541,120.566486120224',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9754,
    Name: '二林工商籃球場',
    OperationTel: '04-8962132#323',
    Address: '彰化縣二林鎮豐田里斗苑路四段500號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620144002_DSC03195-1.jpg',
    LatLng: '23.9002668340904,120.377968093724',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9758,
    Name: '淡江高中籃排球場',
    OperationTel: '(02)2620-3850',
    Address: '新北市淡水區真理街26號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620144507_20140122-IMG_6223.JPG',
    LatLng: '25.1756165813882,121.436377465725',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9856,
    Name: '新埔國中排球場',
    OperationTel: '02-22572275#512',
    Address: '新北市板橋區新海路181號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620172016_20140620_102559.jpg',
    LatLng: '25.024970231483,121.458942890167',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9858,
    Name: '台灣首府大學排球場(館)',
    OperationTel: '(06)5718888',
    Address: '臺南市麻豆區南勢168號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620172546_H:\\致遠體育室\\運動場地照片\\排球場\\IMG_0034.JPG',
    LatLng: '23.1925229191282,120.267956256866',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9788,
    Name: '義守大學籃球場',
    OperationTel: '07-6577711',
    Address: '高雄市大樹區三和里學城路一段1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620151328_籃球全景2.jpg',
    LatLng: '22.7278790184723,120.406816899776',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9880,
    Name: '大同高中綜合球場(籃球兼排球場)',
    OperationTel: '08-7663916',
    Address: '屏東縣屏東市和平路429號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140621135539_CIMG1987.JPG',
    LatLng: '22.6778963868703,120.475199818611',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1081,
    Name: '淡江大學紹謨紀念體育館',
    OperationTel: '02-26230985',
    Address: '新北市淡水區英專路151號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),桌球場(館),排球場(館),舞蹈教室,跆拳道場/館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529154254_紹謨紀念體育館.jpg',
    LatLng: '25.1758068485526,121.44883364439',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9889,
    Name: '交通大學體育館',
    OperationTel: '03-5712121#51003',
    Address: '新竹市東區大學路1001號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),韻律教室,體適能教室,健身房(含重量訓練室)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140622164056_體育館2.JPG',
    LatLng: '24.7889149198028,120.9958453953',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9950,
    Name: '林內國小籃球場',
    OperationTel: '05-5892019',
    Address: '雲林縣林內鄉中正路111號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140623115647_DSC05925.JPG',
    LatLng: '23.759782277972,120.618233978748',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: 'http://www.lnps.ylc.edu.tw/school/web/index.php',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10250,
    Name: '臺南大學排球場(館)',
    OperationTel: '06-2133111#341',
    Address: '臺南市中西區樹林街二段33號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140625161125_C:\\Users\\user\\Desktop\\運動場館照片\\排球場1新.JPG',
    LatLng: '22.9837651159884,120.20848095417',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9724,
    Name: '快樂國小活力館',
    OperationTel: '03-3580001',
    Address: '桃園市桃園區大有路789號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),籃球場,排球場(館),躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620135024_IMG_3205.jpg',
    LatLng: '25.0190204370647,121.315431296825',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11558,
    Name: '東明國中排球場(館)',
    OperationTel: '05-5975474#31',
    Address: '雲林縣斗南鎮中興路111號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140701085904_D067W.jpg',
    LatLng: '23.6785104902896,120.470017790794',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11589,
    Name: '新興國小遮蔽籃球場',
    OperationTel: '089-781687#203',
    Address: '臺東縣金峰鄉新興村一鄰1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140701110543_DSC_0254.jpg',
    LatLng: '22.6316264193798,121.003104150295',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7559,
    Name: '龍肚國中體育館',
    OperationTel: '07-6851314',
    Address: '高雄市美濃區龍山里中華路68號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617133216_IMAG1813.jpg',
    LatLng: '22.8791258282214,120.571662783623',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11583,
    Name: '霧鹿國小利稻分校籃球場',
    OperationTel: '089-938040',
    Address: '臺東縣海端鄉利稻村文化路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140701104118_IMG_0477.jpg',
    LatLng: '23.1864640854262,121.024569869042',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2990,
    Name: '海青工商排球場',
    OperationTel: '07-5819155#538',
    Address: '高雄市左營區左營大路1號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140606154310_P1070826.JPG',
    LatLng: '22.6733572093547,120.285347700119',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7352,
    Name: '田徑場',
    OperationTel: '02-22488616',
    Address: '新北市中和區廣福路39號',
    Rate: 4.7,
    RateCount: 3,
    Distance: 0.0,
    GymFuncList: '風雨操場,籃球場,手球場,田徑場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616210927_C14_2468.JPG',
    LatLng: '25.0020590240288,121.505205631256',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10397,
    Name: '排球場館',
    OperationTel: '07-7929337#32',
    Address: '高雄市鳳山區保安里保義街100號',
    Rate: 6.5,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '光電籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140627125225_001.jpg',
    LatLng: '22.5970096723263,120.347644686699',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6244,
    Name: '中興商工籃球場',
    OperationTel: '(03)7467360-307',
    Address: '苗栗縣竹南鎮大營路211號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612140105_IMG_20140612_135020[1].jpg',
    LatLng: '24.6887168338426,120.872182846069',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11661,
    Name: '鳳西國民中學排球場(館)',
    OperationTel: '07-7463452#31',
    Address: '高雄市鳳山區興中里光華路69號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140702092656_SAM_0169.jpg',
    LatLng: '22.6198144739703,120.352874994278',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6833,
    Name: '樹德科技大學行政大樓禮堂（兼體育館）',
    OperationTel: '(07)6158000*2855',
    Address: '高雄市燕巢區橫山路59號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館),籃球場',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140614115710_10.gif',
    LatLng: '22.7648469934605,120.376408696175',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13731,
    Name: '鳳山高中排球場(館)',
    OperationTel: '07-7463150#380',
    Address: '高雄市鳳山區光復路二段130號',
    Rate: 2.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140710163121_BYVEB.jpg',
    LatLng: '22.6314412194818,120.346638271034',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15040,
    Name: '大安國小活動中心',
    OperationTel: '02-27322332#824',
    Address: '臺北市大安區芳和里臥龍街129號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724131633___ 1 (1).JPG',
    LatLng: '25.0192950867015,121.550154089928',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15449,
    Name: '柑園國中排球場',
    OperationTel: '02-26801958#104',
    Address: '新北市樹林區柑園街二段125號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '柑園國中排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140731160506_DSC_0031.JPG',
    LatLng: '24.9541090843513,121.384799927473',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15415,
    Name: '大安高工田徑場',
    OperationTel: '02-27091630#123',
    Address: '臺北市大安區龍圖里復興南路2段52號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,田徑場,網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140731113532_操場.jpg',
    LatLng: '25.0320744744899,121.541170030832',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15529,
    Name: '崇倫國中田徑場',
    OperationTel: '04-23712324#731',
    Address: '臺中市南區忠明南路653號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館),手球場(五人制足球場)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140804181351_DSC_0498.JPG',
    LatLng: '24.130951444886,120.658314228058',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2240,
    Name: '桃園高中排球場(館)',
    OperationTel: '03-3946001#6024',
    Address: '桃園市桃園區成功路三段38號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603102756_IMG_1888.jpg',
    LatLng: '24.9991868734776,121.327509927723',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15500,
    Name: '大文國小風雨球場',
    OperationTel: '06-7872730',
    Address: '臺南市七股區大寮里36之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140804095535_DSCF0973.jpg',
    LatLng: '23.1502252713441,120.153887271881',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6257,
    Name: '中埔國中活動中心',
    OperationTel: '05-2531002',
    Address: '嘉義縣中埔鄉中埔村177號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140612141508_mobileac643ce9-fea9-47ad-b88f-cd01a074a428.jpg',
    LatLng: '23.4245971267827,120.520593523979',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22327,
    Name: '明湖國小活動中心',
    OperationTel: '02-26323477#41',
    Address: '臺北市內湖區東湖里康寧路3段105號',
    Rate: 4.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場(館),游泳池(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160918170024_IMAG4510.jpg',
    LatLng: '25.0708640377084,121.611278057071',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9256,
    Name: '籃球場館',
    OperationTel: '08-8324927#13',
    Address: '屏東縣東港鎮興東里長春二路15號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619104337_IMG_5533.JPG',
    LatLng: '22.4691253027312,120.459894211963',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22328,
    Name: '光華學校財團法人臺中市光華高級工業職業學校籃球場',
    OperationTel: '04-23949009#1240',
    Address: '臺中市太平區東平路18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160919093835_運動場館02.jpg',
    LatLng: '24.1380205538242,120.736484527588',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5667,
    Name: '長庚大學排球場',
    OperationTel: '03-2118800#2107',
    Address: '桃園市龜山區文化一路259號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '室外排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140610163655_P6130664 (800x526).jpg',
    LatLng: '25.0351040667641,121.390672087637',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5109,
    Name: '長庚大學體育館',
    OperationTel: '03-2118800#2107',
    Address: '桃園市龜山區文化一路259號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場,排球場,籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609104329_P6130654 (800x600).jpg',
    LatLng: '25.0326018950035,121.390291213957',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 20735,
    Name: '室外排球場',
    OperationTel: '05-2762625',
    Address: '嘉義市東區王田里圓福街86號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160513192837_IMG_1984-1.jpg',
    LatLng: '23.4876318837104,120.466268062592',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13576,
    Name: '長榮大學體育館',
    OperationTel: '06-2785123#1552',
    Address: '臺南市歸仁區長大路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館),舉重室',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709163124_967.jpg',
    LatLng: '22.9047397861102,120.2751070261',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14274,
    Name: '排球場館',
    OperationTel: '06-7833220#141',
    Address: '臺南市學甲區秀昌里3鄰一秀30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140715155335_DSCN6287.JPG',
    LatLng: '23.2363351469636,120.175291903416',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14395,
    Name: '敏惠醫護管理專科學校籃球場',
    OperationTel: '06-6226111#368',
    Address: '臺南市柳營區中山東路二段1116號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140717093119_運動場.JPG',
    LatLng: '23.2799649359237,120.328917503357',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22836,
    Name: '積穗國中田徑場',
    OperationTel: '02-22234747#831',
    Address: '新北市中和區民安街66號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170627095840_7XP5EEB4HRNLSQP21120.JPG',
    LatLng: '25.0003525441203,121.479735374451',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22885,
    Name: '翠屏排球場',
    OperationTel: '07-3683018#133',
    Address: '高雄市楠梓區翠屏路135號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '環形/直線慢跑道(非田徑場型)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170628111040_R4W41RGPTHJMBK4VGFA7.JPG',
    LatLng: '22.7293090944559,120.299282687811',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22218,
    Name: '高雄市龍山國小風雨球場',
    OperationTel: '0912994784',
    Address: '龍山街62號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160826023334_IMG_1467.JPG',
    LatLng: '22.8644609838451,120.555982589721',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: 'http://www.lsp.ks.edu.tw',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12759,
    Name: '武潭國小平和分校風雨球場',
    OperationTel: '08-7851265',
    Address: '屏東縣泰武鄉平和村太和巷1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707090321_1404696426724.jpg',
    LatLng: '22.5560803156589,120.636148452759',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 22367,
    Name: '琉球國中籃球場',
    OperationTel: '08-8612509#14',
    Address: '屏東縣琉球鄉中正路158號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20160929221911_7ATV8IFBVUXV4I8MRW5J.jpg',
    LatLng: '22.3353445398378,120.367847084999',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22911,
    Name: '泰山高中排球場',
    OperationTel: '02-22963625#303',
    Address: '新北市泰山區辭修路7號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170629161150_BQICR5ZXAF2OAWE5AOQF.JPG',
    LatLng: '25.0576442352941,121.429599523544',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23493,
    Name: '三和國中排球場',
    OperationTel: '02-22879890#205',
    Address: '新北市三重區三和路四段216號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170926125200_WMR4KF4GLBBFC95596XB.jpg',
    LatLng: '25.0763481131802,121.486784219742',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23522,
    Name: '中寮國小籃球場',
    OperationTel: '049-2691322',
    Address: '南投縣中寮鄉永平村永平路316號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170927095730_SUI1MMAJ17W50AW4ZA33.JPG',
    LatLng: '23.8800626957516,120.763703584671',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23521,
    Name: '中寮國小活動中心',
    OperationTel: '049-2691322',
    Address: '南投縣中寮鄉永平村永平路316號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170927094750_3JNEUFKGXQWX5KH7IS05.JPG',
    LatLng: '23.8791373271785,120.763848423958',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1067,
    Name: '育德工家籃球場',
    OperationTel: '06-6563275#235',
    Address: '臺南市新營區健康路211號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529135614_DSC02604.JPG',
    LatLng: '23.315429593452,120.311815738678',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5721,
    Name: '中正國中體育館',
    OperationTel: '0928112798',
    Address: '中船路36巷59號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611092217_DSC00097.JPG',
    LatLng: '25.1356182614067,121.753358244896',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration:
      '近期因進行第三期校舍改建，場館周遭有大型機具及工程車進出頻繁，欲從事相關運動民眾，請轉往其他場地，謝謝您。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6586,
    Name: '台北海洋科技大學田徑場',
    OperationTel: '02-28102292#2246',
    Address: '臺北市士林區延平北路九段212號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613114150_士林田徑場全景壓縮.JPG',
    LatLng: '25.1087227976137,121.471055746078',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2503,
    Name: '臺灣師範大學體育館',
    OperationTel: '02-77148466',
    Address: '新北市林口區仁愛路一段2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList:
      '羽球場(館),籃球場,排球場(館),大韻律教室,小韻律教室,健身房(含重量訓練室),桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140604142414_10411391_669670059771081_8249484465687623851_n.jpg',
    LatLng: '25.0683405678573,121.403260231018',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5974,
    Name: '中興國中田徑場',
    OperationTel: '03-3600145',
    Address: '桃園市桃園區文中路122號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611165640_20140610_161006.jpg',
    LatLng: '24.9974889106201,121.290650367737',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8099,
    Name: '實踐大學H宿露天綜合球場(高雄校區)',
    OperationTel: '07-6678888#3261',
    Address: '高雄市內門區大學路200號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場,網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618155922_H宿露天綜合球場.JPG',
    LatLng: '22.905172780054,120.466727390885',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 27504,
    Name: '排球場館',
    OperationTel: '03-9882047#151',
    Address: '宜蘭縣礁溪鄉大忠村礁溪路四段135號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210323115851_8173PW17T166D09HOKAH.JPG',
    LatLng: '24.8218221819579,121.769438534948',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7512,
    Name: '籃、排球場',
    OperationTel: '03-3269340#313',
    Address: '桃園市桃園區中正路835號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館),半場籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617113342_DSC05692.JPG',
    LatLng: '25.0088024415462,121.300281593576',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 27621,
    Name: '排球場館',
    OperationTel: '037-727724',
    Address: '苗栗縣後龍鎮大庄里中山路252號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210512100237_SPDT2EF62U0R8P8Z9C93.jpg',
    LatLng: '24.6122115229137,120.794366368526',
    RentState: '免費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName: '體育及運動園區（名稱具有園區）'
  },
  {
    GymID: 6865,
    Name: '中正國中籃球場(合併排球場使用)',
    OperationTel: '02-22628456#866',
    Address: '新北市土城區金城路二段247號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140615095445_46KTF024M4L8SFPPZG8C.jpg',
    LatLng: '24.9835490150473,121.456722021103',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2800,
    Name: '排球場館',
    OperationTel: '04-25872136#207',
    Address: '臺中市東勢區東關路6段1328號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140605164311_新校區空照圖（修改1）.jpg',
    LatLng: '24.2427091482968,120.834197402',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 26110,
    Name: '關廟國中排球場',
    OperationTel: '06-5951181#217',
    Address: '臺南市關廟區中山路二段172號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20200505144446_8XK6R7T54B9SOHVKFARQ.jpg',
    LatLng: '22.9607346177982,120.324309468269',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 1053,
    Name: '新興高中籃球場 排球場 田徑場',
    OperationTel: '07-2727127#2050',
    Address: '高雄市新興區五福二路218號',
    Rate: 10.0,
    RateCount: 33,
    Distance: 0.0,
    GymFuncList: '籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140529111933_DSC03848.JPG',
    LatLng: '23.2277805299293,120.653915405273',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6491,
    Name: '排球場',
    OperationTel: '03-3835026#410',
    Address: '桃園市大園區沙崙里2鄰海港路2巷87號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '躲避球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613095810_躲避球場2.JPG',
    LatLng: '25.1097525839337,121.238894462585',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6522,
    Name: '東港高級海事水產職業學校排球場(館)',
    OperationTel: '08-8333131#234',
    Address: '屏東縣東港鎮豐漁街66號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613103545_W4ZDKCZ9CJ12PHF5Z5NI.JPG',
    LatLng: '22.4657660991551,120.441264510155',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: '不開放',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6529,
    Name: '豐原高中排球場(館)',
    OperationTel: '04-25290381#1241',
    Address: '臺中市豐原區水源路150號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613104733_5_20140612_085015.jpg',
    LatLng: '24.2581217159293,120.742048404463',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6562,
    Name: '竹山高中排球場(館)',
    OperationTel: '049-2643344#126',
    Address: '南投縣竹山鎮下橫街253號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613112332_IMG_8994.jpg',
    LatLng: '23.7600326746987,120.679986476898',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6568,
    Name: '屏東商業技術學院排球場(館)',
    OperationTel: '(08)7238700',
    Address: '屏東縣屏東市民生東路51號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613112740_IMG_0228.jpg',
    LatLng: '22.6582744589537,120.511457920074',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6509,
    Name: '新生國小排球場',
    OperationTel: '05-7983093',
    Address: '雲林縣元長鄉瓦搖村新生路11號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140613102219_ZHAF6.JPG',
    LatLng: '23.6384576233195,120.358909964561',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7789,
    Name: '莒光國小排球場(館)',
    OperationTel: '02-22517272#104',
    Address: '新北市板橋區華翠里莒光路163號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618075104_排球場 01.jpg',
    LatLng: '25.0254149961958,121.47393912077',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7784,
    Name: '排球場館',
    OperationTel: '02-24371751#23',
    Address: '基隆市中山區中和路64號',
    Rate: 10.0,
    RateCount: 4,
    Distance: 0.0,
    GymFuncList: '多功能操場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617215224_IMG_3241.JPG',
    LatLng: '25.146589909835,121.720172882015',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 7829,
    Name: '大漢技術學院排球場',
    OperationTel: '(03)8210879',
    Address: '花蓮縣新城鄉大漢村樹人街1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618092650_排球場1.JPG',
    LatLng: '24.0379984755489,121.608910560608',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7740,
    Name: '文山高中籃球場',
    OperationTel: '07-7777272#360',
    Address: '高雄市鳥松區大埤路31號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617174010_籃球場壓縮.jpg',
    LatLng: '22.6481542588486,120.353819913726',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7585,
    Name: '排球場館',
    OperationTel: '02-24692366#24',
    Address: '基隆市中正區新豐街100號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617141114_mobile0c083b16-aba5-417d-bc72-1e0188fe6fee.jpg',
    LatLng: '25.140370189635,121.787137985229',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7847,
    Name: '竹光國中田徑場',
    OperationTel: '03-5246683#625',
    Address: '新竹市北區和平路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618095543_DSC_1756.JPG',
    LatLng: '24.8087946708225,120.955095291138',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 7865,
    Name: '彰化師範大學網球館',
    OperationTel: '04-7232105#1943',
    Address: '彰化縣彰化市進德路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球館,網球館頂樓戶外球場-籃球場,網球館頂樓戶外球場-排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618102158_網球館1.jpg',
    LatLng: '24.0804380557575,120.560467243195',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9396,
    Name: '松山工農田徑場',
    OperationTel: '02-27226616#351',
    Address: '臺北市信義區忠孝東路5段236巷15號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619150012_BYA1HL24VSOIXSPKEFE9.JPG',
    LatLng: '25.0396296050021,121.573001146317',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9404,
    Name: '亞太創意技術學院運動中心',
    OperationTel: '037-605560',
    Address: '苗栗縣頭份鎮學府路110號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619150924_室外排球場5.jpg',
    LatLng: '24.6820343198404,120.969681143761',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9374,
    Name: '復興商工籃球場',
    OperationTel: '02-29262121#218',
    Address: '新北市永和區秀朗路一段201號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619143347_IMAG3827.jpg',
    LatLng: '25.0036099068622,121.518498659134',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7727,
    Name: '牡丹國中籃球場',
    OperationTel: '08-8831014',
    Address: '屏東縣牡丹鄉石門村石門路1-1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617171408_2014-06-19 12.49.51.jpg',
    LatLng: '22.1290407125472,120.775305973801',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6884,
    Name: '東興國小綜合球場',
    OperationTel: '05-6962164#11',
    Address: '雲林縣崙背鄉羅厝村東興路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,躲避球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616083547_籃球場.JPG',
    LatLng: '23.7564092398227,120.373549461365',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2367,
    Name: '義守大學體育館',
    OperationTel: '07-6577711',
    Address: '高雄市大樹區三和里學城路一段1號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603165939_mobile918d7518-3a09-471b-be46-42247f6154e0.jpg',
    LatLng: '22.7269785027907,120.407313108444',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9443,
    Name: '錦和高中田徑場',
    OperationTel: '02-22498566#233',
    Address: '新北市中和區錦和路163號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619155807_DSC09197.JPG',
    LatLng: '24.9932638354311,121.491333246231',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9423,
    Name: '春日國小田徑場',
    OperationTel: '08-8782433#14',
    Address: '94249屏東縣春日鄉春日村春日路314號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,排球場(館),足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619152954_111.jpg',
    LatLng: '22.3694438853255,120.62735080719',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7542,
    Name: '頭前國中風雨操場',
    OperationTel: '02-85222862',
    Address: '新北市新莊區中原路2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140617124711_2014-06-17 11.42.42.jpg',
    LatLng: '25.056026973827,121.459221839905',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9463,
    Name: '中科實驗高級中學籃排球場',
    OperationTel: '04-25686850#1320',
    Address: '42878台中市大雅區平和路227號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619161929_2014-06-19 15.14.29_resize.jpg',
    LatLng: '24.2291691627329,120.624840259552',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9483,
    Name: '新化高中排球場(館)',
    OperationTel: '06-5982065#4002',
    Address: '臺南市新化區忠孝街2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619164924_排球場1.JPG',
    LatLng: '23.0402677732175,120.308664143085',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9496,
    Name: '前鎮高中排球場(館)',
    OperationTel: '07-8226841#206',
    Address: '高雄市前鎮區鎮中路132號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619171233_DSC05608.JPG',
    LatLng: '22.5891744470707,120.31864464283',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9433,
    Name: '大誠高中籃球場',
    OperationTel: '02-22348989#34',
    Address: '臺北市文山區萬興里秀明路2段175號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619154428_C2F3W.jpg',
    LatLng: '24.9906723192909,121.578397750854',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '平日上課期間不開放。籃球場無坡道輪椅不便到達。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 8115,
    Name: '吳鳳科技大學排球場(館)',
    OperationTel: '05-2267125#21642',
    Address: '62153嘉義縣民雄鄉建國路二段117號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140618163222_排球場地.JPG',
    LatLng: '23.535797901956,120.435521042164',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7339,
    Name: '宜梧國中體育館',
    OperationTel: '05-7907254#13',
    Address: '雲林縣口湖鄉梧南村光明路1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616173844_10471386_863791096983915_883301798_o.jpg',
    LatLng: '23.5461368370869,120.195600986481',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 9550,
    Name: '金門高中室外排球場',
    OperationTel: '082-325450#213',
    Address: '金門縣金城鎮光前路94號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620085506_排球場.JPG',
    LatLng: '24.4345361957653,118.315584361554',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9567,
    Name: '僑德國小排球場(館)',
    OperationTel: '08-8782096',
    Address: '屏東縣枋寮鄉隆山村僑德路186號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620092520_IMG_9320.JPG',
    LatLng: '22.363400000915,120.600678920746',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9569,
    Name: '新光高中籃球場',
    OperationTel: '(07)7019888',
    Address: '高雄市大寮區後庄村鳳屏一路217號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館),籃球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620092833_DSCN5539.JPG',
    LatLng: '22.6355552569432,120.390120148659',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9598,
    Name: '水利國小籃球場',
    OperationTel: '08-8752745',
    Address: '屏東縣林邊鄉水利村豐漁路117號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620101638_籃1.JPG',
    LatLng: '22.4193796607344,120.504205226898',
    RentState: '免費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9576,
    Name: '臺中家商排球場',
    OperationTel: '04-22223307#305',
    Address: '臺中市東區和平街50號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620093652_照片 252.jpg',
    LatLng: '24.1331152995096,120.685093402863',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9630,
    Name: '屏東縣九如鄉排球場(館)',
    OperationTel: '08-7394216',
    Address: '屏東縣九如鄉九龍路接衛武街右側',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620111331_XQ49Q.JPG',
    LatLng: '22.7313325895783,120.482393503189',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9632,
    Name: '樹林高中田徑場',
    OperationTel: '02-86852011#3101',
    Address: '新北市樹林區中華路8號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,手球場(館),足球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140620111628_田徑場.JPG',
    LatLng: '24.9834712155895,121.421231031418',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10306,
    Name: '大有國小活動中心',
    OperationTel: '05-6962741#13',
    Address: '雲林縣崙背鄉大有村一鄰14號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140626130127_DSC00195.JPG',
    LatLng: '23.7636805566908,120.30933201313',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10299,
    Name: '臺灣海洋大學祥豐網排球場',
    OperationTel: '02-24622192#2214',
    Address: '基隆市中正區北寧路2號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '網球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140626111428_N5O3E.jpg',
    LatLng: '25.150820381611,121.772578954697',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10330,
    Name: '學生活動中心',
    OperationTel: '03-7991462#13',
    Address: '苗栗縣大湖鄉義和村南昌路5號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140626145703_學生活動中心.JPG',
    LatLng: '24.3984568113125,120.866213764277',
    RentState: '付費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10128,
    Name: '大同國小綜合球場',
    OperationTel: '05-2949036#034',
    Address: '嘉義縣朴子市文化南路',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140624140616_P1140669.JPG',
    LatLng: '23.4597672343403,120.240511894226',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '無。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10400,
    Name: '馬偕醫護管理專科學校體育館',
    OperationTel: '02-28584180#2145',
    Address: '臺北市北投區聖景路92號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140627130210_C:\\Documents and Settings\\user\\桌面\\運動地圖\\運動地圖-雙校區場地照片\\關渡\\羽球\\DSC_6523-1.JPG',
    LatLng: '25.1228670282901,121.464457511902',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9259,
    Name: '鳳山沙灘排球場',
    OperationTel: '0929570881',
    Address: '高雄市鳳山區大明路',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '鳳山沙灘排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619104517_20130419_152906.jpg',
    LatLng: '22.6154073259996,120.339480042458',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11471,
    Name: '大愛籃排球場',
    OperationTel: '07-6771340#215',
    Address: '高雄市杉林區',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '大愛籃排球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140630102525_4MNHY.jpg',
    LatLng: '22.9659011399869,120.545918941498',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11527,
    Name: '景山國小籃球場',
    OperationTel: '04-25921221',
    Address: '苗栗縣卓蘭鎮景山里5鄰88號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,網球場(館),羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140630153005_CAM01477.jpg',
    LatLng: '24.3528348423884,120.864953622222',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 10421,
    Name: '前鎮國中排球館',
    OperationTel: '07-8217677#125',
    Address: '高雄市前鎮區新衙路17號',
    Rate: 8.0,
    RateCount: 5,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140627150822_20140627_145842.jpg',
    LatLng: '22.5824334193008,120.322587490082',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2835,
    Name: '新竹國小綜合球場',
    OperationTel: '03-5222153#262',
    Address: '新竹市東區南大路500號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '羽球場(館),排球場(館)',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140606092957_1.jpg',
    LatLng: '24.7964112891348,120.966312289238',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13280,
    Name: '伸東國小綜合球場',
    OperationTel: '04-7982314',
    Address: '彰化縣伸港鄉七嘉村中華路565號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708142107_DSC03184.JPG',
    LatLng: '24.1461098959707,120.495474636555',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13345,
    Name: '臺灣體育運動大學教學大樓(術科場地)',
    OperationTel: '04-22213108#1106',
    Address: '臺中市北區雙十路一段16號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708153724_新教學大樓全景.jpg',
    LatLng: '24.15255897443,120.689046978951',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13368,
    Name: '康寧大學排球場(館)',
    OperationTel: '06-2552500#52410',
    Address: '臺南市安南區安中路五段188號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140708164136_籃球場.jpg',
    LatLng: '23.0605207036148,120.157013889402',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 12954,
    Name: '排球場館',
    OperationTel: '04-7552430',
    Address: '彰化縣和美鎮塗厝里彰新路五段310號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140707143628_IMG_20140703_113927.jpg',
    LatLng: '24.1341431665439,120.509647911931',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13400,
    Name: '海佃國小籃球場',
    OperationTel: '06-2505013#5102',
    Address: '臺南市安南區郡安路五段56號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709094618_綜合球場 2.jpg',
    LatLng: '23.0283892936598,120.200466513634',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13437,
    Name: '原斗國中小國中部籃球場',
    OperationTel: '04-8904600#22',
    Address: '彰化縣二林鎮原斗里原竹路872號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),躲避球場',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140709101049_1.JPG',
    LatLng: '23.8942028684487,120.427367985249',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13465,
    Name: '明道高中排球場(館)',
    OperationTel: '04-23341336',
    Address: '臺中市烏日區中山路一段497號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709104112_0IF917RMMLZGLFU6LY83.JPG',
    LatLng: '24.1048844018829,120.63677072525',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15102,
    Name: '鹽埔國中綜合球場',
    OperationTel: '08-7932001#13',
    Address: '屏東縣鹽埔鄉鹽南村勝利路30號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140725094614_綜合球場 (2).jpg',
    LatLng: '22.7548735267925,120.574369669157',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '無',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14583,
    Name: '公明國中籃球場',
    OperationTel: '04-26154262#222',
    Address: '臺中市沙鹿區公明里中清路六段567號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718145355_DSCF8893.JPG',
    LatLng: '24.2485223886063,120.599839389324',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14546,
    Name: '公明國中排球場',
    OperationTel: '04-26154262#222',
    Address: '臺中市沙鹿區公明里中清路六段567號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140718114113_QEVAFIM6BC6TQYB0HDJ8.JPG',
    LatLng: '24.2493872266376,120.599025208343',
    RentState: '不開放對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 15027,
    Name: '潮州國中田徑場',
    OperationTel: '08-7882401#41',
    Address: '屏東縣潮州鎮文化路66號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '田徑場,籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140724120822_P1130594.JPG',
    LatLng: '22.5544553729903,120.543966293335',
    RentState: '不開放對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14681,
    Name: '金湖國中籃球場',
    OperationTel: '082-332612#56023',
    Address: '金門縣金湖鎮太湖路三段1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140721112139_10566239_886197864727032_645101936_n.jpg',
    LatLng: '24.43647388851,118.421523571014',
    RentState: '免費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 13582,
    Name: '漚汪國小禮堂',
    OperationTel: '06-7942012',
    Address: '臺南市將軍區長榮里4號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140709171524_IMG_3502.JPG',
    LatLng: '23.1984954899726,120.159761309624',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 11566,
    Name: '排球場館',
    OperationTel: '08-9781324#241',
    Address: '臺東縣太麻里鄉大王村德輝路18號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140701093837_GCLF1.jpg',
    LatLng: '22.616026315981,121.006513237953',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 22675,
    Name: '平和國中排球場',
    OperationTel: '03-8661221#12',
    Address: '花蓮縣壽豐鄉平和村平和路48號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170421142155_DJZRV.jpg',
    LatLng: '23.8844054385171,121.517817378044',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 7004,
    Name: '港和國小活動中心',
    OperationTel: '07-8131506#224',
    Address: '高雄市小港區平和南路300號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),羽球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616110528_活動中心全景(自訂).jpg',
    LatLng: '22.5682790605517,120.3379753232',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 9310,
    Name: '樂群國小體育館',
    OperationTel: '07-7225846#724',
    Address: '高雄市前鎮區育樂路61號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140619120033_K:\\DCIM\\204___06\\IMG_0634.JPG',
    LatLng: '22.6080782728844,120.322442650795',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2225,
    Name: '馬公高中體育館',
    OperationTel: '06-9272342#331',
    Address: '澎湖縣馬公市中華路369號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場(館),籃球場,羽球場(館),田徑場,桌球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603092847_NT0J1BIPTR615H4ATZ9K.jpg',
    LatLng: '23.5729156909748,119.579765796661',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 6910,
    Name: '明德高中排球場(館)',
    OperationTel: '02-26723302#237',
    Address: '新北市三峽區中正路二段399號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140616092139_IMG_20140616_090331.jpg',
    LatLng: '24.9042263939539,121.366310119629',
    RentState: '不開放對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 23020,
    Name: '排球場館',
    OperationTel: '06-5721137#305',
    Address: '臺南市麻豆區南勢里南勢1號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '風雨球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20170709175424_O8CH1.jpg',
    LatLng: '23.1871593722865,120.263321399689',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: '本場館假日若無借用其他單位，開放使用',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5793,
    Name: '古亭國小體育館',
    OperationTel: '03-9301022#267',
    Address: '宜蘭縣壯圍鄉古亭村古亭路81號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140611112637_IMAG2093.jpg',
    LatLng: '24.7712219259492,121.798456907272',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 2319,
    Name: '高苑科技大學體育館',
    OperationTel: '07-6077777',
    Address: '高雄市路竹區中山路1821號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '籃球場,羽球場(館),排球場(館),籃球場,棒球場,網球場(館),足球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140603152232_E:\\上課教材.PPT\\1-5運動攝影-課程內容........休運系三年級上學期3學分必修課程.........廖清海\\Home Work\\期末作業\\_IGP2603.JPG',
    LatLng: '22.8390223505819,120.267806053162',
    RentState: '付費對外場地租借',
    OpenState: 'W',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 5310,
    Name: '達德商工田徑場',
    OperationTel: '04-8753929#122',
    Address: '彰化縣田中鎮中南路二段277號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '游泳池(館),籃球場,排球場(館),網球場(館),躲避球場,田徑場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140609161729_IMG_8974.JPG',
    LatLng: '23.8528083714202,120.608721255994',
    RentState: '免費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24006,
    Name: '排球場館',
    OperationTel: '037-792804#17',
    Address: '苗栗縣通霄鎮白東里135之2號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '網球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180427162359_C1XI3W3F636JPMY5SLMW.jpg',
    LatLng: '24.5610828851536,120.713353157043',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: '因場地損害嚴重，故不開放使用。',
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 24013,
    Name: '中州國小排球場',
    OperationTel: '049-2622030#113',
    Address: '南投縣竹山鎮集山路一段955號',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '中州國小排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20180430104130_AO3VW7QUAIGPJSY8QX4B.JPG',
    LatLng: '23.8120186381237,120.738189533563',
    RentState: '不開放對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 27491,
    Name: '排球場館',
    OperationTel: '03-5502624',
    Address: '新竹縣竹北市嘉興路62號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場館',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20210319101606_C5K1CR76S7M1A9IST7WW.jpg',
    LatLng: '24.8134545534982,121.025766134262',
    RentState: '不開放對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 15249,
    Name: '內湖國中戶外排球場',
    OperationTel: '02-27900843',
    Address: '臺北市內湖區紫陽里陽光街1號',
    Rate: 6.0,
    RateCount: 2,
    Distance: 0.0,
    GymFuncList: '排球場(館)',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20140729103029_UOEL8.jpg',
    LatLng: '25.0764477183049,121.589826643467',
    RentState: '付費對外場地租借',
    OpenState: 'H',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 17872,
    Name: '新北市永和區中正橋左側排球場(新店溪左岸自行車道6.0KM)',
    OperationTel: '02-89699596#521',
    Address: ' 新北市 永和區 新店溪左岸自行車道6.0KM',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '排球場(館),羽球場館,極限運動場,田徑場,足球場館,橄欖球場',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20141227090021_29.jpg',
    LatLng: '25.0194482096836,121.512308120728',
    RentState: '免費對外場地租借',
    OpenState: 'O',
    Declaration: null,
    LandAttrName:
      '單一功能型運動場館（非前三項運動場館型態，且運動場館 僅含一項運動設施）'
  },
  {
    GymID: 14195,
    Name: '排球場館',
    OperationTel: '06-7832100#220',
    Address: '臺南市 學甲區 建國路37-7號',
    Rate: 0.0,
    RateCount: 0,
    Distance: 0.0,
    GymFuncList: '籃球場,排球場館',
    Photo1: 'https://iplay.sports.gov.tw/Upload/photogym/20140715101941_1.JPG',
    LatLng: '23.2299495367324,120.181524753571',
    RentState: '付費對外場地租借',
    OpenState: 'E',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  },
  {
    GymID: 24228,
    Name: '臺中市潭子沙灘排球場',
    OperationTel: '04-25343542#216',
    Address: '臺中市潭子區興華一路 222-248 號對面',
    Rate: 2.0,
    RateCount: 1,
    Distance: 0.0,
    GymFuncList: '沙灘排球場,沙灘手球場',
    Photo1:
      'https://iplay.sports.gov.tw/Upload/photogym/20181011112316_VFP17.jpg',
    LatLng: '24.2089572876429,120.703497018917',
    RentState: '付費對外場地租借',
    OpenState: 'N',
    Declaration: null,
    LandAttrName:
      '綜合功能型運動場館（非前三項運動場館型態，且運動場館內含兩種以上運動設施）'
  }
]

<br/>

![unknown](https://user-images.githubusercontent.com/47975991/157647014-db71a751-418f-4c32-bfa2-d9a3943db45d.png)

대표적인 국내 숙소 예약 서비스인 **야놀자**를 데스크탑 화면으로 재구성한 서비스
<br/>
Hotels API를 이용하여 다음 기능을 제공한다. 

* 원하는 키워드로 숙소 검색 
* 최근  숙소를 바탕으로 한 숙소 추천
* 지역별 숙소 추천
* 상세 정보 및 리뷰 조회/등록 
* 숙소 예약

<br/>
<br/>

## 시작하게 된 계기   


### 야놀자의 데스크탑 화면은 어떻게 구성되어 있을까? 🤔


<br/>

<img src="https://user-images.githubusercontent.com/48747805/157668111-58ae1795-2bb5-46b9-94f1-71699dc456ec.png" width="80%" height="80%">

> 모바일 화면만을 제공하고 있는 야놀자. 데스크탑 화면에 최적화되어 있지 않아 데스크탑 이용자에게 불편함을 야기한다. 

<br/>



### 야놀자의 Lighthouse 결과는? 🙄

![20220310_190638](https://user-images.githubusercontent.com/47975991/157641514-edb01567-8703-4e37-8330-5144e4851043.png)
  

### 문제는, ###
  - 성능 : 사용되지 않는 js 코드 로드 
  - 접근성 : 이미지 alt 어트리뷰트 부재, 포커스된 요소 시각적 확인 불가, 버튼에 식별 가능한 이름 부재
   


<br/>
<br/>


## 사용 기술

   ![20220310_190638](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react&logoColor=9cg)
   ![20220310_190638](https://img.shields.io/badge/redux-white?style=for-the-badge&logo=redux&logoColor=blueviolet)
   ![20220310_190638](https://img.shields.io/badge/typescript-informational?style=for-the-badge&logo=typescript&logoColor=black)
   ![20220310_190638](https://img.shields.io/badge/StyledComponents-ff69b4?style=for-the-badge&logo=StyledComponents&logoColor=black)
   ![20220310_190638](https://img.shields.io/badge/vite-9944ff?style=for-the-badge&logo=vite&logoColor=ffbb00)
   ![20220310_190638](https://img.shields.io/badge/ESBuild-ffcc00?style=for-the-badge&logo=ESBuild&logoColor=black)
   <br />

   ![20220310_190638](https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js&logoColor=black)
   ![20220310_190638](https://img.shields.io/badge/netlify-7fffd4?style=for-the-badge&logo=netlify&logoColor=black)
   ![20220310_190638](https://img.shields.io/badge/swr-white?style=for-the-badge&logo=swr&logoColor=9cg)
   ![20220310_190638](https://img.shields.io/badge/Firebase-black?style=for-the-badge&logo=Firebase&logoColor=9cg)
   
<br/>

## 프로젝트 목표

- 타입스크립트를 통한 선언된 타입 환경에서의 안정적인 개발
- 기존 서비스에서 아쉬운 사항을 개선하며 사용성 향상
- 스프린트 단위의 목표 수립 및 프로젝트 진행

<br/>


## Usecase 
![Untitled_Diagram drawio](https://user-images.githubusercontent.com/47975991/157647713-bb9d6f98-d62c-482c-8fdf-37efa8c68335.png)

<br/>


## UI 설계

<br/>

### 메인 페이지 

<br/> 
<br/>


![main](https://user-images.githubusercontent.com/48747805/157671767-d8e1fc34-86c1-42ab-b6e6-1dd928ba7b66.png)



 <br/>  

### 상세 페이지 

<br/> <br/>


![detail](https://user-images.githubusercontent.com/48747805/157672612-372016da-2998-42f7-8229-ca437f46d1b9.png)


<br/> 

### 예약 페이지 

<br/> 
<br/> 


<img src="https://user-images.githubusercontent.com/48747805/157673391-f4495ba7-1f80-4c1d-b983-8902e5ec84f5.png" width="50%" height="50%">


<br/> 

### 마이 페이지 

<br/> 
<br/>

![mypage](https://user-images.githubusercontent.com/48747805/157673655-b92be386-9140-4412-9a92-eebd96dccef8.png)

<br/>

## API 및 모델 설계 
https://www.miricanvas.com/v/1xjyyg


## 역할 배분 

### 박상언
<br/>

**메인페이지**
1. 호텔 검색 폼과 사용자의 위치 정보 제공 동의 여부에 따라 동의 시 사용자 위치 근처의 호텔 목록 / 거부 시 한국 전체 호텔에서 평점이 높은 순으로 20개의 호텔 목록을 렌더링
2. 하단 영역은 경기, 강원, 경상, 부산 등 4개 지역 목록을 보여주고 사용자가 각 지역을 클릭 시 해당 지역 내 높은 평점의 호텔 20개를 렌더링
3. 호텔 목록은 무한 케러셀 방식으로 렌더링

**검색페이지**
1. 사용자가 입력한 단어에 따라 추천 검색어 목록을 보여줌
2. 검색어 입력은 throttle 형식을 사용해 무의미한 요청이 여러 번 이뤄지는 것을 방지
3. 검색을 요청하면 destination_id값을 받아와 체크인, 체크 아웃, 인원수로 요청해 조건에 맞는 호텔을 불러오고 렌더링
4. 검색어 미 입력이나 알맞지 않은 검색어를 작성하면 요청 X
5. 검색을 하면 /search?키=입력받은값 으로 URL이 바뀌고 새로 고침 시에도 같은 검색 결과를 렌더링
    
**공통**
- 호텔을 클릭 시 /detail/호텔아이디 로 URL이 바뀌고 detail 화면으로 이동

<br/>

### 박시안

<br/>  
  

**호텔 상세 페이지**

  1.호텔 이미지 영역
   - 호텔의 이미지를 기본 5개를 보여 렌더링
   - 5개 중 하나를 클릭하게 되면 호텔의 전체 이미지를 볼 수 있는 모달 출력
   - 호텔의 전체 이미지는 무한 케러셀 방식으로 렌더링 
   - 이미지 레이지 로딩 세팅 적용

  2.호텔 기본 설명
  - 호텔의 기본 정보 렌더링 ( 호텔명, 호텔 평점, 간략한 소개,위치)
  - 리뷰의 총 개수를 보여주고 해당 개수를 클릭하면 통해 전체 리뷰를 볼 수 있는 페이지로 이동
  - 위치는 카카오 지도 API 로 보여주고 해당 지도를 클릭하면 크게 확대된 지도 이미지를 모달로 출력
  - 지도로 보기를 클릭할 시에도 확대 모달 출력

  3.호텔 편의시설 
  - 호텔의 편의 시설 영역 중 숙박 시설 고객의 평가 (리뷰에 맞추어서 해당 키워드 개수 출력)
  - 숙박 시설의 특징 (주요 편의시설 , 서비스 , 주변명소) 렌더링 

  4.결제페이지 
  - 결제 페이지 스타일 작업

**공통**
   - .env 파일 사용을 위한 플러그인 설치 및 세팅 작업
   - SEO 성능을 높이기 위한 react-helmet 라이브러리를 이용한 각 페이지 별 태그 설정(title, meta 태그 세팅) 
   - 프로젝트 소개를 위한 PPT 제작

<br/>

### 안현서

<br/>

**호텔 상세 페이지**

1. 호텔 상세 페이지 네비게이션 바
- 각 상세페이지를 네이게이션을 통해 이동
- 중첩 라우터를 사용해 하단 부분만 변경되도록 구현(색상 변화로 선택된 탭 구분)
- 기본적으로는 객실 컴포넌트가 보여짐

2. 호텔 전체 객실
- 기본적으로는 오늘 날짜에 해당하는 객실을 보여줌
- 체크인 체크아웃 날짜를 선택하여 해당하는 기간에 예약가능한 객실을 요청해 보여줌
- 각 객실에 대한 전체 기간에 대한 금액과 1박당 금액 출력
- 객실 상세 정보를 확인한 후, 선택을 하면 현재 선택된 객실 정보가 저장됨
- 예약하기 버튼을 클릭으로 예약 페이지로 이동
- 예약하기 페이지로 넘길 데이터는 세션 스토리지에 저장
  
3. 객실 상세 정보
- 각 객실 클릭 시, 해당 객실의 상세 정보를 보여주는 모달창 구현
- 캐러셀로 객실 이미지 렌더링
- 모달창 하단의 버튼 선택 시, 해당 객실이 저장

4. 호텔 최근 리뷰
- 호텔 평점과 전체 리뷰 수를 보여줌
- 호텔의 가장 최근에 작성된 2개의 리뷰를 보여줌
- 하단 버튼을 통해 전체 리뷰를 볼 수 있는 페이지로 이동

**리뷰 페이지**
1. 전체 리뷰 페이지
- 상단에서는 최근 리뷰와 마찬가지로 호텔 평점과 전체 리뷰 수를 보여줌
- mockdata에 저장된 리뷰를 최상단에 렌더링한 후, 이후 스크롤에 따라 리뷰 api를 요청
- IntersectionObserver를 사용해 무한 스크롤로 구현하여 한 번에 30개의 리뷰를 요청
- 일정 위치가 지나면 탑 버튼이 생기고, 해당 버튼 클릭 시, 최상단으로 이동(throttle로 위치 감지)
- 각 리뷰의 작성자와 현재 로그인 된 사용자가 일치할 때, 리뷰 삭제 버튼이 활성화

**예약페이지**
- 스타일을 제외한 mockup 작업
- 예약자와 일치할 경우, 현재 로그인 된 정보에서 연락처를 받아옴
- 선택한 호텔 이름과, 객실 정보, 체크인, 체크아웃 날짜를 보여줌
- 방문 수단은 차량과 도보 중 선택 (차량을 default 값으로 설정)
- 이용동의 사항 구현
   - 전체 동의 클릭 시, 하단 세 개의 checkbox가 모두 checked로 변경
   - 하나라도 클릭이 안 된다면, 전체 동의 checked 해제
- 예약자 이름과, 연락처, 필수 동의사항이 모두 선택되었을 때만 결제 버튼 활성화
- 결제 버튼 클릭 시, confirm창을 통해 입력된 예약자와 연락처 확인 후, 결제하기 버튼을 클릭해야 예약 및 결제가 완료되고 마이페이지로 페이지가 전환됨
   - 취소 선택 시, 현재 페이지에 머무름
- 결제가 성공적으로 완료되면, mockdata hotels, reservations, payment에 데이터 post, users의 reservation이 patch됨

**공통**
- 프로젝트 서버 연결(proxy)

<br/>


### 최한나

</br>

**마이페이지**
1. Netlify 유저 정보와 서버 데이터를 결합한 현재 인증된 사용자 정보 관리(With Redux-Persist)
* 로그인 시 Netlify의 고유 id를 통해 Users에서 사용자 정보 검색
* 서버에 데이터가 있는 유저일 경우, 정보를 받아와 인증 정보를 업데이트하고 아닐 경우 서버에 데이터를 생성
* 새로고침 또는 페이지 이동시 Session에 유저 정보가 존재한다면 읽어들여 갱신하고 로그아웃 시 session을 초기화  
  
2. 사용자 정보 업데이트
3. 날짜를 선택하면 해당 기간 내 사용자의 예약 정보 받아오기
* 검색일자 (from ~ to)에 완전히 포함된 내역만을 검색
* 예약 정보와 호텔 정보, 후기를 표시 
4. 예약 건에 대한 후기 작성/후기 수정
* 이전에 후기를 작성했을 경우, 기존에 작성한 내용을 불러와 이어서 작성.
  

**공통**
- User, Reservation, Review, Hotel 등 서버에서 사용하는 Mock Data 제작 및 CRUD 요청에 대한 처리   
- 데일리 스크럼 정리(Git Wiki) 

<br/>

<br/>

## 시연

![메인 화면](https://user-images.githubusercontent.com/47975991/160055347-982d1cab-247d-4cd5-9e0b-bea5852c05be.png)



## 현재 진행사항 🎈  

* 리팩토링
* 성능 최적화
* 배포  


<br/>
<br/>

<br/>

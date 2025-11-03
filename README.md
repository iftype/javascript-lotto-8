# 로또

# 로또

3주차 과제에서 작은 웹 환경을 경험해 보라는 의도를 느꼈습니다
그 이유는 아래의 조건 때문인데요

> 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생 시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

컨트롤러와 서비스 레이어에 상태를 저장하지 않고  입력이 실패했을 시에도 
사용자의 데이터를 잃지 않기 위해 간단한 저장소를 추가해 데이터를 저장했습니다

## 레이어

<img width="1453" height="603" alt="image" src="https://github.com/user-attachments/assets/470a0bbe-3557-4189-b710-477d4010820d" />

모든 의존성은 프로그램 실행 시 `App.js` 의 생성자에서 주입됩니다.

기본 MVC패턴에서 상태 저장의 책임을 `LottoRepository`로 분리했습니다.

`Service`는 `구매 후 로또 출력`과 `당첨 번호와 보너스 번호를 입력 받고 결과 출력`의 두 기능으로 나눴습니다.

`Controller`에서 `Service` 레이어로 데이터를 전송할 때 `DTO(Data Transfer Object)`로 감싸서 웹 환경을 흉내냈습니다.

## 워크 플로우

서비스- 로또 구매 서비스
<img width="1536" height="673" alt="image" src="https://github.com/user-attachments/assets/18729dbe-6b38-41fd-b775-f55c51c4b968" />
서비스- 당첨 결과 서비스
<img width="1569" height="794" alt="image" src="https://github.com/user-attachments/assets/b4b50156-c197-435b-a076-094bd1ed0b00" />
## 로또 기능 구현

<img width="1670" height="699" alt="image" src="https://github.com/user-attachments/assets/e0d84443-99e3-45ec-8b66-62b2bb89a72f" />

`1~45` 까지의 `LottoNumber` 객체를 **모듈이 로드될 때  단 한번 생성되며**
그 뒤의 로또 들은 미리 생성된 `LottoNumber` 들을 참조하게 하여 **캐싱**하였습니다

`LottoNumber` : 가장 작은 객체로, 1~45 까지의 범위를 검증하고, 그 중 한 값을 담당하며 불변 객체의 역할을 합니다

`LottoNumberFactory`: 모듈이 로드될 때,  `LottoNumber`를 1부터 45까지 생성하고, 들어온 숫자를 미리 생성한 객체로 반환해주는 싱글톤 객체입니다

`Lotto`: 한 장의 로또라는 의미를 가진 객체입니다. `LottoNumber`과 마찬가지로 생성될 때 유효성 검사를 하여 유효성을 유지하게 했습니다. `6개`의 `LottoNumber` 을 참조하며 주어진 값과 일치하는 번호의 갯수를 확인할 수 있습니다

`LottoFactory`: `mission-utils`라이브러리를 이용해 랜덤 숫자 배열을 생성하여 `LottoNumberFactory`로 `Lotto` 객체를 만들어냅니다

`LottoStore`: `LottoFactory`를 이용해 `Lotto` 배열을 만들어 냅니다.

`LottoWinningFactory`: 당첨 번호와 보너스 번호를 미리 생성한 `LottoNumber` 에 참조 시키기 위해 `LottoNumberFactory` 만의 의존성을 주입 받은 객체입니다. 

### 캐싱 

<img width="1188" height="440" alt="image" src="https://github.com/user-attachments/assets/bb0bfe28-64c7-4450-b25f-df5e144af81e" />

> 큰 금액이 들어오면 어떡하지?

구매 금액에 제한이 없던 점을 고려해서, 불변 객체를 매번 생성하던 로직을 미리 생성해두고 참조하는 로직으로 변경하였습니다. 
구매 금액에 얼마가 들어오든, 이미 생성된 인스턴스를 재사용하기 때문에 메모리 관리를 효율적으로 쓸 수 있습니다

### 모듈 싱글톤
```javascript
// domains/LottoNumberFactory.js
class LottoNumberFactory {
  // ...
}
// 모듈 싱글톤 적용
const LottoNumberFactoryInstance = new LottoNumberFactory();
export default LottoNumberFactoryInstance;

```
`LottoNumber` 객체는 프로그램 실행 중 45개 만 존재할 수 있게  
모듈 내에서  인스턴스를 생성해 그 인스턴스를 `export`함으로서 단 하나의 인스턴스를 갖게 했습니다

## 유효성 검사
<img width="1353" height="336" alt="image" src="https://github.com/user-attachments/assets/313ea664-33b5-4271-b8ee-66b3ff9f5930" />

각 객체들은 생성될 때 본인의 유효성을 스스로 지켜 항상 사용할 수 있는 상태를 유지합니다

그 외로 입력, 데이터 전송, 다른 객체와 검증을 같이해야 하는 경우  (당첨번호와 보너스번호의 중복)  세 부분에서 유효성을 검사합니다. 
도메인에 관련된 검사는 서비스 레이어에서만 검사하도록 수정하였습니다.

#### 1. 입력 부에서 공백인지 확인

```js
// view/LottoInputView.js
  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INFO_MEESAGE.INFO_BONUS_NUMBER);
    return LottoInputView.#checkBlank(bonusNumber);
  }
  static #checkBlank(input) {
    if (input.trim() === '') throw new Error(ERROR_MESSAGES.BLANK);
    return input;
  }
```
입력 단에서 빈 값이 많이 입력될 것이라 예상되어 빈 값은 우선적으로 검사해줬습니다

#### 2. Controller 에서 Service로 입력 값을 전송해줄 때 DTO 안에서 간단한 검사(파싱, 타입변환)

##### Request 
```js
// dtos/requestDto/WinningNumbersDto.js
    const parseWinningNumbers = Parser.stringToNumberArray(winningNumbers);
    InputWinningNumberValidator.validate(parseWinningNumbers);
    this.#winningNumbers = parseWinningNumbers;
```
`Controller`단에서 데이터를 보낼 때 파싱과 변환을 수행해서 데이터 타입을 변경 후 타입관련 유효성 검사를 진행합니다
`Service`는 사용할 수 있는 데이터를 전달 받습니다

#### Response
```js
// dtos/responseDto/PurchasedLottosDto.js
  toJSON() {
    const lottosToArray = [...this.#lottos].map((lotto) => lotto.getNumbers());
    return {
      lottos: lottosToArray,
   }
```
`Service`에서 `Controller`로 도메인 객체를 보내되, 클라이언트 단에서 사용할 때 값 배열로 변환하여 내부 구조를 숨겼습니다


#### 3. Service에서 값을 받고 도메인 관련 검증
```js
// services/WinningResultService.js
    const bonusLotto = this.#winningFactory.createBonusLotto(bonusNumber);
    BonusNumberValidator.validate(winningLotto, bonusLotto);
```
객체 끼리의 비교는 도메인 규칙이기 때문에 서비스 단에서 검사해줬습니다

## 세부 사항 

### Repository
예외 발생 시 이전 상태를 복구하기 위해 저장소를 도입했습니다.

```js
  getPurchasedLottos() {
    const { purchaseAmount } = this.#lottoRepository.findAll('admin');
  // ...
    this.#lottoRepository.save('admin', { lottos });
    return new PurchasedLottosDto({ lottos });
  }

```
작은 웹 환경이라 생각하고 데이터 베이스를 사용하는 식으로 구성하였습니다


### 템플릿 에러 메세지
```javascript
// constants/errorMessage.js
const PREFIX = '[ERROR]';
const format = (unit) => new Intl.NumberFormat().format(unit);
const ERROR_MESSAGES = Object.freeze({
  PURCHASE_UNIT: (PURCHASE_UNIT) =>
    `${PREFIX}구매 금액은 ${format(PURCHASE_UNIT)}원 단위로 입력해야됩니다`,
// ...
});
```
단위, 범위, 수량을 객체가 지니고 있기 때문에 에러 메세지 관리가 필요했습니다
템플릿 리터럴을 사용해 동적으로 값을 정해줬습니다.

### DI 
```js
// domains/LottoFactory.js
  constructor(piker, lottoNumberFactory) {
    this.#piker = piker;  
    // ...
  createLotto(numbers) {
    const newArray = this.#piker.pick(numbers);
    //...
```
로또 팩토리는 숫자 배열을 생성자에서 주입받습니다
이를 통해 테스트 시 랜덤한 값이 아닌 고정된 숫자 배열을 사용해 테스트 할 수 있었습니다

### Constants
```js
// constans/
const LOTTO_SETTING = Object.freeze({
  PRIZES: Object.freeze({
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
    OTHER: 0,
  }),
});
```
상금은 변경될 가능성이 높다고 생각하여 객체가 아닌 상수로 정의하였습니다

### 당첨 카운트
```js
// domians/LottoWinningResult.js
  static #getWinningRank(winningStats) {
    return winningStats.map(({ winning, bonus }) => {
      if (winning === 6) return { rank: 'FIRST' };
      if (winning === 5 && bonus) return { rank: 'SECOND' };
      if (winning === 5) return { rank: 'THIRD' };
      if (winning === 4) return { rank: 'FOURTH' };
      if (winning === 3) return { rank: 'FIFTH' };
      return { rank: 'OTHER' };
    });
  }

  // #랭크로 총 순위 카운트
  static #getWinningCount(winningRank) {
    const count = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0, OTHER: 0 };
    winningRank.forEach(({ rank }) => {
      count[rank] += 1;
    });
    return count;
  }
```
로또 배열과 당첨 번호를 비교하여 `[winning:일치 갯수, bonus: 보너스여부]` 형태의 객체 배열로 변환했습니다  
그 후 랭크를 상금 상수의 키와 일치 시켜 당첨 카운트를 계산했습니다



---

## 과제 포맷하기 전 구현할 기능 목록

<details>
<summary>🟢여기를 클릭하면 기능 목록이 열립니다</summary>

## 소개

<img width="1275" height="499" alt="Image" src="https://github.com/user-attachments/assets/612c77ad-c67f-4fcd-b253-2d6c43d9db58" />

저는 이번 과제를 크게 **세 가지 기능**으로 나눠 구현하려고 합니다

1.  구매
1.  수령
2.  수익률

레드-그린-리팩토링 사이클을 도입할 것이고
**구매** 먼저 구현하려고 합니다

## 구현할 기능 목록

아래 [실행과정](#실행과정)의 흐름에 따라 기능 목록을 작성
🔴테스트 만들기
🟢테스트 통과
🟡리펙토링완료

### feat(구매):

#### 유효성 검사

##### UtilVaildator: true / false
🟡 숫자로 변환할 수 있는지?  
🟡 숫자 타입인지?  
🟡 양수인지?  
🟡 정수인지?    

##### LottoUtilValidator: true / false
🟡 번호들이 전부 숫자인지?  
🟡 번호들의 길이가 6인지?   
🟡 번호들의 범위가 1-45인지?  
🟡 번호들이 중복되었는지?  
🟡 특정 번호가 번호리스트에 포함되어있는지?  

##### LottoValidator: throw Error
🟡 번호들의 길이가 6인지?  
🟡 번호들은 숫자인지?  
🟡 번호들은 1-45범위에 포함되어 있는지?  
🟡 번호들은 중복되지 않았는지?  


##### LottoStoreValidator: throw Error
🟡 구매금액을 숫자로 변환 할 수 있는지?  
🟡 구매금액은 정수인지?  
🟡 구매금액은 양수인지?  
🟡 구매금액은 1,000원으로 나누어 떨어지는지?  


#### Domain

##### Lotto
🟡 생성 가능한지?  
🟡 오름차순 정렬  

##### LottoFactory
🟡 랜덤한 숫자 6개로 로또 리스트 생성

##### AccountBook
🟡 지출 금액을 기입  
🟡 지출 금액을 추가
🟡 당첨 금액을 기입  
🟡 당첨 금액을 추가
🟡 수익률 확인

#### utils

랜덤한 숫자 6개를 가져옴

### 수령

구매부터진행

### 수익률

구매부터진행

---

## 실행흐름

### 구매

<img width="987" height="445" alt="Image" src="https://github.com/user-attachments/assets/90325199-3f1f-4bfc-9f71-345d8911fa3c" />

1. 컨트롤러는 구매 함수 실행
2. 컨트롤러는 인풋한테 얼마 살건지 입력받음
   - 숫자로 변할 수 있는 지 검사
   - 숫자로 변환하여 리턴

3. 컨트롤러는 입력 받은 값을 매개변수로 로또 서비스의 구매 함수를 호출
4. 로또 서비스는 받아온 값을 사용해서 가계부에 기입하고 로또 스토어의 구매를 호출
5. 가계부는 사용자가 받아온 값을 저장
6. 로또 스토어는 받아온 값이 맞는지 검사
   - 숫자인지?
   - 1,000원으로 딱 나누어 떨어지는지?
7. 로또 스토어는 받아온 값으로 몇 장 살 수 있나 계산
8. 계산한 값으로 로또 팩토리에게 요청
3. 로또 팩토리는 받아온 값을 검사
   - 양수인지?
4.  로또 팩토리는 랜덤 함수를 사용해 숫자 6개를 받아옴
    - 숫자로 변할 수 있는지?
    - 범위에 맞는지?(1-45)
    - 값이 중복되진 않았는지?
5.  숫자들을 로또에게 넘겨 로또를 생성 요청
6.  로또는 생성 시 받아온 값의 검사
    - 6개인지?
7.  로또 팩토리는 생성된 로또들을 반환
8.  이 반환 값을 서비스가 자신의 상태에 저장하고 반환
9.  컨트롤러는 받아온 값으로 출력함수 실행

### 수령

1. 컨트롤러는 입력함수를 실행, 당첨 번호를 받아옴
2. 컨트롤러는 당첨 번호를
3. 컨트롤러는 입력함수를 실행, 보너스 번호를 받아옴
4. 컨트롤러는 이거 두 개를 매개변수로 서비스에게 getMoney를 실행
5. 서비스는 두 개로 로또당첨 객체 생성
6. 로또당첨 객체는 생성과 동시에 번호들 유효성 검사를 진행
   - 당첨 번호의 유효성 검사 - 타입, 범위
   - 보너스 번호의 유효성 검사 - 타입, 중복, 범위
1. 서비스는 로또당첨에 로또번호 리스트를 넘겨서 몇 개 당첨됐나 물어봄
2. 로또당첨은 로또에게 당첨 번호와 몇 개 겹치나 물어봄
3. 로또당첨은 로또에게 보너스 번호는 겹치나 물어봄
4.  이제 이 당첨 번호 숫자로 등수를 판별함
5.  판별한 등수를 서비스에게 리턴
6.  서비스는 받아온 숫자로 로또뱅크에게 물어봄
7.  로또뱅크는 등수에 따른 금액을 판별
8.  서비스는 가계부에 수익을 적고 컨트롤러에 리턴
9.  컨트롤러는 해당 값으로 출력실행

### 수익률

1. 로또 컨트롤러는 서비스에게 수익률을 요청
2. 서비스는 가계부의 수익률 계산을 누름
3. 가계부는 저장 되어있는 값으로 수익률을 계산하여 반환
4. 컨트롤러는 해당 값으로 출력실행

</details>

---

## 요구 사항

<details>
<summary>클릭하면 요구사항이 열립니다</summary>

### 기능 요구 사항

간단한 로또 발매기를 구현한다.

- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.

#### 입출력 요구 사항

##### 입력

- 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.

```json
14000
```

- 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.

```json
1,2,3,4,5,6
```

- 보너스 번호를 입력 받는다.

```json
7
```

##### 출력

- 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.

```js
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

- 당첨 내역을 출력한다.

```json
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
```

수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)

```json
총 수익률은 62.5%입니다.
```

- 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

```js
[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.
```

- 실행 결과 예시

```json
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7


당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

### 프로그래밍 요구 사항 1

- Node.js 22.19.0 버전에서 실행 가능해야 한다.
- 프로그램 실행의 시작점은 App.js의 run()이다.
- package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.
- 프로그램 종료 시 process.exit()를 호출하지 않는다.
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.
- 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- 기본적으로 JavaScript Style Guide를 원칙으로 한다.

### 프로그래밍 요구 사항 2

- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메서드)를 분리하면 된다.
- 3항 연산자를 쓰지 않는다.
- 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인한다.
- 테스트 도구 사용법이 익숙하지 않다면 아래 문서를 참고하여 학습한 후 테스트를 구현한다.
  - Using Matchers
  - Testing Asynchronous Code
  - Jest로 파라미터화 테스트하기: test.each(), describe.each()

### 프로그래밍 요구 사항 3

- 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  - 함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
- else를 지양한다.
  - 때로는 if/else, when문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
- 힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
- 구현한 기능에 대한 단위 테스트를 작성한다. 단, UI(System.out, System.in, Scanner) 로직은 제외한다.
  - 단위 테스트 작성이 익숙하지 않다면 LottoTest를 참고하여 학습한 후 테스트를 작성한다.

</details>

---

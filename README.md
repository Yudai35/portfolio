「書籍紹介診断アプリ　NewSelf」

![スクリーンショット 2022-03-12 15.13.16.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2114750/35d78461-37e3-8725-1936-2b8adc61b119.png)

# はじめに
こんにちは。
こちらの記事では、Nuxt.jsとFirebaseを用いて開発したポートフォリオについて記しています。
機能の追加・修正は随時対応中（2022年3月12日現在）

# アプリの概要
読書を通して新しい自分と出逢うきっかけを作る「書籍紹介診断アプリ」です。

## 想定ユーザー
・自分を変えたいけど何すればいいかわからない方
・やりたいことはあるがなかなか１歩踏み出せない方
・読書したいけど、どんな本を読んでいいかなかなか決められない方

## ポートフォリオの制作背景
何かに挑戦するにあたって、正しい「マインドセット」や「習慣」を身につけることは必要不可欠と感じます。これらを学ぶのに適したツールは「読書」だと考えて。過去の私のように正しい「マインドセット」や「習慣」を身につけず消耗してしまう人を減らしたいという思いからこのようなサービスを制作しました。

また、診断だけやって本を読まずに終わり、というケースを防ぐため、「Twitterに宣言ツイート」できる機能も搭載しました。同時に学んだ書籍の内容もアウトプットできるようメモ機能も搭載しました。後から振り返ることもできます。本サービスは行動きっかけから質良く継続する環境作りまでサポートいたします。

## 機能一覧
|  |機能  |
|:-:|:-:|
| 1| ユーザー登録機能|
| 2| メールアドレス/パスワードログイン機能|
| 3| Google ログイン機能|
| 4| 匿名ログイン機能（追加）|
| 5| ログアウト機能|
| 6| 診断機能 |
| 7| 診断結果表示機能（ランダム） |
| 8| メモ保存機能 |
| 9| 保存メモ一覧表示機能 |
| 10| Twitter共有機能 |
| 11| お問い合わせ機能 |

## 使用技術

・nuxt 2.15.7
・JavaScript
・tailwindcss 4.2.0
・Firebase(Functions、Authentication、Firestore、Hosting)
・microCMS API
・SendGrid


## このアプリについて

### 1.トップページ
![スクリーンショット 2022-03-12 15.13.16.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2114750/35d78461-37e3-8725-1936-2b8adc61b119.png)

・トップページにアクセスするとこの画面が描画されます。
・ヘッダーにログイン、新規登録を配置して、nuxt-link でフォームを描画しています。

### 2.ユーザー登録

<a href="https://gyazo.com/846fd5a03ea7d388aa282de6d0e7eed2"><img src="https://i.gyazo.com/846fd5a03ea7d388aa282de6d0e7eed2.gif" alt="Image from Gyazo" width="1000"/></a>


・メールアドレス、パスワードを入力して登録します。
・アカウント登録と同時にアカウント情報を Firebase Authentication に保存しています。
・アラートが表示されてページ遷移します。（ページ遷移は pages ディレクトリ内で処理を実行しています）

### 3.アカウント認証

<a href="https://gyazo.com/6b154674a7efc0d7194311edd262316d"><img src="https://i.gyazo.com/6b154674a7efc0d7194311edd262316d.gif" alt="Image from Gyazo" width="1000"/></a>


・アカウント登録済みの場合はフォームにメールアドレス、パスワードを入力してログイン。
・アラートが表示されてページ遷移します。
・store ディレクトリで認証状態を管理。
・v-if で認証状態を判別し、ヘッダーに表示させるリンクを変更しています。

```vuejs
<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          alert("ログイン成功しました！");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log(error);
          alert("メールアドレスもしくはパスワードが異なります");
        });
    },
  },
};
</script>

```

### 4.診断機能

<a href="https://gyazo.com/f03e77509ac34d6bd67aa87129ab642a"><img src="https://i.gyazo.com/f03e77509ac34d6bd67aa87129ab642a.gif" alt="Image from Gyazo" width="1000"/></a>

・質問にYes,Noで回答する（随時質問追加予定）
・回答結果からmicroCMS の API を叩いて ID を取得し、診断結果を遷移します。

```vuejs
<template>
  <div
    :id="questionNumber"
    class="
      max-w-screen-md
    "
  >
    <p class="text-3xl md:text-4xl">{{ questionTitle }}</p>
    <p class="py-8 md:text-2xl">{{ questionText }}</p>
    <ul class="flex justify-center tracking-widest">
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          :class="selected ? 'bg-red-200' : ''"
          href="#"
          @click="answer(questionNumber, true)"
        >
          YES
        </button>
      </nuxt-link>
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          :class="selected === false ? 'bg-blue-200' : ''"
          href="#"
          @click="answer(questionNumber, false)"
        >
          NO
        </button>
      </nuxt-link>
    </ul>
  </div>
</template>


<script>
export default {
  layout: "oftenuse",
  data: function () {
    return {
      showQuestion: false,
      ids: [],
      randomId: "",
      answers: {
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
      },
    };
  },
  methods: {
    openQuestion() {
      this.showQuestion = true;
    },
    answer(result) {
      const questionNumber = result.questionNumber;
      const bool = result.bool;
      this.answers[questionNumber] = bool;
    },
    async diagnose() {
      //診断結果をmicroCMSから取得する
      let filters = "";
      if (this.answers.q1 === true) {
        filters += "question1[equals]true";
      }
      if (this.answers.q2 === true) {
        //もしfiltersの中身が空じゃない時（前の質問で一つでもYES[true]だった時）👉前の質問が全てNO[false]だった時は発動しない
        //[or]が追加される。つまりfiltersの中は、"question1[equals]true[or]question2[equals]true"という状態
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question2[equals]true";
      }
      if (this.answers.q3 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question3[equals]true";
      }
      if (this.answers.q4 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question4[equals]true";
      }
      if (this.answers.q5 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question5[equals]true";
      }
      if (this.answers.q6 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question6[equals]true";
      }
      if (this.answers.q7 === true) {
        if (filters != "") {
          filters += "[or]";
        }
        filters += "question7[equals]true";
      }
      const book = await this.$microcms.get({
        endpoint: "books",
        queries: {
          filters: filters,
        },
      });
      console.log({ book });
      //受け取った本のデータからランダムで１冊選ぶ
      const contents = book.contents; //本の情報の配列
      const ids = contents.map((e) => {
        return e.id;
      });
      //本の配列から、ランダムに１冊を選ぶ
      //ランダムに選んだ１冊から、その本のIDを取り出す
      const randomId = ids[Math.floor(Math.random() * ids.length)];
      this.$router.push(`/result?id=${randomId}`);
    },
  },
};
</script>

```

### 5.Twitter共有機能

<a href="https://gyazo.com/3ff194d11e4ae6259370650c86481306"><img src="https://i.gyazo.com/3ff194d11e4ae6259370650c86481306.gif" alt="Image from Gyazo" width="1000"/></a>


・診断結果から「Twitterで宣言する！」をクリック
・本のタイトル、読み終える期限が自動入力され、ツイートされる。

```vuejs
<template>
  <button
    @click="twitterShare"
  >
    Twitterで宣言する！
  </button>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    twitterShare() {
      const today = new Date(); //今日この瞬間の情報を取得
      const date_today = today.getDate(); //日
      const after2Week = today.setDate(date_today + 14); //今日の日＋14日
      const formatDate = moment(after2Week).format("YYYY年MM月DD日"); //2週間後の日にちを"MM月DD日"で表示
      console.log(formatDate);
      //シェアする画面を設定
      var shareURL =
        "https://twitter.com/intent/tweet?text=" +
        `${formatDate}までに「${this.book.title}」を読み、感想＆行動することをツイートします！` +
        "%20%23NewSelf" +
        "%20%23書籍診断アプリ" +
        "&url=" +
        "https://newself-80137.web.app/"; //アプリURL
      //シェアようの画面へ移行
      location.href = shareURL;
    },
  },
};
</script>

```

### 6.メモ保存機能、一覧表示

<a href="https://gyazo.com/845ae90f4648ac429f080b20554e8890"><img src="https://i.gyazo.com/845ae90f4648ac429f080b20554e8890.gif" alt="Image from Gyazo" width="1000"/></a>

・firebase client SDKを使用して、各ユーザーごとにFirestoreにメモのデータを保存しています。


### 7.お問合せ機能

<a href="https://gyazo.com/04d67214238f45112a858b81b59639a4"><img src="https://i.gyazo.com/04d67214238f45112a858b81b59639a4.gif" alt="Image from Gyazo" width="1000"/></a>

##【ユーザー側】

<a href="https://gyazo.com/b94d30f6ea8c27607bc2b369a1d34963"><img src="https://i.gyazo.com/b94d30f6ea8c27607bc2b369a1d34963.png" alt="Image from Gyazo" width="273"/></a>

##【管理者側】
<a href="https://gyazo.com/63f927ecebdae4fa92fdfe016063d595"><img src="https://i.gyazo.com/63f927ecebdae4fa92fdfe016063d595.png" alt="Image from Gyazo" width="392"/></a>

・お問い合わせフォームから送信が可能。
・Firebase Functions で SendGrid のメール送信 API を実行する。
・入力したユーザーのメールアドレス宛に確認メール、管理者宛に受付メールが送信されます。

```vuejs

<script>
export default {
  layout: "oftenuse",
  data: function () {
    return {
      form: {
        name: "",
        email: "",
        content: "",
      },
  },
  methods: {
    async sendMail() {
      const sendContents = await this.$firebase
        .app()
        //GCP東京リージョンを使用
        .functions("asia-northeast1")
        .httpsCallable("sendMail");
      sendContents({
        name: this.form.name,
        email: this.form.email,
        content: this.form.content,
      })
  },
};
</script>

```

### 8.バリデーション

<a href="https://gyazo.com/3ff47673e3e5aed659e4e21ce95064ea"><img src="https://i.gyazo.com/3ff47673e3e5aed659e4e21ce95064ea.png" alt="Image from Gyazo" width="715"/></a>

<a href="https://gyazo.com/b867b9b15c9bf1389e86ebdcdcf093a1"><img src="https://i.gyazo.com/b867b9b15c9bf1389e86ebdcdcf093a1.png" alt="Image from Gyazo" width="744"/></a>

<a href="https://gyazo.com/11b64172030f561ac0d0e85fe18895f5"><img src="https://i.gyazo.com/11b64172030f561ac0d0e85fe18895f5.png" alt="Image from Gyazo" width="748"/></a>

・フォームの入力欄は必須項目に。
・正規表現で、メールアドレスは @ を含める、パスワードは半角英数字を含んだ 8-20 文字の範囲で入力。
・未入力時もエラーメッセージを表示。
・既に登録されているメーリアドレス時もエラーメッセージを表示。

```vuejs

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      emailErrorMassage: "",
      passwordErrorMassage: "",
      emailRegexp: /^[a-z\d][\w.-]*@[\w.-]+\.[a-z\d]+$/i,
      passwordRegexp: /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i,
    };
  },
  methods: {
    googleLogin() {
      this.$auth
        .signInWithPopup(new this.$firebase.auth.GoogleAuthProvider())
        .then(() => {
          alert("登録に成功しました");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log(error);
          alert(
            "エラーが発生いたしました。間違い等がないか確認をし再度実施をお願いします"
          );
        });
    },
    register() {
      //emailが正規表現に適していない入力をしているとき
      if (!this.emailRegexp.test(this.user.email)) {
        this.emailErrorMassage =
          "このメールアドレスは無効です。正しく入力してください";
      }
      //passwordが正規表現に適していない入力をしているとき
      if (!this.passwordRegexp.test(this.user.password)) {
        this.passwordErrorMassage =
          "このパスワードは無効です。半角英数字を含んで8-20文字の範囲内で入力してください。";
      }
      //emailの入力欄に何も入力されていなかった時のエラーメッセージ
      if (this.user.email === "") {
        this.emailErrorMassage = "メールアドレスを入力してください";
      }
      //passwordの入力欄に何も入力されてい時のエラーメッセージ
      if (this.user.password === "") {
        this.passwordErrorMassage = "パスワードを入力してください";
      }
      //emailErrorMassage または passwordErrorMassage に何か当てはまっている時処理を返す
      if (this.emailErrorMassage !== "" || this.passwordErrorMassage !== "") {
        return;
      }
      this.$auth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          alert("登録しました");
          this.$store.dispatch("confirmLogin");
          this.$router.push("/top");
        })
        .catch((error) => {
          console.log({ code: error.code, message: error.message });
          //Authに渡したメールアドレスが、メールアドレスの形をしていない場合に出るエラーです。 （例：email : aaaaa）
          if (error.code === "auth/invalid-email") {
            this.emailErrorMassage = "このメールアドレスは適切ではありません";
            //メールアドレスが既に登録済みである場合に出るエラーです。
          } else if (error.code === "auth/email-already-in-use") {
            this.emailErrorMassage = "このメールアドレスは既に登録されています";
          } else {
            alert("エラーが発生いたしました。再度入力をお願いします。");
          }
        });
    },
    //👇入力中はエラーメッセージを非表示にしている
    isInput() {
      this.emailErrorMassage = "";
      this.passwordErrorMassage = "";
    },
  },
};
</script> 

```

### 9.ユーザーへのヒアリング

<a href="https://gyazo.com/161c1fee55a8532808d8598b5bfd880a"><img src="https://i.gyazo.com/161c1fee55a8532808d8598b5bfd880a.png" alt="Image from Gyazo" width="505"/></a>
<a href="https://gyazo.com/b8d6602cef0bbbfb4bdd43f00e3e5edc"><img src="https://i.gyazo.com/b8d6602cef0bbbfb4bdd43f00e3e5edc.png" alt="Image from Gyazo" width="309"/></a>
<a href="https://gyazo.com/895e1ec5bc215e64ac9bc374cbaab7e0"><img src="https://i.gyazo.com/895e1ec5bc215e64ac9bc374cbaab7e0.png" alt="Image from Gyazo" width="299"/></a>


アプリを使用したユーザーへヒアリングを行い、フィードバックをいただきました。
　・~~ハンガーバーメニューでのボタン押下後のサイドバーを閉じる処理~~（対応済）
　・~~診断時に次の質問までの自動スクロール~~（対応済）
　・~~Firebaseの情報の".env"化~~（対応済）

機能の追加実装
　・~~ゲストログインの実装~~（対応済み）
　・~~ゲストログイン時でのメモ保存を不可能にした~~（対応済み）

### 10.工夫したところ（実装面）

#### plugins ディレクトリ内で inject を使用して関数を共通化。`this.$-`で呼び出し可能に

```javascript
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //ログイン
import 'firebase/compat/firestore'; //メモ情報の保管
import 'firebase/compat/functions';//お問い合わせフォーム

firebase.initializeApp(firebaseConfig);

export default function (app, inject) {

  inject('firebase', firebase)
  inject('auth', firebase.auth())// this.$auth
  inject('firestore', firebase.firestore())// this.$firebase
  inject('functions', firebase.functions())// this.$functions
}
```

#### ログイン状態を取得して判別し、リダイレクト処理を実行

```javascript:middleware/authenticated.js
export default async function ({ store, route, redirect, app }) {

    const user = await app.$authState()
    console.log({ user })

    if (user) {
        store.commit("getData",
            {
                email: user.email,
                userId: user.uid,
                guest: user.isAnonymous
            }
        )
        store.commit("yesLogin")
        if (route.name === "login") {
            return redirect("/top")
        }
    }
    else {
        store.commit("noLogin")
        if (route.name === "diagnose" || route.name === "recordlist" || route.name === "result" || route.name === "top" || route.name === "record" || route.name === "inquiry") {
            return redirect("/login")
        }

    }
}

```

#### 質問をコンポーネント化し、pagesで見やすく表示

```vuejs:components/QuestionBox.vue
<template>
  <div
    :id="questionNumber"
    class="
      max-w-screen-md
      m-auto
      md:mb-28
      py-8
      px-4
      mb-8
      md:py-16
      border-4 border-green-300
      rounded-lg
      bg-white
    "
  >
    <p class="text-3xl md:text-4xl">{{ questionTitle }}</p>
    <p class="py-8 md:text-2xl">{{ questionText }}</p>
    <ul class="flex justify-center tracking-widest">
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          class="
            border-2 border-red-600
            rounded-full
            flex
            items-center
            justify-center
            text-lg
            mx-6
            p-8
            h-20
            w-20
            md:text-2xl md:my-6 md:mx-10 md:py-6 md:p-6 md:h-28 md:w-28
          "
          :class="selected ? 'bg-red-200' : ''"
          href="#"
          @click="answer(questionNumber, true)"
        >
          YES
        </button>
      </nuxt-link>
      <nuxt-link v-scroll-to="scrollTo" to>
        <button
          class="
            border-2 border-blue-600
            rounded-full
            flex
            items-center
            justify-center
            text-lg
            mx-6
            p-8
            h-20
            w-20
            md:text-2xl md:my-6 md:mx-10 md:py-6 md:p-6 md:h-28 md:w-28
          "
          :class="selected === false ? 'bg-blue-200' : ''"
          href="#"
          @click="answer(questionNumber, false)"
        >
          NO
        </button>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    questionTitle: {
      type: String,
      required: true,
    },
    questionText: {
      type: String,
      required: true,
    },
    questionNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    answer(questionNumber, bool) {
      this.selected = bool;
      this.$emit("answer", { questionNumber: questionNumber, bool: bool });
    },
  },
  computed: {
    scrollTo() {
      if (this.questionNumber === "q1") {
        return "#q2";
      }
      if (this.questionNumber === "q2") {
        return "#q3";
      }
      if (this.questionNumber === "q3") {
        return "#q4";
      }
      if (this.questionNumber === "q4") {
        return "#q5";
      }
      if (this.questionNumber === "q5") {
        return "#q6";
      }
      if (this.questionNumber === "q6") {
        return "#q7";
      }
      if (this.questionNumber === "q7") {
        return "#result";
      }
    },
  },
};
</script>
```

```vuejs:pages/diagnose.vue
    <div
      v-if="showQuestion"
      class="bg-green-100 bg-opacity-85 px-4 py-12 md:py-28"
    >
      <QuestionBox
        questionTitle="Q.1"
        questionText="コミュニケーションで悩んだことがある"
        questionNumber="q1"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q1 != null"
        questionTitle="Q.2"
        questionText="対人関係で悩みがある"
        questionNumber="q2"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q2 != null"
        questionTitle="Q.3"
        questionText="対人関係で悩みがある"
        questionNumber="q3"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q3 != null"
        questionTitle="Q.4"
        questionText="対人関係で悩みがある"
        questionNumber="q4"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q4 != null"
        questionTitle="Q.5"
        questionText="対人関係で悩みがある"
        questionNumber="q5"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q5 != null"
        questionTitle="Q.6"
        questionText="対人関係で悩みがある"
        questionNumber="q6"
        @answer="answer"
      />
      <QuestionBox
        v-if="answers.q6 != null"
        questionTitle="Q.7"
        questionText="対人関係で悩みがある"
        questionNumber="q7"
        @answer="answer"
      />
    </div>
```

### 11.工夫したところ（学習面）

<a href="https://gyazo.com/ab1fe74b37ed6cbbec7572fe28ae4d87"><img src="https://i.gyazo.com/ab1fe74b37ed6cbbec7572fe28ae4d87.png" alt="Image from Gyazo" width="1433"/></a>

・QiitaやTwitterで学習内容のアウトプットを継続。
・自分で調べても解決できない時は質問内容を言語化してまとめてからメンターさんに質問。コミュニケーションコストの削減、質問の意図がしっかりと伝わるようにすることを意識していました。

### 12.苦労したとこと

#### Firebase Authentication を使用したログインまわりの実装

アカウント登録やログイン、ログアウトの実装にFirebaseを使用しました。
storeディレクトリでの認証状態の管理、midllewareディレクトリでのリダイレクト処理など、新しく実装する機能も多かったのでしっかり理解できるよう、コードの意味合いをコメントアウトで記述、言語化してQiitaでアウトプットを行なっていきました。

#### Firebase Functions と SendGrid を連携しお問い合わせ機能の実装

お問い合わせ内容を送受信するのに、SendGrid のメール送信APIを使用しました。
Firebase Functions と SendGrid 、フロント部分の連携、送信者、受信者への受信メール、確認メールの実装に苦戦しました。

上記のような困難な場面に多々遭遇し、何度もエラーに出くわせましたが、そこで挫折せず、この壁は自分が成長するために必要な試練だと捉えて乗り越えることができました。この経験から壁を乗り越えることの大切さ、面白さを実感することができたので今後の問題や困難なことがあっても怯まずに挑戦できると確信しております。


# 終わりに

以上、約２ヶ月ほどかけて開発したポートフォリオについてまとめました。

新しい機能や概念に多く触れる機会となり、この期間で何度も壁にぶち当たっていたので、正直しんどい場面が多々ありました。ですが、それ以上に困難を乗り越え自分の成長を肌で感じることにとてもやりがいを感じることができました。

エラーを解消した時も、「なぜ解消できたか」「何が原因だったのか」に着目して開発を進めていました。今後の実務ではより困難なエラーや実装を行なっていくと思うので、その練習だという気持ちで取り組んでいました。

このアプリ自体も、公開はしていますがまだまだ未完成です。
ユーザーにヒアリングを随時行い内容や機能を改善を繰り返し、ブラッシュアップしていきたいと思います！

これからもアウトプットを意識してスキル向上につとめていきます！

最後までご愛読して頂き誠にありがとうございました！

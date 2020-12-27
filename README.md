# Yu-工房

手づくり雑貨ショップLP。

手づくりのポーチやかばんのECサイトにつながるLPを作成しました。  
オーダーメイド対応を強みにしており、「こんなポーチがあったらいいな」を
叶えるお手伝いをしたいという想いを込めて作成しました。

![rectangle_large_type_2_a80ca0bcb7e96333c7f6e7a19cff695a](https://user-images.githubusercontent.com/70832534/103057290-6b4bfe80-45e2-11eb-9ae6-efd20a50b4c5.jpg)

## URL

<https://yu-kobo.net>

## 使用技術
<strong>フロントエンド</strong>  
HTML / CSS(Sass) / JavaScript / React   

<strong>インフラ</strong>  
AWS（S3 / Route53 / CloudFront / AWS Certificate Manager）  
</br>

## 機能一覧

* ツイッターシェア
* Facebookシェア
* レスポンシブ対応
* お問い合わせ（Slack連携）

## AWS構成図
Amazon S3の静的Webサイトホスティング機能を利用してインターネットに公開しました。  
CloudFront、Route53、ACMといったサービスを組み合わせて、最終的には独自ドメインかつHTTPSでアクセスできるようにしました。
</br>
![Untitled Diagram](https://user-images.githubusercontent.com/70832534/102887843-f91cd200-449a-11eb-90d1-9dec4ce42378.png)

## LP概要

### トップページから直接各カテゴリーへ
トップページからと直接ジャンル、エリア別でお店リストを見られるよう改善。  
アイコンを使用することで、直感的に認識できるよう工夫しており、サイトを訪れた人に考えさせないことを目指しています。  
</br>
![hamap – 11](https://user-images.githubusercontent.com/70832534/103165290-2a115400-4859-11eb-891d-5e4aa01dcfcd.jpg)  
</br>
</br>
### お店リストとマップを並列で表示
マップで位置を確認しながらお店のリストを並行することで、ご自身の当日の行動に合わせたお店が選びやすくなりました。  
また、GoogleMapへのリンクにより、気になったお店をそのままお気に入りなどに登録することができます。
</br>
![hamap – 12](https://user-images.githubusercontent.com/70832534/103165294-2ed60800-4859-11eb-8f2a-26a1e6d45d76.jpg)  
</br>
</br>
### 各エリアの情報を追加
トップページから直接ジャンル、エリア別でお店リストを見られるよう改善しました。  
アイコンを使用することで、直感的に認識できるよう工夫し、サイトを訪れた人に考えさせないことを目指しています。
</br>
![hamap – 13](https://user-images.githubusercontent.com/70832534/103165295-2f6e9e80-4859-11eb-9544-57b0d0bf1289.jpg)  
</br>
</br>
### インスタ投稿者との連携
八幡浜市のグルメに関する投稿をされている方にお写真のご提供を依頼させていただきました。  
より多くの方と一緒になって地域を活性化したいと想い、地元の方やゆかりのある方にご協力いただきました。
</br>
![hamap – 14](https://user-images.githubusercontent.com/70832534/103165715-7d39d580-485e-11eb-8174-e17c5d15d375.jpg)

import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_experienceStyle.scss'

export const Expense = () => {
  return (
	<div class="container">
		<div id="timeline">
			<div class="timeline-item">
				<div class="timeline-icon">
				</div>
				<div class="timeline-content">
					<div className="timeline-year">
						<span>2020年4月</span>
						<span>ー</span>
					</div>
					<h2>三重大学入学</h2>
					<p>
					三重大学では、工学部で機械工学について学ぶ。
					新型コロナウイルスの影響でオンライン授業の日々を送り、２年生になり初めて対面講義を受ける。
					
					</p>
					{/* <a href="#" class="btn">詳細</a> */}
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">
				</div>
				<div class="timeline-content right">
					<div className="timeline-year">
						<span>2021年12月</span>
						<span>ー</span>
					</div>
					<h2>株式会社プロジェクトM</h2>
					<p>
					同級生が起業した会社で働き始める。
					友人を作る機会が得られず、人との繋がりが生まれにくい時間を過ごしていた学生に、
					安心安全な繋がりを生む場を提供したいという想いのもと、[ mie + meet ]をコンセプトに、
					三重大学生限定SNS「Mieet」の企画・運営を行う。
					</p>
					<a href="#" class="btn">詳細</a>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">

				</div>
				<div class="timeline-content">
					<div className="timeline-year">
						<span>2022年3月</span>
						<span>ー</span>
					</div>
					<h2>ブライダルバイト</h2>
					<p>
					個人経営の飲食店に続き、結婚式場のアルバイトを始める。
					新郎新婦と一生の思い出に残る結婚式づくりをすることにやりがいを感じる。
					盛り上げとして嵐のデビュー時の衣装を着用しダンスを踊る経験などをする。
					</p>
					{/* <a href="#" class="btn">詳細</a> */}
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">

				</div>
				<div class="timeline-content right">
					<div className="timeline-year">
						<span>2022年8月</span>
						<span>ー</span>
					</div>
					<h2>教育ボランティアを開催</h2>
					<p>
					代表を務める天文サークルで、県内の小中学生を対象とした防災キャンプで天体にまつわる初の教育イベントを行う。
					きっかけになる。
					</p>
					<a href="#" class="btn">詳細</a>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">

				</div>
				<div class="timeline-content ">
					<div className="timeline-year">
						<span>2022年8月</span>
						<span>ー</span>
					</div>
					<h2>プログラミングを始める</h2>
					<p>
					未経験からFlutterでのスマホアプリ開発メンバーとして業務に取り組む。
					大学１年生の授業ぶりのプログラミングに苦戦しながらも、アイデアが形になることに感動する。
					</p>
					{/* <a href="#" class="btn">詳細</a> */}
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">
				</div>
				<div class="timeline-content right">
					<div className="timeline-year">
						<span>2022年11月4日</span>
						<span>ー</span>
					</div>
					<h2>Mieetリリース</h2>
					<p>
					プロジェクトMから大学生専用のコミュニアプリをリリース。
					広報用動画をCanvaで作製する。
					リリースまでの開発を通して自身の技術力の無さを痛感する。
					</p>
					<a href="#" class="btn">詳細</a>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-icon">
				</div>
				<div class="timeline-content">
					<div className="timeline-year">
						<span>2022年10月25日</span>
						<span>ー</span>
						<span>2022年11月24日</span>
					</div>
					<h2>天文サークル公式アプリをリリース</h2>
					<p>
					サークルの課題解決と技術力向上のためにFlutterでアプリを作製しリリースする。
					現在は、デザイン・プログラミングに興味を持つサークルメンバーと共に開発を進める。
					</p>
					<a href="#" class="btn">詳細</a>
				</div>
			</div>
		</div>
	</div>
  )
}

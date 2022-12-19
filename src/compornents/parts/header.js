import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_headerStyle.scss'

export const Header = () => {
  return (
    <header>
		<div class="container">
			<h1 class="logo">
				My<span>PORTFOLIO</span>
			</h1>
			<section class="social">
				<a class="btn" href="https://github.com/Nori0219">Github</a>
				{/* <a class="btn" href="https://www.twitter.com/_brunoweb">Twitter</a> */}
			</section>
		</div>
	</header>
  )
}

{/* <div className="header-left">
            <h3>ポートフォリオ</h3>
        </div>

        <div className="header-right">
            <nav>
                <ul>
                    <li>
                        <a href="">ホーム</a>
                    </li>
                </ul>
            </nav>
        </div> */}
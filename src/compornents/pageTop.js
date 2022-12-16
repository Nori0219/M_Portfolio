import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_pageTopStyle.scss'
import Bgimage from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/PORT FOLIO.svg';
import Icon from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/pofileImage.JPG';
import { Header } from './header'

export const PageTop = () => {
  return (
    
    <div>
        <Header />
        <div className="profile">
            <div className="portfolio-gradient">
                <div className="profile-cover">
                    <img src={Bgimage} alt="" />
                </div>
            </div>
            <div className="prof-wraper center">
                <div className="prof-main">
                    <div className="prof-img">
                        <img src={Icon} alt="" />
                    </div>
                    <h1 className="name">杉井 位次</h1>
                    <div className="job-title">アプリ開発 Web制作</div>
                    <div className="descr">
                    こんにちは。学生をしながらプログラミングを勉強しております。経営学部ですがIT関係のことに非常に興味があります。自分のイメージがwebになるのは楽しいですね。そんな喜びを感じて日々勉強しております。
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

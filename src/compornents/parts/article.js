import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_articleStyle.scss'

export const Article = (props) => {
  return (
    <div className="Article">
        <div className="article" >
            {/* <div className="articleInner">
                <div className="artticleTop">
                    <img src={SOLA} width=""alt="" />
                </div>
                <div className="articleTitle">
                    <a href="#">SOLA | 三重大学天文サークル公式アプリ</a>
                </div>
                <div className="articleDetail">
                    <div className="Date">
                        2022年11月23日
                    </div>
                </div>
            </div> */}

            <div className="articleInner">
                <div className="articleTop">
                    <img src={props.artiimage} width=""alt="" />
                </div>
                <div className="articleTitle">
                    <a>{props.articleTitle}</a>
                </div>
                <div className="articleDetail">
                    <div className="Date">
                    {props.articleDate}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

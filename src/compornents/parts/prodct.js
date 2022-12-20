import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_productStyle.scss'
import SOLA from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SOLA App (480 × 270 px).svg';

export const Prodct = () => {
  return (
    <div className="product">
        <article >
            <div className="articleInner">
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
            </div>
        </article>
    </div>
  )
}

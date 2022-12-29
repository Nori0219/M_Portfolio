import React from 'react'
import { Article} from '../parts/article';
import SOLA from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SOLA App (480 × 270 px).svg';


export const Works = () => {
    const workList = [
        {
            artiimage: SOLA,
            articleTitle:'SOLA | 三重大学天文サークル公式アプリ',
            articleDate:'2022年11月23日',
        },
        {
          artiimage: 'https://placehold.jp/f0a119/ffffff/480x270.png',
          articleTitle:'Mieet | 三重大生限定コミュニティアプリ',
          articleDate:'2022年11月4日',
        },
        {
            artiimage: 'https://placehold.jp/19c5f0/ffffff/480x270.png',
            articleTitle:'React | ポートフォリオサイト',
            articleDate:'2023年月1日5日',
          },
       
      ];

  return (
    <div className="workss">
        {workList.map((workItem) => {            
              return (         
                <Article    
                    artiimage={workItem.artiimage}            
                    articleTitle={workItem.articleTitle}    
                    articleDate={workItem.articleDate}   
                />    
              );            
            })}
        <div>
        </div>
    </div>
  )
}

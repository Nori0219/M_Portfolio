import React from 'react'
import { Article} from '../parts/article';
import SOLA from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SOLA App (480 × 270 px).svg';

export const Products = () => {
    const productList = [
        {
            articleimage: SOLA,
            articleTitle:'SOLA | 三重大学天文サークル公式アプリ',
            articleDate:'2022年11月23日',
        },
        // {
        //   artiimage: SOLA,
        //   articleTitle:'SOLA | 三重大学天文サークル公式アプリ',
        //   articleDate:'2022年11月23日',
        // },
       
      ];

  return (
    <div className="products">
        {productList.map((productItem) => {            
              return (         
                <Article    
                    articleimage={productItem.articleimage}            
                    articleTitle={productItem.articleTitle}    
                    articleDate={productItem.articleDate}   
                />    
              );            
            })}
        <div>
        </div>
    </div>
  )
}

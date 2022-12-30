import React from 'react'
import{ useState, useRef } from 'react';
import { Article} from '../parts/article';
import SOLA from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SOLA App (480 × 270 px).svg';
import "/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_modalStyle.scss"

export const Works = () => {
    const workList = [
        {
            articleimage: SOLA,
            articleTitle:'SOLA | 三重大学天文サークル公式アプリ',
            articleDate:'2022年11月23日',
            introduction:'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
        },
        {
          articleimage: 'https://placehold.jp/f0a119/ffffff/480x270.png',
          articleTitle:'Mieet | 三重大生限定コミュニティアプリ',
          articleDate:'2022年11月4日',
          introduction:'uuouou',
        },
        {
            articleimage: 'https://placehold.jp/19c5f0/ffffff/480x270.png',
            articleTitle:'React | ポートフォリオサイト',
            articleDate:'2023年月1日5日',
            introduction:'三重大愛いあい',
        },
       
      ];

     
      const [selectedItem, setSelectedItem] = useState('')
      const onOpenDialog = (name) => {
        setSelectedItem(name)
        console.log(selectedItem)
      }
    
      const onCloseDialog = (e) => {
        e.stopPropagation(); //親のイベントへの伝搬を防ぐ
        setSelectedItem('other')
        console.log(selectedItem)
      }

      // useRef Hookを使って、HTMLの<body>要素のrefを取得します
      const bodyRef = useRef(null);

      // モーダルを表示するときに、<body>要素のstyle属性を更新します
      if (selectedItem !== ''&& bodyRef.current !== null) {
      bodyRef.current.style.overflow = 'hidden';
      } else if (bodyRef.current !== null) {
      // モーダルを非表示にするときには、<body>要素のstyle属性を元に戻します
      bodyRef.current.style.overflow = '';
      }




  return (
    <div className="works" ref={bodyRef}>
        {workList.map((workItem) => {            
              return ( 
                <item key={workItem.articleTitle}>
                <div className='Article'
                  onClick = {() => onOpenDialog(workItem.articleTitle)}
                >   
                <Article 
                    articleimage={workItem.articleimage}            
                    articleTitle={workItem.articleTitle}    
                    articleDate={workItem.articleDate}   
                />
                <div>
                { workItem.articleTitle === selectedItem && ( //タップした記事とモーダルが同じであれば描画
                  <div className='modal'>
                    <div className='modal-inner'>
                      <div className='modal-header'></div>
                      <div className='modal-introduction'>
                        <h2>{workItem.articleTitle}</h2>
                        <p>{workItem.introduction}</p>
                      </div>
                      <button className='modal-close-btn'
                        onClick = {onCloseDialog}
                      >
                        とじる
                      </button>
                    </div>
                  </div>)
                }
                </div>
                </div> 
                </item>
              );  
                        
            })}
        <div>
        </div>
    </div>
  )
}

import React from 'react'
import{ useState } from 'react';
import { Article} from '../parts/article';
import { Modal } from '../parts/modal';
import SOLA from '/Users/norichika/programming/react-pj/nori-portfolio/src/assets/images/SOLA App (480 × 270 px).svg';
import "/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_modalStyle.scss"

export const Works = () => {
    const workList = [
        {
            artiimage: SOLA,
            articleTitle:'SOLA | 三重大学天文サークル公式アプリ',
            articleDate:'2022年11月23日',
            introduction:'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
        },
        {
          artiimage: 'https://placehold.jp/f0a119/ffffff/480x270.png',
          articleTitle:'Mieet | 三重大生限定コミュニティアプリ',
          articleDate:'2022年11月4日',
          introduction:'三重大愛いあい',
        },
        {
            artiimage: 'https://placehold.jp/19c5f0/ffffff/480x270.png',
            articleTitle:'React | ポートフォリオサイト',
            articleDate:'2023年月1日5日',
            introduction:'三重大愛いあい',
        },
        // {
        //   artiimage: 'https://placehold.jp/f0a119/ffffff/480x270.png',
        //   articleTitle:'帰れまてん',
        //   articleDate:'2022年11月4日',
        //   introduction:'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
        // },
       
      ];

      const [isModalOpen, setModalOpen] = useState(false)

      const openModal = () => {
        setModalOpen(true);
      }
      const closeModal = (e) => {
        e.stopPropagation(); //親のイベントへの伝搬を防ぐ
        setModalOpen(false);
      }

      const [selectedItem, setSelectedItem] = useState('')
      const onOpenDialog = (name) => {
        setSelectedItem(name)
      }
    
      const onCloseDialog = () => {
        setSelectedItem('')
      }
      
      //isOpen={workItem === selectedItem}


  return (
    <div className="works">
        {workList.map((workItem) => {            
              return ( 
                <div className='Article'
                  onClick = {openModal}
                >   
                <Article 
                    artiimage={workItem.artiimage}            
                    articleTitle={workItem.articleTitle}    
                    articleDate={workItem.articleDate}   
                />
                <div>
                {
                isModalOpen? (
                  <div className='modal'>
                    <div className='modal-inner'>
                      <div className='modal-header'></div>
                      <div className='modal-introduction'>
                        <h2>{workItem.articleTitle}</h2>
                        <p>{workItem.introduction}</p>
                      </div>
                      <button className='modal-close-btn'
                        onClick = {closeModal}
                      >
                        とじる
                      </button>
                    </div>
                  </div>
                ):(
                <div></div>
                
                )
                }
                </div>
                
                </div> 
              );            
            })}
        <div>
        </div>
    </div>
  )
}

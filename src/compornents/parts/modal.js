import React from 'react'
import "/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_modalStyle.scss"


// constructor(props); {
//     super(props);
//     // stateの初期値を定義してください
//     this.state ={isModalOpen:false}
// }

export const Modal = (props) => {


    //変数modalを定義してください
    let modal;
    // if文を用意してください
    if(props.isModalOpen){
      modal = 
        (<div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{props.modalTitle}</h2>
              <p>{props.introduction}</p>
            </div>
            <button className='modal-close-btn'>
              とじる
            </button>
          </div>
        </div>)
    }else{
        modal = null;
    }
    
  return (
    <div>
        {modal}
    </div>
  )
}

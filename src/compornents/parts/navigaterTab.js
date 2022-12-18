import React from 'react'
import '/Users/norichika/programming/react-pj/nori-portfolio/src/styles/_navigaterTabStyle.scss'
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

export const NavigaterTab = () => {
  return (
    <div>
        <nav className="navigaterTab">
            <div className="navigaterTab-wrapper">
            <hr class="cp_hr06" />  {/* 区切り線 */}
            
                <div className="tab-List ">
                    <ul>
                        <li>
                            <AwesomeButton
                                //cssModule={AwesomeButtonStyles}
                                type="secondary"
                                onPress={() => {
                                    // do something
                                    console.log('Hello');
                                }}>
                                Resume
                            </AwesomeButton>
                        </li>
                        <li>
                            <AwesomeButton
                                //cssModule={AwesomeButtonStyles}
                                type="secondary"
                                onPress={() => {
                                    // do something
                                    
                                }}>
                                Works
                            </AwesomeButton>
                        </li>
                        <li>
                            <AwesomeButton
                                //cssModule={AwesomeButtonStyles}
                                type="secondary"
                                onPress={() => {
                                    // do something
                                    
                                }}>
                                other
                            </AwesomeButton>
                        </li>
                    </ul>
                </div>
                <hr></hr>
            </div>
        </nav>
    </div>
  )
}

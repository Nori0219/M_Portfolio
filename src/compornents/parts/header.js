import React from 'react'
import { AwesomeButtonShare } from "react-awesome-button";

export const Header = () => {
  return (
    <header>
        <div className="header-left">
            {/* <AwesomeButtonShare type="github" href="https://github.com/username">GitHub</AwesomeButtonShare>
             */}
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
        </div>

    </header>
  )
}


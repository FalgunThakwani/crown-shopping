import React from 'react';
import './menu-items.styles.scss';
import {withRouter} from 'react-router-dom';


const Menuitems = ({title,imageUrl,size,linkUrl,history,match})=>(

    <div onClick={ () => history.push(`${match.url}${linkUrl}`)}
    className= {`${size} menu-items` }
    >
        <div style={{
        backgroundImage: `url(${imageUrl})`
    }}  className="background-image"/>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)


export default withRouter(Menuitems);
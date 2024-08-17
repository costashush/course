import React from 'react';
import Card from './Card';

export default ( {listData} ) => {
    return (
      <div className="cards-list">
			<ul>
				{
					listData.map( item =>  
						<li key={item.id} className="card-item"> <Card {...item} /> </li> 
						)
				}
			</ul>
	  </div>
    )
}

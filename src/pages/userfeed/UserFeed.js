import React from 'react'
import { useData } from '../../context/DataContext'

export const UserFeed = () => {
    const {backendData} = useData();
    return (
        <div>
            {backendData?.map(item => {
            return    <div key={item._id}>
               <p>{item.content}</p>
               <img src={item.mediaURL}/>
                </div>
            })}
        </div>
    )
}

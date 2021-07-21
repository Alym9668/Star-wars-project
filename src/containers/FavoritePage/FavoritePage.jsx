import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList'
import styles from './FavoritePage.module.css';


const FavoritePage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)
    
    useEffect(() => {
        const arr = Object.entries(storeData);

        if (arr.length) {
            const res = arr.map(item => {
                 return {
                    id: item[0],
                    ...item[1]
                 }
            })

            console.log('res' , res)

            setPeople(res)
        }

    }, [])
    return (
        <div>
            {people.length
             ? <PeopleList people={people}/>
             : <h2 className={styles.comment}>No data</h2>    
            }
            
        </div>
    );


};

export default FavoritePage;
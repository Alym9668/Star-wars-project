import React from 'react';
import PropTypes from 'prop-types'
import { useEffect,useState, Suspense} from 'react';
import { useSelector } from 'react-redux';
import { getApiResource } from '../../utils/network';
import { API_PERSON } from '../../components/constants/swapi'
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';

import PersonInfo from '../../components/PersonPage/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack';
import UiLoading from '../../components/UI/UiLoading';

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() => import('../../components/PersonPage/PersonFilms'))


const PersonPage = ({match, setErrorApi}) => {
    const [personId, setPersonId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] =useState(null);
    const [personFavorite, setPersonFavorite] = useState(false)

    const storeData = useSelector(state => state.favoriteReducer)
    


    useEffect(()=> {

        (async () => {
            const id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}/`);

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            
            setPersonId(id)
            if(res) {
                setPersonInfo([
                    {title:'Height',data:res.height},
                    {title:'Mass',data:res.mass},
                    {title:'Hair color',data:res.hair_color},
                    {title:'Skin color',data:res.skin_color},
                    {title:'Eye color',data:res.eye_color},
                    {title:'Birth year',data:res.birth_year},
                    {title:'Gender',data:res.gender},
                ]);
                //res.films
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))

                res.films.length && setPersonFilms(res.films)
            
                setErrorApi(false)
            }else{
                setErrorApi(true)
            }
        })()
    },[])

    return (
        <>
        <PersonLinkBack/>

        <div className={styles.wrapper}>
           <span className={styles.person__name}>{personName}</span>
           <div className={styles.container}>
            <PersonPhoto 
                personId={personId}
                personPhoto={personPhoto}
                personName={personName}
                personFavorite={personFavorite}
                setPersonFavorite={setPersonFavorite}
             />
            {personInfo && <PersonInfo personInfo={personInfo}/>}
           {personFilms && (
               <Suspense fallback={<UiLoading/>}>
                   <PersonFilms personFilms={personFilms} />
               </Suspense>
               ) }
           </div>

        </div>
        </>
    );
};

PersonPage.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);
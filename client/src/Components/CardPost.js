import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faClock, faList, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
// import moment from 'moment';
import { current } from '../Redux/Actions/AuthActions';
import { updateValid,updatePost } from '../Redux/Actions/PostActions';
// import picanto from '../../Assets/picanto.jpg';

const CardPost = ({ el }) => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const iconStyles = {
    marginRight: '8px'
  };
// console.log('../../../.'+el.image?.replace('\\','/'))
  useEffect(() => {
    dispatch(current());
  }, []);

  const user = useSelector(state => state.AuthReducer.user);
console.log(`../../.${el?.image?.replace('\\','/')}`)
  return (
    <section className="cardPostStyle">



{
  el.image &&

  <Link to={`/DescriptionPost/${el._id}`}>
        <div>
          
          {location.pathname === '/MyPosts' && (
            <h4 className='validStyle'>{el?.valid ? 'Annonce valide' : 'Annonce refuse'}</h4>
          )}
          <Card className='border-0 bg-white shadow-sm'>
            <div className="position-relative">
              <img src={el?.image?.replace('\\','/').slice(15)} alt="post-image" className='imgPostStyle' />  
            </div>

            <section className='cardBody'>
              <p className='categoryStyle'>
                <FontAwesomeIcon icon={faCircleUser} style={iconStyles} />
                {el.owner.name}
              </p>

              <h1 className='priceStyle'>
                {el.price} <span className='dt'>DT</span>
              </h1>
              <h2 className='titleStyle'>
                {el?.title?.length > 23 ? el.title.substring(0, 23) + '...' : el.title}
              </h2>
              <div className='smallerText'>
                <p className='categoryStyle'>
                  <FontAwesomeIcon icon={faList} style={iconStyles} />
                  {el.category}
                </p>
                <p className='categoryStyle'>
                  <FontAwesomeIcon icon={faLocationDot} style={iconStyles} />
                  {el.gouvernorat}, {el.delegation}
                </p>
              
              </div>
            </section>
          </Card>
        </div>
      </Link>
}




      

      {user?.role === 'admin' && (
        <button onClick={() => dispatch(updateValid({ valid: !el.valid }, el._id, location, user._id))}>
          {el.valid ? 'Non valid' : 'Valider'}
        </button>
      )}
    </section>
  );
};

export default CardPost;

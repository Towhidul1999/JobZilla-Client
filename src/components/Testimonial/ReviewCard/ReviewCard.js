import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './ReviewCard.module.css'

const ReviewCard = (props) => {
    const { reviewCard, reviewText, reviewImage, reviewPerson } = styles;
    const { name, post, company, image, feedback } = props.data;
    return (
        <div className={reviewCard}>
            <p className={reviewText}><FaQuoteLeft />  {feedback}</p>

            <div className="d-flex">
                {/* <img className={reviewImage} src={`data:image/png;base64,${props.data.image.img}`} alt="" /> */}
                <div className={reviewPerson}>
                    <h5>{name}</h5>
                    <p>{post} <br /> {company} </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
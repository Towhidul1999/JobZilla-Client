import React from 'react';
import bannerImg from '../../../images/banner.png';


const Banner = () => {
    const [inputValue, setInputValue] = React.useState();



    const handleInputChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        const newValue = {...inputValue};
        newValue[name] = value;
        setInputValue(newValue)

    }
    console.log(inputValue)

    const handleSearch = e => {
        e.preventDefault();

        if(inputValue?.jobTitle || inputValue?.jobLocation){

            
            alert('shotto hoice')
        }else{
            alert('Please Select a Criteria Before Search !')
        }

    }


    return (
        <section className='py-4'>
            <div className="container mt-5 py-5">
                <div className="row py-3">
                    <div className="col-md-4 py-2">
                        <input onChange={handleInputChange} name='jobTitle' className='form-control' type="search" placeholder='Search Job' />
                    </div>
                    <div className="col-md-4 py-2">
                        <input onChange={handleInputChange} name='jobLocation' className='form-control' type="search" placeholder='Job Location' />
                    </div>
                    <div className="col-md-4 py-2">
                        <div className="input-group">
                            <select className="form-select" aria-label="Default select example">
                                <option value='Select Category'>Select Category</option>
                                <option value="1">Remote</option>
                                <option value="2">Full Time</option>
                                <option value="3">Part Time</option>
                            </select>
                            <button onClick={handleSearch} className="btn-brand">Search</button>
                        </div>
                    </div>
                </div>
                <div className="row flex-column flex-column-reverse flex-md-row text-center text-md-start">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className='py-2 brand-text-color'>Find your Dream Job Here </h1>
                            <p className='text-secondary pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non temporibus fuga, nemo accusantium praesentium vel id quos quod voluptas distinctio!</p>
                            <div className="row">
                                <div className='col-6 col-md-4'>
                                    <button className="btn-brand-outline">Find a Job</button>
                                </div>
                                <div className='col-6 col-md-4'>
                                    <button className="btn-brand-outline">Post a Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
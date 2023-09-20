import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {

    return (
        <div className="carousel w-full mb-4 h-[600px]">
            <div id="slide1" className="carousel-item relative w-full rounded-xl">
                <img className="w-full" src={img1} />
                <div className="absolute flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-black to-[rgba(21 , 21, 21, 0)]  ">
                    <div className='text-white space-y-7 pl-8 w-1/2  '>
                        <h1 className='text-5xl'>Affordable<br /> Price For Car<br /> Servicing</h1>
                        <p className='text-xl'>There are many variations of passages of  available, but the <br />majority have suffered alteration in some form</p>
                        <div className='mt-4 flex'>
                            <button className="btn btn-error mr-4 w-36">Error</button>
                            <button className="btn btn-outline btn-error w-36">Error</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn bg-red-500 btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn bg-red-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-3xl">
                <img className="w-full" src={img2} />
                <div className="absolute flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-black to-[rgba(21 , 21, 21, 0)]  ">
                    <div className='text-white space-y-7 pl-8 w-1/2  '>
                        <h1 className='text-5xl'>Affordable<br /> Price For Car<br /> Servicing</h1>
                        <p className='text-xl'>There are many variations of passages of  available, but the <br />majority have suffered alteration in some form</p>
                        <div className='mt-4 flex'>
                            <button className="btn btn-error mr-4 w-36">Error</button>
                            <button className="btn btn-outline btn-error w-36">Error</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-red-500 btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn bg-red-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-3xl">
                <img className="w-full" src={img3} />
                <div className="absolute flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-black to-[rgba(21 , 21, 21, 0)]  ">
                    <div className='text-white space-y-7 pl-8 w-1/2  '>
                        <h1 className='text-5xl'>Affordable<br /> Price For Car<br /> Servicing</h1>
                        <p className='text-xl'>There are many variations of passages of  available, but the <br />majority have suffered alteration in some form</p>
                        <div className='mt-4 flex'>
                            <button className="btn btn-error mr-4 w-36">Error</button>
                            <button className="btn btn-outline btn-error w-36">Error</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-red-500 btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn bg-red-500 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-3xl">
                <img className="w-full" src={img4} />
                <div className="absolute flex items-center w-full h-full left-0 top-0 bg-gradient-to-r from-black to-[rgba(21 , 21, 21, 0)]  ">
                    <div className='text-white space-y-7 pl-8 w-1/2  '>
                        <h1 className='text-5xl'>Affordable<br /> Price For Car<br /> Servicing</h1>
                        <p className='text-xl'>There are many variations of passages of  available, but the <br />majority have suffered alteration in some form</p>
                        <div className='mt-4 flex'>
                            <button className="btn btn-error mr-4 w-36">Error</button>
                            <button className="btn btn-outline btn-error w-36">Error</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-red-500 btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn bg-red-500 btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;
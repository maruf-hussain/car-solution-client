import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-4 p-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>

                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-red-500 text-3xl font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience <br />in this field</h1>
                    <p className='my-4'>There are many variations of passages of Lorem Ipsum available  but the majority have
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className='mb-4'>There are many variations of passages of Lorem Ipsum available  but the majority have
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
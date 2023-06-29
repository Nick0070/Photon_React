import './mainlayouts.scss';
import  Footer  from '../footer/footer';
import  Header  from '../header/header';


export const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header/>
                {props['children']}
            <Footer/>
        </div>
    )
}
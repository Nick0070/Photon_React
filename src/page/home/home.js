import './home.scss';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export const Home = () => {
    
    // export default function Home() {
    return (

        
    <div className='home'>


        <div className='text'>
            Наши работы
        </div>
        <Box className='box' sx={{ width: 1000, height: 600, overflowY: 'hidden' }}>
            <ImageList variant="masonry" cols={3} gap={7}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>



        <div className='text1'>
            Знаем что нужно вашим клиентам <br />
            Все нужного качества и в нужных форматах.<br />
            Берем типографию на себя.
        </div>



        <div className='color'>

            <div className='textform'>
                Обратная связь
            </div>

            <div className='form'>
                <div className='container'>
                    <div className='formtxt'>
                        Ваш номер телефона
                    </div>

                    <div className='textfield'>
                        <TextField  label="" variant="standard"/>
                    </div>
                </div>

                <div className='container'>
                    <div className='formtxt'>
                        Ваша электронная почта
                    </div>

                    <div className='textfield'>
                        <TextField color='primary' label="" variant="standard"/>
                    </div>
                </div>

            </div>
            <Button className='buttonform' variant="outlined" size="large">
                Отправить
            </Button>

        </div>




    </div>

        
    )

}



const itemData = [
    {
        img: 'img/photo1.jpg',
        title: 'ph1',
    },
    {
        img: 'img/photo2.jpg',
        title: 'ph2',
    },
    {
        img: 'img/photo3.jpg',
        title: 'ph3',
    },

    {
        img: 'img/photo6.jpeg',
        title: 'ph6',
    },
    {
        img: 'img/photo10.jpg',
        title: 'ph10',
    },

];



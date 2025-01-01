// Lignt Mode
import al3_logo from '../assets/images/Logo_1_V1_Icon.png'
import al3_logo_txt from '../assets/images/Logo_1_Lettering.png'

// Dark Mode
import al3_logo_dark from '../assets/images/Logo_1_V2_Icon.png'
import al3_logo_txt_dark from '../assets/images/Logo_1_Lettering(White).png'

export default function NavbarLogo({ themeColor }){

    if(themeColor == 'graytheme' || themeColor == 'accent'){

        return (<>
                <img src={ al3_logo_dark } className="h-9 white:hidden graytheme:block accent:block" alt="AL3 Logo1" />
                <img src={ al3_logo_txt_dark } className="w-15 h-5 white:hidden graytheme:block accent:block ml-3" alt="AL3 Logo2" />
            </>)
    }
    else{

        return (<>
                <img src={ al3_logo } className="h-9 white:block graytheme:hidden accent:hidden" alt="AL3 Logo3" />
                <img src={ al3_logo_txt } className="w-15 h-5 white:block graytheme:hidden accent:hidden ml-3" alt="AL3 Logo4" />
            </>)
    }
}
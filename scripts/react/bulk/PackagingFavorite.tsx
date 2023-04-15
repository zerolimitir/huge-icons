import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingFavorite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.973 2.059a4.27 4.27 0 0 0-1.693.722c-.331.243-2.242 2.155-2.497 2.499a4.33 4.33 0 0 0-.697 1.55L2.049 7h19.904l-.054-.23a4.293 4.293 0 0 0-.711-1.53c-.288-.385-2.26-2.326-2.568-2.527-.543-.356-1.024-.551-1.615-.654-.466-.082-9.581-.081-10.032 0m2.951 9.364c-.919.247-1.527 1.182-1.372 2.107.099.584.174.686 1.443 1.954 1.221 1.221 1.295 1.278 1.761 1.365.288.053.626.004.918-.134.232-.11 2.254-2.1 2.488-2.449.375-.559.42-1.315.113-1.915-.11-.217-.487-.611-.706-.74-.559-.327-1.341-.336-1.889-.021a2.981 2.981 0 0 0-.43.343l-.25.24-.251-.242c-.516-.495-1.182-.681-1.825-.508'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingFavorite);
export default ForwardRef;

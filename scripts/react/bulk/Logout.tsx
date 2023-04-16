import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.508 3.318c.968.171 1.866.615 2.512 1.244l.2.194 2.2.012 2.2.012.374.131c.541.188.892.408 1.29.805.583.584.877 1.224.95 2.068.041.482.094.628.286.79a.751.751 0 0 0 1.054-.094c.17-.202.204-.398.154-.9-.11-1.107-.518-2.014-1.261-2.803-.462-.491-.782-.729-1.367-1.018a4.585 4.585 0 0 0-1.644-.478c-.222-.022-1.926-.038-3.876-.037-3.477.003-3.48.003-3.072.074M19.38 9.303c-.347.18-.51.522-.416.872.034.128.139.261.46.587.229.232.416.435.416.45 0 .015-1.414.028-3.142.028-3.047 0-3.146.002-3.296.079-.507.258-.533.953-.049 1.285l.141.096 3.179.011 3.178.01-.418.43c-.354.363-.426.458-.467.621a.744.744 0 0 0 .918.908c.152-.041.288-.158.988-.854.715-.709.83-.841.958-1.1.127-.255.148-.339.163-.647.022-.459-.079-.812-.328-1.144-.265-.356-1.501-1.561-1.675-1.633-.189-.079-.457-.079-.61.001m-1.569 5.975a.858.858 0 0 0-.475.37c-.038.072-.08.31-.102.568-.073.844-.367 1.484-.95 2.068-.403.402-.77.632-1.293.81l-.371.126-2.197.012-2.196.011-.254.238c-.663.62-1.511 1.033-2.471 1.202-.399.07-.378.07 3.159.074 3.644.003 3.932-.007 4.519-.157.858-.219 1.482-.584 2.159-1.261.679-.679 1.041-1.3 1.263-2.166.104-.407.175-1.038.142-1.26a.764.764 0 0 0-.933-.635'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
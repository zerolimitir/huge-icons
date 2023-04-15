import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgOpenBoxTwoSide = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.425 4.059c-.323.115-.399.22-1.388 1.902-.676 1.149-.966 1.68-1.001 1.829a.993.993 0 0 0 .472 1.077l.192.113 2.779.011c2.689.011 2.788.009 3.045-.07.343-.104.721-.358.93-.625.091-.117.697-1.122 1.346-2.233.649-1.111 1.189-2.02 1.2-2.02.011 0 .551.91 1.2 2.024.649 1.113 1.256 2.119 1.349 2.234.215.268.587.517.927.62.257.079.356.081 3.045.07L21.3 8.98l.192-.113a.993.993 0 0 0 .472-1.077c-.035-.149-.326-.681-1.001-1.83-1.011-1.722-1.086-1.821-1.434-1.918-.1-.028-2.569-.041-7.549-.04-6.188.001-7.425.011-7.555.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxTwoSide);
export default ForwardRef;

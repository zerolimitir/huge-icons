import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.62 8.041a2.033 2.033 0 0 0-1.51 1.315c-.117.319-.116.971.002 1.294.21.575.652 1.018 1.244 1.244l.224.086h8.84l.224-.086a2.093 2.093 0 0 0 1.244-1.244c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.093 2.093 0 0 0-1.244-1.244c-.224-.086-.229-.086-4.544-.092-2.376-.004-4.392.009-4.48.027m1 8a2.033 2.033 0 0 0-1.51 1.315c-.117.319-.116.971.002 1.294.21.575.652 1.018 1.244 1.244l.224.086h8.84l.224-.086a2.093 2.093 0 0 0 1.244-1.244c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.093 2.093 0 0 0-1.244-1.244c-.224-.086-.229-.086-4.544-.092-2.376-.004-4.392.009-4.48.027'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCoin);
export default ForwardRef;

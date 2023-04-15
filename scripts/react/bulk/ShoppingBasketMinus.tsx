import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShoppingBasketMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.38 6.044a4.657 4.657 0 0 0-1.16.366 4.044 4.044 0 0 0-2.202 3.261L1.99 10h20.02l-.028-.329c-.163-1.863-1.578-3.375-3.397-3.628-.378-.052-12.836-.052-13.205.001m3.32 9.272a.745.745 0 0 0 .029 1.382c.13.054.543.062 3.28.061 2.958-.001 3.14-.005 3.291-.075a.743.743 0 0 0 0-1.368c-.151-.07-.332-.074-3.3-.074s-3.149.004-3.3.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketMinus);
export default ForwardRef;

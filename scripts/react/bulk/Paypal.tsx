import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaypal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.736 6.405c.213.739.283 1.249.25 1.841a4.904 4.904 0 0 1-1.462 3.278c-.713.712-1.538 1.157-2.565 1.382-.25.055-.683.07-2.633.09l-2.334.024L8 15.5l-.991 2.48-.158.012-.157.012-.587 1.468a58.934 58.934 0 0 0-.587 1.499c0 .016 1.01.025 2.244.019l2.244-.01L11 18.5l.992-2.48 2.354-.023c2.049-.02 2.393-.032 2.654-.093 1.019-.238 1.819-.676 2.524-1.38 1.55-1.551 1.91-3.855.907-5.816a4.877 4.877 0 0 0-2.133-2.136 5.999 5.999 0 0 0-.494-.232c-.086-.026-.093-.02-.068.065'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaypal);
export default ForwardRef;

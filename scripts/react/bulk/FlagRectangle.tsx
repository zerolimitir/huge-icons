import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlagRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.68 1.595a1.837 1.837 0 0 0-.83.507c-.34.341-.518.714-.572 1.201-.025.226-.036 2.942-.029 7.377.01 6.518.016 7.029.079 7.144.298.545 1.014.551 1.332.012.078-.133.08-.218.091-4.246l.011-4.11h3.059c3.036 0 3.061-.001 3.241-.085.359-.169.618-.633.562-1.01-.013-.093-.288-.7-.634-1.4-.804-1.627-.804-1.343 0-2.97.346-.7.621-1.307.634-1.4.055-.373-.202-.84-.557-1.011-.17-.083-.21-.084-3.17-.082-2.76.002-3.014.008-3.217.073'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlagRectangle);
export default ForwardRef;

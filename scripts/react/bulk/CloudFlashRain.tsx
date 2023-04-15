import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudFlashRain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='m7 13.388-2.491 2.997-.511.615h3.001l.011 1.988.01 1.988 1.7-2.036 2.488-2.978.788-.942-1.498-.01-1.497-.011-.011-1.996-.01-1.996L7 13.388m8.638 3.992c-.792.898-1.118 1.533-1.118 2.18 0 .905.549 1.439 1.48 1.439.931 0 1.48-.534 1.48-1.439 0-.493-.15-.885-.568-1.49C16.697 17.759 16.05 17 16 17c-.015 0-.178.171-.362.38'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudFlashRain);
export default ForwardRef;

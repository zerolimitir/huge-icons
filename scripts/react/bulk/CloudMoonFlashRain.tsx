import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudMoonFlashRain = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.42 2.043c-1.419.17-2.759.979-3.54 2.137-.167.248-.4.665-.4.716 0 .01.148.116.33.234a7.009 7.009 0 0 1 2.447 2.744c.168.334.197.371.275.348a4.838 4.838 0 0 1 1.448-.199c.667-.002 1.021.049 1.554.222.78.254 1.394.638 2.022 1.267l.457.457.072-.095c.144-.19.415-.696.541-1.011a4.972 4.972 0 0 0-2.084-6.147 4.698 4.698 0 0 0-1.462-.58 5.62 5.62 0 0 0-1.66-.093M7 14.388l-2.491 2.997-.511.615h3.001l.011 1.988.01 1.988 1.7-2.036 2.488-2.978.788-.942-1.498-.01-1.497-.011-.011-1.996-.01-1.996L7 14.388m8.638 3.992c-.792.898-1.118 1.533-1.118 2.18 0 .905.549 1.439 1.48 1.439.931 0 1.48-.534 1.48-1.439 0-.493-.15-.885-.568-1.49C16.697 18.759 16.05 18 16 18c-.015 0-.178.171-.362.38'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonFlashRain);
export default ForwardRef;

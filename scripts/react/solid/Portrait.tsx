import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortrait = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.503 3.041c-1.02.176-1.947.935-2.301 1.884-.208.556-.201.308-.201 7.067-.001 5.509.007 6.328.061 6.589a2.993 2.993 0 0 0 2.357 2.357c.44.091 4.722.091 5.162 0a3.003 3.003 0 0 0 2.357-2.357C16.992 18.321 17 17.5 17 12c0-6.877.011-6.551-.234-7.151a2.99 2.99 0 0 0-1.47-1.537c-.622-.299-.483-.286-3.176-.296-1.331-.005-2.509.007-2.617.025M4.811 5.278a.883.883 0 0 0-.481.374c-.066.12-.071.509-.081 6.262-.007 4.394.003 6.18.034 6.298a.803.803 0 0 0 .515.507.745.745 0 0 0 .921-.517c.029-.104.039-2.139.032-6.288-.011-6.1-.011-6.135-.093-6.273a.807.807 0 0 0-.847-.363m14 0a.883.883 0 0 0-.481.374c-.066.12-.071.509-.081 6.262-.007 4.394.003 6.18.034 6.298a.803.803 0 0 0 .515.507.745.745 0 0 0 .921-.517c.029-.104.039-2.139.032-6.288-.011-6.1-.011-6.135-.093-6.273a.807.807 0 0 0-.847-.363'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortrait);
export default ForwardRef;

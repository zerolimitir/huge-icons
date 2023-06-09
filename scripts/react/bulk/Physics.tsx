import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPhysics = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.96 2.285c-2.074.204-4.925 1.637-7.58 3.81a27.62 27.62 0 0 0-2.262 2.063c-2.106 2.108-3.639 4.161-4.7 6.294-.798 1.605-1.153 2.859-1.151 4.068.001.537.014.672.103 1.003.355 1.331 1.349 2.111 2.829 2.221 2.09.154 5.369-1.341 8.421-3.839a31.778 31.778 0 0 0 4.285-4.285c1.946-2.377 3.283-4.868 3.715-6.92.478-2.274-.396-3.988-2.22-4.353a5.437 5.437 0 0 0-1.44-.062m1.355 1.588c.608.236.874.651.915 1.431.083 1.587-.914 3.902-2.772 6.436-3.106 4.234-7.988 7.897-11.251 8.441-.544.091-1.213.067-1.522-.053-.436-.17-.68-.423-.833-.862-.106-.305-.097-1.23.017-1.746.738-3.326 4.286-7.967 8.391-10.978 2.067-1.515 3.957-2.445 5.54-2.726.448-.079 1.242-.049 1.515.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPhysics);
export default ForwardRef;

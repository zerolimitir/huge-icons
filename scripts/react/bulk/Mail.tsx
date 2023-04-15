import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMail = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.7 7.316c-.38.175-.552.587-.398.954a.932.932 0 0 0 .13.224c.114.13 4.214 2.845 4.503 2.983.689.329 1.274.459 2.065.459.791 0 1.376-.13 2.065-.459.308-.146 4.388-2.855 4.522-3.002a.762.762 0 0 0 .131-.742.982.982 0 0 0-.427-.438.758.758 0 0 0-.603.021c-.081.042-1.021.657-2.088 1.366-1.067.709-2.062 1.351-2.21 1.425-.437.221-.812.302-1.39.302-.54 0-.898-.071-1.32-.259-.121-.055-1.138-.707-2.26-1.45-1.122-.743-2.098-1.376-2.169-1.406a.655.655 0 0 0-.551.022'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMail);
export default ForwardRef;

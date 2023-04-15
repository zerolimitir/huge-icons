import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSearchShort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.14 2.042a9.669 9.669 0 0 0-2.622.667C4.589 3.951 2.587 6.54 2.094 9.721c-.098.634-.098 1.924 0 2.558.452 2.917 2.174 5.344 4.751 6.696 2.626 1.377 5.912 1.346 8.457-.08l.55-.308c.342-.19 1.038-.755 1.509-1.226.471-.471 1.036-1.167 1.226-1.509l.308-.55c.914-1.632 1.285-3.707 1.003-5.612a9.013 9.013 0 0 0-7.578-7.588c-.511-.078-1.688-.111-2.18-.06'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSearchShort);
export default ForwardRef;

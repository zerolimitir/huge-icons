import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLockers = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 2H5a3 3 0 0 0-3 3v1.25h9.25V2ZM2 17V7.75h9.25V20h-5.5v2a.75.75 0 0 1-1.5 0v-2c0-.032.002-.063.006-.093A3.001 3.001 0 0 1 2 17Zm10.75 3V7.75H22V17c0 1.4-.959 2.576-2.256 2.907a.75.75 0 0 1 .006.093v2a.75.75 0 0 1-1.5 0v-2h-5.5ZM22 5v1.25h-9.25V2H19a3 3 0 0 1 3 3ZM8.25 14a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0v2Zm6.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLockers);
export default ForwardRef;

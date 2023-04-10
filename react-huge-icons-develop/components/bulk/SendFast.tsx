import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSendFast = (
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
            d='M20.684 9.872 9.454 4.26c-1.998-.998-4.147 1.055-3.24 3.094l1.636 3.68a2.378 2.378 0 0 1 0 1.932l-1.636 3.68c-.907 2.04 1.242 4.092 3.24 3.094l11.23-5.612c1.755-.877 1.755-3.38 0-4.256Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.75 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75Zm-6.5-2A.75.75 0 0 1 2 9.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSendFast);
export default ForwardRef;

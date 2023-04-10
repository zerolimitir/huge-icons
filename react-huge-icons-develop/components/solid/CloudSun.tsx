import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSun = (
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
            d='M15 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM2 14a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 14Zm18.48-8.42a.75.75 0 0 0-1.06-1.06l-.708.707a.75.75 0 0 0 1.06 1.06l.708-.707ZM22.75 10a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75ZM15 6a4 4 0 0 1 3.996 3.813 6.497 6.497 0 0 0-2.756-.269 8.534 8.534 0 0 0-3.207-3.028A3.982 3.982 0 0 1 15 6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSun);
export default ForwardRef;

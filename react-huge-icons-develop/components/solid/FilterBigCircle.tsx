import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterBigCircle = (
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
            d='M9 11a3 3 0 1 0-2.905-3.75H3a.75.75 0 0 0 0 1.5h3.095A3.001 3.001 0 0 0 9 11Zm-6 4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5H3ZM15 19a3.001 3.001 0 0 0 2.905-2.25H21a.75.75 0 0 0 0-1.5h-3.095A3.001 3.001 0 0 0 12 16a3 3 0 0 0 3 3ZM14 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterBigCircle);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgZoomText = (
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
            d='M2 3.25a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5H2Zm14 5.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM9.25 14a6.75 6.75 0 1 1 12.024 4.213l1.256 1.257a.75.75 0 1 1-1.06 1.06l-1.257-1.256A6.75 6.75 0 0 1 9.25 14ZM2 13.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H2ZM1.25 9A.75.75 0 0 1 2 8.25h5a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgZoomText);
export default ForwardRef;

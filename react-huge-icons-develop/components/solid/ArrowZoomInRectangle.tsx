import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowZoomInRectangle = (
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
            d='M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm7 4.25a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72V7a.75.75 0 0 0-.75-.75ZM6.25 13c0 .414.336.75.75.75h2.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72V17a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0-.75.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowZoomInRectangle);
export default ForwardRef;

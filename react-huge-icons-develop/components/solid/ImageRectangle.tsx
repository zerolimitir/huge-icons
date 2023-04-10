import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgImageRectangle = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6.449l-2.247-1.47a4.75 4.75 0 0 0-5.609.298l-5.238 4.285a3.25 3.25 0 0 1-3.838.204L2 13.758V6Zm16.932 6.234L22 14.242V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-2.45l2.247 1.471a4.75 4.75 0 0 0 5.609-.298l5.238-4.285a3.25 3.25 0 0 1 3.838-.204ZM8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImageRectangle);
export default ForwardRef;

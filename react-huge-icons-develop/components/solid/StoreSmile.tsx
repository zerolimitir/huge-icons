import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStoreSmile = (
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
            d='M22 6v2.25c0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.84 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75C3.493 12 2 10.321 2 8.25V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4Zm-3.333 7.5c-1.338 0-2.49-.563-3.334-1.444-.844.881-1.996 1.444-3.333 1.444-1.337 0-2.49-.563-3.333-1.444-.844.881-1.997 1.444-3.334 1.444A4.5 4.5 0 0 1 3 12.857V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-5.143a4.5 4.5 0 0 1-2.333.643Zm-3.014 4.132a.75.75 0 0 1-.285 1.021c-1.215.685-2.261 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.646 1.911.903 2.629.902.72-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStoreSmile);
export default ForwardRef;

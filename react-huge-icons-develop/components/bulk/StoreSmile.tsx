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
        <path fill='currentColor' d='M21 18V7H3v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M22 8.25V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2.25C2 10.321 3.492 12 5.333 12c1.841 0 3.334-1.679 3.334-3.75C8.667 10.321 10.159 12 12 12c1.84 0 3.333-1.679 3.333-3.75 0 2.071 1.493 3.75 3.334 3.75C20.507 12 22 10.321 22 8.25Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.653 17.632a.75.75 0 0 1-.285 1.021c-1.215.686-2.262 1.095-3.365 1.097-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.647 1.911.904 2.629.902.719-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStoreSmile);
export default ForwardRef;

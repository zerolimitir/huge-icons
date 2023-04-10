import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBagSmile = (
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
            d='M4.562 9.504A4 4 0 0 1 8.532 6h6.937a4 4 0 0 1 3.969 3.504l1 8A4 4 0 0 1 16.468 22H7.532a4 4 0 0 1-3.969-4.496l1-8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.25 5a3.75 3.75 0 1 1 7.5 0v2a.75.75 0 0 1-1.5 0V5a2.25 2.25 0 0 0-4.5 0v2a.75.75 0 0 1-1.5 0V5Zm7.403 10.632a.75.75 0 0 1-.285 1.022c-1.215.685-2.262 1.094-3.365 1.096-1.105.002-2.154-.404-3.374-1.098a.75.75 0 1 1 .742-1.304c1.136.647 1.911.903 2.629.902.719-.001 1.494-.262 2.632-.903a.75.75 0 0 1 1.021.285Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBagSmile);
export default ForwardRef;

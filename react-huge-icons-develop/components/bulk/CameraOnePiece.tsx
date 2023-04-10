import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePiece = (
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
            d='M8.406 3.89 7 6H6a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4h-1l-1.406-2.11A2 2 0 0 0 13.93 3h-3.86a2 2 0 0 0-1.664.89Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M15 13.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
        <circle cx={12} cy={6} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePiece);
export default ForwardRef;

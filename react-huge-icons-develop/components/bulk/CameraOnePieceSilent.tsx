import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraOnePieceSilent = (
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
        <path
            fill='currentColor'
            d='M15 13.5a3 3 0 0 0-3.411-2.972l3.383 3.383c.019-.134.028-.271.028-.411Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.605 20.665A3.987 3.987 0 0 1 18 21H6a4 4 0 0 1-4-4v-7c0-1.883 1.3-3.461 3.052-3.887L1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06l-1.865-1.865ZM12 16.5a3 3 0 0 1-1.89-5.33l4.22 4.22A2.995 2.995 0 0 1 12 16.5Z'
            clipRule='evenodd'
        />
        <circle cx={12} cy={6} r={1} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraOnePieceSilent);
export default ForwardRef;

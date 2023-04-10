import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoadPinHorizontal = (
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
            d='M14 4a2 2 0 0 1-1.25 1.855V8h-1.5V5.855A2 2 0 1 1 14 4Zm-2.75 4v3a.75.75 0 0 0 1.5 0V8H18a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h5.25Zm2 7a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Zm3.75-.75a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM8.75 15a.75.75 0 0 0-.75-.75H7a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPinHorizontal);
export default ForwardRef;

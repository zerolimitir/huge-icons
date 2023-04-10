import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRedoRectangleLeft = (
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
            d='M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.41 6.75a.75.75 0 0 0-.75.75V10a.75.75 0 0 0 .564.727l1.965.5a.75.75 0 1 0 .37-1.454l-.833-.212a3.25 3.25 0 1 1-1 3.252.75.75 0 1 0-1.452.374A4.752 4.752 0 0 0 16.624 12a4.75 4.75 0 0 0-7.465-3.898V7.5a.75.75 0 0 0-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRedoRectangleLeft);
export default ForwardRef;

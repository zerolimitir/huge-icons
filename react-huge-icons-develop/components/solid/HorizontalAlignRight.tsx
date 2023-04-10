import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHorizontalAlignRight = (
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
            d='M20.75 1.75a.75.75 0 0 0-1.5 0v2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h13.25v4H12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h7.25v2a.75.75 0 0 0 1.5 0v-20Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalAlignRight);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPortrait = (
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
            d='M3.75 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5Zm19.5-14a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5ZM10 3.75h4v-1.5h-4v1.5ZM16.25 6v12h1.5V6h-1.5ZM14 20.25h-4v1.5h4v-1.5ZM7.75 18V6h-1.5v12h1.5ZM10 20.25A2.25 2.25 0 0 1 7.75 18h-1.5A3.75 3.75 0 0 0 10 21.75v-1.5ZM16.25 18A2.25 2.25 0 0 1 14 20.25v1.5A3.75 3.75 0 0 0 17.75 18h-1.5ZM14 3.75A2.25 2.25 0 0 1 16.25 6h1.5A3.75 3.75 0 0 0 14 2.25v1.5Zm-4-1.5A3.75 3.75 0 0 0 6.25 6h1.5A2.25 2.25 0 0 1 10 3.75v-1.5ZM2.25 5v14h1.5V5h-1.5Zm18 0v14h1.5V5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortrait);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutAlignRight = (
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
            d='M22 10h.75H22Zm-3-3v-.75V7Zm0 10v-.75.75Zm3-3h-.75.75ZM6 14h.75H6Zm3 3v.75V17Zm-3-7h-.75H6Zm3-3v.75V7ZM2.75 5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5Zm4-9v4h1.5v-4h-1.5ZM9 17.75h10v-1.5H9v1.5ZM22.75 14v-4h-1.5v4h1.5ZM19 6.25H9v1.5h10v-1.5ZM22.75 10A3.75 3.75 0 0 0 19 6.25v1.5A2.25 2.25 0 0 1 21.25 10h1.5ZM19 17.75A3.75 3.75 0 0 0 22.75 14h-1.5A2.25 2.25 0 0 1 19 16.25v1.5ZM5.25 14A3.75 3.75 0 0 0 9 17.75v-1.5A2.25 2.25 0 0 1 6.75 14h-1.5Zm1.5-4A2.25 2.25 0 0 1 9 7.75v-1.5A3.75 3.75 0 0 0 5.25 10h1.5Zm-5.5-5v14h1.5V5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutAlignRight);
export default ForwardRef;

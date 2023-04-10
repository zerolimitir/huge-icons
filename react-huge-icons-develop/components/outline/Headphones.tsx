import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHeadphones = (
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
            d='M20.25 16v2h1.5v-2h-1.5Zm-4.5 2v-2h-1.5v2h1.5ZM18 20.25A2.25 2.25 0 0 1 15.75 18h-1.5A3.75 3.75 0 0 0 18 21.75v-1.5ZM20.25 18A2.25 2.25 0 0 1 18 20.25v1.5A3.75 3.75 0 0 0 21.75 18h-1.5ZM18 13.75A2.25 2.25 0 0 1 20.25 16h1.5A3.75 3.75 0 0 0 18 12.25v1.5Zm0-1.5A3.75 3.75 0 0 0 14.25 16h1.5A2.25 2.25 0 0 1 18 13.75v-1.5ZM8.25 16v2h1.5v-2h-1.5Zm-4.5 2v-2h-1.5v2h1.5ZM6 20.25A2.25 2.25 0 0 1 3.75 18h-1.5A3.75 3.75 0 0 0 6 21.75v-1.5ZM8.25 18A2.25 2.25 0 0 1 6 20.25v1.5A3.75 3.75 0 0 0 9.75 18h-1.5ZM6 13.75A2.25 2.25 0 0 1 8.25 16h1.5A3.75 3.75 0 0 0 6 12.25v1.5Zm0-1.5A3.75 3.75 0 0 0 2.25 16h1.5A2.25 2.25 0 0 1 6 13.75v-1.5ZM3.75 16v-4h-1.5v4h1.5Zm16.5-4v4h1.5v-4h-1.5ZM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5A9.75 9.75 0 0 0 12 2.25v1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5A9.75 9.75 0 0 0 2.25 12h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHeadphones);
export default ForwardRef;

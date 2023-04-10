import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWindLow = (
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
            d='M13.25 12a.75.75 0 0 0 1.5 0h-1.5ZM2 15.25a.75.75 0 0 0 0 1.5v-1.5ZM21.25 12A3.25 3.25 0 0 1 18 15.25v1.5A4.75 4.75 0 0 0 22.75 12h-1.5Zm-6.5 0A3.25 3.25 0 0 1 18 8.75v-1.5A4.75 4.75 0 0 0 13.25 12h1.5ZM18 8.75A3.25 3.25 0 0 1 21.25 12h1.5A4.75 4.75 0 0 0 18 7.25v1.5Zm0 6.5H2v1.5h16v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindLow);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWindHigh = (
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
            d='M13.25 8a.75.75 0 0 0 1.5 0h-1.5ZM2 11.25a.75.75 0 0 0 0 1.5v-1.5ZM4.25 5a.75.75 0 0 0 1.5 0h-1.5ZM2 7.25a.75.75 0 0 0 0 1.5v-1.5ZM10.75 19a.75.75 0 0 0-1.5 0h1.5ZM2 15.25a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8A3.25 3.25 0 0 1 18 11.25v1.5A4.75 4.75 0 0 0 22.75 8h-1.5Zm-6.5 0A3.25 3.25 0 0 1 18 4.75v-1.5A4.75 4.75 0 0 0 13.25 8h1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5Zm0 6.5H2v1.5h16v-1.5ZM10.25 5A2.25 2.25 0 0 1 8 7.25v1.5A3.75 3.75 0 0 0 11.75 5h-1.5Zm-4.5 0A2.25 2.25 0 0 1 8 2.75v-1.5A3.75 3.75 0 0 0 4.25 5h1.5ZM8 2.75A2.25 2.25 0 0 1 10.25 5h1.5A3.75 3.75 0 0 0 8 1.25v1.5Zm0 4.5H2v1.5h6v-1.5ZM16.75 19A3.75 3.75 0 0 0 13 15.25v1.5A2.25 2.25 0 0 1 15.25 19h1.5Zm-7.5 0A3.75 3.75 0 0 0 13 22.75v-1.5A2.25 2.25 0 0 1 10.75 19h-1.5ZM13 22.75A3.75 3.75 0 0 0 16.75 19h-1.5A2.25 2.25 0 0 1 13 21.25v1.5Zm0-7.5H2v1.5h11v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindHigh);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWindMid = (
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
            d='M13.25 13a.75.75 0 0 0 1.5 0h-1.5ZM2 16.25a.75.75 0 0 0 0 1.5v-1.5ZM4.25 10a.75.75 0 0 0 1.5 0h-1.5ZM2 12.25a.75.75 0 0 0 0 1.5v-1.5Zm19.25.75A3.25 3.25 0 0 1 18 16.25v1.5A4.75 4.75 0 0 0 22.75 13h-1.5Zm-6.5 0A3.25 3.25 0 0 1 18 9.75v-1.5A4.75 4.75 0 0 0 13.25 13h1.5ZM18 9.75A3.25 3.25 0 0 1 21.25 13h1.5A4.75 4.75 0 0 0 18 8.25v1.5Zm0 6.5H2v1.5h16v-1.5ZM10.25 10A2.25 2.25 0 0 1 8 12.25v1.5A3.75 3.75 0 0 0 11.75 10h-1.5Zm-4.5 0A2.25 2.25 0 0 1 8 7.75v-1.5A3.75 3.75 0 0 0 4.25 10h1.5ZM8 7.75A2.25 2.25 0 0 1 10.25 10h1.5A3.75 3.75 0 0 0 8 6.25v1.5Zm0 4.5H2v1.5h6v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindMid);
export default ForwardRef;

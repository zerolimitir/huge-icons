import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMatrix = (
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
            d='M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2-5.75a.75.75 0 0 0 0 1.5v-1.5Zm0 20a.75.75 0 0 0 0 1.5v-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm0 20a.75.75 0 0 0 0-1.5v1.5Zm8-20h2v-1.5h-2v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25h-2v1.5h2v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM8 1.25H6v1.5h2v-1.5ZM1.25 6v12h1.5V6h-1.5ZM6 22.75h2v-1.5H6v1.5ZM1.25 18A4.75 4.75 0 0 0 6 22.75v-1.5A3.25 3.25 0 0 1 2.75 18h-1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMatrix);
export default ForwardRef;

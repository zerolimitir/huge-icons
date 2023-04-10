import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAppsDoubleCircle = (
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
            d='M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5Zm-1-10h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6 14.75h2v-1.5H6v1.5ZM9.25 16v2h1.5v-2h-1.5ZM8 19.25H6v1.5h2v-1.5ZM4.75 18v-2h-1.5v2h1.5ZM6 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 6 20.75v-1.5ZM9.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 10.75 18h-1.5ZM8 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 8 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 3.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsDoubleCircle);
export default ForwardRef;

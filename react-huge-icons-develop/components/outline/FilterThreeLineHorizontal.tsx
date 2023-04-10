import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLineHorizontal = (
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
            d='M3 4.25a.75.75 0 0 0 0 1.5v-1.5Zm0 7a.75.75 0 0 0 0 1.5v-1.5Zm9 1.5a.75.75 0 0 0 0-1.5v1.5Zm9 0a.75.75 0 0 0 0-1.5v1.5Zm0-7a.75.75 0 0 0 0-1.5v1.5Zm-9 12.5a.75.75 0 0 0 0 1.5v-1.5Zm9 1.5a.75.75 0 0 0 0-1.5v1.5Zm-18-1.5a.75.75 0 0 0 0 1.5v-1.5Zm0-12.5h7v-1.5H3v1.5Zm0 7h9v-1.5H3v1.5Zm16 0h2v-1.5h-2v1.5Zm-5-7h7v-1.5h-7v1.5Zm-2 14h9v-1.5h-9v1.5Zm-9 0h2v-1.5H3v1.5ZM8.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 9.75 19h-1.5ZM7 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 21.75v-1.5ZM5.75 19c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 19h1.5ZM7 17.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 7 16.25v1.5ZM18.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 19.75 12h-1.5ZM17 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 17 14.75v-1.5ZM15.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 14.25 12h1.5ZM17 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 17 9.25v1.5ZM13.25 5c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 5h-1.5ZM12 6.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 7.75v-1.5ZM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineHorizontal);
export default ForwardRef;

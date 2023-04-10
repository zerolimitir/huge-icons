import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterTwoLineVertical = (
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
            d='M6.25 21a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm0-13a.75.75 0 0 0-1.5 0h1.5Zm8.5 5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm-1.5 18a.75.75 0 0 0 1.5 0h-1.5Zm-8.5 0v-5h-1.5v5h1.5Zm0-16V3h-1.5v2h1.5Zm10 3V3h-1.5v5h1.5Zm0 13v-2h-1.5v2h1.5Zm-13-11V8h-1.5v2h1.5Zm4.5-2v2h1.5V8h-1.5Zm0 2A2.25 2.25 0 0 1 7 12.25v1.5A3.75 3.75 0 0 0 10.75 10h-1.5ZM7 5.75A2.25 2.25 0 0 1 9.25 8h1.5A3.75 3.75 0 0 0 7 4.25v1.5ZM4.75 8A2.25 2.25 0 0 1 7 5.75v-1.5A3.75 3.75 0 0 0 3.25 8h1.5Zm-1.5 2A3.75 3.75 0 0 0 7 13.75v-1.5A2.25 2.25 0 0 1 4.75 10h-1.5Zm11.5 6v-2h-1.5v2h1.5Zm4.5-2v2h1.5v-2h-1.5Zm0 2A2.25 2.25 0 0 1 17 18.25v1.5A3.75 3.75 0 0 0 20.75 16h-1.5ZM17 11.75A2.25 2.25 0 0 1 19.25 14h1.5A3.75 3.75 0 0 0 17 10.25v1.5ZM14.75 14A2.25 2.25 0 0 1 17 11.75v-1.5A3.75 3.75 0 0 0 13.25 14h1.5Zm-1.5 2A3.75 3.75 0 0 0 17 19.75v-1.5A2.25 2.25 0 0 1 14.75 16h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterTwoLineVertical);
export default ForwardRef;

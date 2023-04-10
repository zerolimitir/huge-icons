import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAppsCircle = (
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
            d='M9.25 7A2.25 2.25 0 0 1 7 9.25v1.5A3.75 3.75 0 0 0 10.75 7h-1.5ZM7 9.25A2.25 2.25 0 0 1 4.75 7h-1.5A3.75 3.75 0 0 0 7 10.75v-1.5ZM4.75 7A2.25 2.25 0 0 1 7 4.75v-1.5A3.75 3.75 0 0 0 3.25 7h1.5ZM7 4.75A2.25 2.25 0 0 1 9.25 7h1.5A3.75 3.75 0 0 0 7 3.25v1.5ZM19.25 17A2.25 2.25 0 0 1 17 19.25v1.5A3.75 3.75 0 0 0 20.75 17h-1.5ZM17 19.25A2.25 2.25 0 0 1 14.75 17h-1.5A3.75 3.75 0 0 0 17 20.75v-1.5ZM14.75 17A2.25 2.25 0 0 1 17 14.75v-1.5A3.75 3.75 0 0 0 13.25 17h1.5ZM17 14.75A2.25 2.25 0 0 1 19.25 17h1.5A3.75 3.75 0 0 0 17 13.25v1.5ZM9.25 17A2.25 2.25 0 0 1 7 19.25v1.5A3.75 3.75 0 0 0 10.75 17h-1.5ZM7 19.25A2.25 2.25 0 0 1 4.75 17h-1.5A3.75 3.75 0 0 0 7 20.75v-1.5ZM4.75 17A2.25 2.25 0 0 1 7 14.75v-1.5A3.75 3.75 0 0 0 3.25 17h1.5ZM7 14.75A2.25 2.25 0 0 1 9.25 17h1.5A3.75 3.75 0 0 0 7 13.25v1.5ZM19.25 7A2.25 2.25 0 0 1 17 9.25v1.5A3.75 3.75 0 0 0 20.75 7h-1.5ZM17 9.25A2.25 2.25 0 0 1 14.75 7h-1.5A3.75 3.75 0 0 0 17 10.75v-1.5ZM14.75 7A2.25 2.25 0 0 1 17 4.75v-1.5A3.75 3.75 0 0 0 13.25 7h1.5ZM17 4.75A2.25 2.25 0 0 1 19.25 7h1.5A3.75 3.75 0 0 0 17 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsCircle);
export default ForwardRef;

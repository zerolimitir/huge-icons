import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVinyl = (
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
            d='M12 5.25a.75.75 0 0 0 0 1.5v-1.5ZM17.25 12a.75.75 0 0 0 1.5 0h-1.5Zm4 0A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm0 4c2.9 0 5.25 2.35 5.25 5.25h1.5A6.75 6.75 0 0 0 12 5.25v1.5ZM14.75 12A2.75 2.75 0 0 0 12 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM12 9.25A2.75 2.75 0 0 0 9.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM9.25 12A2.75 2.75 0 0 0 12 14.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM12 14.75A2.75 2.75 0 0 0 14.75 12h-1.5c0 .69-.56 1.25-1.25 1.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVinyl);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgVinylPlayer = (
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
            d='M6.75 12a.75.75 0 0 0-1.5 0h1.5ZM12 18.75a.75.75 0 0 0 0-1.5v1.5ZM22.75 2a.75.75 0 0 0-1.5 0h1.5Zm-1.47 3.6-.48-.576.48.576Zm-5.76 3.824a.75.75 0 0 0 .96 1.152l-.96-1.152ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5ZM14.75 12A2.75 2.75 0 0 0 12 9.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM12 9.25A2.75 2.75 0 0 0 9.25 12h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM9.25 12A2.75 2.75 0 0 0 12 14.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM12 14.75A2.75 2.75 0 0 0 14.75 12h-1.5c0 .69-.56 1.25-1.25 1.25v1.5ZM5.25 12A6.75 6.75 0 0 0 12 18.75v-1.5A5.25 5.25 0 0 1 6.75 12h-1.5Zm16-10v2.063h1.5V2h-1.5Zm-.45 3.024-5.28 4.4.96 1.152 5.28-4.4-.96-1.152Zm.45-.96c0 .37-.165.722-.45.96l.96 1.152a2.75 2.75 0 0 0 .99-2.113h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgVinylPlayer);
export default ForwardRef;

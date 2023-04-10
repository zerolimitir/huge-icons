import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExchange = (
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
            d='M3.25 13a.75.75 0 0 0 1.5 0h-1.5ZM20 7v.75a.75.75 0 0 0 .53-1.28L20 7Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM4.75 13v-1h-1.5v1h1.5ZM9 7.75h11v-1.5H9v1.5Zm11.53-1.28-3-3-1.06 1.06 3 3 1.06-1.06ZM4.75 12A4.25 4.25 0 0 1 9 7.75v-1.5A5.75 5.75 0 0 0 3.25 12h1.5Zm16-1a.75.75 0 0 0-1.5 0h1.5ZM4 17v-.75a.75.75 0 0 0-.53 1.28L4 17Zm2.47 3.53a.75.75 0 0 0 1.06-1.06l-1.06 1.06ZM19.25 11v1h1.5v-1h-1.5ZM15 16.25H4v1.5h11v-1.5ZM3.47 17.53l3 3 1.06-1.06-3-3-1.06 1.06ZM19.25 12A4.25 4.25 0 0 1 15 16.25v1.5A5.75 5.75 0 0 0 20.75 12h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchange);
export default ForwardRef;

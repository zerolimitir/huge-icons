import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCollection = (
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
            d='M10 13.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10-3h16v-1.5H4v1.5ZM21.25 13v4h1.5v-4h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17v-4h-1.5v4h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM20 11.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 10.25v1.5Zm-16-1.5A2.75 2.75 0 0 0 1.25 13h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2-2.5h12v-1.5H6v1.5ZM19.25 9v2h1.5V9h-1.5Zm-14.5 2V9h-1.5v2h1.5ZM18 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 6.25v1.5ZM6 6.25A2.75 2.75 0 0 0 3.25 9h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2-2.5h8v-1.5H8v1.5ZM17.25 5v2h1.5V5h-1.5ZM6.75 7V5h-1.5v2h1.5ZM16 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 2.25v1.5Zm-8-1.5A2.75 2.75 0 0 0 5.25 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm2 12.5h4v-1.5h-4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCollection);
export default ForwardRef;

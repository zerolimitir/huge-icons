import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailBox = (
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
            d='M16.25 22a.75.75 0 0 0 1.5 0h-1.5ZM14 19v-.75a.75.75 0 0 0-.75.75H14Zm-.75 3a.75.75 0 0 0 1.5 0h-1.5Zm2-15a.75.75 0 0 0 1.5 0h-1.5ZM19 2.75a.75.75 0 0 0 0-1.5v1.5ZM17.75 22v-3h-1.5v3h1.5ZM17 18.25h-3v1.5h3v-1.5Zm-3.75.75v3h1.5v-3h-1.5Zm-1-9v5h1.5v-5h-1.5ZM9 18.25H7v1.5h2v-1.5ZM3.75 15v-5h-1.5v5h1.5ZM7 18.25A3.25 3.25 0 0 1 3.75 15h-1.5A4.75 4.75 0 0 0 7 19.75v-1.5ZM12.25 15A3.25 3.25 0 0 1 9 18.25v1.5A4.75 4.75 0 0 0 13.75 15h-1.5ZM8 5.75A4.25 4.25 0 0 1 12.25 10h1.5A5.75 5.75 0 0 0 8 4.25v1.5Zm0-1.5A5.75 5.75 0 0 0 2.25 10h1.5A4.25 4.25 0 0 1 8 5.75v-1.5Zm0 1.5h8v-1.5H8v1.5ZM20.25 10v5h1.5v-5h-1.5ZM17 18.25H7v1.5h10v-1.5ZM20.25 15A3.25 3.25 0 0 1 17 18.25v1.5A4.75 4.75 0 0 0 21.75 15h-1.5ZM16 5.75A4.25 4.25 0 0 1 20.25 10h1.5A5.75 5.75 0 0 0 16 4.25v1.5ZM16.75 7V4h-1.5v3h1.5ZM18 2.75h1v-1.5h-1v1.5ZM16.75 4c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 15.25 4h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailBox);
export default ForwardRef;

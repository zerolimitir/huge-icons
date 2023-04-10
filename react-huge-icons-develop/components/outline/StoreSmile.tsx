import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStoreSmile = (
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
            d='M16.083 8.25a.75.75 0 0 0-1.5 0h1.5Zm-6.666 0a.75.75 0 0 0-1.5 0h1.5ZM21.25 6v2.25h1.5V6h-1.5Zm-2.583 5.25c-1.347 0-2.584-1.258-2.584-3h-1.5c0 2.4 1.748 4.5 4.084 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.335 0 4.083-2.1 4.083-4.5h-1.5Zm-9.25 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.747 4.5 4.083 4.5v-1.5Zm2.583-3c0 1.742-1.237 3-2.583 3v1.5c2.336 0 4.083-2.1 4.083-4.5h-1.5Zm-11.833 0V6h-1.5v2.25h1.5Zm2.583 3c-1.346 0-2.583-1.258-2.583-3h-1.5c0 2.4 1.748 4.5 4.083 4.5v-1.5Zm2.584-3c0 1.742-1.238 3-2.584 3v1.5c2.336 0 4.084-2.1 4.084-4.5h-1.5ZM18 1.25H6v1.5h12v-1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5Zm20 0A4.75 4.75 0 0 0 18 1.25v1.5A3.25 3.25 0 0 1 21.25 6h1.5ZM9.37 17.348a.75.75 0 1 0-.74 1.304l.74-1.304Zm5.998 1.305a.75.75 0 1 0-.736-1.306l.736 1.306Zm-6.739-.001c1.22.694 2.269 1.1 3.374 1.098 1.104-.002 2.15-.412 3.365-1.097l-.736-1.306c-1.138.64-1.913.902-2.632.903-.718.001-1.493-.256-2.63-.902l-.74 1.304Z'
        />
        <path
            fill='currentColor'
            d='M20.25 11v7h1.5v-7h-1.5ZM17 21.25H7v1.5h10v-1.5ZM3.75 18v-7h-1.5v7h1.5ZM7 21.25A3.25 3.25 0 0 1 3.75 18h-1.5A4.75 4.75 0 0 0 7 22.75v-1.5ZM20.25 18A3.25 3.25 0 0 1 17 21.25v1.5A4.75 4.75 0 0 0 21.75 18h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStoreSmile);
export default ForwardRef;

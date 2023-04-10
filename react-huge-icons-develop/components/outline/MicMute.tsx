import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicMute = (
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
            d='M20.47 21.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM3.53 2.22a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm4.22 4.53a.75.75 0 0 0-1.5 0h1.5Zm-3 5a.75.75 0 0 0-1.5 0h1.5Zm16 0a.75.75 0 0 0-1.5 0h1.5Zm-1.684 3.63a.75.75 0 0 0 1.462.335l-1.462-.335Zm-2.816-2.63a.75.75 0 0 0 1.5 0h-1.5ZM7.4 3.3a.75.75 0 0 0 1.2.9l-1.2-.9Zm9.647 13.207a.75.75 0 1 0-1.316-.72l1.316.72Zm1.994 2.439a.75.75 0 0 0-1.206-.892l1.206.892Zm2.49 1.274-18-18L2.47 3.28l18 18 1.06-1.06ZM6.25 6.75v7h1.5v-7h-1.5Zm0 7A5.75 5.75 0 0 0 12 19.5V18a4.25 4.25 0 0 1-4.25-4.25h-1.5ZM12 2.5a4.25 4.25 0 0 1 4.25 4.25h1.5A5.75 5.75 0 0 0 12 1v1.5Zm-8.75 9.25v2h1.5v-2h-1.5Zm17.5 2v-2h-1.5v2h1.5ZM12 21a7.25 7.25 0 0 1-7.25-7.25h-1.5A8.75 8.75 0 0 0 12 22.5V21Zm8.528-5.285c.146-.632.222-1.29.222-1.965h-1.5c0 .561-.064 1.106-.184 1.63l1.462.335ZM17.75 12.75v-6h-1.5v6h1.5ZM12 1a5.742 5.742 0 0 0-4.6 2.3l1.2.9A4.242 4.242 0 0 1 12 2.5V1Zm0 18.5a5.749 5.749 0 0 0 5.047-2.993l-1.316-.72A4.249 4.249 0 0 1 12 18v1.5Zm0 3a8.74 8.74 0 0 0 7.041-3.554l-1.206-.892A7.238 7.238 0 0 1 12 21v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicMute);
export default ForwardRef;

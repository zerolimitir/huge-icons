import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrophy = (
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
            d='M6 5h.75H6Zm2-2v.75V3Zm-2 8h.75H6Zm12 0h-.75.75Zm0-6h.75H18Zm-2-2v-.75V3ZM9 20.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM6 7h-.75H6Zm12 0h.75H18Zm-.75-2v6h1.5V5h-1.5Zm-10.5 6V5h-1.5v6h1.5ZM8 3.75h8v-1.5H8v1.5ZM6.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 5.25 5h1.5ZM12 16.25A5.25 5.25 0 0 1 6.75 11h-1.5A6.75 6.75 0 0 0 12 17.75v-1.5ZM17.25 11c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 18.75 11h-1.5Zm1.5-6A2.75 2.75 0 0 0 16 2.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-7.5 12v4h1.5v-4h-1.5Zm.75 3.25H9v1.5h3v-1.5Zm0 1.5h3v-1.5h-3v1.5ZM5.25 7v4h1.5V7h-1.5Zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 7h1.5ZM6 10.25A3.25 3.25 0 0 1 2.75 7h-1.5A4.75 4.75 0 0 0 6 11.75v-1.5ZM6.75 7A2.75 2.75 0 0 0 4 4.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm10.5 0v4h1.5V7h-1.5Zm5.5 0A2.75 2.75 0 0 0 20 4.25v1.5c.69 0 1.25.56 1.25 1.25h1.5ZM18 11.75A4.75 4.75 0 0 0 22.75 7h-1.5A3.25 3.25 0 0 1 18 10.25v1.5ZM18.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 7h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;

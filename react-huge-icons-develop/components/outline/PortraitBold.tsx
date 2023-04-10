import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPortraitBold = (
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
            d='M17 7v-.75a.75.75 0 0 0-.75.75H17Zm0 10h-.75c0 .414.336.75.75.75V17ZM7 17v.75a.75.75 0 0 0 .75-.75H7ZM7 7h.75A.75.75 0 0 0 7 6.25V7ZM3 9h.75H3Zm2-2v-.75V7Zm0 10v.75V17Zm-2-2h-.75H3Zm7-11.25h4v-1.5h-4v1.5ZM16.25 6v12h1.5V6h-1.5ZM14 20.25h-4v1.5h4v-1.5ZM7.75 18V6h-1.5v12h1.5ZM10 20.25A2.25 2.25 0 0 1 7.75 18h-1.5A3.75 3.75 0 0 0 10 21.75v-1.5ZM16.25 18A2.25 2.25 0 0 1 14 20.25v1.5A3.75 3.75 0 0 0 17.75 18h-1.5ZM14 3.75A2.25 2.25 0 0 1 16.25 6h1.5A3.75 3.75 0 0 0 14 2.25v1.5Zm-4-1.5A3.75 3.75 0 0 0 6.25 6h1.5A2.25 2.25 0 0 1 10 3.75v-1.5Zm7 5.5h2v-1.5h-2v1.5ZM20.25 9v6h1.5V9h-1.5ZM19 16.25h-2v1.5h2v-1.5Zm-1.25.75V7h-1.5v10h1.5Zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 15h-1.5ZM19 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 19 6.25v1.5Zm-12 8.5H5v1.5h2v-1.5ZM3.75 15V9h-1.5v6h1.5ZM5 7.75h2v-1.5H5v1.5ZM6.25 7v10h1.5V7h-1.5Zm-2.5 2c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 9h1.5ZM5 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 17.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;

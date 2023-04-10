import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgIdCard = (
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
            d='M18 17.75a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm3-1.5a.75.75 0 0 0 0-1.5v1.5Zm-3-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-9-9.5h12v-1.5H6v1.5ZM21.25 7v10h1.5V7h-1.5ZM18 20.25H6v1.5h12v-1.5ZM2.75 17V7h-1.5v10h1.5ZM6 20.25A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75v-1.5ZM21.25 17A3.25 3.25 0 0 1 18 20.25v1.5A4.75 4.75 0 0 0 22.75 17h-1.5ZM18 3.75A3.25 3.25 0 0 1 21.25 7h1.5A4.75 4.75 0 0 0 18 2.25v1.5ZM6 2.25A4.75 4.75 0 0 0 1.25 7h1.5A3.25 3.25 0 0 1 6 3.75v-1.5Zm12 14h-3v1.5h3v-1.5Zm0-3h-3v1.5h3v-1.5ZM8 7.75h2v-1.5H8v1.5Zm2 2.5H8v1.5h2v-1.5Zm-2 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 8 11.75v-1.5ZM11.25 9c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 9h-1.5ZM10 7.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 6.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 5.25 9h1.5c0-.69.56-1.25 1.25-1.25v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIdCard);
export default ForwardRef;

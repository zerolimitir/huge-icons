import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartphoneLearning = (
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
            d='M13.25 12a.75.75 0 0 0 1.5 0h-1.5Zm-4 0a.75.75 0 0 0 1.5 0h-1.5ZM10 9.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3 7.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4-5.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-13h6v-1.5H9v1.5ZM18.25 6v12h1.5V6h-1.5ZM15 21.25H9v1.5h6v-1.5ZM5.75 18V6h-1.5v12h1.5ZM9 21.25A3.25 3.25 0 0 1 5.75 18h-1.5A4.75 4.75 0 0 0 9 22.75v-1.5ZM18.25 18A3.25 3.25 0 0 1 15 21.25v1.5A4.75 4.75 0 0 0 19.75 18h-1.5ZM15 2.75A3.25 3.25 0 0 1 18.25 6h1.5A4.75 4.75 0 0 0 15 1.25v1.5Zm-6-1.5A4.75 4.75 0 0 0 4.25 6h1.5A3.25 3.25 0 0 1 9 2.75v-1.5ZM13.25 8v4h1.5V8h-1.5Zm-2.5 4V8h-1.5v4h1.5ZM12 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 5.25v1.5Zm0-1.5A2.75 2.75 0 0 0 9.25 8h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-2 5.5h4v-1.5h-4v1.5Zm1 9h2v-1.5h-2v1.5Zm-2-4h6v-1.5H9v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartphoneLearning);
export default ForwardRef;

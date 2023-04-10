import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortRectangle = (
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
            d='M3.44 5.877a.75.75 0 1 0 1.12.996l-1.12-.996Zm2.065-1.195-.56-.499.56.499Zm2.99 0 .56-.499-.56.499Zm0 14.636.56.499-.56-.499Zm2.066-1.195a.75.75 0 0 0-1.122-.996l1.122.996Zm-5.056 1.195-.56.499.56-.499Zm-.944-2.191a.75.75 0 0 0-1.122.996l1.122-.996Zm0-10.254L6.066 5.18l-1.121-.997-1.506 1.694 1.122.996ZM7.934 5.18 9.44 6.873l1.122-.996-1.506-1.694-1.12.997Zm1.121 14.637 1.506-1.694-1.122-.996-1.505 1.693 1.121.997Zm-2.99-.997-1.504-1.693-1.122.996 1.506 1.694 1.12-.997Zm1.87 0a1.25 1.25 0 0 1-1.87 0l-1.12.997a2.75 2.75 0 0 0 4.11 0l-1.12-.997ZM6.064 5.18a1.25 1.25 0 0 1 1.87 0l1.12-.997a2.75 2.75 0 0 0-4.11 0l1.12.997ZM16 4.75h2v-1.5h-2v1.5ZM19.25 6v2h1.5V6h-1.5ZM18 9.25h-2v1.5h2v-1.5ZM14.75 8V6h-1.5v2h1.5ZM16 9.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 10.75v-1.5ZM19.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 8h-1.5ZM18 4.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 3.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 6h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm0 11.5h2v-1.5h-2v1.5ZM19.25 16v2h1.5v-2h-1.5ZM18 19.25h-2v1.5h2v-1.5ZM14.75 18v-2h-1.5v2h1.5ZM16 19.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 16 20.75v-1.5ZM19.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 20.75 18h-1.5ZM18 14.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 18 13.25v1.5Zm-2-1.5A2.75 2.75 0 0 0 13.25 16h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM6.25 4v16h1.5V4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortRectangle);
export default ForwardRef;

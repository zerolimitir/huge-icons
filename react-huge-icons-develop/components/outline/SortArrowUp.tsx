import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortArrowUp = (
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
            d='M12 5.25a.75.75 0 0 0 0 1.5v-1.5Zm9 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9 4.5a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6 4.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5ZM2.44 7.877a.75.75 0 1 0 1.12.996l-1.12-.996Zm2.065-1.195-.56-.499.56.499Zm2.99 0 .56-.499-.56.499Zm.944 2.191a.75.75 0 1 0 1.122-.996l-1.122.996ZM6.75 6a.75.75 0 0 0-1.5 0h1.5Zm-1.5 12a.75.75 0 0 0 1.5 0h-1.5ZM12 6.75h9v-1.5h-9v1.5Zm0 6h6v-1.5h-6v1.5Zm0 6h3v-1.5h-3v1.5ZM3.56 8.873 5.067 7.18l-1.121-.997L2.44 7.877l1.122.996ZM6.935 7.18 8.44 8.873l1.122-.996-1.506-1.694-1.12.997Zm-1.868 0a1.25 1.25 0 0 1 1.868 0l1.121-.997a2.75 2.75 0 0 0-4.11 0l1.12.997ZM5.25 6v12h1.5V6h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortArrowUp);
export default ForwardRef;

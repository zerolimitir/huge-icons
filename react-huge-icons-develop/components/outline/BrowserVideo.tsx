import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBrowserVideo = (
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
            d='m7.447 16.276.336.671-.336-.67Zm2.764-3.17.336-.671-.336.67Zm0 1.788-.335-.67.335.67Zm-2.764-3.17-.335.67.335-.67ZM2 6.25a.75.75 0 0 0 0 1.5v-1.5Zm20 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 3.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM7.112 12.394l2.764 1.382.67-1.341-2.763-1.382-.671 1.341Zm2.764 1.83-2.764 1.382.67 1.341 2.765-1.382-.671-1.341ZM6.75 15.382v-2.764h-1.5v2.764h1.5Zm.362.224a.25.25 0 0 1-.362-.224h-1.5a1.75 1.75 0 0 0 2.533 1.565l-.671-1.341Zm2.764-1.83a.25.25 0 0 1 0 .448l.67 1.341c1.29-.645 1.29-2.485 0-3.13l-.67 1.341Zm-2.093-2.723a1.75 1.75 0 0 0-2.533 1.565h1.5a.25.25 0 0 1 .362-.224l.67-1.341ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm-4 6.5h20v-1.5H2v1.5Zm12 5h4v-1.5h-4v1.5Zm0 4h4v-1.5h-4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrowserVideo);
export default ForwardRef;

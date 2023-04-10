import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAudioBook = (
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
            d='m11.447 11.276.336.671-.336-.67Zm2.764-3.17.336-.671-.336.67Zm0 1.788-.335-.67.335.67Zm-2.764-3.17-.335.67.335-.67ZM20 16h.75v-.75H20V16Zm-8.888-8.606 2.764 1.382.67-1.341-2.763-1.382-.671 1.341Zm2.764 1.83-2.764 1.382.67 1.341 2.765-1.382-.671-1.341Zm-3.126 1.158V7.618h-1.5v2.764h1.5Zm.362.224a.25.25 0 0 1-.362-.224h-1.5a1.75 1.75 0 0 0 2.533 1.565l-.671-1.341Zm2.764-1.83a.25.25 0 0 1 0 .448l.67 1.341c1.29-.645 1.29-2.485 0-3.13l-.67 1.341Zm-2.093-2.723A1.75 1.75 0 0 0 9.25 7.618h1.5a.25.25 0 0 1 .362-.224l.67-1.341ZM7 16.75h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Zm0-12.5h10v-1.5H7v1.5ZM19.25 5v14h1.5V5h-1.5ZM4.75 19V5h-1.5v14h1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAudioBook);
export default ForwardRef;

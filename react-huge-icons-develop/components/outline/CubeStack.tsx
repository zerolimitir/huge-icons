import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCubeStack = (
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
            d='M12 5h.75a.75.75 0 0 0-1.085-.67L12 5Zm-.75 4a.75.75 0 0 0 1.5 0h-1.5Zm-.585-4.17a.75.75 0 1 0 .67 1.34l-.67-1.34ZM11 8.25a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-9 3h6v-1.5H4v1.5ZM11.25 14v6h1.5v-6h-1.5ZM10 21.25H4v1.5h6v-1.5ZM2.75 20v-6h-1.5v6h1.5ZM4 21.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 22.75v-1.5ZM11.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 20h-1.5ZM10 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 11.25v1.5Zm-6-1.5A2.75 2.75 0 0 0 1.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm10 1.5h6v-1.5h-6v1.5ZM21.25 14v6h1.5v-6h-1.5ZM20 21.25h-6v1.5h6v-1.5Zm-6 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 14 22.75v-1.5ZM21.25 20c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 20h-1.5ZM20 12.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 11.25v1.5Zm-6-1.5A2.75 2.75 0 0 0 11.25 14h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-5-8.5h6v-1.5H9v1.5ZM16.25 4v6h1.5V4h-1.5ZM15 11.25H9v1.5h6v-1.5ZM7.75 10V4h-1.5v6h1.5ZM9 11.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 12.75v-1.5ZM16.25 10c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 17.75 10h-1.5ZM15 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 1.25v1.5Zm-6-1.5A2.75 2.75 0 0 0 6.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM11.25 5v4h1.5V5h-1.5Zm.415-.67-1 .5.67 1.34 1-.5-.67-1.34ZM11 9.75h2v-1.5h-2v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCubeStack);
export default ForwardRef;

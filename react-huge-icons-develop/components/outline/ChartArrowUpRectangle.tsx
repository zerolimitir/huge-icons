import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartArrowUpRectangle = (
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
            d='M14.5 8.25a.75.75 0 0 0 0 1.5v-1.5Zm2.776 1.303-.67.335.67-.335Zm.053 1.782a.75.75 0 1 0 1.342-.67l-1.342.67Zm-.202-1.424.411-.627-1.254-.822-.411.627 1.254.822Zm-3.363 3.762-.627-.411.627.41Zm-1.691-.03-.642.388.642-.389Zm-1.909-3.153-.641.388.641-.388Zm-1.734.04-.658-.358.658.358Zm-3.089 4.112a.75.75 0 0 0 1.318.716l-1.318-.716ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm8.5 8.5h1.882v-1.5H14.5v1.5Zm2.106.138.723 1.447 1.342-.67-.724-1.448-1.341.671Zm-.224-.138a.25.25 0 0 1 .224.138l1.341-.67a1.75 1.75 0 0 0-1.565-.968v1.5Zm-.51-.661-2.735 4.173 1.255.822 2.735-4.173-1.254-.822Zm-3.158 4.165-1.908-3.152-1.283.776 1.908 3.153 1.283-.777Zm-4.942-3.082-2.43 4.47 1.317.716 2.43-4.47-1.317-.716Zm3.034-.07c-.7-1.156-2.39-1.117-3.034.07l1.317.716a.25.25 0 0 1 .434-.01l1.283-.776Zm2.331 3.16a.25.25 0 0 1-.423-.008l-1.283.777a1.75 1.75 0 0 0 2.96.053l-1.254-.822Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowUpRectangle);
export default ForwardRef;

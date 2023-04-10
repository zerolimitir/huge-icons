import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartArrowDownRectangle = (
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
            d='M14.5 14.25a.75.75 0 0 0 0 1.5v-1.5Zm2.776.197-.67-.335.67.335Zm1.395-1.112a.75.75 0 1 0-1.342-.67l1.342.67Zm-2.798 1.576.411.627 1.254-.822-.41-.627-1.255.822Zm-2.109-4.584-.627.411.627-.41Zm-1.691.03-.642-.388.642.389Zm-1.909 3.153-.641-.388.641.388Zm-1.734-.04-.658.358.658-.358ZM6.66 8.642a.75.75 0 1 0-1.318.716l1.318-.716ZM6 2.75h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm8.5 14.5h1.882v-1.5H14.5v1.5Zm3.447-.967.724-1.448-1.342-.67-.723 1.447 1.341.67Zm-1.565.967a1.75 1.75 0 0 0 1.565-.967l-1.341-.671a.25.25 0 0 1-.224.138v1.5Zm.745-1.661-2.735-4.173-1.255.822 2.736 4.173 1.254-.822Zm-5.696-4.12-1.908 3.153 1.283.776 1.908-3.152-1.283-.777Zm-2.342 3.143-2.43-4.47-1.318.716 2.43 4.47 1.318-.716Zm.434.01a.25.25 0 0 1-.434-.01l-1.317.716c.645 1.187 2.335 1.226 3.034.07l-1.283-.776Zm4.869-3.206a1.75 1.75 0 0 0-2.961.053l1.283.777a.25.25 0 0 1 .423-.008l1.255-.822Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartArrowDownRectangle);
export default ForwardRef;

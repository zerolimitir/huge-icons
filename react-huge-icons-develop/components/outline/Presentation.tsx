import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPresentation = (
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
            d='M3 6v-.75a.75.75 0 0 0-.75.75H3Zm18 0h.75a.75.75 0 0 0-.75-.75V6ZM7.357 13.614a.75.75 0 0 0 1.286.772l-1.286-.772Zm1.725-1.418-.643-.386.643.386Zm5.836-.392-.643-.386.643.386Zm1.725-1.418a.75.75 0 1 0-1.286-.772l1.286.772ZM12.75 18a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5ZM4 2.75h16v-1.5H4v1.5Zm16 2.5H4v1.5h16v-1.5Zm-16 0c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 6.75v-1.5ZM21.25 4c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 4h-1.5ZM20 2.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 1.25v1.5ZM4 1.25A2.75 2.75 0 0 0 1.25 4h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm-1 5.5h18v-1.5H3v1.5ZM20.25 6v10h1.5V6h-1.5ZM19 17.25H5v1.5h14v-1.5ZM3.75 16V6h-1.5v10h1.5ZM5 17.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 18.75v-1.5ZM20.25 16c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 16h-1.5ZM8.643 14.386l1.082-1.804-1.286-.772-1.082 1.804 1.286.772Zm6.918-2.196 1.082-1.804-1.286-.772-1.082 1.804 1.286.772Zm-4.147.279a2.53 2.53 0 0 0 4.147-.28l-1.286-.771a1.03 1.03 0 0 1-1.69.114l-1.17.937Zm-1.689.113a1.03 1.03 0 0 1 1.69-.114l1.17-.937a2.53 2.53 0 0 0-4.146.28l1.286.771ZM11.25 18v4h1.5v-4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPresentation);
export default ForwardRef;

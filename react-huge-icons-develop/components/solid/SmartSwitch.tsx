import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartSwitch = (
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
            fillRule='evenodd'
            d='M8.288 7.045A5.231 5.231 0 0 1 12 5.507a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.06A6.731 6.731 0 0 0 12 4.006a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.061Zm2.121 2.121A2.24 2.24 0 0 1 12 8.507a2.24 2.24 0 0 1 1.591.66.75.75 0 1 0 1.06-1.061A3.74 3.74 0 0 0 12 7.007a3.74 3.74 0 0 0-2.652 1.099.75.75 0 1 0 1.061 1.06ZM17 11.25A2.75 2.75 0 0 1 19.75 14v2A2.75 2.75 0 0 1 17 18.75H7A2.75 2.75 0 0 1 4.25 16v-2A2.75 2.75 0 0 1 7 11.25h10ZM12 16c0 .473.164.908.439 1.25H7c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h5.439A1.991 1.991 0 0 0 12 14v2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartSwitch);
export default ForwardRef;

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
            d='M12 5.507a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.06A6.731 6.731 0 0 1 12 4.006c1.864 0 3.552.757 4.773 1.977a.75.75 0 0 1-1.06 1.061A5.231 5.231 0 0 0 12 5.507Zm0 3a2.24 2.24 0 0 0-1.591.66.75.75 0 0 1-1.06-1.061A3.74 3.74 0 0 1 12 7.007a3.74 3.74 0 0 1 2.652 1.099.75.75 0 0 1-1.061 1.06A2.24 2.24 0 0 0 12 8.507Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M17 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h10Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17 12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartSwitch);
export default ForwardRef;

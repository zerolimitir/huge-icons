import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudRainLow = (
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
            d='M2 11a7 7 0 0 0 7 7h.044c.07-.392.208-.74.344-1.018.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .822.928c.224.291.475.656.674 1.062.136.278.275.626.344 1.018H17a5 5 0 1 0-1.561-9.751A7.002 7.002 0 0 0 2 11Zm10 9c.828 0 1.5-.395 1.5-1.5S12 16 12 16s-1.5 1.395-1.5 2.5.672 1.5 1.5 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainLow);
export default ForwardRef;

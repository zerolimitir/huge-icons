import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudMoonRainLow = (
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
            d='M21.75 9.564a6.485 6.485 0 0 0-5.51-2.02 8.535 8.535 0 0 0-2.957-2.888 5 5 0 0 1 8.468 4.907ZM13.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 17 12 17s1.5 1.395 1.5 2.5ZM2 12a7 7 0 0 0 7 7h.044c.07-.392.208-.74.344-1.018.2-.406.45-.77.674-1.061a9.3 9.3 0 0 1 .822-.929l.094-.09a1.5 1.5 0 0 1 2.044 0l.094.09a9.3 9.3 0 0 1 .822.928c.224.291.475.656.674 1.062.136.278.275.626.344 1.018H17a5 5 0 1 0-1.561-9.751 7.028 7.028 0 0 0-2.983-3.338A7 7 0 0 0 2 12Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudMoonRainLow);
export default ForwardRef;
